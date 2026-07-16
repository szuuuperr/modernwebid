"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

// Smooth scrolling Lenis + smooth scroll untuk semua anchor internal (a[href^="#"]).
export default function LenisProvider() {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1.5,
    });
    lenisRef.current = lenis;

    let rafId = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    });

    function onClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest?.(
        'a[href^="#"], a[href^="/#"]',
      );
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href) return;

      // "#id" berlaku di halaman mana pun; "/#id" (dipakai navbar/footer agar
      // bisa diklik dari halaman lain) hanya di-smooth-scroll saat sudah di home
      // — selain itu biarkan browser/Next menavigasi ke home dulu.
      let hash: string | null = null;
      if (href.startsWith("#")) {
        hash = href;
      } else if (href.startsWith("/#") && window.location.pathname === "/") {
        hash = href.slice(1);
      }
      if (!hash || hash === "#") return;

      const target = document.querySelector<HTMLElement>(hash);
      if (target) {
        e.preventDefault();
        lenis.scrollTo(target);
      }
    }
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", onClick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Pindah halaman → reset scroll ke atas. Tanpa ini Lenis meneruskan posisi/
  // animasi scroll halaman sebelumnya sehingga halaman baru terbuka di tengah.
  // Dibandingkan dengan pathname sebelumnya (bukan efek polos) agar load awal
  // & scroll restoration browser tidak ikut di-reset; hash (/#id) dibiarkan
  // supaya anchor lintas halaman tetap berfungsi. Query (?page=N) tidak lewat
  // sini — pagination blog mengelola scroll-nya sendiri.
  const prevPathname = useRef(pathname);
  useEffect(() => {
    if (prevPathname.current === pathname) return;
    prevPathname.current = pathname;
    if (window.location.hash) return;
    lenisRef.current?.scrollTo(0, { immediate: true });
  }, [pathname]);

  return null;
}
