import SidebarInstagram from "@/components/sections/blog-detail/SidebarInstagram";
import SidebarTopWebsites from "./SidebarTopWebsites";
import SidebarWebsiteCategories from "./SidebarWebsiteCategories";
import SidebarWebsiteSearch from "./SidebarWebsiteSearch";

// Sidebar halaman detail website: kategori, pencarian, inspirasi lainnya,
// dan Instagram (widget yang sama dengan detail blog). Sticky di desktop,
// pindah ke bawah artikel di ≤1024px (style .blog-sidebar).
export default function WebsiteSidebar({
  currentSlug,
}: {
  currentSlug: string;
}) {
  return (
    <aside className="blog-sidebar" aria-label="Sidebar inspirasi">
      <SidebarWebsiteCategories />
      <SidebarWebsiteSearch />
      <SidebarTopWebsites currentSlug={currentSlug} />
      <SidebarInstagram />
    </aside>
  );
}
