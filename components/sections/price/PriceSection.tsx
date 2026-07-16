import PriceCard, { type PricePlan } from "./PriceCard";

const PLANS: PricePlan[] = [
  {
    name: "Paket Startup",
    description:
      "Cocok untuk personal, UMKM, atau bisnis baru yang ingin memiliki website sederhana.",
    currentPrice: "Rp 1.499.000",
    oldPrice: "Rp 1.998.000",
    discount: "Diskon 25%",
    features: [
      { label: "3 Halaman Web", included: true },
      { label: "5 Hari Pengerjaan", included: true },
      { label: "Desain Esensial", included: true },
      { label: "Responsive Desktop & Mobile", included: true },
      { label: "Esensial SEO 3 Halaman", included: true },
      { label: "Revisi 1 Kali", included: true },
      { label: "Maintenence 1 Minggu", included: true },
      { label: "Free Hosting & Domain", included: true },
      { label: "Integrasi WhatsApp/Sosial Media", included: true },
      { label: "Add-on: CMS (+Rp 400rb)", included: false },
      { label: "Add-on: Keamanan & Performa (+Rp 300rb)", included: false },
    ],
  },
  {
    name: "Paket Pro",
    description:
      "Cocok untuk bisnis yang sedang berkembang dan butuh website custom dengan fitur lebih lengkap.",
    currentPrice: "Rp 2.489.000",
    oldPrice: "Rp 3.319.000",
    discount: "Diskon 25%",
    recommended: true,
    features: [
      { label: "8 Halaman Web", included: true },
      { label: "10 Hari Pengerjaan", included: true },
      { label: "Desain Custom", included: true },
      { label: "Responsive Desktop & Mobile", included: true },
      { label: "Optimasi SEO 8 Halaman", included: true },
      { label: "Revisi 2 Kali", included: true },
      { label: "Maintenence 3 Minggu", included: true },
      { label: "Free Hosting & Domain", included: true },
      { label: "Integrasi WhatsApp/Sosial Media", included: true },
      { label: "Esensial CMS (Kelola Web Sendiri)", included: true },
      { label: "Esensial Keamanan & Performa", included: true },
    ],
  },
  {
    name: "Paket Business",
    description:
      "Cocok untuk perusahaan yang butuh website skala besar dengan performa dan keamanan maksimal.",
    currentPrice: "Rp 4.980.000",
    oldPrice: "Rp 6.640.000",
    discount: "Diskon 25%",
    features: [
      { label: "Unlimited Halaman Web", included: true },
      { label: "15 Hari Pengerjaan", included: true },
      { label: "Desain Premium + Multi-bahasa (ID/EN)", included: true },
      { label: "Responsive Dekstop & Mobile", included: true },
      { label: "Optimasi SEO Setiap Halaman", included: true },
      { label: "Revisi 3 kali", included: true },
      { label: "Maintenance 2 Bulan + Prioritas Support", included: true },
      { label: "Free Hosting & Domain", included: true },
      { label: "Integrasi WhatsApp/Sosial Media", included: true },
      { label: "Form Booking Online", included: true },
      { label: "Full CMS (Kelola Web Sendiri)", included: true },
      { label: "Advanced Keamanan & Performa", included: true },
    ],
  },
];

export default function PriceSection() {
  return (
    <section className="price-section" id="price">
      <h2 className="price-title">Paket Harga Jasa Bikin Website</h2>
      <p className="price-subtitle">
        Pilih paket yang paling sesuai dengan kebutuhan dan anggaran bisnis
        Anda. Semua paket sudah termasuk hosting, domain, dan desain yang
        responsif.
      </p>
      <div className="price-cards">
        {PLANS.map((plan) => (
          <PriceCard key={plan.name} plan={plan} />
        ))}
      </div>
    </section>
  );
}
