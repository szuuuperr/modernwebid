import SidebarCategories from "./SidebarCategories";
import SidebarInstagram from "./SidebarInstagram";
import SidebarSearch from "./SidebarSearch";
import SidebarTopPosts from "./SidebarTopPosts";

// Sidebar halaman detail artikel: kategori, pencarian, artikel teratas,
// dan Instagram. Sticky di desktop, pindah ke bawah artikel di ≤1024px.
export default function BlogSidebar({ currentSlug }: { currentSlug: string }) {
  return (
    <aside className="blog-sidebar" aria-label="Sidebar blog">
      <SidebarCategories />
      <SidebarSearch />
      <SidebarTopPosts currentSlug={currentSlug} />
      <SidebarInstagram />
    </aside>
  );
}
