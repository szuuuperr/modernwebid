"use client";

import Link from "next/link";
import { useInView } from "@/lib/use-in-view";

type InspirationCardProps = {
  image: string;
  alt: string;
  title: string;
  category: string;
  description: string;
  href: string;
};

// Seluruh kartu adalah satu Link ke halaman detail (pola yang sama dengan
// BlogCard). "Selengkapnya" sengaja <span>, bukan Link lagi, karena anchor
// bersarang di dalam anchor tidak valid dan bikin dua target klik terpisah.
export default function InspirationCard({
  image,
  alt,
  title,
  category,
  description,
  href,
}: InspirationCardProps) {
  // Reveal dikelola sendiri (bukan lewat ScrollReveal) karena kartu bisa
  // mount/unmount saat filter kategori berganti — lihat lib/use-in-view.ts.
  const { ref, inView } = useInView<HTMLAnchorElement>();

  return (
    <Link
      href={href}
      className={inView ? "inspiration-card in-view" : "inspiration-card"}
      ref={ref}
    >
      <div className="inspiration-card-image">
        <img src={image} alt={alt} loading="lazy" />
        <span className="inspiration-card-category">{category}</span>
      </div>
      <div className="inspiration-card-info">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <span className="inspiration-card-button">Selengkapnya</span>
    </Link>
  );
}
