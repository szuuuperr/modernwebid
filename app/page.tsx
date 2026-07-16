import BrandsSection from "@/components/sections/brands/BrandsSection";
import CtaSection from "@/components/sections/cta/CtaSection";
import FaqSection from "@/components/sections/faq/FaqSection";
import FlowSection from "@/components/sections/flow/FlowSection";
import HeroSection from "@/components/sections/hero/HeroSection";
import InspirationSection from "@/components/sections/inspiration/InspirationSection";
import PriceSection from "@/components/sections/price/PriceSection";
import ProblemSection from "@/components/sections/problem/ProblemSection";
import SeoSection from "@/components/sections/seo/SeoSection";
import SolvingSection from "@/components/sections/solving/SolvingSection";
import { SITE_URL, WA_LINK_DEFAULT } from "@/lib/site";

// Structured data: memberi tahu Google gambar utama halaman ini
// (sumber preview selain og:image).
const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: SITE_URL,
  name: "Jasa Buat Website Company Profile No.1 | ModernWeb",
  primaryImageOfPage: `${SITE_URL}/assets/website-crm-furniture.webp`,
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <HeroSection />
      <BrandsSection />
      <ProblemSection />
      <SolvingSection />
      <FlowSection />
      <PriceSection />
      <InspirationSection />
      <SeoSection />
      <FaqSection />
      <CtaSection
        badge="Konsultasi gratis via WhatsApp"
        title="Mulai Bikin Website"
        titleAccent="Impian Anda Hari Ini"
        description="Masih ada yang ingin ditanyakan? Tim kami siap membantu. Konsultasi gratis, terima beres sampai website Anda live."
        buttonLabel="Konsultasi Gratis"
        buttonHref={WA_LINK_DEFAULT}
      />
    </>
  );
}
