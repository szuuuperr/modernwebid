import {
  CodeXml,
  Handshake,
  MessageCircle,
  MessagesSquare,
  Wallet,
} from "lucide-react";
import FlowCard from "./FlowCard";

const FLOW_STEPS = [
  {
    icon: MessageCircle,
    title: "Hubungi Kami",
    description: "Anda dapat menghubungi kami lewat Whatsapp",
  },
  {
    icon: MessagesSquare,
    title: "Konsultasi",
    description: "Anda dapat berkonsultasi terkait website yang anda inginkan",
  },
  {
    icon: CodeXml,
    title: "Pembuatan Demo",
    description: "Tim kami akan membuat demo website sesuai keinginan anda",
  },
  {
    icon: Wallet,
    title: "Pembayaran",
    description: "Setelah demo disetujui, anda dapat melakukan pembayaran",
  },
  {
    icon: Handshake,
    title: "Serah Terima",
    description: "Tim kami akan menyerahkan dan edukasi website",
  },
];

export default function FlowSection() {
  return (
    <section className="flow-section" id="flow">
      <div className="flow-title">
        <h2>Cara Mulai Bikin Website di</h2>
        <img src="/assets/logo-modernweb-dark.svg" alt="ModernWeb" />
      </div>
      <p className="flow-subtitle">
        Mulai bikin website dengan langkah yang mudah, mulai dari menghubungi
        kami yang tidak di pungut biaya hingga serah terima website.
      </p>
      <div className="flow-cards">
        {FLOW_STEPS.map((step) => (
          <FlowCard key={step.title} {...step} />
        ))}
      </div>
    </section>
  );
}
