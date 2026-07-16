import Link from "next/link";
import { BLOG_CATEGORIES } from "@/lib/blog";

// Widget daftar kategori artikel + jumlahnya. Link mengarah ke daftar blog
// dengan filter ?kategori= (difilter client-side oleh BlogGridSection).
export default function SidebarCategories() {
  return (
    <div className="blog-widget">
      <h2 className="blog-widget-title">Kategori</h2>
      <ul className="blog-widget-categories">
        {BLOG_CATEGORIES.map((category) => (
          <li key={category.name}>
            <Link
              href={`/blog?kategori=${encodeURIComponent(category.name)}`}
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
