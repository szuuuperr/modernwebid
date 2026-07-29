import { CodeXml } from "lucide-react";
import { WA_LINK_DEFAULT } from "@/lib/site";

export default function HeroSection() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-card">
        <CodeXml aria-hidden />
        <p>Jasa Bikin Website Company Profile No.1</p>
      </div>
      {/* h1 pertama & satu-satunya di halaman — sumber utama title link Google */}
      <h1 className="hero-title">
        <span className="digitalisasi">Digitalisasi </span>
        <span className="bisnis-mu"> Bisnis-Mu </span>
        <br />
        <span className="elegan">Dengan Cara Elegan.</span>
      </h1>
      <div className="hero-description">
        <p>
          ModernWeb hadir untuk membantu digitalisasi bisnis-mu melalui website
          yang profesional, menarik, dan interaktif. Selain itu, Kami sadar
          kepuasan pelanggan adalah segalanya.
        </p>
      </div>
      <a href={WA_LINK_DEFAULT} className="hero-button">
        <span>Mulai Bikin Web</span>
      </a>
    </section>
  );
}
