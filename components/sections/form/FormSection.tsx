"use client";

import { useState, type FormEvent } from "react";
import {
  User,
  Mail,
  Phone,
  Building2,
  MapPin,
  Globe,
  Target,
  CalendarDays,
  CheckCircle,
  ClipboardList,
  Send,
} from "lucide-react";
import { waLink } from "@/lib/site";

/* ── Dropdown options ── */
const WEBSITE_STATUS_OPTIONS = [
  "Belum",
  "Sudah, ingin dibuat ulang",
  "Sudah, ingin diperbaiki",
];

const WEBSITE_PURPOSE_OPTIONS = [
  "Meningkatkan kredibilitas bisnis",
  "Mendapatkan lebih banyak pelanggan",
  "Menampilkan profil perusahaan (Company Profile)",
  "Menampilkan katalog produk atau jasa",
  "Memudahkan pelanggan menghubungi kami",
  "Meningkatkan penjualan",
  "Agar bisnis mudah ditemukan di Google (SEO)",
  "Menggantikan website lama",
  "Belum yakin, ingin konsultasi",
];

const WEBSITE_ESTIMATED_BUDGET = [
  "< Rp 2.000.000",
  "Rp 2.000.000 – Rp 3.500.000",
  "Rp 3.500.000 – Rp 5.500.000",
  "Belum Menentukan",
];

const WEBSITE_PAGE_OPTIONS = [
  "1–3 Halaman",
  "4–8 Halaman",
  "> 8 Halaman",
  "Belum Tahu",
];

/* ── Component ── */
export default function FormSection() {
  const [submitted, setSubmitted] = useState(false);

  /* form state */
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [telepon, setTelepon] = useState("");
  const [namaBisnis, setNamaBisnis] = useState("");
  const [alamatBisnis, setAlamatBisnis] = useState("");
  const [statusWebsite, setStatusWebsite] = useState("");
  const [tujuanWebsite, setTujuanWebsite] = useState("");
  const [estimasiBudget, setEstimasiBudget] = useState("");
  const [halamanWebsite, setHalamanWebsite] = useState("");
  const [catatan, setCatatan] = useState("");

  /* submit → WhatsApp */
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = [
      `Halo ModernWeb! Saya ingin konsultasi pembuatan website.`,
      ``,
      `--- DATA PRIBADI ---`,
      `Nama: ${nama}`,
      `Email: ${email}`,
      `No. HP: ${telepon}`,
      ``,
      `--- DATA BISNIS ---`,
      `Nama Bisnis: ${namaBisnis}`,
      `Alamat Bisnis: ${alamatBisnis}`,
      ``,
      `--- PERTANYAAN ---`,
      `Sudah punya website? ${statusWebsite}`,
      `Tujuan: ${tujuanWebsite}`,
      `Estimasi Budget: ${estimasiBudget}`,
      `Jumlah Halaman: ${halamanWebsite}`,
      `Catatan: ${catatan}`,
    ].join("\n");

    setSubmitted(true);

    setTimeout(() => {
      window.open(waLink(text), "_blank", "noopener");
    }, 600);
  };

  /* ── Success state ── */
  if (submitted) {
    return (
      <section className="form-section" id="form">
        <div className="form-container">
          <div className="form-success">
            <div className="form-success-icon">
              <CheckCircle />
            </div>
            <h2 className="form-success-title">Data Anda Berhasil Dikirim!</h2>
            <p className="form-success-desc">
              Terima kasih sudah mengisi formulir. Anda akan diarahkan ke
              WhatsApp untuk melanjutkan konsultasi gratis dengan tim kami.
            </p>
            <button
              className="form-btn form-btn-primary"
              onClick={() => {
                setSubmitted(false);
                setNama("");
                setEmail("");
                setTelepon("");
                setNamaBisnis("");
                setAlamatBisnis("");
                setStatusWebsite("");
                setTujuanWebsite("");
              }}
            >
              Isi Ulang Formulir
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="form-section" id="form">
      <div className="form-container">
        {/* ── Header ── */}
        <div className="form-header">
          <br />
          <h1 className="form-header-title">
            Form Mulai Bikin{" "}
            <span className="form-header-title-accent">Website</span>
          </h1>
          <p className="form-header-desc">
            Isi formulir di bawah ini, lalu lanjutkan konsultasi lewat WhatsApp.
            Tim kami akan membantu Anda memilih paket dan fitur yang tepat.
          </p>
        </div>

        {/* ── Form ── */}
        <form onSubmit={handleSubmit} className="form-body">
          {/* ── Data Pribadi ── */}
          <div className="form-fieldset">
            <div className="form-fields">
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="nama" className="form-label">
                    Nama Lengkap <span className="form-required">*</span>
                  </label>
                  <div className="form-input-wrapper">
                    <input
                      id="nama"
                      type="text"
                      className="form-input"
                      placeholder="Masukkan nama lengkap Anda"
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-row form-row-2col">
                <div className="form-field">
                  <label htmlFor="email" className="form-label">
                    Email <span className="form-required">*</span>
                  </label>
                  <div className="form-input-wrapper">
                    <input
                      id="email"
                      type="email"
                      className="form-input"
                      placeholder="nama@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="telepon" className="form-label">
                    No. Handphone <span className="form-required">*</span>
                  </label>
                  <div className="form-input-wrapper">
                    <input
                      id="telepon"
                      type="tel"
                      className="form-input"
                      placeholder="0858 xxxx xxxx"
                      value={telepon}
                      onChange={(e) => {
                        // Hanya izinkan angka dan simbol '+' di awal
                        const val = e.target.value.replace(/[^0-9+]/g, "");
                        setTelepon(val);
                      }}
                      pattern="[0-9+]+"
                      title="Hanya angka yang diperbolehkan"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Data Bisnis ── */}
          <div className="form-fieldset">
            <div className="form-fields">
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="namaBisnis" className="form-label">
                    Nama Bisnis <span className="form-required">*</span>
                  </label>
                  <div className="form-input-wrapper">
                    <input
                      id="namaBisnis"
                      type="text"
                      className="form-input"
                      placeholder="Contoh: CV Maju Bersama"
                      value={namaBisnis}
                      onChange={(e) => setNamaBisnis(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="alamatBisnis" className="form-label">
                    Alamat Bisnis <span className="form-required">*</span>
                  </label>
                  <div className="form-input-wrapper form-input-wrapper-textarea">
                    <textarea
                      id="alamatBisnis"
                      className="form-input form-textarea"
                      placeholder="Jl. Contoh No. 123, Kota, Provinsi"
                      value={alamatBisnis}
                      onChange={(e) => setAlamatBisnis(e.target.value)}
                      required
                      rows={3}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Pertanyaan ── */}
          <div className="form-fieldset">
            <div className="form-fields">
              <div className="form-row form-row-2col">
                <div className="form-field">
                  <label htmlFor="statusWebsite" className="form-label">
                    Sudah punya website?{" "}
                    <span className="form-required">*</span>
                  </label>
                  <div className="form-input-wrapper">
                    <select
                      id="statusWebsite"
                      className={`form-input form-select ${statusWebsite === "" ? "form-select-placeholder" : ""}`}
                      value={statusWebsite}
                      onChange={(e) => setStatusWebsite(e.target.value)}
                      required
                    >
                      <option value="" disabled>
                        Pilih salah satu
                      </option>
                      {WEBSITE_STATUS_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="tujuanWebsite" className="form-label">
                    Tujuan membuat website?{" "}
                    <span className="form-required">*</span>
                  </label>
                  <div className="form-input-wrapper">
                    <select
                      id="tujuanWebsite"
                      className={`form-input form-select ${tujuanWebsite === "" ? "form-select-placeholder" : ""}`}
                      value={tujuanWebsite}
                      onChange={(e) => setTujuanWebsite(e.target.value)}
                      required
                    >
                      <option value="" disabled>
                        Pilih tujuan
                      </option>
                      {WEBSITE_PURPOSE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-row form-row-2col">
                <div className="form-field">
                  <label htmlFor="estimasiBudget" className="form-label">
                    Estimasi Budget? <span className="form-required">*</span>
                  </label>
                  <div className="form-input-wrapper">
                    <select
                      id="estimasiBudget"
                      className={`form-input form-select ${estimasiBudget === "" ? "form-select-placeholder" : ""}`}
                      value={estimasiBudget}
                      onChange={(e) => setEstimasiBudget(e.target.value)}
                      required
                    >
                      <option value="" disabled>
                        Pilih Estimasi
                      </option>
                      {WEBSITE_ESTIMATED_BUDGET.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="halamanWebsite" className="form-label">
                    Jumlah halaman website?{" "}
                    <span className="form-required">*</span>
                  </label>
                  <div className="form-input-wrapper">
                    <select
                      id="halamanWebsite"
                      className={`form-input form-select ${halamanWebsite === "" ? "form-select-placeholder" : ""}`}
                      value={halamanWebsite}
                      onChange={(e) => setHalamanWebsite(e.target.value)}
                      required
                    >
                      <option value="" disabled>
                        Pilih jumlah halaman
                      </option>
                      {WEBSITE_PAGE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="catatan" className="form-label">
                    Catatan
                  </label>
                  <div className="form-input-wrapper form-input-wrapper-textarea">
                    <textarea
                      id="catatan"
                      className="form-input form-textarea"
                      placeholder="Ketik catatan yang ingin disampaikan"
                      value={catatan}
                      onChange={(e) => setCatatan(e.target.value)}
                      required
                      rows={3}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Submit ── */}
          <div className="form-nav">
            <div className="form-nav-spacer" />
            <button type="submit" className="form-btn form-btn-submit">
              <Send />
              Kirim via WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
