import { getAllPosts } from "@/lib/post";
import Image from "next/image";
import Link from "next/link";
import blogBanner from "@/images/banners/blog.jpg";

export const metadata = {
  title:
    "Blog | Formation Research – Lock-In Risk Research and High-Impact Interventions",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Formation Research Blog",
  url: "https://www.formationresearch.com/posts",
  publisher: {
    "@type": "Organization",
    name: "Formation Research",
    logo: {
      "@type": "ImageObject",
      url: "https://www.formationresearch.com/logo.png",
    },
  },
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
        {/* Banner */}
        <div className="relative w-full h-64 md:h-96">
          <Image
            src={blogBanner}
            alt="Blog Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center font-serif px-4 text-center">
            <h1 className="text-3xl md:text-5xl text-white">Blog</h1>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 py-12 max-w-3xl">
          <ul className="divide-y divide-gray-200">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/posts/${post.slug}`}
                  className="group block py-8"
                >
                  {post.meta.date && (
                    <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                      <time dateTime={post.meta.date}>
                        {formatDate(post.meta.date)}
                      </time>
                    </p>
                  )}
                  <h2 className="font-serif text-2xl text-gray-900 leading-snug group-hover:text-customPurple transition-colors duration-200">
                    {post.meta.title}
                  </h2>
                  {post.meta.summary && (
                    <p className="text-gray-600 mt-2">{post.meta.summary}</p>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
