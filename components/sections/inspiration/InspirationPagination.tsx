"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useInView } from "@/lib/use-in-view";

type InspirationPaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

// Pagination galeri inspirasi. Berbasis tombol + state (bukan link ?page=N
// seperti blog) karena daftar kartu sudah dikelola client-side oleh filter &
// search di InspirationGallery — semua item tetap ter-crawl lewat JSON-LD dan
// halaman detail /website/[slug] di sitemap. Reveal dikelola sendiri lewat
// useInView karena komponen ini mount/unmount mengikuti hasil filter.
export default function InspirationPagination({
  currentPage,
  totalPages,
  onPageChange,
}: InspirationPaginationProps) {
  const { ref, inView } = useInView<HTMLElement>();
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      className={
        inView ? "inspiration-pagination in-view" : "inspiration-pagination"
      }
      ref={ref}
      aria-label="Navigasi halaman galeri inspirasi"
    >
      <button
        type="button"
        className={
          currentPage > 1
            ? "inspiration-page-link"
            : "inspiration-page-link disabled"
        }
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        aria-label="Halaman sebelumnya"
      >
        <ChevronLeft aria-hidden />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          type="button"
          className={
            page === currentPage
              ? "inspiration-page-link active"
              : "inspiration-page-link"
          }
          onClick={() => onPageChange(page)}
          aria-current={page === currentPage ? "page" : undefined}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        className={
          currentPage < totalPages
            ? "inspiration-page-link"
            : "inspiration-page-link disabled"
        }
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        aria-label="Halaman berikutnya"
      >
        <ChevronRight aria-hidden />
      </button>
    </nav>
  );
}
