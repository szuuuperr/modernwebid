import Link from "next/link";
import { WEBSITE_CATEGORY_COUNTS } from "@/lib/websites";

// Widget kategori inspirasi + jumlahnya. Link membuka galeri /inspirasi
// dengan filter kategori terpasang (dibaca dari ?kategori= saat mount).
export default function SidebarWebsiteCategories() {
  return (
    <div className="blog-widget">
      <h2 className="blog-widget-title">Kategori</h2>
      <ul className="blog-widget-categories">
        {WEBSITE_CATEGORY_COUNTS.map((category) => (
          <li key={category.name}>
            <Link
              href={`/inspirasi?kategori=${encodeURIComponent(category.name)}`}
              className="blog-widget-category"
            >
              <span>{category.name}</span>
              <span className="blog-widget-category-count">
                {category.count}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
