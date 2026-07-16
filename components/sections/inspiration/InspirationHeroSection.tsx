import { LayoutGrid } from "lucide-react";

// Bagian atas halaman /inspirasi: badge + judul utama (h1) + subtitle.
// Elemen statis → reveal-nya lewat ScrollReveal (bukan useInView).
export default function InspirationHeroSection() {
  return (
    <section className="inspiration-hero-section" id="inspirasi">
      <span className="inspiration-hero-badge">
        <LayoutGrid aria-hidden />
        Galeri Inspirasi
      </span>
      <h1 className="inspiration-hero-title">
        Inspirasi Website untuk{" "}
        <span className="gradient-text-blue">Setiap Bisnis</span>
      </h1>
      <p className="inspiration-hero-subtitle">
        Jelajahi ragam desain website yang sudah kami bangun, dari sistem
        manajemen hingga toko online. Temukan gaya yang paling sesuai dengan
        kebutuhan bisnis Anda, lalu wujudkan bersama tim ModernWeb.
      </p>
    </section>
  );
}
