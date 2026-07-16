// lucide sudah tidak menyediakan icon brand (Instagram/Facebook),
// jadi dipakai padanan outlined terdekat: Camera & ThumbsUp.
import Link from "next/link";
import {
  Camera,
  Globe,
  Mail,
  MessageCircle,
  Share2,
  ThumbsUp,
} from "lucide-react";
import { EMAIL, INSTAGRAM_URL, WA_LINK_DEFAULT } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-top">
        <div className="footer-left">
          <div className="footer-logo">
            <img src="/assets/logo.svg" alt="ModernWeb" />
          </div>
          <p className="footer-desc">
            ModernWeb hadir untuk membantu digitalisasi bisnis-mu melalui
            website yang profesional, menarik, dan interaktif. Selain itu, Kami
            sadar kepuasan pelanggan adalah segalanya.
          </p>
          <div className="footer-socials">
            <a href={WA_LINK_DEFAULT} aria-label="WhatsApp">
              <MessageCircle aria-hidden />
            </a>
            <a href={INSTAGRAM_URL} aria-label="Instagram">
              <Camera aria-hidden />
            </a>
            <a href="#" aria-label="Facebook">
              <ThumbsUp aria-hidden />
            </a>
            <a
              href={`mailto:${EMAIL}?subject=${encodeURIComponent("Mau mulai bikin website! ")}`}
              aria-label="Email"
            >
              <Mail aria-hidden />
            </a>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-link-group">
            <p className="footer-link-title">Layanan</p>
            <a href="/#solving">Desain Website</a>
            <a href="/#seo">Optimasi SEO</a>
            <a href="/#price">Paket Harga</a>
            <a href="/#flow">Cara Pemesanan</a>
          </div>
          <div className="footer-link-group">
            <p className="footer-link-title">Perusahaan</p>
            <a href="/#hero">Beranda</a>
            <a href="/#inspiration">Inspirasi</a>
            <a href="/#faq">FAQ</a>
            <Link href="/blog">Blog</Link>
          </div>
          <div className="footer-link-group">
            <p className="footer-link-title">Hubungi Kami</p>
            <a href={WA_LINK_DEFAULT}>WhatsApp</a>
            <a href={INSTAGRAM_URL}>Instagram</a>
            <a href={`mailto:${EMAIL}`}>Email</a>
            <a href="#">Facebook</a>
          </div>
        </div>
      </div>
      <div className="footer-divider"></div>
      <div className="footer-bottom">
        <p className="footer-copyright">
          Copyright @2025 ModernWeb. All right reserved.
        </p>
        <div className="footer-bottom-icons">
          <Globe aria-label="Globe" />
          <Share2 aria-label="Share" />
        </div>
      </div>
    </footer>
  );
}
