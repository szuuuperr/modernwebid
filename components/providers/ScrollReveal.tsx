"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

// Elemen yang mendapat animasi reveal (blur + fade + slide) saat masuk viewport.
// Elemen baru yang butuh reveal harus ditambahkan ke daftar ini DAN ke blok
// CSS ".in-view" di app/globals.css.
//
// PENTING: hanya untuk elemen yang className-nya statis DAN selalu ter-mount.
// Elemen dengan className dinamis atau yang bisa mount/unmount (filter, toggle)
// harus mengelola "in-view" sendiri lewat state — contoh: FaqItem, InspirationCard.
const REVEAL_SELECTOR = [
  ".brand-title", ".problem-title", ".solving-title", ".flow-title",
  ".flow-subtitle", ".price-title", ".price-subtitle", ".inspiration-title",
  ".inspiration-subtitle", ".inspiration-more", ".seo-title", ".seo-subtitle",
  // Konten atas fold (hero home, hero + toolbar /inspirasi) TIDAK di sini:
  // elemen di atas fold bisa berada di luar viewport saat tiba dari halaman
  // lain, sehingga observer tak pernah memicu reveal. Mereka dianimasikan
  // lewat CSS mount animation (@keyframes reveal-up) yang tak butuh observer.
  ".faq-title", ".faq-subtitle", ".price-card-recomendation", ".problem-card",
  ".solving-container", ".flow-card", ".price-card",
  ".seo-tags", ".cta-section",
  ".blog-hero-title", ".blog-hero-subtitle", ".blog-featured", ".blog-side-card",
  ".blog-grid-header", ".blog-pagination", ".blog-comment",
  // .blog-card TIDAK di sini: kartu grid mount/unmount saat pindah halaman
  // pagination, jadi kelola reveal-nya sendiri lewat useInView (lihat BlogCard).
].join(",");

export default function ScrollReveal() {
  // Komponen ini hidup di root layout yang tidak ikut remount saat navigasi.
  // Efek harus dijalankan ulang setiap route/query berubah (mis. pagination
  // blog ?page=) agar elemen halaman baru ikut diobservasi — tanpa ini,
  // elemen reveal di halaman tujuan tidak pernah muncul.
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const els = document.querySelectorAll(REVEAL_SELECTOR);

    if (!("IntersectionObserver" in window)) {
      // Fallback: kalau tidak didukung, tampilkan semua langsung
      els.forEach((el) => el.classList.add("in-view"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname, searchParams]);

  return null;
}
