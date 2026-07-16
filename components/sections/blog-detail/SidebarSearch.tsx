import { Search } from "lucide-react";

// Widget pencarian artikel. Form GET biasa (tanpa JS) ke /blog?q= —
// hasilnya difilter client-side oleh BlogGridSection di halaman daftar.
export default function SidebarSearch() {
  return (
    <form action="/blog" role="search" className="blog-widget blog-widget-search">
      <input
        type="search"
        name="q"
        className="blog-widget-search-input"
        placeholder="Cari artikel…"
        aria-label="Cari artikel"
        required
      />
      <button
        type="submit"
        className="blog-widget-search-button"
        aria-label="Cari"
      >
        <Search aria-hidden />
      </button>
    </form>
  );
}
