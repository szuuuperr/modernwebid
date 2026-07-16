"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";

// Form komentar/pertanyaan artikel. Website ini statis tanpa backend, jadi
// mengikuti konvensi project semua interaksi diarahkan ke WhatsApp via
// waLink() — komentar dikirim sebagai chat lengkap dengan judul artikelnya.
export default function BlogCommentSection({
  postTitle,
}: {
  postTitle: string;
}) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text =
      `Halo, saya ${name.trim()}. Saya baru membaca artikel "${postTitle}" ` +
      `dan ingin menyampaikan: ${message.trim()}`;
    window.open(waLink(text), "_blank", "noopener,noreferrer");
  }

  return (
    <section className="blog-comment" aria-label="Tinggalkan komentar">
      <h2 className="blog-comment-title">Tinggalkan Komentar</h2>
      <p className="blog-comment-subtitle">
        Punya pertanyaan atau tanggapan soal artikel ini? Tulis di sini,
        pesan Anda langsung masuk ke WhatsApp tim kami.
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
          placeholder="Tulis komentar atau pertanyaan Anda…"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          aria-label="Komentar atau pertanyaan"
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
