"use client";

import { useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { SearchX } from "lucide-react";
import { useSearchParams } from "next/navigation";
import type { BlogPost } from "@/lib/blog";
import BlogCard from "./BlogCard";
import BlogPagination from "./BlogPagination";

type BlogGridSectionProps = {
  allPosts: BlogPost[];
  postsPerPage: number;
};

// Grid semua artikel + pagination. Halaman aktif dibaca dari ?page (client)
// supaya klik pagination hanya mengganti kartu di section ini — bukan reload
// seluruh halaman. Data statis (lib/blog) dikirim penuh dari server, potong
// per halaman di sini. Validasi ?page tak valid tetap di server (404).
// Filter ?kategori= dan ?q= (dari sidebar halaman artikel) juga diproses di
// sini; saat filter aktif, validasi halaman cukup di-clamp client-side.
export default function BlogGridSection({ allPosts, postsPerPage }: BlogGridSectionProps) {
  const searchParams = useSearchParams();
  const query = (searchParams.get("q") ?? "").trim();
  const category = searchParams.get("kategori") ?? "";
  const isFiltering = query !== "" || category !== "";

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return allPosts.filter((post) => {
      const byCategory = category === "" || post.category === category;
      const bySearch =
        q === "" ||
        post.title.toLowerCase().includes(q) ||
        post.description.toLowerCase().includes(q);
      return byCategory && bySearch;
    });
  }, [allPosts, query, category]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / postsPerPage));

  const parsed = Number(searchParams.get("page") ?? "1");
  const currentPage =
    Number.isInteger(parsed) && parsed >= 1 && parsed <= totalPages
      ? parsed
      : 1;

  const posts = filtered.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage,
  );

  // Ganti halaman → gulir halus ke atas daftar artikel. Dibandingkan dengan
  // nilai sebelumnya (bukan flag "first render") supaya aman dari double-effect
  // Strict Mode di dev — flag akan membuat mount kedua ikut menggulir dan
  // halaman terbuka langsung di tengah section artikel.
  const sectionRef = useRef<HTMLElement>(null);
  const prevPage = useRef(currentPage);
  useEffect(() => {
    if (prevPage.current === currentPage) return;
    prevPage.current = currentPage;
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [currentPage]);

  return (
    <section className="blog-grid-section" id="articles" ref={sectionRef}>
      <div className="blog-grid-header">
        <h2>
          Jelajahi <span className="gradient-text-blue">Artikel Terbaru</span>
        </h2>
        <p>
          Semua artikel kami tentang pembuatan website, SEO, domain & hosting,
          dan digitalisasi bisnis, dari dasar sampai praktik.
        </p>
      </div>

      {isFiltering && (
        <p className="blog-grid-result" aria-live="polite">
          Menampilkan <strong>{filtered.length}</strong> artikel
          {category !== "" && (
            <>
              {" "}
              di kategori <strong>{category}</strong>
            </>
          )}
          {query !== "" && (
            <>
              {" "}
              untuk pencarian <strong>&ldquo;{query}&rdquo;</strong>
            </>
          )}
          {" · "}
          <Link href="/blog">Tampilkan semua</Link>
        </p>
      )}

      {filtered.length > 0 ? (
        // key halaman+filter: pergantian halaman/filter me-remount kartu →
        // reveal (useInView) jalan lagi sehingga artikel baru fade-in.
        <div className="blog-grid" key={`${currentPage}-${category}-${query}`}>
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="inspiration-empty">
          <SearchX aria-hidden />
          <p className="inspiration-empty-title">Belum ada yang cocok</p>
          <p className="inspiration-empty-desc">
            Coba kata kunci lain, atau lihat semua artikel kami.
          </p>
          <Link href="/blog" className="inspiration-empty-reset">
            Lihat Semua Artikel
          </Link>
        </div>
      )}

      {totalPages > 1 && (
        <BlogPagination
          currentPage={currentPage}
          totalPages={totalPages}
          query={query}
          category={category}
        />
      )}
    </section>
  );
}
