import Link from "next/link";
import { SORTED_POSTS } from "@/lib/blog";

// Widget artikel teratas: 5 artikel terbaru selain yang sedang dibaca,
// bernomor besar seperti chart. Sekaligus internal linking antar artikel.
export default function SidebarTopPosts({
  currentSlug,
}: {
  currentSlug: string;
}) {
  const posts = SORTED_POSTS.filter((post) => post.slug !== currentSlug).slice(
    0,
    5,
  );

  return (
    <div className="blog-widget">
      <h2 className="blog-widget-title">Artikel Teratas</h2>
      <ol className="blog-widget-top-posts">
        {posts.map((post, index) => (
          <li key={post.slug}>
            <span className="blog-widget-top-number" aria-hidden>
              {index + 1}
            </span>
            <Link href={`/blog/${post.slug}`} className="blog-widget-top-link">
              {post.title}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
