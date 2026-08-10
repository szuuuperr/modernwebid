<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# ModernWeb — Next.js

Landing page jasa pembuatan website **ModernWeb**, hasil migrasi dari project native
HTML di `C:\project\modernweb`. Next.js 16 (App Router, Turbopack) + TypeScript +
Tailwind 4. Konten berbahasa Indonesia.

## Arsitektur (WAJIB diikuti)

Website dibangun **per section**. Jika sebuah section punya elemen berulang,
buat sub-component dulu, satukan ke dalam section, lalu section disusun di
`app/(site)/page.tsx` yang dibungkus `app/(site)/layout.tsx`.

```
app/
├── layout.tsx        # Root minimal: Poppins (next/font), metadata, grid-bg, {children}
│                     # — chrome & providers ada di route group (site)
├── (site)/           # Route group halaman situs utama (URL sama, tanpa awalan):
│   ├── layout.tsx    #   page-wrapper, FabButton + Navbar + {children} + Footer,
│   │                 #   ScrollProgress + Lenis/MicroInteractions/ScrollReveal
│   ├── page.tsx      #   Hanya menyusun section secara berurutan
│   ├── blog/ ...     #   /blog & /blog/[slug]
│   ├── website/ ...  #   /website/[slug]
│   ├── inspirasi/    #   /inspirasi
│   └── form/         #   /form
├── q/[code]/         # Halaman redirect QR (di LUAR group (site), jadi polos tanpa
│                     # navbar/footer): pintu menuju link bisnis (Google Review, WA,
│                     # IG, Website), data di lib/qr-links.ts, kode tak dikenal → 404
├── sitemap.ts        # Sitemap semua halaman + image sitemap
└── globals.css       # Tailwind + SELURUH styling (tokens :root, @theme, section styles)
components/
├── layout/           # Navbar (client), Footer, FabButton, ScrollProgress (client)
├── providers/        # LenisProvider (smooth scroll), ScrollReveal (animasi .in-view),
│                     # MicroInteractions (cursor/magnetic/tilt/ripple/parallax)
└── sections/<nama>/  # <Nama>Section.tsx + sub-component (mis. price/PriceCard.tsx)
    └── cta/          # CtaSection — banner CTA reusable rata tengah (props: badge,
                      # title, titleAccent, description, buttonLabel/Href) dipakai
                      # di home, /blog, /inspirasi — lihat DESIGN.md
lib/site.ts           # Kontak & helper waLink() — semua CTA WhatsApp lewat sini
lib/qr-links.ts       # Data halaman /q/[code]: nama bisnis + 4 link (Google Review,
                      # WA, IG, Website) per kode QR — edit di sini untuk mengubah target
public/assets/        # SVG ikon/logo + webp (path absolut /assets/...)
```

## Konvensi

- **Copywriting:** semua teks yang dilihat pengunjung (judul, deskripsi, konten
  section, artikel, metadata/SEO) ditulis dengan bahasa Indonesia yang natural,
  mengalir seperti orang menjelaskan ke temannya. JANGAN pakai em dash (—) di
  copywriting: pecah jadi kalimat sendiri, atau pakai koma, titik dua, atau kata
  sambung (seperti "yaitu", "misalnya"). Pemisah `|` di `<title>` tetap boleh.
  Sapaan pembaca **selalu "Anda"**, jangan "kamu" (konsisten di seluruh situs).
  Untuk artikel blog ada aturan tambahan yang lebih ketat — lihat section
  "Copywriting Blog" di bawah.
- **Styling:** class CSS lama dipertahankan apa adanya di `globals.css`
  (`.hero-*`, `.price-*`, dst) agar pixel-perfect dengan versi HTML. Token desain
  di `:root` + pemetaan `@theme` — lihat `DESIGN.md`. Untuk elemen baru boleh pakai
  utility Tailwind dari token tersebut; jangan hardcode warna/ukuran.
- **Server vs client:** section default-nya Server Component. `"use client"` hanya
  untuk yang butuh interaksi: `Navbar`, `FaqSection`/`FaqItem`, `SeoScene`,
  `ScrollProgress`, `CountUp`, dan para provider (`LenisProvider`,
  `ScrollReveal`, `MicroInteractions`).
- **Micro-interaction global** dikelola terpusat di
  `components/providers/MicroInteractions.tsx` (liquid cursor, magnetic button,
  3D tilt kartu, ripple, mouse parallax). Menambah target cukup tambahkan
  selector ke daftar konstanta di file itu; jangan bikin listener pointer
  terpisah per komponen. Semua efek wajib transform/opacity-only dan otomatis
  mati saat `prefers-reduced-motion` / pointer kasar (touch).
- **Reveal on scroll:** elemen baru yang butuh animasi masuk harus ditambahkan ke
  daftar selector di `components/providers/ScrollReveal.tsx` DAN blok CSS `.in-view`
  di `globals.css` (dua-duanya, tidak cukup salah satu). ⚠️ Ini hanya untuk elemen
  ber-className statis yang selalu ter-mount — kalau className-nya dinamis atau
  elemennya bisa mount/unmount (filter, toggle), React akan menimpa/kehilangan
  class `in-view` dan elemen "menghilang". Elemen seperti itu pakai hook
  `useInView` dari `lib/use-in-view.ts` (contoh: `FaqItem`, `InspirationCard`,
  `InspirationFilter`) — tetap tambahkan selector-nya ke blok CSS reveal
  `.in-view` DAN blok `prefers-reduced-motion` di `globals.css`.
- **Icon:** SELALU pakai `lucide-react` (outlined, seragam) — jangan tambah icon SVG
  ke `public/assets` lagi. Asset hanya untuk logo brand & foto. Selector CSS icon
  memakai `:is(img, svg)` dan warna svg mengikuti `currentColor` (ada override warna
  eksplisit di `globals.css` untuk flow/solving/price/fab). Catatan: lucide tidak punya
  icon brand — WhatsApp = `MessageCircle`, Instagram = `Camera`, Facebook = `ThumbsUp`.
- **CTA WhatsApp:** selalu lewat `waLink(text)` / `WA_LINK_DEFAULT` dari `lib/site.ts`.
- **Link antar halaman:** anchor ke section home ditulis `/#id` (bukan `#id`) agar
  berfungsi dari halaman mana pun; `LenisProvider` men-smooth-scroll-nya saat sudah
  di home. Link halaman lain pakai `next/link`. `ScrollReveal` re-observe otomatis
  saat pathname/searchParams berubah (butuh `Suspense` di layout — jangan dihapus).
- **Konten section** ditulis sebagai array data konstan di file section
  (mis. `PLANS`, `FAQS`, `FLOW_STEPS`) — edit data, bukan markup, untuk mengubah isi.
  Konten yang dipakai lebih dari satu tempat (kartu + halaman detail + sitemap)
  ditaruh di `lib/` (`lib/websites.ts`, `lib/blog.ts`).
- **Halaman dinamis** (`blog/[slug]`, `website/[slug]`): `params` adalah Promise —
  wajib `await params`. Pakai `generateStaticParams` + `dynamicParams = false`
  (slug tak dikenal → 404), `generateMetadata` per slug mengikuti aturan SEO di
  bawah, dan daftarkan halaman baru di `app/sitemap.ts` (otomatis kalau datanya
  dari `lib/`). Konten baru = tambah entri data di `lib/`, bukan buat file page baru.
- **Gambar:** masih memakai `<img>` biasa (bukan `next/image`) supaya ukuran tetap
  dikontrol CSS lama. Kalau mau optimasi gambar, migrasikan per-komponen dengan sadar.

## Copywriting Blog (WAJIB dibaca sebelum menulis/mengedit `lib/blog.ts`)

Disusun dari pembedahan blog jasa website & hosting berbahasa Indonesia yang
beneran ([Jagoan Hosting](https://www.jagoanhosting.com/blog/jasa-pembuatan-website-company-profille/)
~2.200 kata, [IDwebhost](https://idwebhost.com/blog/jasa-pembuatan-website-untuk-umkm/)
~1.300 kata, [Terasweb](https://terasweb.id/cara-memilih-jasa-pembuatan-website-untuk-umkm/)
~950 kata). Ketiganya panjang, membuka dari masalah pembaca, dan menjelaskan
lewat analogi + contoh konkret. **Artikel yang cuma menyatakan ulang judulnya
dalam 3 paragraf tidak lolos review.**

### Panjang & struktur

- **800-1.200 kata per artikel.** Di bawah 600 kata artikelnya belum menjawab
  apa pun. Ini standar minimum, bukan target yang perlu dipaksakan dengan
  basa-basi: kalau topiknya habis di 800 kata, berhenti.
- **4-7 `h2`**, tiap `h2` diisi 2-4 paragraf. Satu paragraf 2-4 kalimat, jangan
  paragraf satu kalimat yang berbaris (itu yang bikin terasa seperti robot).
- Pakai `h3` untuk memecah `h2` yang panjang (mis. 5 poin di dalam satu bagian).
- **Wajib ada minimal satu blok `list`** — checklist, langkah, atau perbandingan.
  Ini yang bikin artikel bisa di-scan. `ordered: true` untuk langkah berurutan.
- **Tutup dengan blok `faq`** berisi 3-4 pertanyaan yang benar-benar sering
  ditanya calon klien (soal harga, lama pengerjaan, siapa yang mengurus setelah
  jadi). Jawab singkat dan konkret, jangan mengulang isi artikel.
- Blok `quote` maksimal satu per artikel, untuk kalimat inti yang layak diingat.
  Bukan tempat menaruh basa-basi motivasi.

### Cara membuka (paling menentukan)

Buka dari **situasi nyata pembaca**, bukan definisi. Pembaca datang karena punya
masalah, bukan karena ingin tahu arti sebuah istilah.

- ❌ "Website adalah kumpulan halaman yang dapat diakses melalui internet."
- ❌ "Desain website berubah cepat, tapi tidak semua tren layak diikuti."
  (benar, tapi kosong: ini kalimat pengisi, bukan pengait)
- ✅ "Anda sudah punya website, tampilannya rapi, tapi tiga bulan berjalan belum
  ada satu pun pesan masuk dari situ. Masalahnya sering bukan di desain."

Dua paragraf pertama harus memuat: masalah yang pembaca kenali, dan janji
konkret apa yang akan dia dapat setelah membaca sampai habis.

### Nada & sudut pandang

- **Sapaan "Anda"**, konsisten. Sumber rujukan di atas pakai "kamu", **jangan
  ikut** — situs ini sudah punya suaranya sendiri.
- Santai tapi tidak cengengesan. Boleh: "Tenang, ini tidak serumit kelihatannya."
  Jangan: "gak", "nih", "sat set", emoji, atau tanda seru bertumpuk.
- **Wajib pakai analogi** untuk hal teknis. Ini yang paling hilang dari tulisan
  robot. Domain itu alamat rumah, hosting itu tanah dan bangunannya, SEO itu
  papan penunjuk jalan menuju toko Anda.
- Tulis angka spesifik, bukan klaim kabur. "Pengerjaan 5 hari, mulai Rp 1.499.000"
  jauh lebih dipercaya daripada "harga terjangkau, proses cepat". Angka paket
  harus cocok dengan `PLANS` di `components/sections/price/PriceSection.tsx`.
- Akui hal yang tidak kita kerjakan kalau relevan (mis. payment gateway). Jujur
  soal batasan justru menaikkan kepercayaan.

### Istilah teknis: pakai bahasa Inggris yang memang dipakai orang

Bahasa Indonesia yang natural **bukan berarti semua istilah diterjemahkan**.
Banyak istilah web sehari-harinya memang diucapkan dalam bahasa Inggris, dan
memaksakan padanan Indonesia justru membuat tulisan terdengar kaku dan asing
(inilah salah satu sumber kesan "robot"). Patokannya: **kalau orang yang
sehari-hari bekerja di bidang ini mengucapkannya dalam bahasa Inggris, tulis
bahasa Inggris.**

| Tulis begini ✅ | Jangan begini ❌ |
| --- | --- |
| scroll | gulir |
| whitespace | jarak antar elemen yang lega |
| loading | waktu muat |
| bounce rate | angka orang yang langsung menutup halaman |
| mobile friendly | nyaman dibuka di ponsel |
| heading, subheading, body text | judul, sub-judul, teks isi |
| opacity | transparansi |
| reduced motion | pengaturan hemat animasi |
| splash screen, scroll hijacking | animasi pembuka, scroll yang dibajak |
| landing page, company profile | halaman pendaratan, profil perusahaan |
| hosting, domain, plugin, cache | inang, ranah, pengaya, singgahan |

Sebaliknya, kata yang **sudah punya padanan Indonesia yang lazim** tetap ditulis
Indonesia: unduh, unggah, pengunjung, halaman, tautan, gambar, tombol, ponsel.
Jangan pamer istilah Inggris untuk hal yang biasa diucapkan Indonesia.

Aturan tambahan:

- **Jelaskan sekali saat pertama muncul**, dengan koma atau "yaitu", lalu pakai
  bebas setelahnya: "menaikkan bounce rate, yaitu persentase orang yang pergi
  tanpa membuka halaman lain". Pembaca kita pemilik UMKM, bukan developer.
- Istilah Inggris ditulis apa adanya, **tanpa huruf miring dan tanpa tanda
  kutip**. Ini istilah biasa, bukan kutipan asing.
- Kalau dipakai sebagai kata kerja berimbuhan, sambungkan dengan tanda hubung:
  "di-scroll", "loading-nya", "di-index".
- Jangan campur dua istilah untuk hal yang sama dalam satu artikel (pilih
  "loading" atau "kecepatan muat", jangan gonta-ganti).

### Bermanfaat dulu, jualan belakangan

Artikel harus tetap berguna bagi pembaca yang **tidak jadi membeli**. Ukurannya:
kalau seluruh promosi ModernWeb dihapus, sisanya masih layak dibaca? Kalau tidak,
artikelnya belum selesai.

- Isi 80% edukasi yang bisa langsung dipraktikkan sendiri pembaca, 20% promosi.
- **Satu CTA saja, di paragraf penutup.** Jangan menyelipkan ajakan WhatsApp di
  tengah-tengah tiap bagian.
- CTA ditulis sebagai kelanjutan wajar dari isi artikel, bukan tempelan. Kalau
  artikelnya soal checklist sebelum live, CTA-nya menawarkan bantuan mengecek,
  bukan "hubungi kami sekarang juga!".
- Jangan menakut-nakuti supaya orang beli.

### Yang bikin tulisan terasa robot (hindari)

- Paragraf yang cuma menyatakan ulang heading di atasnya dengan kata lain.
- Kalimat generik tanpa isi: "sangat penting di era digital ini", "solusi tepat
  untuk bisnis Anda", "tidak dapat dipungkiri".
- Semua paragraf sama panjang dan sama ritmenya. Variasikan.
- Menjelaskan istilah teknis dengan istilah teknis lain.
- Daftar poin tanpa penjelasan, sekadar menyebut nama tanpa "kenapa"-nya.

### SEO artikel

- `title` dan `description` mengikuti aturan di section SEO di bawah. `description`
  merangkum isi spesifik artikel, bukan mengulang judul.
- Kata kunci utama muncul wajar di judul, paragraf pembuka, dan satu-dua `h2`.
  Jangan lebih. Pengulangan paksa terbaca sebagai keyword stuffing.
- Sebutkan halaman lain situs ini saat relevan (paket harga, inspirasi, artikel
  lain) supaya pembaca punya langkah berikutnya.

## SEO: Title Link & Snippet (ringkasan Google Search Central)

Google membuat title link & snippet secara otomatis dari berbagai sumber
(`<title>`, `<h1>`/judul visual utama, `og:title`, konten halaman, anchor text).
Aturan untuk project ini:

- **Setiap halaman wajib punya `<title>` unik** via Metadata API (`metadata.title`
  di layout/page). Format: `Deskripsi singkat halaman | ModernWeb` — deskriptif,
  ringkas, brand cukup sekali di akhir dengan pemisah `|`. Jangan keyword stuffing
  (mengulang kata/frasa yang sama), jangan boilerplate yang sama antar halaman,
  jangan vague ("Home", "Profil").
- **Satu `<h1>` per halaman** sebagai judul utama yang paling menonjol, dan harus
  jadi heading pertama yang terlihat. Jangan ada beberapa heading dengan bobot
  visual setara yang membingungkan; judul section pakai `<h2>` ke bawah.
- **Meta description unik per halaman** (`metadata.description`): merangkum isi
  halaman secara spesifik, boleh memuat data konkret (harga paket, layanan,
  benefit), bukan daftar keyword, tidak terlalu pendek, dan tidak dipakai ulang
  di halaman lain. Halaman utama boleh deskripsi level situs.
- **Bahasa harus konsisten**: konten Indonesia → `<title>`, description, dan
  `og:title` juga Indonesia.
- **Sertakan `openGraph.title`/`description`** di metadata — `og:title` adalah
  salah satu sumber title link.
- **Update `<title>` saat konten berubah** (mis. tahun/penawaran) — title usang
  akan dikoreksi Google sendiri dan menurunkan kontrol kita.
- Konten penting harus langsung terlihat (jangan disembunyikan di balik
  tab/expander) dan jangan memaksa scroll via JS saat load — ini syarat
  "read more" deep link. Jangan hapus hash fragment dari URL saat load.
- Jika perlu mencegah snippet/indexing: `nosnippet`/`max-snippet` meta tag,
  atribut `data-nosnippet`, atau `noindex` (robots.txt saja tidak mencegah indexing).
- **Scene SEO (`SeoScene.tsx`) wajib tetap ber-`data-nosnippet`** — teks
  keyword/pills di dalamnya adalah gimmick visual; tanpa atribut ini teksnya bisa
  dipakai Google sebagai snippet dan pola "jasa X + daftar kota" terbaca sebagai
  keyword stuffing. Jangan menambah daftar keyword/kota ke scene ini untuk tujuan
  ranking; kalau mau target lokal, tulis kalimat natural di konten nyata.

## SEO: Gambar (ringkasan Google Image SEO)

- **Selalu pakai `<img>` HTML** (boleh di dalam `<picture>`) — Google TIDAK
  mengindeks gambar dari CSS `background-image`. Selalu sediakan fallback `src`
  meskipun memakai `srcset`.
- **Alt text wajib, deskriptif, kontekstual** — bukan keyword stuffing, bukan
  kosong untuk gambar bermakna. Pola: "Dalmatian puppy playing fetch" > "puppy" >
  (kosong). Icon dekoratif lucide tetap `aria-hidden`; svg inline bermakna pakai
  `<title>`/`aria-label`.
- **Nama file pendek & deskriptif**: `website-crm-furniture.webp`, bukan
  `IMG00023.JPG`/`inspirasi-1.webp`. Format file didukung: BMP, GIF, JPEG, PNG,
  WebP, SVG, AVIF — ekstensi harus cocok dengan tipe file.
- **Tentukan gambar utama halaman** lewat `og:image` DAN structured data
  `primaryImageOfPage` (JSON-LD di `app/page.tsx`). Pilih gambar yang representatif
  terhadap isi halaman — JANGAN logo/gambar generik, jangan rasio ekstrem,
  resolusi setinggi mungkin.
- **Image sitemap**: `app/sitemap.ts` mendaftarkan halaman beserta gambar-gambarnya.
  URL absolut dibangun dari `SITE_URL` (`lib/site.ts`, env `NEXT_PUBLIC_SITE_URL`) —
  **set env ini ke domain produksi saat deploy**, kalau tidak URL akan fallback
  ke localhost.
- **Kecepatan**: gambar adalah penyumbang terbesar ukuran halaman — kompres,
  pakai ukuran responsif, `loading="lazy"` untuk gambar di bawah fold. Cek dengan
  PageSpeed Insights.
- **Gambar dekat teks yang relevan** dan referensikan gambar yang sama dengan URL
  yang konsisten di seluruh situs (cache & crawl budget).
- Title & meta description halaman juga memengaruhi hasil di Google Images —
  ikuti section SEO di atas.

## Perintah

```
npm run dev     # dev server (Turbopack)
npm run build   # production build + typecheck
npm run lint    # eslint
```

## Referensi

- `DESIGN.md` — design tokens, tipografi, breakpoint, motion.
- Kontak brand: WhatsApp +62 858-7587-4712, Instagram `@modernweb.std`,
  email `modernwebstudio.idn@gmail.com`.
