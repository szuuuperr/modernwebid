import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import BlogMeta from "./BlogMeta";

// Kartu artikel unggulan: gambar penuh dengan overlay teks di bagian bawah.
export default function BlogFeaturedCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="blog-featured">
      <img src={post.image} alt={post.alt} className="blog-featured-image" />
      <div className="blog-featured-overlay">
        <h2>{post.title}</h2>
        <BlogMeta date={post.date} />
        <p>{post.description}</p>
      </div>
    </Link>
  );
}
