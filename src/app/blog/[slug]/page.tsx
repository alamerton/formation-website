import { getPostBySlug, getPostSlugs, renderPostContent } from "@/lib/post";
import {
  formatAuthorNames,
  getAuthorInitials,
  getPostAuthors,
  type Author,
} from "@/lib/authors";
import { notFound } from "next/navigation";
import blogBanner from "@/images/banners/blog.jpg";
import organisationBanner from "@/images/banners/organisation.jpg";
import coefficientBanner from "@/images/banners/coefficient.jpg";
import threatModelsBanner from "@/images/banners/threat-models.jpg";
import violetSilkBanner from "@/images/banners/violet-silk-boliviainteligente.jpg";
import purpleWaveBanner from "@/images/banners/purple-wave-gradient-wallpapers.jpg";
import indigoWavesBanner from "@/images/banners/indigo-waves-martin-martz.jpg";
import lightTrailsBanner from "@/images/banners/light-trails-pawel-czerwinski.jpg";
import darkArcsBanner from "@/images/banners/dark-arcs-mansy-graphics.jpg";
import type { StaticImageData } from "next/image";
import { linkPreviewImages } from "@/lib/linkPreview";

// Frontmatter `banner: <key>` selects a post's banner; `logo: true` entries
// are wordmarks rendered contained on white rather than cover-cropped, and
// `position` shifts the cover crop when the image's subject is off-centre.
const banners: Record<
  string,
  { image: StaticImageData; logo?: boolean; position?: string }
> = {
  blog: { image: blogBanner },
  organisation: { image: organisationBanner },
  coefficient: { image: coefficientBanner, position: "object-bottom" },
  "threat-models": { image: threatModelsBanner },
  "violet-silk": { image: violetSilkBanner },
  "purple-wave": { image: purpleWaveBanner },
  "indigo-waves": { image: indigoWavesBanner },
  "light-trails": { image: lightTrailsBanner },
  "dark-arcs": { image: darkArcsBanner },
};
import Image from "next/image";
import Link from "next/link";
import TableOfContents from "@/components/TableOfContents";
import SidenoteLinks from "@/components/SidenoteLinks";

type BlogPostProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

function getPostOrNotFound(slug: string) {
  if (!getPostSlugs().includes(slug)) notFound();
  return getPostBySlug(slug);
}

export async function generateMetadata({ params }: BlogPostProps) {
  const post = getPostOrNotFound(params.slug);
  return {
    title: `${post.meta.title} | Formation Research`,
    description: post.meta.summary,
    openGraph: {
      title: post.meta.title,
      description: post.meta.summary,
      type: "article",
      images: linkPreviewImages,
    },
    alternates: {
      canonical: `https://www.formationresearch.com/blog/${params.slug}`,
    },
    ...(post.meta.unlisted && { robots: { index: false } }),
  };
}

const lessWrongIcon = (
  <svg
    className="w-3.5 h-3.5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <polygon
      points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
      fill="currentColor"
      stroke="none"
    />
  </svg>
);

const substackIcon = (
  <svg
    className="w-3 h-3.5"
    viewBox="0 0 448 512"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M448 161.53H0v-58.46h448v58.46zM0 204.47V512l224-125.26L448 512V204.47H0zM448 0H0v58.46h448V0z" />
  </svg>
);

function AuthorRole({ author }: { author: Author }) {
  const link = author.roleLink;
  const start = link ? author.role.indexOf(link.text) : -1;
  if (!link || start === -1) return <>{author.role}</>;
  return (
    <>
      {author.role.slice(0, start)}
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="underline decoration-customPurple/30 underline-offset-2 hover:decoration-customPurple transition-colors duration-200"
      >
        {link.text}
      </a>
      {author.role.slice(start + link.text.length)}
    </>
  );
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = params;
  const post = getPostOrNotFound(slug);
  const banner = banners[post.meta.banner ?? "blog"] ?? banners.blog;
  const postAuthors = getPostAuthors(post.meta);
  const words = post.content.trim().split(/\s+/).length;
  const readingTime = Math.max(1, Math.round(words / 230));
  const {
    html: contentHtml,
    headings,
    footnotes,
  } = await renderPostContent(post.content);

  const externalEditions = [
    ...(post.meta.lesswrong
      ? [
          {
            label: "LessWrong",
            href: post.meta.lesswrong,
            icon: lessWrongIcon,
            className:
              "border-[#5f9b65]/40 bg-[#5f9b65]/5 text-[#3d7548] hover:bg-[#5f9b65] hover:border-[#5f9b65] hover:text-white",
          },
        ]
      : []),
    ...(post.meta.substack
      ? [
          {
            label: "Substack",
            href: post.meta.substack,
            icon: substackIcon,
            className:
              "border-[#FF6719]/40 bg-[#FF6719]/5 text-[#e05a12] hover:bg-[#FF6719] hover:border-[#FF6719] hover:text-white",
          },
        ]
      : []),
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.meta.title,
    description: post.meta.summary,
    datePublished: post.meta.date,
    ...(postAuthors.length > 0 && {
      author: postAuthors.map((author) => ({
        "@type": "Person",
        name: author.name,
      })),
    }),
    url: `https://www.formationresearch.com/blog/${slug}`,
    publisher: {
      "@type": "Organization",
      name: "Formation Research",
      logo: {
        "@type": "ImageObject",
        url: "https://www.formationresearch.com/logo.png",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-white">
        {/* Banner */}
        {/* The title sits at the banner's centre: equal padding clears the
            fixed navbar, and the grid's equal outer rows hold anything above
            it (a logo) and below it (author line, summary). A long title
            grows the banner past its minimum height rather than running
            under the navbar. */}
        <div
          id="top"
          className="relative w-full flex min-h-96 md:min-h-[34rem]"
        >
          {banner.logo ? (
            <div className="absolute inset-0 bg-white" />
          ) : (
            <Image
              src={banner.image}
              alt={post.meta.title}
              fill
              className={`object-cover ${banner.position ?? ""}`}
              priority
              placeholder="blur"
            />
          )}
          <div
            className={`relative flex-1 grid grid-rows-[1fr_auto_1fr] justify-items-center font-serif px-4 text-center ${
              banner.logo
                ? "py-20 md:py-28"
                : "py-20 md:py-24 bg-gradient-to-t from-black/75 via-black/50 to-black/30"
            }`}
          >
            {banner.logo && (
              <Image
                src={banner.image}
                alt=""
                className="row-start-1 self-end h-12 md:h-16 w-auto mb-6"
                priority
              />
            )}
            <h1
              className={`row-start-2 text-3xl md:text-5xl max-w-4xl text-balance ${
                banner.logo ? "text-gray-900" : "text-white"
              }`}
            >
              {post.meta.title}
            </h1>
            <div className="row-start-3 self-start flex flex-col items-center mt-4">
              {post.meta.date && (
                <p
                  className={`font-sans text-sm uppercase tracking-wider ${
                    banner.logo ? "text-gray-500" : "text-gray-300"
                  }`}
                >
                  {postAuthors.length > 0 && (
                    <>
                      {formatAuthorNames(postAuthors)}
                      <span className="mx-2 text-gray-400" aria-hidden="true">
                        ·
                      </span>
                    </>
                  )}
                  <time dateTime={post.meta.date}>
                    {formatDate(post.meta.date)}
                  </time>
                  <span className="mx-2 text-gray-400" aria-hidden="true">
                    ·
                  </span>
                  {readingTime} min read
                </p>
              )}
              {post.meta.summary && (
                <p
                  className={`mt-4 max-w-2xl text-base md:text-lg italic leading-relaxed hidden sm:block ${
                    banner.logo ? "text-gray-600" : "text-gray-200/90"
                  }`}
                >
                  {post.meta.summary}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="px-4 sm:px-8 py-12">
          <div
            className={
              headings.length > 0
                ? "lg:grid lg:grid-cols-[16rem_minmax(0,1fr)_16rem] lg:gap-12 lg:items-start"
                : ""
            }
          >
            {/* Desktop table of contents */}
            {headings.length > 0 && (
              <aside className="hidden lg:block sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pr-4 pb-8 [scrollbar-width:thin]">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-0">
                  Contents
                </h2>
                <div
                  className="h-0.5 w-8 bg-gradient-to-r from-violet-800 to-indigo-900 rounded-full mt-2 mb-4"
                  aria-hidden="true"
                />
                <TableOfContents headings={headings} />
              </aside>
            )}

            <div>
              <div className="max-w-2xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-3">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-customPurple transition-colors duration-200"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  All posts
                </Link>
                {externalEditions.length > 0 && (
                  <div className="flex items-center gap-2">
                    {externalEditions.map((edition) => (
                      <a
                        key={edition.label}
                        href={edition.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold transition-colors duration-200 ${edition.className}`}
                      >
                        {edition.icon}
                        {edition.label}
                        <svg
                          className="w-3 h-3 opacity-60"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 17L17 7M17 7H8m9 0v9"
                          />
                        </svg>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Authors */}
              {postAuthors.length > 0 && (
                <div className="max-w-2xl mx-auto mb-10">
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">
                    Written by
                  </p>
                  <div className="space-y-6">
                    {postAuthors.map((author) => (
                      <div
                        key={author.name}
                        className="flex items-center gap-5"
                      >
                        {(() => {
                          const avatar = author.image ? (
                            <Image
                              src={author.image}
                              alt={author.name}
                              width={72}
                              height={72}
                              className="rounded-full shadow-md"
                            />
                          ) : (
                            <div
                              className="w-[72px] h-[72px] rounded-full shadow-md flex items-center justify-center bg-gradient-to-br from-violet-800 to-indigo-900 font-serif text-2xl text-white"
                              aria-hidden="true"
                            >
                              {getAuthorInitials(author)}
                            </div>
                          );
                          // The name beside it carries the same link for
                          // keyboard and screen-reader users.
                          return author.linkedin ? (
                            <a
                              href={author.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              tabIndex={-1}
                              aria-hidden="true"
                              className="flex flex-shrink-0 rounded-full transition-opacity duration-200 hover:opacity-90"
                            >
                              {avatar}
                            </a>
                          ) : (
                            <div className="flex flex-shrink-0">{avatar}</div>
                          );
                        })()}
                        <div>
                          <p className="font-serif text-xl text-gray-900">
                            {author.linkedin ? (
                              <a
                                href={author.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-customPurple transition-colors duration-200"
                              >
                                {author.name}
                              </a>
                            ) : (
                              author.name
                            )}
                          </p>
                          <p className="text-sm text-customPurple font-medium">
                            <AuthorRole author={author} />
                          </p>
                          {author.bio && (
                            <p className="text-sm text-gray-600 mt-1">
                              {author.bio}
                            </p>
                          )}
                        </div>
                        {author.linkedin && (
                          <a
                            href={author.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-auto inline-flex flex-shrink-0 items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-customPurple hover:bg-customPurple hover:text-white transition-all duration-200"
                            aria-label={`${author.name} on LinkedIn`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                  {/* On small screens the contents box below already has rules. */}
                  <div
                    className={`h-px bg-gradient-to-r from-transparent via-customPurple/30 to-transparent mt-8 ${
                      headings.length > 0 ? "hidden lg:block" : ""
                    }`}
                    aria-hidden="true"
                  />
                </div>
              )}

              {/* Mobile table of contents */}
              {headings.length > 0 && (
                <details className="group lg:hidden mb-8 max-w-2xl mx-auto border-y border-gray-300/70 py-3">
                  <summary className="flex items-center justify-between cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden text-sm font-semibold uppercase tracking-wider text-gray-500">
                    Contents
                    <svg
                      className="w-4 h-4 text-gray-400 transition-transform duration-200 group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="mt-4 pb-1">
                    <TableOfContents headings={headings} />
                  </div>
                </details>
              )}

              <article className="max-w-2xl mx-auto">
                <div
                  className="prose prose-lg post-body max-w-none [&_:is(h1,h2,h3,h4)]:scroll-mt-28"
                  dangerouslySetInnerHTML={{ __html: contentHtml }}
                />
                <SidenoteLinks />
              </article>

              <footer className="mt-16 max-w-2xl mx-auto">
                <div
                  className="h-px bg-gradient-to-r from-transparent via-customPurple/30 to-transparent mb-8"
                  aria-hidden="true"
                />
                {/* Below lg there's no margin for sidenotes, so the notes are
                    listed here instead. Each entry's number and trailing
                    arrow return to where it was referenced. */}
                {footnotes.length > 0 && (
                  <section
                    className="post-footnotes lg:hidden"
                    aria-label="Footnotes"
                  >
                    <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">
                      Footnotes
                    </p>
                    <ol className="space-y-1">
                      {footnotes.map((footnote) => (
                        <li
                          key={footnote.number}
                          className="footnote-item"
                          data-note-copy={footnote.noteIds.join(" ")}
                          tabIndex={-1}
                          role="doc-footnote"
                        >
                          <a
                            className="footnote-number"
                            href={`#${footnote.referenceId}`}
                            data-sidenote-backlink
                            role="doc-backlink"
                            aria-label={`Back to reference ${footnote.number}`}
                          >
                            {footnote.number}
                          </a>{" "}
                          <span
                            dangerouslySetInnerHTML={{ __html: footnote.html }}
                          />
                          {"\u00a0"}
                          <a
                            className="footnote-backlink"
                            href={`#${footnote.referenceId}`}
                            data-sidenote-backlink
                            role="doc-backlink"
                            aria-label={`Back to reference ${footnote.number}`}
                          >
                            {"\u2060"}
                          </a>
                        </li>
                      ))}
                    </ol>
                    <div
                      className="h-px bg-gradient-to-r from-transparent via-customPurple/30 to-transparent my-8"
                      aria-hidden="true"
                    />
                  </section>
                )}
                <div className="flex items-center justify-between">
                  <Link
                    href="/blog"
                    className="group inline-flex items-center text-customPurple font-semibold"
                  >
                    <svg
                      className="w-4 h-4 mr-2 transition-transform duration-200 group-hover:-translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    Back to all posts
                  </Link>
                  <a
                    href="#top"
                    className="inline-flex items-center text-sm text-gray-500 hover:text-customPurple transition-colors duration-200"
                  >
                    Back to top
                    <svg
                      className="w-4 h-4 ml-1.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  </a>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
