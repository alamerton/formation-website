"use client";
import { useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import TrackedLink from "@/components/TrackedLink";

export const RESEARCH_TAGS = [
  "Secret Loyalties",
  "Democratic AI Training",
] as const;
export type ResearchTag = (typeof RESEARCH_TAGS)[number];

export type ResearchItem = {
  id: number;
  image: StaticImageData;
  title: string;
  date?: string;
  description: string;
  tags: ResearchTag[];
  link: string;
  linkLabel?: string;
  newTab?: boolean;
  fillImage?: boolean;
  paperLink?: string;
  paperLabel?: string;
  openreviewLink?: string;
};

const buttonClass =
  "inline-block bg-gradient-to-r from-violet-800 to-indigo-900 text-white text-sm font-semibold py-2 px-3 rounded hover:opacity-90 transition-opacity duration-200";

const tagSlug = (tag: string) => tag.toLowerCase().replace(/\s+/g, "-");

// The first of a card's buttons, in the order they're shown.
const primaryLink = (item: ResearchItem) =>
  item.paperLink
    ? { href: item.paperLink, newTab: true }
    : item.openreviewLink
      ? { href: item.openreviewLink, newTab: true }
      : { href: item.link, newTab: Boolean(item.newTab) };

// The research cards with a tag filter above them. The chosen tag is kept
// in the address (?tag=secret-loyalties) so a filtered view can be shared.
const ResearchGrid = ({ items }: { items: ResearchItem[] }) => {
  // Only tags that some card carries get a filter button.
  const tags = RESEARCH_TAGS.filter((tag) =>
    items.some((item) => item.tags.includes(tag))
  );
  const [selected, setSelected] = useState<ResearchTag | null>(null);

  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("tag");
    const match = tags.find((tag) => tagSlug(tag) === fromUrl);
    if (match) setSelected(match);
    // Read once on load; later changes come from the buttons.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const choose = (tag: ResearchTag | null) => {
    setSelected(tag);
    const url = new URL(window.location.href);
    if (tag) url.searchParams.set("tag", tagSlug(tag));
    else url.searchParams.delete("tag");
    window.history.replaceState(null, "", url);
  };

  const visible = selected
    ? items.filter((item) => item.tags.includes(selected))
    : items;

  const filterButtonClass = (active: boolean) =>
    `rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-customPurple/40 focus-visible:ring-offset-2 ${
      active
        ? "border-customPurple bg-customPurple text-white"
        : "border-customPurple/30 bg-white text-customPurple hover:bg-customPurple/5"
    }`;

  return (
    <>
      {tags.length > 0 && (
        <div
          role="group"
          aria-label="Filter research by tag"
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          <button
            type="button"
            aria-pressed={selected === null}
            onClick={() => choose(null)}
            className={filterButtonClass(selected === null)}
          >
            All
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              aria-pressed={selected === tag}
              onClick={() => choose(tag)}
              className={filterButtonClass(selected === tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {visible.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            {/* The image links to the card's first button; the button itself
                is the link for keyboard and screen-reader users. */}
            <TrackedLink
              eventName="paper_click"
              eventProps={{ title: item.title, href: primaryLink(item).href }}
              href={primaryLink(item).href}
              target={primaryLink(item).newTab ? "_blank" : undefined}
              rel={primaryLink(item).newTab ? "noopener noreferrer" : undefined}
              tabIndex={-1}
              aria-hidden="true"
              className={`relative block h-48 ${item.fillImage ? "" : "bg-white"}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 1280px) 22rem, (min-width: 768px) 50vw, 100vw"
                className={item.fillImage ? "object-cover" : "object-contain"}
              />
            </TrackedLink>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              {(item.date || item.tags.length > 0) && (
                <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm text-gray-600 mb-4">
                  {item.date && <span>{item.date}</span>}
                  {item.tags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => choose(tag)}
                      aria-label={`Show only ${tag} research`}
                      // 75% matches the grey date's lightness.
                      className="text-customPurple/75 hover:text-customPurple hover:underline"
                    >
                      #{tag}
                    </button>
                  ))}
                </p>
              )}
              <p className="text-gray-700 mb-4">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.paperLink && (
                  <TrackedLink
                    eventName="paper_click"
                    eventProps={{ title: item.title, href: item.paperLink }}
                    href={item.paperLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClass}
                  >
                    {item.paperLabel ?? "Paper"}
                  </TrackedLink>
                )}
                {item.openreviewLink && (
                  <TrackedLink
                    eventName="paper_click"
                    eventProps={{ title: item.title, href: item.openreviewLink }}
                    href={item.openreviewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClass}
                  >
                    OpenReview
                  </TrackedLink>
                )}
                {item.link.endsWith(".pdf") ? (
                  <TrackedLink
                    eventName="paper_click"
                    eventProps={{ title: item.title, href: item.link }}
                    href={item.link}
                    target={item.newTab ? "_blank" : undefined}
                    rel={item.newTab ? "noopener noreferrer" : undefined}
                    className={buttonClass}
                  >
                    {item.linkLabel ?? "Learn More"}
                  </TrackedLink>
                ) : (
                  <a
                    href={item.link}
                    target={item.newTab ? "_blank" : undefined}
                    rel={item.newTab ? "noopener noreferrer" : undefined}
                    className={buttonClass}
                  >
                    {item.linkLabel ?? "Learn More"}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ResearchGrid;
