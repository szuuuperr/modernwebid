import type { Metadata } from "next";
import CtaSection from "@/components/sections/cta/CtaSection";
import InspirationGallery from "@/components/sections/inspiration/InspirationGallery";
import InspirationHeroSection from "@/components/sections/inspiration/InspirationHeroSection";
import { SITE_URL, WA_LINK_DEFAULT } from "@/lib/site";
import { WEBSITES } from "@/lib/websites";

const BASE_METADATA: Metadata = {
  title: "Galeri Inspirasi Desain Website untuk Bisnis | ModernWeb",
  description:
    "Galeri inspirasi desain website buatan ModernWeb: sistem manajemen (CRM, inventaris) hingga toko online. Cari dan filter berdasarkan kategori untuk menemukan referensi yang cocok untuk bisnis Anda.",
  openGraph: {
    title: "Galeri Inspirasi Desain Website untuk Bisnis | ModernWeb",
    description:
      "Galeri inspirasi desain website buatan ModernWeb, dari sistem manajemen sampai toko online. Cari dan filter referensi sesuai kebutuhan bisnis Anda.",
    siteName: "ModernWeb",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/assets/website-crm-furniture.webp",
        alt: "Galeri inspirasi website ModernWeb: contoh dashboard CRM furniture",
      },
    ],
  },
};

// ?q= dan ?kategori= (dari sidebar halaman detail website) dibaca di server
// sehingga halaman dirender SSR per request dan hasil filter ikut di HTML.
type Props = { searchParams: Promise<{ q?: string; kategori?: string }> };

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { q, kategori } = await searchParams;
  // URL hasil filter/pencarian tidak perlu diindeks — cukup halaman galeri
  // dan halaman detailnya yang masuk indeks.
  if (q || kategori) {
    return { ...BASE_METADATA, robots: { index: false, follow: true } };
  }
  return BASE_METADATA;
}

export default async function InspirationPage({ searchParams }: Props) {
  const { q = "", kategori = "Semua" } = await searchParams;
  // Structured data: halaman koleksi + daftar item inspirasi.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    url: `${SITE_URL}/inspirasi`,
    name: "Inspirasi Website ModernWeb",
    primaryImageOfPage: `${SITE_URL}/assets/website-crm-furniture.webp`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: WEBSITES.map((website, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/website/${website.slug}`,
        name: website.title,
        image: `${SITE_URL}${website.image}`,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <InspirationHeroSection />
      <InspirationGallery initialQuery={q} initialCategory={kategori} />
      <CtaSection
        badge="Konsultasi gratis via WhatsApp"
        title="Suka Salah Satu"
        titleAccent="Desainnya?"
        description="Ceritakan bisnis Anda ke tim kami. Kami bantu wujudkan website dengan gaya yang paling cocok, terima beres dan gratis konsultasi."
        buttonLabel="Konsultasi Gratis"
        buttonHref={WA_LINK_DEFAULT}
      />
    </>
  );
}
