import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
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

// Root layout minimal: font, metadata, grid-bg, dan body. Seluruh chrome
// (Navbar/Footer/FAB/providers) ada di route group app/(site)/layout.tsx
// supaya halaman di luar group (mis. /q/[code] QR redirect) bisa tampil
// polos tanpa navbar.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${poppins.variable} antialiased`}>
      <body>
        <div className="grid-bg"></div>
        {children}
      </body>
    </html>
  );
}
