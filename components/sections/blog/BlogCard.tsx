"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog";
import { useInView } from "@/lib/use-in-view";
import BlogMeta from "./BlogMeta";

// Kartu artikel untuk grid: gambar di atas, judul + tanggal + read-more di bawah.
// Reveal dikelola sendiri (bukan ScrollReveal) karena kartu bisa mount/unmount
// saat pindah halaman pagination — lihat lib/use-in-view.ts.
export default function BlogCard({ post }: { post: BlogPost }) {
  const { ref, inView } = useInView<HTMLAnchorElement>();

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={inView ? "blog-card in-view" : "blog-card"}
      ref={ref}
    >
      <div className="blog-card-image">
        <img src={post.image} alt={post.alt} loading="lazy" />
      </div>
      <h3>{post.title}</h3>
      <BlogMeta date={post.date} />
      <span className="blog-read-more">
        Baca Selengkapnya
        <ArrowRight aria-hidden />
      </span>
    </Link>
  );
}
