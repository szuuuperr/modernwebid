import { Newspaper } from "lucide-react";
import { SORTED_POSTS } from "@/lib/blog";
import BlogFeaturedCard from "./BlogFeaturedCard";
import BlogSideCard from "./BlogSideCard";

// Bagian atas halaman blog: badge + judul + subtitle, artikel terbaru sebagai
// featured besar di kiri, tiga artikel berikutnya sebagai kartu ringkas kanan.
export default function BlogHeroSection() {
  const [featured, ...rest] = SORTED_POSTS;
  const sidePosts = rest.slice(0, 3);

  return (
    <section className="blog-hero-section">
      <span className="blog-hero-badge">
        <Newspaper aria-hidden />
        Tips & Wawasan
      </span>
      <h1 className="blog-hero-title">
        Blog <span className="gradient-text-blue">ModernWeb</span>
      </h1>
      <p className="blog-hero-subtitle">
        Tips, wawasan, dan panduan seputar website untuk membantu bisnis Anda
        tumbuh. Ditulis ringkas untuk pemilik bisnis, bukan programmer.
      </p>
      <div className="blog-hero-grid">
        <BlogFeaturedCard post={featured} />
        <div className="blog-side-list">
          {sidePosts.map((post) => (
            <BlogSideCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
