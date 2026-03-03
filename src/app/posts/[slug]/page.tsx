import { getPostBySlug, getPostSlugs } from "@/lib/post";
import { remark } from "remark";
import definitionBanner from "@/images/definition.jpg";
import html from "remark-html";
import Image from "next/image";

type BlogPostProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = params;
  const post = getPostBySlug(slug);
  const processedContent = await remark().use(html).process(post.content);
  const contentHtml = processedContent.toString();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="relative w-full h-64 md:h-96">
        <Image
          src={definitionBanner}
          alt="Team Banner"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center font-serif">
          <h1 className="text-3xl md:text-5xl font-times text-white">
            {post.meta.title}
          </h1>
        </div>
      </div>
      <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8 max-w-3xl">
        <article className="prose prose-lg mx-auto">
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </article>
      </div>
    </div>
  );
}
