import { ArrowRight, MessageCircle } from "lucide-react";

type CtaSectionProps = {
  /** Teks pill di atas judul. Icon-nya MessageCircle (= WhatsApp, lihat AGENTS.md). */
  badge?: string;
  title: string;
  /** Baris kedua judul, tampil gradient putih & lebih redup dari baris pertama. */
  titleAccent?: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
};

// Banner CTA reusable: badge, judul dua baris, deskripsi, dan satu tombol,
// semuanya rata tengah di atas background biru gelap dengan dua busur cahaya
// di kiri & kanan (dekorasi CSS murni, lihat .cta-section::before/::after).
// Dipakai di home, /blog, dan /inspirasi.
export default function CtaSection({
  badge,
  title,
  titleAccent,
  description,
  buttonLabel,
  buttonHref,
}: CtaSectionProps) {
  return (
    <section className="cta-section">
      <div className="cta-content">
        {badge && (
          <span className="cta-badge">
            <MessageCircle aria-hidden />
            {badge}
          </span>
        )}
        <h2 className="cta-title">
          {title}
          {titleAccent && (
            <span className="cta-title-accent">{titleAccent}</span>
          )}
        </h2>
        <p className="cta-desc">{description}</p>
        <a href={buttonHref} className="cta-banner-button">
          <span>{buttonLabel}</span>
          <ArrowRight aria-hidden />
        </a>
      </div>
    </section>
  );
}
