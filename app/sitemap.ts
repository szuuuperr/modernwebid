import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";
import { WEBSITES } from "@/lib/websites";

// Sitemap dengan daftar gambar per halaman (image sitemap) agar Google
// menemukan dan mengindeks halaman & gambar penting situs.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: WEBSITES.map((website) => `${SITE_URL}${website.image}`),
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/inspirasi`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      images: WEBSITES.map((website) => `${SITE_URL}${website.image}`),
    },
    ...WEBSITES.map((website) => ({
      url: `${SITE_URL}/website/${website.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [`${SITE_URL}${website.image}`],
    })),
    ...BLOG_POSTS.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
