"use client";

import { useState } from "react";
import FaqItem from "./FaqItem";

const FAQS = [
  {
    question: "Website apa yang dapat dibuat?",
    answer:
      "Kami mendukung pembuatan website company profile atau personal atau landing page sesuai sesuai dengan keinginan Anda.",
  },
  {
    question: "Bagaimana jika website yang sudah jadi perlu diubah?",
    answer:
      "Pengubahan atau revisi website dapat dilakukan sesuai dengan paket yang diambil dan jika revisi melebihi batas, akan dikenakan biaya 20.000/halaman.",
  },
  {
    question: "Apa yang harus disiapkan sebelum membuat website?",
    answer:
      "Anda cukup siapkan Foto Produk/Jasa yang ditawarkan, Kontak lengkap (alamat, no tlp/wa, email, sosmed, dll), Profil singkat bisnis Anda, Logo, dan Gambar pendukung lainnya.",
  },
  {
    question: "Apakah logo website bisa dibuatkan?",
    answer:
      "Tidak, kami tidak menyediakan layanan pembuatan logo. Namun, Anda dapat menggunakan jasa desain grafis untuk membuat logo sesuai dengan kebutuhan bisnis Anda.",
  },
  {
    question: "website apa yang tidak dapat dibuat?",
    answer:
      "Kami tidak mendukung pembuatan website e-commerce, marketplace, atau website dengan payment gateway.",
  },
  {
    question:
      "Setelah website selesai dibuat, apakah akan muncul di halaman pertama google?",
    answer:
      "Kami tidak dapat menjamin website akan muncul di halaman pertama Google. Yang kami lakukan adalah mengoptimalkan SEO.",
  },
  {
    question: "Apakah hosting dan domain perlu diperpanjang?",
    answer:
      "Ya, setelah masa aktif habis (biasanya 1 tahun), hosting dan domain perlu diperpanjang agar website tetap aktif.",
  },
  {
    question: "Berapa biaya perpanjangan hosting dan domain?",
    answer:
      "Biaya perpanjangan tergantung jenis domain dan kebutuhan hosting, biasanya mulai dari ratusan ribu per tahun. Selengkapnya bisa hubungi kami.",
  },
];

export default function FaqSection() {
  // Hanya satu item yang terbuka pada satu waktu (sama seperti toggleFaq lama)
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="faq-section" id="faq">
      <h2 className="faq-title">Pertanyaan Yang Sering Diajukan</h2>
      <p className="faq-subtitle">
        Temukan jawaban dari pertanyaan umum seputar jasa pembuatan website
        untuk membantu Anda memahami bagaimana proses, fitur, dan layanan kami
        bekerja secara jelas dan mudah.
      </p>
      <div className="faq-grid">
        {FAQS.map((faq, index) => (
          <FaqItem
            key={faq.question}
            {...faq}
            isActive={activeIndex === index}
            onToggle={() =>
              setActiveIndex(activeIndex === index ? null : index)
            }
          />
        ))}
      </div>
    </section>
  );
}
