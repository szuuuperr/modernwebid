"use client";

import { useMemo, useRef, useState } from "react";
import { Search, SearchX } from "lucide-react";
import { WEBSITE_CATEGORIES, WEBSITES, WEBSITES_PER_PAGE } from "@/lib/websites";
import InspirationCard from "./InspirationCard";
import InspirationPagination from "./InspirationPagination";

type InspirationGalleryProps = {
  /** Nilai awal dari ?q= / ?kategori= — dibaca server di app/inspirasi/page.tsx
      (bukan useSearchParams) supaya hasil filter ikut ter-render di HTML SSR. */
  initialQuery?: string;
  initialCategory?: string;
};

// Galeri inspirasi dengan search bar + filter kategori (client — butuh state).
// Kartu memakai InspirationCard (reveal via useInView) karena bisa
// mount/unmount saat filter/search berubah. Hasil filter dipotong per
// WEBSITES_PER_PAGE; ganti filter/search selalu kembali ke halaman 1.
export default function InspirationGallery({
  initialQuery = "",
  initialCategory = "Semua",
}: InspirationGalleryProps) {
  const [query, setQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState(
    WEBSITE_CATEGORIES.includes(initialCategory) ? initialCategory : "Semua",
  );
  const [page, setPage] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return WEBSITES.filter((website) => {
      const byCategory =
        activeCategory === "Semua" || website.category === activeCategory;
      const bySearch =
        q === "" ||
        website.title.toLowerCase().includes(q) ||
        website.description.toLowerCase().includes(q) ||
        website.category.toLowerCase().includes(q);
      return byCategory && bySearch;
    });
  }, [query, activeCategory]);

  // Clamp sebagai pengaman kalau hasil filter menyusut saat berada di
  // halaman belakang (handler filter juga selalu reset ke halaman 1).
  const totalPages = Math.max(1, Math.ceil(filtered.length / WEBSITES_PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const paged = filtered.slice(
    (currentPage - 1) * WEBSITES_PER_PAGE,
    currentPage * WEBSITES_PER_PAGE,
  );

  function goToPage(nextPage: number) {
    setPage(nextPage);
    // Gulir halus ke atas galeri agar halaman baru terlihat dari kartu pertama.
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function changeCategory(category: string) {
    setActiveCategory(category);
    setPage(1);
  }

  function changeQuery(value: string) {
    setQuery(value);
    setPage(1);
  }

  function resetAll() {
    setQuery("");
    setActiveCategory("Semua");
    setPage(1);
  }

  return (
    <section className="inspiration-gallery" id="galeri" ref={sectionRef}>
      <div className="inspiration-toolbar">
        <div className="inspiration-search">
          <Search aria-hidden />
          <input
            type="search"
            className="inspiration-search-input"
            placeholder="Cari inspirasi… (mis. e-commerce, CRM, inventaris)"
            value={query}
            onChange={(event) => changeQuery(event.target.value)}
            aria-label="Cari inspirasi website"
          />
        </div>
        <div className="inspiration-toolbar-filters">
          {WEBSITE_CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              className={
                category === activeCategory
                  ? "inspiration-filter active"
                  : "inspiration-filter"
              }
              onClick={() => changeCategory(category)}
              aria-pressed={category === activeCategory}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <p className="inspiration-result" aria-live="polite">
        Menampilkan <strong>{filtered.length}</strong> dari {WEBSITES.length}{" "}
        inspirasi
      </p>

      {filtered.length > 0 ? (
        // key kategori+halaman: ganti kategori atau pindah halaman me-remount
        // kartu → reveal jalan lagi. Search tidak ikut me-remount agar tidak
        // berkedip tiap ketikan — kartu yang muncul/hilang tetap animasi via key slug.
        <div className="inspiration-grid" key={`${activeCategory}-${currentPage}`}>
          {paged.map((website) => (
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
      ) : (
        <div className="inspiration-empty">
          <SearchX aria-hidden />
          <p className="inspiration-empty-title">Belum ada yang cocok</p>
          <p className="inspiration-empty-desc">
            Coba kata kunci lain atau atur ulang filter kategori.
          </p>
          <button
            type="button"
            className="inspiration-empty-reset"
            onClick={resetAll}
          >
            Atur ulang
          </button>
        </div>
      )}

      {totalPages > 1 && (
        <InspirationPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={goToPage}
        />
      )}
    </section>
  );
}
