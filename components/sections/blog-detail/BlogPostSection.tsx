import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { formatPostDate } from "@/lib/blog";
import BlogPostNav from "./BlogPostNav";

type BlogPostSectionProps = {
  post: BlogPost;
  older?: BlogPost;
  newer?: BlogPost;
};

// Section artikel utama: cover, judul (satu-satunya h1 halaman), meta,
// isi artikel (paragraf/h2/pull-quote), chip kategori, dan navigasi
// prev/next. Server Component murni — konten langsung ter-render untuk SEO.
export default function BlogPostSection({
  post,
  older,
  newer,
}: BlogPostSectionProps) {
  const categoryHref = `/blog?kategori=${encodeURIComponent(post.category)}`;

  return (
    <article className="blog-post-card">
      <div className="blog-post-cover">
        <img src={post.image} alt={post.alt} />
      </div>

      <div className="blog-post-body">
        <header className="blog-post-header">
          <h1 className="blog-post-title">{post.title}</h1>
          <p className="blog-post-meta">
            Oleh <strong>ModernWeb</strong>
            <span aria-hidden>·</span>
            <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            <span aria-hidden>·</span>
            <Link href={categoryHref}>{post.category}</Link>
          </p>
        </header>

        <div className="blog-post-content">
          {post.content.map((block, index) => {
            // key pakai index: teks blok tidak dijamin unik (mis. dua list
            // atau dua h3 berisi kalimat sama), dan urutan blok statis.
            switch (block.type) {
              case "h2":
                return <h2 key={index}>{block.text}</h2>;
              case "h3":
                return <h3 key={index}>{block.text}</h3>;
              case "quote":
                return (
                  <blockquote key={index} className="blog-post-quote">
                    {block.text}
                  </blockquote>
                );
              case "list": {
                const List = block.ordered ? "ol" : "ul";
                return (
                  <List key={index} className="blog-post-list">
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </List>
                );
              }
              case "faq":
                return (
                  <dl key={index} className="blog-post-faq">
                    {block.items.map((item) => (
                      <div key={item.q}>
                        <dt>{item.q}</dt>
                        <dd>{item.a}</dd>
                      </div>
                    ))}
                  </dl>
                );
              default:
                return <p key={index}>{block.text}</p>;
            }
          })}
        </div>

        <footer className="blog-post-footer">
          <Link href={categoryHref} className="blog-post-tag">
            {post.category}
          </Link>
          <BlogPostNav older={older} newer={newer} />
        </footer>
      </div>
    </article>
  );
}
