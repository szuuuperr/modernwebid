import { Camera } from "lucide-react";
import { INSTAGRAM_URL } from "@/lib/site";

type InstagramPost = {
  image: string;
  alt: string;
  /** Link ke postingannya. Selama masih INSTAGRAM_URL, klik jatuh ke profil. */
  href: string;
};

// Ganti foto widget = edit array ini, bukan markup di bawah. Taruh gambarnya di
// public/assets dengan nama deskriptif, lalu isi alt sesuai isi fotonya.
const IG_POSTS: InstagramPost[] = [
  {
    image: "/assets/ig-jasa-bikin-website.webp",
    alt: "Postingan Instagram ModernWeb: pria tersenyum memangku laptop dengan tulisan 'mau bikin website? Biar kami handle'",
    href: INSTAGRAM_URL,
  },
  {
    image: "/assets/ig-kutipan-bob-sadino.webp",
    alt: "Postingan Instagram ModernWeb berisi kutipan Bob Sadino: 'Jadikan pelanggan sebagai pusat cerita bisnismu'",
    href: INSTAGRAM_URL,
  },
  {
    image: "/assets/ig-billboard-modernweb.webp",
    alt: "Postingan Instagram ModernWeb: billboard logo ModernWeb terpasang di dinding stasiun",
    href: INSTAGRAM_URL,
  },
];

// Widget Instagram: tiga postingan terbaru dari feed + link follow.
// Icon brand memakai Camera (lucide tidak punya icon Instagram).
export default function SidebarInstagram() {
  return (
    <div className="blog-widget">
      <h2 className="blog-widget-title">Instagram</h2>
      <div className="blog-widget-instagram">
        {IG_POSTS.map((post) => (
          <a
            key={post.image}
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={post.image} alt={post.alt} loading="lazy" />
          </a>
        ))}
      </div>
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="blog-widget-instagram-link"
      >
        <Camera aria-hidden />
        @modernweb.std
      </a>
    </div>
  );
}
