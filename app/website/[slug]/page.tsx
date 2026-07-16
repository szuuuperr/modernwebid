import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import WebsiteAskSection from "@/components/sections/website-detail/WebsiteAskSection";
import WebsiteDetailSection from "@/components/sections/website-detail/WebsiteDetailSection";
import WebsiteSidebar from "@/components/sections/website-detail/WebsiteSidebar";
import { SITE_URL } from "@/lib/site";
import { WEBSITES, getAdjacentWebsites, getWebsite } from "@/lib/websites";

// Semua slug dirender statis saat build; slug di luar daftar → 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return WEBSITES.map((website) => ({ slug: website.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const website = getWebsite(slug);
  if (!website) return {};

  const title = `Inspirasi ${website.title} | ModernWeb`;
  return {
    title,
    description: website.description,
    openGraph: {
      title,
      description: website.description,
      siteName: "ModernWeb",
      locale: "id_ID",
      type: "website",
      images: [{ url: website.image, alt: website.alt }],
    },
  };
}

export default async function WebsiteDetailPage({ params }: Props) {
  const { slug } = await params;
  const website = getWebsite(slug);
  if (!website) notFound();

  const { prev, next } = getAdjacentWebsites(website.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: `${SITE_URL}/website/${website.slug}`,
    name: website.title,
    description: website.description,
    primaryImageOfPage: `${SITE_URL}${website.image}`,
    inLanguage: "id",
  };

  return (
    // Halaman hanya menyusun section: kolom utama (detail + form tanya) dan
    // sidebar dalam grid dua kolom yang sama dengan detail blog.
    <section className="blog-post-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link href="/inspirasi" className="blog-post-back">
        <ArrowLeft aria-hidden />
        Kembali ke Galeri Inspirasi
      </Link>

      <div className="blog-post-layout">
        <div className="blog-post-main">
          <WebsiteDetailSection website={website} prev={prev} next={next} />
          <WebsiteAskSection websiteTitle={website.title} />
        </div>
        <WebsiteSidebar currentSlug={website.slug} />
      </div>
    </section>
  );
}
