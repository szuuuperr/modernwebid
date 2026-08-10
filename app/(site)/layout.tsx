import { Suspense } from "react";
import FabButton from "@/components/layout/FabButton";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ScrollProgress from "@/components/layout/ScrollProgress";
import LenisProvider from "@/components/providers/LenisProvider";
import MicroInteractions from "@/components/providers/MicroInteractions";
import ScrollReveal from "@/components/providers/ScrollReveal";

// Layout halaman situs utama (home, blog, website, inspirasi, form):
// wrapper + Navbar/Footer/FAB + provider interaksi. Route group (site)
// memisahkannya dari halaman di luar chrome (mis. /q/[code] QR redirect)
// yang hanya mewarisi root layout (font, grid-bg, metadata).
export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="page-wrapper">
      <div className="app-container">
        <FabButton />
        <Navbar />
        {children}
        <Footer />
      </div>
      <ScrollProgress />
      <LenisProvider />
      <MicroInteractions />
      {/* Suspense wajib: ScrollReveal memakai useSearchParams */}
      <Suspense fallback={null}>
        <ScrollReveal />
      </Suspense>
    </div>
  );
}
