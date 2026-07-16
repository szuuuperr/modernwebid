// Data showcase website (section Inspirasi di home + halaman detail /website/[slug]).
// Satu sumber untuk kartu, halaman detail, metadata, dan sitemap.

export type WebsiteShowcase = {
  slug: string;
  title: string;
  /** Kategori untuk filter di section Inspirasi */
  category: string;
  /** Ringkasan untuk kartu inspirasi & meta description halaman detail */
  description: string;
  image: string;
  alt: string;
  features: string[];
  /** Paragraf konten halaman detail */
  content: string[];
};

// Jumlah kartu per halaman di galeri /inspirasi (3 baris x 3 kolom).
// Pagination muncul otomatis saat hasil filter melebihi angka ini.
export const WEBSITES_PER_PAGE = 9;

export const WEBSITES: WebsiteShowcase[] = [
  {
    slug: "website-tsgroup-tour-travel",
    title: "Website TS Group Tour & Travel",
    category: "Company Profile",
    description:
      "Website company profile TS Group Tour & Travel yang memuat paket wisata Jogja, rental mobil, destinasi, galeri, dan kontak dalam satu tempat.",
    image: "/assets/website-tsgroup.webp",
    alt: "Tampilan website company profile TS Group Tour & Travel dengan hero wisata Jogja dan halaman daftar paket wisata",
    features: [
      "Katalog paket wisata dengan rincian harga dan destinasi",
      "Halaman rental mobil dan galeri destinasi",
      "Blog dan profil perusahaan",
      "Tombol pesan langsung ke WhatsApp di setiap paket",
      "Desain responsif desktop & mobile",
    ],
    content: [
      "TS Group adalah penyedia tour dan rental mobil di Yogyakarta yang sudah berjalan sejak 2010. Websitenya dibuat sebagai etalase lengkap: calon pelanggan bisa membandingkan paket wisata, melihat armada yang disewakan, dan menelusuri destinasi tanpa perlu bertanya satu per satu lewat chat.",
      "Setiap paket wisata tampil dengan harga, daftar destinasi, dan apa saja yang sudah termasuk seperti mobil, sopir, dan BBM. Semuanya diakhiri tombol pesan yang langsung mengarah ke WhatsApp, jadi pengunjung yang sudah yakin tidak perlu mencari kontak ke mana-mana. Ada juga galeri, blog, dan halaman profil untuk membangun kepercayaan sebelum orang memutuskan memesan.",
      "Website sebanyak ini kami kerjakan lewat Paket Business, yaitu paket dengan halaman tanpa batas, form booking online, CMS penuh supaya paket dan artikel bisa diperbarui sendiri, serta optimasi SEO di setiap halaman. Cocok untuk bisnis tour, travel, dan rental yang layanannya banyak dan sering berubah.",
    ],
  },
  {
    slug: "website-garis-tour-travel",
    title: "Website Garis Tour & Travel",
    category: "Company Profile",
    description:
      "Website company profile Garis Tour & Travel berisi layanan transportasi, paket wisata Short sampai Long, alur pemesanan, dan testimoni pelanggan.",
    image: "/assets/website-garis-transport.webp",
    alt: "Tampilan website company profile Garis Tour & Travel dengan hero sunset dan halaman harga paket wisata",
    features: [
      "Paket wisata Short, Medium, dan Long lengkap dengan harga",
      "Bagian keunggulan layanan dan daftar wisata populer",
      "Alur pemesanan tiga langkah",
      "Testimoni momen perjalanan pelanggan",
      "Tombol WhatsApp mengambang di semua halaman",
    ],
    content: [
      "Garis Tour & Travel menyediakan jasa transportasi dan perjalanan wisata. Websitenya sengaja dibuat ringkas dan langsung ke inti: pengunjung disambut hero perjalanan, lalu dibawa ke layanan, harga paket, dan cara memesan tanpa harus menjelajah banyak halaman.",
      "Tiga paket wisata yaitu Short, Medium, dan Long ditampilkan berdampingan lengkap dengan harga dan isi tiap paket, sehingga pengunjung bisa langsung membandingkan. Alur pemesanan dirangkum jadi tiga langkah sederhana, dan tombol WhatsApp yang mengambang membuat pengunjung bisa bertanya kapan saja tanpa kehilangan posisi bacaan.",
      "Website seperti ini kami kerjakan lewat Paket Startup, yaitu paket tiga halaman dengan desain esensial, integrasi WhatsApp, dan pengerjaan sekitar lima hari. Pilihan yang pas kalau layanan Anda sudah jelas dan yang dibutuhkan adalah tempat memajangnya secara rapi lalu mengarahkan orang ke chat.",
    ],
  },
  {
    slug: "website-crm-furniture",
    title: "Website CRM Furniture",
    category: "Sistem Manajemen",
    description:
      "Website CRM Furniture digunakan untuk mengelola produk mebel dan hubungan dengan pelanggan.",
    image: "/assets/website-crm-furniture.webp",
    alt: "Tampilan dashboard website CRM untuk mengelola produk mebel dan pelanggan",
    features: [
      "Manajemen katalog produk mebel",
      "Pencatatan data & riwayat pelanggan",
      "Pipeline penjualan dan follow-up otomatis",
      "Laporan penjualan dalam dashboard interaktif",
    ],
    content: [
      "Website CRM Furniture dirancang untuk pelaku bisnis mebel yang ingin mengelola produk dan hubungan pelanggan dalam satu tempat. Semua katalog produk, data pelanggan, dan riwayat transaksi tersimpan rapi dan mudah dicari.",
      "Dengan pipeline penjualan yang jelas, tim Anda tahu prospek mana yang perlu di-follow-up hari ini. Laporan penjualan tersaji dalam dashboard interaktif sehingga keputusan bisnis bisa diambil berdasarkan data, bukan perkiraan.",
      "Desain seperti ini cocok untuk bisnis furniture, interior, maupun distributor yang mengelola banyak produk dan pelanggan sekaligus.",
    ],
  },
  {
    slug: "website-inventaris",
    title: "Website Inventaris",
    category: "Sistem Manajemen",
    description:
      "Website Inventaris digunakan untuk mengelola stok material antara staff gudang, staff logistik, dan manager.",
    image: "/assets/website-inventaris-gudang.webp",
    alt: "Tampilan website inventaris untuk mengelola stok material gudang",
    features: [
      "Pencatatan stok masuk & keluar real-time",
      "Multi-role: staff gudang, logistik, dan manager",
      "Notifikasi stok menipis",
      "Riwayat pergerakan material yang bisa diaudit",
    ],
    content: [
      "Website Inventaris membantu perusahaan mengelola stok material lintas peran: staff gudang mencatat barang masuk dan keluar, staff logistik memantau pergerakan, dan manager melihat ringkasan stok secara real-time.",
      "Setiap pergerakan material tercatat dan bisa diaudit, sehingga selisih stok mudah ditelusuri. Notifikasi stok menipis memastikan pengadaan tidak terlambat.",
      "Cocok untuk pabrik, kontraktor, dan bisnis distribusi yang selama ini masih mencatat stok manual di spreadsheet.",
    ],
  },
  {
    slug: "website-ecommerce",
    title: "Website E-Commerce",
    category: "Toko Online",
    description:
      "Website E-Commerce digunakan untuk melakukan jual beli keperluan desktop.",
    image: "/assets/website-ecommerce-desktop.webp",
    alt: "Tampilan website e-commerce untuk jual beli keperluan desktop",
    features: [
      "Katalog produk dengan pencarian & filter",
      "Keranjang belanja dan checkout sederhana",
      "Halaman detail produk yang informatif",
      "Desain responsif desktop & mobile",
    ],
    content: [
      "Website E-Commerce ini menghadirkan pengalaman belanja keperluan desktop yang sederhana: pengunjung mencari produk lewat katalog dengan filter, melihat detail lengkap, lalu checkout tanpa langkah berbelit.",
      "Desain responsif memastikan tampilan tetap nyaman di desktop maupun mobile, dan struktur halamannya dioptimalkan agar produk mudah ditemukan mesin pencari.",
      "Catatan: ModernWeb tidak mengerjakan integrasi payment gateway. Desain seperti ini cocok untuk katalog produk dengan pemesanan via WhatsApp.",
    ],
  },
];

export function getWebsite(slug: string) {
  return WEBSITES.find((w) => w.slug === slug);
}

/** Daftar kategori unik untuk chip filter, diawali "Semua" */
export const WEBSITE_CATEGORIES = [
  "Semua",
  ...new Set(WEBSITES.map((w) => w.category)),
];

/** Kategori unik + jumlahnya (widget sidebar halaman detail website). */
export const WEBSITE_CATEGORY_COUNTS = Array.from(
  WEBSITES.reduce(
    (map, website) =>
      map.set(website.category, (map.get(website.category) ?? 0) + 1),
    new Map<string, number>(),
  ),
  ([name, count]) => ({ name, count }),
).sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));

/** Website tetangga berdasar urutan daftar (navigasi prev/next). */
export function getAdjacentWebsites(slug: string) {
  const index = WEBSITES.findIndex((website) => website.slug === slug);
  return {
    prev: index > 0 ? WEBSITES[index - 1] : undefined,
    next:
      index >= 0 && index < WEBSITES.length - 1
        ? WEBSITES[index + 1]
        : undefined,
  };
}
