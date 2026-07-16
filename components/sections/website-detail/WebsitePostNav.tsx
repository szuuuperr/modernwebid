import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { WebsiteShowcase } from "@/lib/websites";

// Navigasi antar inspirasi berdasar urutan daftar WEBSITES.
// Memakai class .blog-post-nav* agar tampilannya identik dengan detail blog.
export default function WebsitePostNav({
  prev,
  next,
}: {
  prev?: WebsiteShowcase;
  next?: WebsiteShowcase;
}) {
  if (!prev && !next) return null;

  return (
    <nav className="blog-post-nav" aria-label="Navigasi antar inspirasi">
      {prev && (
        <Link href={`/website/${prev.slug}`} className="blog-post-nav-link">
          <ArrowLeft aria-hidden />
          Inspirasi Sebelumnya
        </Link>
      )}
      {next && (
        <Link href={`/website/${next.slug}`} className="blog-post-nav-link">
          Inspirasi Berikutnya
          <ArrowRight aria-hidden />
        </Link>
      )}
    </nav>
  );
}
