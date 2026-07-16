import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog";
import BlogMeta from "./BlogMeta";

// Kartu artikel ringkas: thumbnail kiri, judul + tanggal + read-more kanan.
export default function BlogSideCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="blog-side-card">
      <div className="blog-side-image">
        <img src={post.image} alt={post.alt} loading="lazy" />
      </div>
      <div className="blog-side-info">
        <h3>{post.title}</h3>
        <BlogMeta date={post.date} />
        <span className="blog-read-more">
          Baca Selengkapnya
          <ArrowRight aria-hidden />
        </span>
      </div>
    </Link>
  );
}
