import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

// Navigasi antar artikel berdasarkan urutan tanggal: "sebelumnya" = artikel
// yang lebih lama, "berikutnya" = yang lebih baru. Tombol hilang di ujung daftar.
export default function BlogPostNav({
  older,
  newer,
}: {
  older?: BlogPost;
  newer?: BlogPost;
}) {
  if (!older && !newer) return null;

  return (
    <nav className="blog-post-nav" aria-label="Navigasi antar artikel">
      {older && (
        <Link href={`/blog/${older.slug}`} className="blog-post-nav-link">
          <ArrowLeft aria-hidden />
          Artikel Sebelumnya
        </Link>
      )}
      {newer && (
        <Link href={`/blog/${newer.slug}`} className="blog-post-nav-link">
          Artikel Berikutnya
          <ArrowRight aria-hidden />
        </Link>
      )}
    </nav>
  );
}
