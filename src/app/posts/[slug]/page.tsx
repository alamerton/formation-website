import {
  addHeadingAnchors,
  extractSidenotes,
  getPostBySlug,
  getPostSlugs,
} from "@/lib/post";
import { formatAuthorNames, getPostAuthors } from "@/lib/authors";
import { notFound } from "next/navigation";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import definitionBanner from "@/images/banners/definition.jpg";
import coefficientBanner from "@/images/banners/coefficient.jpg";
import type { StaticImageData } from "next/image";
import html from "remark-html";

// Frontmatter `banner: <key>` selects a post's banner; `logo: true` entries
// are wordmarks rendered contained on white rather than cover-cropped, and
// `position` shifts the cover crop when the image's subject is off-centre.
const banners: Record<
  string,
  { image: StaticImageData; logo?: boolean; position?: string }
> = {
  definition: { image: definitionBanner },
  coefficient: { image: coefficientBanner, position: "object-bottom" },
};
import Image from "next/image";
import Link from "next/link";
import TableOfContents from "@/components/TableOfContents";

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
  const banner = banners[post.meta.banner ?? "definition"] ?? banners.definition;
  return {
    title: `${post.meta.title} | Formation Research`,
    description: post.meta.summary,
    openGraph: {
      title: post.meta.title,
      description: post.meta.summary,
      type: "article",
      images: [
        {
          url: banner.image.src,
          width: banner.image.width,
          height: banner.image.height,
        },
      ],
    },
    alternates: {
      canonical: `https://www.formationresearch.com/posts/${params.slug}`,
    },
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
  const banner = banners[post.meta.banner ?? "definition"] ?? banners.definition;
  const postAuthors = getPostAuthors(post.meta);
  const words = post.content.trim().split(/\s+/).length;
  const readingTime = Math.max(1, Math.round(words / 230));
  const processedContent = await remark()
    .use(remarkGfm)
    .use(html)
    .process(post.content);
  const { html: contentHtml, headings } = addHeadingAnchors(
    extractSidenotes(processedContent.toString())
  );

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
    url: `https://www.formationresearch.com/posts/${slug}`,
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
      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
        {/* Banner */}
        <div id="top" className="relative w-full h-80 md:h-[30rem]">
          {banner.logo ? (
            <div className="absolute inset-0 bg-white" />
          ) : (
            <Image
              src={banner.image}
              alt={post.meta.title}
              fill
              className={`object-cover ${banner.position ?? ""}`}
              priority
            />
          )}
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center font-serif px-4 text-center ${
              banner.logo
                ? "pt-20 md:pt-28"
                : "pt-16 md:pt-20 bg-gradient-to-t from-black/75 via-black/50 to-black/30"
            }`}
          >
            {banner.logo && (
              <Image
                src={banner.image}
                alt=""
                className="h-12 md:h-16 w-auto mb-6"
                priority
              />
            )}
            <h1
              className={`text-3xl md:text-5xl mb-4 max-w-4xl text-balance ${
                banner.logo ? "text-gray-900" : "text-white"
              }`}
            >
              {post.meta.title}
            </h1>
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
                  href="/posts"
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
              </article>

              <footer className="mt-16 max-w-2xl mx-auto">
                <div
                  className="h-px bg-gradient-to-r from-transparent via-customPurple/30 to-transparent mb-8"
                  aria-hidden="true"
                />
                {postAuthors.length > 0 && (
                  <div className="mb-10">
                    <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">
                      Written by
                    </p>
                    <div className="space-y-6">
                      {postAuthors.map((author) => (
                        <div
                          key={author.name}
                          className="flex items-center gap-5"
                        >
                          <Image
                            src={author.image}
                            alt={author.name}
                            width={72}
                            height={72}
                            className="rounded-full shadow-md flex-shrink-0"
                          />
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
                              {author.role}
                            </p>
                            {author.bio && (
                              <p className="text-sm text-gray-600 mt-1">
                                {author.bio}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <Link
                    href="/posts"
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
