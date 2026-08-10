import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogGridSection from "@/components/sections/blog/BlogGridSection";
import BlogHeroSection from "@/components/sections/blog/BlogHeroSection";
import CtaSection from "@/components/sections/cta/CtaSection";
import { POSTS_PER_PAGE, SORTED_POSTS } from "@/lib/blog";
import { WA_LINK_DEFAULT } from "@/lib/site";

// Pagination lewat query ?page=N — halaman dirender SSR per request sehingga
// tiap halaman daftar punya URL yang bisa diindeks Google. ?q= dan ?kategori=
// (dari sidebar halaman artikel) difilter client-side oleh BlogGridSection.
type Props = {
  searchParams: Promise<{ page?: string; q?: string; kategori?: string }>;
};

const BASE_METADATA: Metadata = {
  title: "Blog: Tips & Wawasan Website untuk Bisnis | ModernWeb",
  description:
    "Kumpulan artikel ModernWeb seputar pembuatan website, SEO, domain & hosting, dan digitalisasi bisnis. Ditulis ringkas untuk pemilik bisnis, bukan programmer.",
  openGraph: {
    title: "Blog: Tips & Wawasan Website untuk Bisnis | ModernWeb",
    description:
      "Kumpulan artikel ModernWeb seputar pembuatan website, SEO, domain & hosting, dan digitalisasi bisnis.",
    siteName: "ModernWeb",
    locale: "id_ID",
    type: "website",
  },
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { q, kategori } = await searchParams;
  // URL hasil filter/pencarian tidak perlu diindeks — kombinasinya tak
  // terbatas; cukup halaman daftar & artikelnya yang masuk indeks.
  if (q || kategori) {
    return { ...BASE_METADATA, robots: { index: false, follow: true } };
  }
  return BASE_METADATA;
}

export default async function BlogPage({ searchParams }: Props) {
  const { page, q, kategori } = await searchParams;
  const totalPages = Math.ceil(SORTED_POSTS.length / POSTS_PER_PAGE);

  // Validasi tetap di server: ?page tak valid → 404 (URL tiap halaman tetap
  // bisa di-crawl). Saat filter/pencarian aktif jumlah halamannya dihitung
  // client-side, jadi validasi (clamp) ikut di BlogGridSection.
  const isFiltering = Boolean(q || kategori);
  const parsed = Number(page ?? "1");
  const currentPage = Number.isInteger(parsed) && parsed >= 1 ? parsed : 1;
  if (!isFiltering && currentPage > totalPages) notFound();

  return (
    // id halaman di level page (bukan di section hero). display:contents agar
    // wrapper tak jadi flex item — section tetap anak langsung .app-container
    // sehingga gap 96px antar section tidak berubah.
    <div id="blog" className="contents">
      <BlogHeroSection />
      <BlogGridSection allPosts={SORTED_POSTS} postsPerPage={POSTS_PER_PAGE} />
      <CtaSection
        badge="Konsultasi gratis via WhatsApp"
        title="Sudah Dapat Wawasannya?"
        titleAccent="Saatnya Praktik"
        description="Konsultasikan kebutuhan website bisnis Anda dengan tim kami. Gratis, terima beres, dan kami bilang terus terang kalau paket termurah sudah cukup."
        buttonLabel="Mulai Bikin Web"
        buttonHref={WA_LINK_DEFAULT}
      />
    </div>
  );
}
