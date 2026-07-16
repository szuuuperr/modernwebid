"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";

// Form tanya-tanya soal desain yang sedang dilihat — padanan form komentar
// di detail blog (class .blog-comment yang sama). Website ini statis tanpa
// backend, jadi pesan dikirim sebagai chat WhatsApp via waLink().
export default function WebsiteAskSection({
  websiteTitle,
}: {
  websiteTitle: string;
}) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text =
      `Halo, saya ${name.trim()}. Saya lihat inspirasi "${websiteTitle}" ` +
      `dan ingin bertanya: ${message.trim()}`;
    window.open(waLink(text), "_blank", "noopener,noreferrer");
  }

  return (
    <section className="blog-comment" aria-label="Tanya soal desain ini">
      <h2 className="blog-comment-title">Tanya Soal Desain Ini</h2>
      <p className="blog-comment-subtitle">
        Penasaran biaya, lama pengerjaan, atau penyesuaian fiturnya? Tulis di
        sini, pesan Anda langsung masuk ke WhatsApp tim kami.
      </p>
      <form className="blog-comment-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="blog-comment-input"
          placeholder="Nama Anda"
          value={name}
          onChange={(event) => setName(event.target.value)}
          aria-label="Nama Anda"
          required
        />
        <textarea
          className="blog-comment-textarea"
          placeholder="Tulis pertanyaan Anda…"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          aria-label="Pertanyaan Anda"
          rows={5}
          required
        />
        <button type="submit" className="blog-comment-submit">
          <MessageCircle aria-hidden />
          Kirim via WhatsApp
        </button>
      </form>
    </section>
  );
}
