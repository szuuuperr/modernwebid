import { Suspense } from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import FabButton from "@/components/layout/FabButton";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ScrollProgress from "@/components/layout/ScrollProgress";
import LenisProvider from "@/components/providers/LenisProvider";
import MicroInteractions from "@/components/providers/MicroInteractions";
import ScrollReveal from "@/components/providers/ScrollReveal";
import { SITE_URL } from "@/lib/site";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Jasa Buat Website Company Profile No.1 | ModernWeb",
  description:
    "Jasa pembuatan website company profile & landing page terima beres: desain modern, responsif, optimasi SEO, free hosting & domain. Paket mulai Rp 1.245.000, pengerjaan mulai 5 hari, gratis konsultasi via WhatsApp.",
  openGraph: {
    title: "Jasa Buat Website Company Profile No.1 | ModernWeb",
    description:
      "Jasa pembuatan website company profile & landing page terima beres: desain modern, responsif, optimasi SEO, free hosting & domain. Gratis konsultasi via WhatsApp.",
    siteName: "ModernWeb",
    locale: "id_ID",
    type: "website",
    // Gambar representatif isi halaman (bukan logo) — sumber preview
    // di Google Discover/hasil pencarian & saat link dibagikan.
    images: [
      {
        url: "/assets/website-crm-furniture.webp",
        alt: "Contoh website buatan ModernWeb: dashboard CRM furniture",
      },
    ],
  },
  verification: {
    google: "r_3kN5HxYU7WtiOjSFtKoSPRm7ws-cyeF3v7j58HwOQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${poppins.variable} antialiased`}>
      <body>
        <div className="grid-bg"></div>
        <div className="page-wrapper">
          <div className="app-container">
            <FabButton />
            <Navbar />
            {children}
            <Footer />
          </div>
        </div>
        <ScrollProgress />
        <LenisProvider />
        <MicroInteractions />
        {/* Suspense wajib: ScrollReveal memakai useSearchParams */}
        <Suspense fallback={null}>
          <ScrollReveal />
        </Suspense>
      </body>
    </html>
  );
}
