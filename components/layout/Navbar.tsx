"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { WA_LINK_DEFAULT } from "@/lib/site";

// Navbar sticky: auto-hide saat scroll ke bawah, muncul lagi saat scroll ke
// atas. Di ≤768px link tengah pindah ke menu hamburger (panel dropdown di
// bawah navbar) — menu menutup sendiri saat pindah halaman, klik di luar,
// tombol Escape, atau saat navbar auto-hide.
export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Pindah halaman → tutup menu.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Klik di luar navbar / Escape → tutup menu.
  useEffect(() => {
    if (!menuOpen) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }
    function onClick(event: MouseEvent) {
      if (!navRef.current?.contains(event.target as Node)) setMenuOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("click", onClick);
    };
  }, [menuOpen]);

  useEffect(() => {
    const navbar = navRef.current;
    if (!navbar) return;

    let lastScroll = 0;
    const threshold = 10;

    navbar.classList.add("show");

    function onScroll() {
      if (!navbar) return;
      const currentScroll = window.pageYOffset;

      navbar.classList.toggle("scrolled", currentScroll > 10);

      if (Math.abs(currentScroll - lastScroll) < threshold) return;

      if (currentScroll <= 0) {
        navbar.classList.remove("hide");
        navbar.classList.add("show");
        return;
      }

      if (currentScroll > lastScroll && currentScroll > 80) {
        navbar.classList.add("hide");
        navbar.classList.remove("show");
        // Navbar menghilang → menu ikut ditutup supaya tidak "mengambang".
        setMenuOpen(false);
      } else {
        navbar.classList.remove("hide");
        navbar.classList.add("show");
      }

      lastScroll = currentScroll;
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="navbar" id="navbar" ref={navRef}>
      <Link href="/" className="navbar-logo">
        <img src="/assets/logo.svg" alt="ModernWeb Logo" />
      </Link>
      <div className="navbar-center">
        {/* Anchor ditulis /#id agar tetap berfungsi dari halaman selain home;
            LenisProvider menangani smooth scroll-nya saat sudah di home. */}
        <a href="/">Beranda</a>
        <Link href="/inspirasi">Inspirasi</Link>
        <Link href="/blog">Blog</Link>
      </div>
      <div className="navbar-right">
        <div className="language-switcher">
          <span className="active">ID</span>
          <span className="divider"></span>
          <span className="inactive">EN</span>
        </div>
        <a
          href={WA_LINK_DEFAULT}
          className="cta-button"
          data-hover="Hubungi Kami!"
        >
          <span>Mulai Bikin Web</span>
          <div className="icon-wrapper">
            <ArrowUpRight className="icon-arrow-small" size={18} aria-hidden />
          </div>
        </a>
        <button
          type="button"
          className={menuOpen ? "navbar-burger open" : "navbar-burger"}
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={menuOpen}
          aria-controls="navbar-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Menu aria-hidden />
          <X aria-hidden />
        </button>
      </div>

      {/* Panel dropdown mobile — hanya tampil ≤768px (CSS) */}
      <div
        className={menuOpen ? "navbar-menu open" : "navbar-menu"}
        id="navbar-menu"
      >
        <a href="/" onClick={closeMenu}>
          Beranda
        </a>
        <Link href="/inspirasi" onClick={closeMenu}>
          Inspirasi
        </Link>
        <Link href="/blog" onClick={closeMenu}>
          Blog
        </Link>
        {/* CTA versi panel — menggantikan .cta-button navbar di ≤768px (CSS) */}
        <a
          href={WA_LINK_DEFAULT}
          className="navbar-menu-cta"
          onClick={closeMenu}
        >
          Mulai Bikin Web
          <ArrowUpRight aria-hidden />
        </a>
        <div className="navbar-menu-footer">
          <span className="navbar-menu-footer-label">Bahasa</span>
          <div className="language-switcher">
            <span className="active">ID</span>
            <span className="divider"></span>
            <span className="inactive">EN</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
