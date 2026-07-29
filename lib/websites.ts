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
    slug: "website-tsgroup",
    title: "TS Group Tour & Travel",
    category: "Tour and Travel",
    description:
      "Company profile TS Group Tour & Travel Jogja: enam paket wisata beserta harganya, katalog armada 4 sampai 15 penumpang, dan pemesanan lewat WhatsApp.",
    image: "/assets/website-tsgroup.webp",
    alt: "Tampilan halaman depan website company profile TS Group Tour & Travel Jogja dengan daftar paket wisata dan armada",
    features: [
      "Enam paket wisata lengkap dengan kisaran harga",
      "Katalog armada 4 sampai 15 penumpang",
      "Ulasan Google dan galeri foto perjalanan",
      "Rubrik Panduan Wisata untuk konten berkala",
      "Tombol pesan langsung ke WhatsApp",
    ],
    content: [
      "TS Group sudah mengantar wisatawan keliling Jogja sejak 2010. Masalahnya, calon penumpang tetap menanyakan hal yang sama lewat chat: paketnya apa saja, mobilnya muat berapa orang, dan biayanya berapa. Website ini dibuat untuk menjawab ketiganya sebelum orang sempat mengetik pesan.",
      "Begitu halaman terbuka, pengunjung langsung bertemu enam paket populer, dari Borobudur Sunrise, Lava Tour Merapi, pantai Gunungkidul, sampai Prambanan Sunset, semuanya dengan kisaran harga. Di bawahnya ada daftar armada mulai Calya sampai Hiace beserta kapasitas penumpangnya, jadi rombongan bisa mencocokkan sendiri kendaraan yang pas.",
      "Kepercayaan dibangun lewat bukti, bukan klaim di hero: ada blok ulasan Google 4,8 dari 128 penilaian dan galeri foto perjalanan asli. Rubrik Panduan Wisata melengkapinya dengan konten yang membuat website ini punya alasan untuk dikunjungi ulang sekaligus terbaca mesin pencari.",
      "Semua tombol pesan berujung ke WhatsApp, jadi tidak ada payment gateway yang perlu diurus dan pemilik tetap memegang percakapannya sendiri. Pola seperti ini cocok untuk rental mobil, jasa wisata, atau usaha jasa lain yang closing-nya memang terjadi di chat.",
    ],
  },
  {
    slug: "website-garis-transport",
    title: "Garis Tour & Travel",
    category: "Tour and Travel",
    description:
      "Company profile Garis Tour & Travel Jogja: paket wisata tiga tingkatan, destinasi populer, alur pemesanan tiga langkah, testimoni, dan form kontak.",
    image: "/assets/website-garis-transport.webp",
    alt: "Tampilan website company profile Garis Tour & Travel Jogja dengan paket wisata dan destinasi populer",
    features: [
      "Paket wisata tiga tingkatan dengan harga per kendaraan",
      "Bagian destinasi populer di sekitar Jogja",
      "Alur pemesanan tiga langkah",
      "Galeri foto pelanggan dan testimoni",
      "Form kontak dan langganan email promo",
    ],
    content: [
      "Banyak calon penumpang urung bertanya bukan karena harganya mahal, tapi karena mereka tidak tahu harus mulai dari mana. Website Garis Tour & Travel disusun untuk menghapus keraguan itu, dengan menaruh tiga hal di depan: siapa yang mengantar, kendaraan apa yang dipakai, dan berapa biayanya.",
      "Paketnya sengaja dibagi tiga tingkatan saja, yaitu Short, Medium, dan Long, dengan harga per kendaraan mulai Rp 450.000. Pembagian sesederhana ini membuat pengunjung tidak perlu membandingkan belasan pilihan, cukup pilih durasi perjalanan yang paling dekat dengan rencananya.",
      "Setelah daftar paket, halaman turun ke destinasi populer, alur pemesanan tiga langkah, galeri foto pelanggan, lalu testimoni. Urutannya bergerak dari pertanyaan 'apa yang saya dapat' menuju 'bagaimana cara memesan', sehingga pengunjung sampai ke form kontak dalam keadaan sudah yakin.",
      "Bentuk seperti ini pas untuk penyedia transportasi wisata yang layanannya sebenarnya sudah rapi, tapi selama ini hanya terlihat lewat unggahan Instagram yang cepat tenggelam.",
    ],
  },
  {
    slug: "website-bestpack-tour-travel",
    title: "Bestpack Tour & Travel",
    category: "Tour and Travel",
    description:
      "Company profile Bestpack Tour & Travel dengan pencarian paket, trip domestik dan luar negeri beserta harganya, galeri, serta FAQ pemesanan.",
    image: "/assets/website-bestpack-tour-travel.webp",
    alt: "Tampilan website company profile Bestpack Tour & Travel dengan pencarian paket wisata domestik dan internasional",
    features: [
      "Pencarian paket dan pilihan destinasi",
      "Paket domestik dan internasional lengkap dengan harga",
      "Penjelasan empat layanan, dari open trip sampai travel consultant",
      "Galeri carousel dan blok FAQ pemesanan",
      "Tombol WhatsApp, Instagram, dan TikTok",
    ],
    content: [
      "Bestpack menjual dua hal yang jauh berbeda di satu halaman yang sama: trip akhir pekan ke Pulau Pari seharga ratusan ribu, dan tur Korea Selatan yang belasan juta. Tantangannya jelas, bagaimana keduanya bisa dipajang bersebelahan tanpa membuat pengunjung merasa salah alamat.",
      "Jalan keluarnya ada di pemisahan paket domestik dan internasional, ditambah pencarian paket dan pilihan destinasi di bagian atas halaman. Pengunjung yang sudah tahu tujuannya bisa langsung menyaring, sementara yang masih mencari ide tinggal scroll daftar paket beserta harga mulainya.",
      "Empat layanan utama, yaitu open trip, private trip, tour organizer, dan travel consultant, dijelaskan di bagian tersendiri supaya orang paham Bestpack tidak hanya menjual paket jadi. Di bawahnya ada galeri carousel dan blok FAQ yang menjawab pertanyaan yang paling sering masuk: cara memesan, sistem pembayaran, apa saja yang sudah termasuk, dan bantuan pengurusan dokumen.",
      "Memindahkan jawaban itu ke halaman berarti chat yang isinya berulang jauh berkurang, dan admin bisa fokus pada calon peserta yang memang siap berangkat. Pemesanannya sendiri tetap berlanjut lewat WhatsApp, Instagram, atau TikTok yang tertaut di beberapa titik halaman.",
    ],
  },
  {
    slug: "website-halwa-transport",
    title: "Halwa Transport",
    category: "Tour and Travel",
    description:
      "Company profile Halwa Transport Jogja: 15 paket wisata mulai Rp 600.000, katalog sewa mobil tiga kategori dengan harga harian, dan layanan jemput bandara.",
    image: "/assets/website-halwa-transport.webp",
    alt: "Tampilan website company profile Halwa Transport Jogja dengan paket wisata dan katalog sewa mobil",
    features: [
      "15 paket wisata dengan harga mulai Rp 600.000",
      "Katalog sewa mobil tiga kategori: ekonomis, VIP, rombongan",
      "Layanan jemput bandara YIA dan Adisutjipto",
      "Destinasi dikelompokkan per suasana: pantai, candi, perbukitan, budaya, kuliner",
      "FAQ yang bisa dibuka tutup dan tombol WhatsApp di tiap paket",
    ],
    content: [
      "Orang yang baru mendarat di YIA biasanya butuh dua hal sekaligus, yaitu kendaraan dan rencana jalan. Halwa Transport melayani keduanya, jadi website-nya harus bisa menampung dua jenis pengunjung tanpa yang satu menutupi yang lain.",
      "Karena itu paket wisata dan sewa kendaraan dipisah menjadi dua katalog. Ada 15 paket mulai Rp 600.000 yang sudah termasuk BBM dan driver, lalu katalog kendaraan yang dibagi tiga kategori: ekonomis seperti Agya dan Avanza, VIP seperti Innova sampai Alphard, dan rombongan untuk Hiace serta Elf. Semuanya dipasangi harga harian, jadi calon penyewa tidak perlu bertanya dulu untuk tahu perkiraan biaya.",
      "Bagian destinasi tidak disusun menurut nama tempat, melainkan menurut suasana yang dicari orang, mulai pantai, candi, perbukitan, budaya, sampai kuliner. Cara ini menolong pengunjung yang belum punya tujuan pasti, sekaligus memberi halaman ini isi yang bisa ditemukan lewat pencarian.",
      "Sisa keraguan diserahkan ke blok FAQ yang bisa dibuka tutup, soal lepas kunci, area penjemputan, dan durasi sewa. Setelah itu satu tombol WhatsApp sudah cukup, karena pengunjung sampai di sana dalam keadaan sudah tahu mau memesan yang mana.",
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
