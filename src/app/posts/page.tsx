import { getAllPosts } from "@/lib/post";
import Link from "next/link";

export default function BlogIndex() {
  const posts = getAllPosts();
  return (
    <main>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              {post.meta.title} ({post.meta.date})
            </Link>
            <p>{post.meta.summary}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
