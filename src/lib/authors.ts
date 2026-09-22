import type { StaticImageData } from "next/image";
import alfieImage from "@/images/board/alfie.jpg";

export type Author = {
  name: string;
  role: string;
  bio?: string;
  image: StaticImageData;
  linkedin?: string;
};

// Post frontmatter references authors by key, e.g. `author: "alfie-lamerton"`.
export const authors: Record<string, Author> = {
  "alfie-lamerton": {
    name: "Alfie Lamerton",
    role: "Founder, Formation Research",
    image: alfieImage,
    linkedin: "https://www.linkedin.com/in/alfie-lamerton/",
  },
};

export const DEFAULT_AUTHOR_KEY = "alfie-lamerton";

// Resolves a post's authors from frontmatter: `authors: [key, key]` for
// multi-author posts, `author: key` for a single author, defaulting to the
// site's primary author when neither is given. Unknown keys are dropped.
export function getPostAuthors(meta: {
  author?: string;
  authors?: string[];
}): Author[] {
  const keys =
    meta.authors ?? (meta.author ? [meta.author] : [DEFAULT_AUTHOR_KEY]);
  return keys
    .map((key) => authors[key])
    .filter((author): author is Author => Boolean(author));
}

// "A", "A and B", "A, B and C"
export function formatAuthorNames(list: Author[]): string {
  const names = list.map((author) => author.name);
  if (names.length <= 1) return names[0] ?? "";
  return `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`;
}
