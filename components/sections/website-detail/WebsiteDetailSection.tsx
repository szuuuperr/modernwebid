import Link from "next/link";
import { Check } from "lucide-react";
import { waLink } from "@/lib/site";
import type { WebsiteShowcase } from "@/lib/websites";
import WebsitePostNav from "./WebsitePostNav";
import WebsiteScrollShowcase from "./WebsiteScrollShowcase";

type WebsiteDetailSectionProps = {
  website: WebsiteShowcase;
  prev?: WebsiteShowcase;
  next?: WebsiteShowcase;
};

// Section utama detail website: chip kategori, judul (satu-satunya h1),
// deskripsi, showcase scroll 3D, konten, fitur utama, CTA WhatsApp, dan
// navigasi prev/next. Memakai class kartu .blog-post-* yang sama dengan
// detail blog supaya kedua halaman detail tampil konsisten.
export default function WebsiteDetailSection({
  website,
  prev,
  next,
}: WebsiteDetailSectionProps) {
  const categoryHref = `/inspirasi?kategori=${encodeURIComponent(website.category)}`;

  return (
    <article className="blog-post-card">
      <div className="blog-post-body">
        <header className="blog-post-header">
          <Link href={categoryHref} className="blog-post-tag">
            {website.category}
          </Link>
          <h1 className="blog-post-title">{website.title}</h1>
          <p className="blog-post-meta">{website.description}</p>
        </header>

        <WebsiteScrollShowcase image={website.image} alt={website.alt} />

        <div className="blog-post-content">
          {website.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="website-features">
          <h2>Fitur Utama</h2>
          <ul>
            {website.features.map((feature) => (
              <li key={feature}>
                <Check aria-hidden />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <a
          href={waLink(`Mau buat website seperti ${website.title}!`)}
          className="website-detail-cta"
        >
          Buat Website Seperti Ini
        </a>

        <footer className="blog-post-footer">
          <Link href={categoryHref} className="blog-post-tag">
            {website.category}
          </Link>
          <WebsitePostNav prev={prev} next={next} />
        </footer>
      </div>
    </article>
  );
}
