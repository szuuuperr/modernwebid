"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { WEBSITE_CATEGORIES, WEBSITES } from "@/lib/websites";
import InspirationCard from "./InspirationCard";
import InspirationFilter from "./InspirationFilter";

export default function InspirationSection() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filtered =
    activeCategory === "Semua"
      ? WEBSITES
      : WEBSITES.filter((website) => website.category === activeCategory);

  return (
    <section className="inspiration-section" id="inspiration">
      <h2 className="inspiration-title">
        Inspirasi Website Yang Cocok Untuk Anda
      </h2>
      <p className="inspiration-subtitle">
        ModernWeb menghadirkan berbagai inspirasi desain website yang dapat
        disesuaikan dengan kebutuhan bisnis Anda
      </p>
      <InspirationFilter
        categories={WEBSITE_CATEGORIES}
        active={activeCategory}
        onChange={setActiveCategory}
      />
      {/* key=activeCategory: ganti kategori me-remount kartu sehingga reveal
          (useInView) jalan lagi → animasi fade/scale/blur tiap kali memfilter. */}
      <div className="inspiration-grid" key={activeCategory}>
        {filtered.map((website) => (
          <InspirationCard
            key={website.slug}
            image={website.image}
            alt={website.alt}
            title={website.title}
            category={website.category}
            description={website.description}
            href={`/website/${website.slug}`}
          />
        ))}
      </div>
      <div className="inspiration-more">
        <Link href="/inspirasi" className="inspiration-more-button">
          <span>Inspirasi Lainnya</span>
          <ArrowUpRight className="arrow-icon" aria-hidden />
        </Link>
      </div>
    </section>
  );
}
