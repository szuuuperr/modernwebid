import { Fragment } from "react";
import { ArrowUp } from "lucide-react";
import { WA_LINK_DEFAULT } from "@/lib/site";
import SolvingRow from "./SolvingRow";

const SOLUTIONS = [
  {
    title: "Desain Website Modern",
    description:
      "Kami merancang website dengan desain modern, responsif, dan sesuai branding bisnis anda. Setiap elemen dirancang dengan detail untuk menciptakan pengalaman terbaik.",
  },
  {
    title: "Jaminan Terima Beres",
    description:
      "Kami merancang website dengan desain modern, responsif, dan sesuai branding bisnis Anda. Setiap elemen dirancang dengan detail untuk menciptakan pengalaman terbaik.",
  },
  {
    title: "Optimasi Mesin Pencari",
    description:
      "Kami mengoptimalkan mesin pencari atau SEO agar website anda mudah ditemukan di Google. Dengan hal ini, website akan dikunjungi pelanggan yang tepat.",
  },
  {
    title: "Dukungan Penuh",
    description:
      "Setelah website live, kami tetap standby membantu anda. Mulai dari revisi konten, perbaikan teknis, hingga pengembangan fitur baru sesuai kebutuhan bisnis anda.",
  },
];

export default function SolvingSection() {
  return (
    <section className="solving-section" id="solving">
      <h2 className="solving-title">
        <span className="tenang">Tenang,</span>
        <span className="kami-bisa">Kami Bisa Bantu!</span>
      </h2>
      <div className="solving-container">
        {SOLUTIONS.map((solution) => (
          <Fragment key={solution.title}>
            <SolvingRow {...solution} />
            <div className="solving-divider"></div>
          </Fragment>
        ))}
        <div className="solving-cta-row">
          <div className="solving-icon"></div>
          <div className="solving-row-title">
            <h3>Gratis Konsultasi</h3>
          </div>
          <div className="solving-row-desc">
            <a href={WA_LINK_DEFAULT} className="solving-cta-button">
              <span>Hubungi Kami</span>
              <ArrowUp className="arrow-icon" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
