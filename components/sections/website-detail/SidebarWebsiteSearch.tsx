import { Search } from "lucide-react";

// Widget pencarian inspirasi. Form GET biasa (tanpa JS) ke /inspirasi?q= —
// InspirationGallery membaca query awal dari URL saat mount.
export default function SidebarWebsiteSearch() {
  return (
    <form
      action="/inspirasi"
      role="search"
      className="blog-widget blog-widget-search"
    >
      <input
        type="search"
        name="q"
        className="blog-widget-search-input"
        placeholder="Cari inspirasi…"
        aria-label="Cari inspirasi website"
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
