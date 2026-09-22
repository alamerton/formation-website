import fs from "fs";
import path from "path";
import matter from "gray-matter";

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
};

export type Post = {
  slug: string;
  meta: PostMeta;
  content: string;
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

export function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs.map(getPostBySlug);
  // Sort by date descending
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

// Converts GFM footnotes in rendered post HTML into inline sidenotes: the
// trailing footnotes section is removed, and each reference marker gets the
// note's content injected next to it as a .sidenote span (positioned into
// the right margin by CSS on large screens).
export function extractSidenotes(html: string): string {
  const sectionMatch = html.match(/<section data-footnotes[\s\S]*?<\/section>/);
  if (!sectionMatch) return html;
  const section = sectionMatch[0];

  const notes = new Map<string, string>();
  const itemPattern = /<li id="[^"]*?fn-([^"]+)">([\s\S]*?)<\/li>/g;
  let item;
  while ((item = itemPattern.exec(section))) {
    const content = item[2]
      .replace(/<a[^>]*data-footnote-backref[^>]*>[\s\S]*?<\/a>/g, "")
      .replace(/<\/?p>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    notes.set(item[1], content);
  }

  return html
    .replace(section, "")
    .replace(
      /<sup><a href="#user-content-fn-([^"]+)"[^>]*>([^<]+)<\/a><\/sup>/g,
      (match, key: string, label: string) => {
        const note = notes.get(key);
        if (!note) return match;
        return (
          `<sup class="sidenote-ref">${label}</sup>` +
          `<span class="sidenote" role="doc-footnote">` +
          `<span class="sidenote-number">${label}</span> ${note}</span>`
        );
      }
    );
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
