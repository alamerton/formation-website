"use client";
import React, { useEffect, useState } from "react";
import type { PostHeading } from "@/lib/post";

// Vertical pixel offset accounting for the fixed header; a heading is
// considered "active" once it scrolls above this line.
const SCROLL_OFFSET = 120;

// Indentation lives on the link's padding so the border marker always
// overlays the rail on the ul, regardless of nesting depth.
const indentByLevel: Record<number, string> = {
  1: "pl-3",
  2: "pl-7",
  3: "pl-11",
};

const TableOfContents = ({ headings }: { headings: PostHeading[] }) => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const onScroll = () => {
      let current = headings[0]?.id ?? "";
      for (const heading of headings) {
        const element = document.getElementById(heading.id);
        if (
          element &&
          element.getBoundingClientRect().top <= SCROLL_OFFSET
        ) {
          current = heading.id;
        }
      }
      setActiveId(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav aria-label="Table of contents">
      <ul className="space-y-0.5 text-sm leading-snug border-l border-gray-200">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={`block py-1 -ml-px border-l-2 transition-colors duration-200 ${
                indentByLevel[heading.level] ?? "pl-3"
              } ${
                activeId === heading.id
                  ? "border-customPurple text-customPurple font-semibold"
                  : "border-transparent text-gray-500 hover:text-customPurple hover:border-customPurple/40"
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
