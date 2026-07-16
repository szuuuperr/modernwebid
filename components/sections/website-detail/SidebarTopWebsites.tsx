import Link from "next/link";
import { WEBSITES } from "@/lib/websites";

// Widget inspirasi lainnya: daftar bernomor (maks 5) selain yang sedang
// dibuka — sekaligus internal linking antar halaman detail.
export default function SidebarTopWebsites({
  currentSlug,
}: {
  currentSlug: string;
}) {
  const websites = WEBSITES.filter(
    (website) => website.slug !== currentSlug,
  ).slice(0, 5);

  return (
    <div className="blog-widget">
      <h2 className="blog-widget-title">Inspirasi Lainnya</h2>
      <ol className="blog-widget-top-posts">
        {websites.map((website, index) => (
          <li key={website.slug}>
            <span className="blog-widget-top-number" aria-hidden>
              {index + 1}
            </span>
            <Link
              href={`/website/${website.slug}`}
              className="blog-widget-top-link"
            >
              {website.title}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
