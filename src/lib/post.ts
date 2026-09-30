import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

const postsDirectory = path.join(process.cwd(), "src", "posts");

export type PostMeta = {
  title: string;
  date: string;
  summary: string;
  author?: string;
  authors?: string[];
  banner?: string;
  lesswrong?: string;
  substack?: string;
  // Served at its URL but left out of post listings and the sitemap, and
  // not indexed by search engines; for previewing a post before launch.
  unlisted?: boolean;
};

export type Post = {
  slug: string;
  meta: PostMeta;
  content: string;
};

// A note for the footnotes list shown at the end of a post on small
// screens. `noteIds` are the ids of the note's copies in the text (the
// margin notes), so links to any of them can find this entry instead.
export type PostFootnote = {
  number: number;
  html: string;
  noteIds: string[];
  referenceId: string;
};

export type PostHeading = {
  id: string;
  text: string;
  level: number;
};

export function getPostSlugs() {
  return fs
    .readdirSync(postsDirectory)
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => filename.replace(/\.md$/, ""));
}

export function getPostBySlug(slug: string): Post {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return { slug, meta: data as PostMeta, content };
}

// Posts shown in the blog list and on the home page, newest first.
export function getListedPosts() {
  const posts = getPostSlugs()
    .map(getPostBySlug)
    .filter((post) => !post.meta.unlisted);
  return posts.sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1));
}

function decodeEntities(text: string) {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'");
}

function slugifyHeading(text: string) {
  return (
    text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-") || "section"
  );
}

async function markdownToHtml(markdown: string) {
  // Posts are trusted files in the repo, so raw HTML is allowed through
  // for things Markdown can't express, like tables with merged cells.
  const file = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(markdown);
  return file.toString();
}

// A `[^key]: text` line, plus any continuation lines indented by four
// spaces or a tab.
const FOOTNOTE_DEFINITION =
  /^\[\^([^\]\s"]+)\]:[ \t]*(.*(?:\n(?:[ \t]*\n)*(?: {4}|\t).*)*)\n?/gm;
const FOOTNOTE_REFERENCE = /\[\^([^\]\s"]+)\]/g;
const FOOTNOTE_PLACEHOLDER = /<sup data-footnote="([^"]+)"><\/sup>/g;
// Table markup must not contain its own <div>s, or the wrapper match would
// end early.
const TABLE_WRAPPER = /(<div class="post-table-wrapper">)([\s\S]*?)(<\/div>)/g;

// Footnotes are handled here rather than by GFM so that `[^key]` references
// also work inside raw HTML (GFM doesn't parse Markdown there). Notes are
// numbered in order of first reference. Each note becomes a .sidenote span,
// positioned into the right margin by CSS on large screens: a reference in
// running text gets its note injected next to it, and a table's notes go
// just before the table (floating alongside it) in a .post-table-group.
async function renderFootnotes(markdown: string) {
  const definitions = new Map<string, string>();
  const body = markdown
    .replace(FOOTNOTE_DEFINITION, (_match, key: string, text: string) => {
      definitions.set(key, text.replace(/^(?: {4}|\t)/gm, ""));
      return "";
    })
    .replace(FOOTNOTE_REFERENCE, (match, key: string) =>
      definitions.has(key) ? `<sup data-footnote="${key}"></sup>` : match
    );

  const notes = new Map<string, string>();
  await Promise.all(
    Array.from(definitions, async ([key, text]) => {
      const noteHtml = await markdownToHtml(text);
      notes.set(
        key,
        noteHtml.replace(/<\/?p>/g, " ").replace(/\s+/g, " ").trim()
      );
    })
  );

  let html = await markdownToHtml(body);

  const numbers = new Map<string, number>();
  let reference;
  const referencePattern = new RegExp(FOOTNOTE_PLACEHOLDER.source, "g");
  while ((reference = referencePattern.exec(html))) {
    if (!numbers.has(reference[1])) {
      numbers.set(reference[1], numbers.size + 1);
    }
  }

  // Each rendered note gets its own id (a note referenced twice appears
  // twice). Each reference links to the note shown for it, and each note's
  // number links back to its reference (the first one, within a table).
  const noteIds = new Map<string, string[]>();
  const nextNoteId = (key: string) => {
    const ids = noteIds.get(key) ?? [];
    const id = `fn-${numbers.get(key)}` + (ids.length ? `-${ids.length + 1}` : "");
    noteIds.set(key, [...ids, id]);
    return id;
  };
  const referenceId = (noteId: string) => noteId.replace(/^fn-/, "fnref-");
  const sidenote = (key: string, id: string) =>
    `<span class="sidenote" id="${id}" tabindex="-1" role="doc-footnote">` +
    `<a class="sidenote-number" href="#${referenceId(id)}" data-sidenote-backlink role="doc-backlink" ` +
    `aria-label="Back to reference ${numbers.get(key)}">${numbers.get(key)}</a> ${notes.get(key)}</span>`;
  const noteReference = (key: string, id: string, withId = true) =>
    `<sup class="sidenote-ref"><a ${withId ? `id="${referenceId(id)}" ` : ""}href="#${id}" ` +
    `data-sidenote-link role="doc-noteref" ` +
    `aria-label="Footnote ${numbers.get(key)}">${numbers.get(key)}</a></sup>`;

  html = html.replace(
    TABLE_WRAPPER,
    (match, open: string, inner: string, close: string) => {
      const tableNotes: string[] = [];
      const tableNoteIds = new Map<string, string>();
      const table = inner.replace(
        FOOTNOTE_PLACEHOLDER,
        (_placeholder, key: string) => {
          const existingId = tableNoteIds.get(key);
          if (existingId) return noteReference(key, existingId, false);
          const id = nextNoteId(key);
          tableNoteIds.set(key, id);
          tableNotes.push(sidenote(key, id));
          return noteReference(key, id);
        }
      );
      if (tableNotes.length === 0) return match;
      return `<div class="post-table-group">${tableNotes.join("")}${open}${table}${close}</div>`;
    }
  );

  html = html.replace(FOOTNOTE_PLACEHOLDER, (_placeholder, key: string) => {
    const id = nextNoteId(key);
    return noteReference(key, id) + sidenote(key, id);
  });

  // Each footnote-list entry leads back to the note's first reference in
  // the text (tables are numbered before running text, so "first" is found
  // by position rather than by id).
  const footnotes: PostFootnote[] = Array.from(numbers, ([key, number]) => {
    const firstReference = html.match(
      new RegExp(`id="(fnref-${number}(?:-\\d+)?)"`)
    );
    return {
      number,
      html: notes.get(key) ?? "",
      noteIds: noteIds.get(key) ?? [],
      referenceId: firstReference ? firstReference[1] : `fnref-${number}`,
    };
  });

  return { html, footnotes };
}

export async function renderPostContent(markdown: string) {
  const { html, footnotes } = await renderFootnotes(markdown);
  return { ...addHeadingAnchors(html), footnotes };
}

// Adds id attributes to h1-h3 tags in rendered post HTML and returns the
// heading tree used to build the table of contents, so anchors and TOC
// links always agree.
export function addHeadingAnchors(html: string): {
  html: string;
  headings: PostHeading[];
} {
  const headings: PostHeading[] = [];
  const seen = new Map<string, number>();

  const htmlWithIds = html.replace(
    /<h([1-3])>([\s\S]*?)<\/h\1>/g,
    (_match, levelString: string, inner: string) => {
      const level = Number(levelString);
      const text = decodeEntities(inner.replace(/<[^>]+>/g, "")).trim();
      let id = slugifyHeading(text);
      const count = seen.get(id) ?? 0;
      seen.set(id, count + 1);
      if (count > 0) id = `${id}-${count}`;
      headings.push({ id, text, level });
      return `<h${level} id="${id}">${inner}</h${level}>`;
    }
  );

  return { html: htmlWithIds, headings };
}
