import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import BlogCommentSection from "@/components/sections/blog-detail/BlogCommentSection";
import BlogPostSection from "@/components/sections/blog-detail/BlogPostSection";
import BlogSidebar from "@/components/sections/blog-detail/BlogSidebar";
import { BLOG_POSTS, getAdjacentPosts, getPost } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

// Semua slug dirender statis saat build; slug di luar daftar → 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const title = `${post.title} | ModernWeb`;
  return {
    title,
    description: post.description,
    openGraph: {
      title,
      description: post.description,
      siteName: "ModernWeb",
      locale: "id_ID",
      type: "article",
      publishedTime: post.date,
      images: [{ url: post.image, alt: post.alt }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { older, newer } = getAdjacentPosts(post.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    image: `${SITE_URL}${post.image}`,
    articleSection: post.category,
    inLanguage: "id",
    author: { "@type": "Organization", name: "ModernWeb" },
  };

  return (
    // Halaman hanya menyusun section: kolom utama (artikel + komentar) dan
    // sidebar dalam grid dua kolom (sidebar turun ke bawah di ≤1024px).
    <section className="blog-post-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link href="/blog" className="blog-post-back">
        <ArrowLeft aria-hidden />
        Kembali ke Blog
      </Link>

      <div className="blog-post-layout">
        <div className="blog-post-main">
          <BlogPostSection post={post} older={older} newer={newer} />
          <BlogCommentSection postTitle={post.title} />
        </div>
        <BlogSidebar currentSlug={post.slug} />
      </div>
    </section>
  );
}
