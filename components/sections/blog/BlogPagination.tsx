import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

type BlogPaginationProps = {
  currentPage: number;
  totalPages: number;
  /** Filter aktif (?q= / ?kategori=) — ikut dibawa di link halaman */
  query?: string;
  category?: string;
};

// Pagination berbasis link (?page=N) agar tiap halaman punya URL sendiri —
// bisa di-crawl Google. Link pakai scroll={false}: URL berganti tanpa reload
// penuh & tanpa lompat ke atas; BlogGridSection membaca ?page lalu mengganti
// kartu di section-nya sendiri (dan menggulir halus ke atas daftar).
export default function BlogPagination({
  currentPage,
  totalPages,
  query = "",
  category = "",
}: BlogPaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  function pageHref(page: number) {
    const params = new URLSearchParams();
    if (query !== "") params.set("q", query);
    if (category !== "") params.set("kategori", category);
    if (page > 1) params.set("page", String(page));
    const search = params.toString();
    return search === "" ? "/blog" : `/blog?${search}`;
  }

  return (
    <nav className="blog-pagination" aria-label="Navigasi halaman blog">
      {currentPage > 1 ? (
        <Link
          href={pageHref(currentPage - 1)}
          scroll={false}
          className="blog-page-link"
          aria-label="Halaman sebelumnya"
        >
          <ChevronLeft aria-hidden />
        </Link>
      ) : (
        <span className="blog-page-link disabled" aria-hidden>
          <ChevronLeft aria-hidden />
        </span>
      )}

      {pages.map((page) =>
        page === currentPage ? (
          <span key={page} className="blog-page-link active" aria-current="page">
            {page}
          </span>
        ) : (
          <Link
            key={page}
            href={pageHref(page)}
            scroll={false}
            className="blog-page-link"
          >
            {page}
          </Link>
        ),
      )}

      {currentPage < totalPages ? (
        <Link
          href={pageHref(currentPage + 1)}
          scroll={false}
          className="blog-page-link"
          aria-label="Halaman berikutnya"
        >
          <ChevronRight aria-hidden />
        </Link>
      ) : (
        <span className="blog-page-link disabled" aria-hidden>
          <ChevronRight aria-hidden />
        </span>
      )}
    </nav>
  );
}
