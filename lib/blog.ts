// Data artikel blog (halaman /blog dan /blog/[slug]).
// Satu sumber untuk halaman, metadata, dan sitemap.
// Cover memakai gambar showcase sebagai placeholder — ganti dengan foto
// artikel asli saat tersedia (nama file deskriptif + alt deskriptif).

// Blok penyusun isi artikel. Aturan pemakaiannya (kapan pakai list, kapan
// h3, berapa panjang artikel) ada di AGENTS.md section "Copywriting Blog".
export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  /** Daftar poin. ordered: true → <ol> bernomor, default <ul> bullet. */
  | { type: "list"; ordered?: boolean; items: string[] }
  /** Blok tanya-jawab di akhir artikel. */
  | { type: "faq"; items: { q: string; a: string }[] }
  | { type: "quote"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  /** Ringkasan artikel — dipakai sebagai meta description & excerpt kartu */
  description: string;
  /** Tanggal publikasi, format ISO */
  date: string;
  /** Kategori artikel — dipakai chip, widget sidebar, dan filter /blog?kategori= */
  category: string;
  image: string;
  alt: string;
  content: BlogBlock[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "tren-desain-website-2026",
    title: "Tren Desain Website 2026 yang Layak Anda Tiru",
    description:
      "Tren desain website 2026 yang benar-benar berpengaruh ke jumlah pesan masuk: tipografi tegas, micro-interaction halus, dan kecepatan. Plus tiga tren yang sebaiknya dilewati dan cara memilihnya untuk bisnis Anda.",
    date: "2026-07-10",
    category: "Desain",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Ilustrasi artikel tren desain website 2026",
    content: [
      {
        type: "p",
        text: "Setiap awal tahun muncul daftar tren desain website, dan setiap kali itu juga banyak pemilik bisnis buru-buru merombak websitenya. Tiga bulan kemudian tampilannya memang lebih segar. Tapi jumlah pesan yang masuk tidak berubah sama sekali.",
      },
      {
        type: "p",
        text: "Masalahnya biasanya bukan pada trennya, melainkan pada alasan mengikutinya. Di artikel ini kita bahas tren desain 2026 yang benar-benar mengubah cara pengunjung memahami bisnis Anda, tiga tren yang sebaiknya Anda lewati, dan cara menilai sendiri tren mana yang cocok tanpa harus ikut semua yang sedang ramai.",
      },
      { type: "h2", text: "Tren yang bagus menjawab pertanyaan pengunjung" },
      {
        type: "p",
        text: "Pengunjung yang baru pertama kali membuka website Anda sebenarnya cuma membawa tiga pertanyaan: ini bisnis apa, apakah bisa dipercaya, dan bagaimana cara menghubunginya. Semua keputusan desain pada akhirnya dinilai dari seberapa cepat tiga pertanyaan itu terjawab.",
      },
      {
        type: "p",
        text: "Anggap website Anda seperti pelayan toko. Pelayan yang baik menyapa, menjelaskan barang dagangannya, lalu menunjukkan kasir. Pelayan yang sibuk memamerkan atraksi justru membuat orang mundur ke pintu. Tren desain gampang dinilai dari sudut pandang ini. Kalau ia mempercepat pengunjung menemukan jawaban, pakai. Kalau ia menambah lapisan yang harus dilewati dulu, lewati.",
      },
      { type: "h2", text: "Tipografi besar dengan hierarki yang tegas" },
      {
        type: "p",
        text: "Tren yang paling terasa di 2026 adalah judul berukuran besar dengan whitespace yang lega. Whitespace itu ruang kosong di sekitar teks dan gambar, dan fungsinya bukan sekadar supaya terlihat mahal. Judul besar memaksa Anda memilih satu pesan utama per layar, dan justru proses memilih itulah yang membuat halaman jadi mudah dicerna.",
      },
      {
        type: "p",
        text: "Kuncinya ada di perbedaan bobot antar tingkatan. Heading, subheading, dan body text harus terlihat jelas berbeda, sehingga mata pengunjung tahu urutan bacanya tanpa berpikir. Kalau semua teks berukuran mirip, halaman terasa datar dan pengunjung membaca acak.",
      },
      {
        type: "h3",
        text: "Cara mengeceknya dalam sepuluh detik",
      },
      {
        type: "p",
        text: "Buka halaman utama Anda, lalu picingkan mata sampai teksnya kabur. Kalau masih ada satu blok yang jelas menonjol, hierarki Anda sudah benar. Kalau yang terlihat cuma bidang abu-abu merata, judulnya belum cukup tegas.",
      },
      { type: "h2", text: "Micro-interaction yang halus, bukan yang ramai" },
      {
        type: "p",
        text: "Micro-interaction adalah respons kecil saat pengunjung berinteraksi: tombol yang sedikit terangkat saat disentuh kursor, kartu yang muncul halus saat di-scroll, ikon yang berubah saat menu dibuka. Fungsinya memberi tahu bahwa aksi pengunjung terdaftar, mirip bunyi klik pada saklar lampu.",
      },
      {
        type: "p",
        text: "Karena fungsinya cuma itu, ukurannya juga sederhana: kalau animasinya sampai membuat pengunjung menunggu, itu sudah kelewatan. Patokan yang aman adalah di bawah 0,3 detik dan hanya menggerakkan posisi atau opacity. Animasi yang mengubah ukuran gambar besar atau memuat ulang bagian halaman akan terasa berat di ponsel kelas menengah, yang justru dipakai mayoritas pengunjung Anda.",
      },
      {
        type: "p",
        text: "Satu hal yang sering terlewat: sebagian orang menyalakan pengaturan reduced motion di perangkatnya karena gerakan berlebihan membuat mereka pusing. Desain yang baik menghormati setelan itu dan mematikan animasinya secara otomatis.",
      },
      { type: "h2", text: "Kecepatan sekarang bagian dari desain" },
      {
        type: "p",
        text: "Dulu kecepatan dianggap urusan teknis yang dipikirkan belakangan. Sekarang tidak lagi. Halaman yang cantik tapi loading-nya lima detik akan ditinggalkan sebelum desainnya sempat dilihat, dan Google juga menilai pengalaman itu saat menentukan peringkat.",
      },
      {
        type: "p",
        text: "Penyumbang berat terbesar hampir selalu gambar. Foto langsung dari kamera ponsel bisa berukuran 4 MB, padahal di layar cuma ditampilkan selebar 800 piksel. Dikompres ke format modern seperti WebP, ukurannya bisa turun jauh tanpa perbedaan yang kelihatan mata. Anda bisa mengeceknya gratis lewat PageSpeed Insights dari Google.",
      },
      { type: "h2", text: "Tiga tren yang sebaiknya Anda lewati" },
      {
        type: "p",
        text: "Tidak semua yang sedang ramai layak masuk ke website bisnis. Tiga hal berikut terlihat mengesankan di portofolio desainer, tapi biasanya merugikan pemilik bisnis:",
      },
      {
        type: "list",
        items: [
          "Splash screen, yaitu animasi pembuka sebelum halaman tampil. Menahan pengunjung beberapa detik demi kesan dramatis, padahal mereka datang untuk mencari informasi. Ini menaikkan bounce rate, yaitu persentase orang yang pergi tanpa membuka halaman lain.",
          "Scroll hijacking. Halaman yang memaksa arah dan kecepatan scroll sendiri membuat pengunjung kehilangan kendali, dan paling terasa mengganggu di layar sentuh.",
          "Teks berkontras rendah, misalnya abu muda di atas putih. Terlihat tenang di layar desainer, tapi susah dibaca di ponsel yang kena sinar matahari.",
        ],
      },
      {
        type: "quote",
        text: "Tren terbaik adalah yang membuat pengunjung makin mudah memahami bisnis Anda, bukan yang sekadar ramai di mata.",
      },
      { type: "h2", text: "Cara memilih tren untuk bisnis Anda" },
      {
        type: "p",
        text: "Anda tidak perlu mengikuti semuanya. Empat langkah ini cukup untuk menyaring mana yang berguna:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Tentukan satu tujuan utama website Anda, misalnya mendatangkan pesan WhatsApp atau permintaan penawaran.",
          "Untuk tiap tren yang menarik perhatian Anda, tanyakan apakah ia mendekatkan atau menjauhkan pengunjung dari tujuan itu.",
          "Buka website Anda sendiri lewat ponsel, pakai kuota, sambil berdiri di luar ruangan. Banyak keputusan desain gugur di tes sederhana ini.",
          "Terapkan satu perubahan dalam satu waktu, lalu amati sebulan. Kalau semua diubah sekaligus, Anda tidak akan tahu mana yang berpengaruh.",
        ],
      },
      {
        type: "p",
        text: "Kalau setelah mengecek ternyata website Anda memang perlu dibenahi dan Anda lebih suka menyerahkannya ke orang lain, tim ModernWeb bisa bantu. Paket Startup mulai Rp 1.499.000 dengan pengerjaan sekitar 5 hari untuk 3 halaman, sudah termasuk hosting dan domain. Ngobrol dulu lewat WhatsApp juga boleh, gratis dan tanpa keharusan lanjut.",
      },
      {
        type: "faq",
        items: [
          {
            q: "Apakah website saya harus dirombak total tiap ada tren baru?",
            a: "Tidak. Selama pengunjung masih mudah menemukan informasi dan cara menghubungi Anda, website lama masih bekerja. Rombak besar baru masuk akal kalau tampilannya sudah membuat calon pelanggan ragu, atau kalau website belum mobile friendly.",
          },
          {
            q: "Berapa lama biasanya website perlu diperbarui tampilannya?",
            a: "Umumnya tiga sampai empat tahun sekali. Yang lebih sering perlu diperbarui justru isinya, misalnya foto hasil kerja terbaru, daftar layanan, dan harga.",
          },
          {
            q: "Apakah desain yang mengikuti tren otomatis bagus untuk SEO?",
            a: "Tidak otomatis. Yang dinilai Google adalah kecepatan loading, tampilan yang mobile friendly, dan kualitas isi. Tren desain membantu hanya kalau ia mendukung tiga hal itu, dan bisa merugikan kalau membuat halaman jadi berat.",
          },
          {
            q: "Bisakah tren ini diterapkan di website yang sudah jadi?",
            a: "Sebagian besar bisa, terutama tipografi dan kecepatan, tanpa perlu membangun ulang dari nol. Perubahan struktur halaman biasanya yang paling makan waktu.",
          },
        ],
      },
    ],
  },
  {
    slug: "tips-seo-website-baru",
    title: "5 Tips SEO untuk Website yang Baru Live",
    description:
      "Website baru tidak otomatis muncul di Google, dan wajar butuh beberapa bulan. Lima langkah yang benar-benar berpengaruh di awal: Search Console, title dan description, konten yang menjawab pertanyaan, kecepatan, dan Google Business Profile.",
    date: "2026-07-05",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1686061594183-8c864f508b00?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Ilustrasi artikel tips SEO untuk website baru",
    content: [
      {
        type: "p",
        text: "Website Anda baru live minggu lalu. Anda ketik nama bisnis Anda di Google, dan yang muncul justru bisnis orang lain. Anda coba lagi keesokan harinya, hasilnya sama. Mulai muncul kecurigaan bahwa ada yang salah dengan websitenya.",
      },
      {
        type: "p",
        text: "Tidak ada yang salah. Google butuh waktu untuk menemukan, membaca, dan mempercayai website baru, dan untuk bisnis yang belum dikenal itu wajar makan beberapa minggu sampai beberapa bulan. Yang bisa Anda lakukan adalah mempercepat prosesnya lewat lima langkah berikut. Semuanya gratis dan bisa dikerjakan sendiri.",
      },
      { type: "h2", text: "Kenapa perlu menunggu?" },
      {
        type: "p",
        text: "Google itu seperti perpustakaan raksasa. Sebelum sebuah buku bisa direkomendasikan ke pengunjung, petugasnya harus tahu buku itu ada, membacanya, lalu memutuskan buku ini pantas ditaruh di rak depan atau di gudang. Website baru Anda adalah buku yang baru saja sampai di pintu, dan petugasnya belum tahu Anda datang.",
      },
      {
        type: "p",
        text: "Karena itu langkah-langkah di bawah urutannya penting: yang pertama memberi tahu petugasnya bahwa Anda ada, sisanya membantu dia memutuskan Anda pantas di rak depan.",
      },
      {
        type: "quote",
        text: "SEO bukan sihir yang jadi semalam. Ia kebiasaan kecil yang dirawat konsisten sejak hari pertama website live.",
      },
      { type: "h2", text: "1. Daftarkan ke Google Search Console" },
      {
        type: "p",
        text: "Ini langkah pertama dan yang paling sering dilewati. Search Console adalah alat gratis dari Google yang fungsinya dua arah: Anda memberi tahu Google bahwa website Anda ada, dan Google memberi tahu Anda apa yang dia lihat.",
      },
      {
        type: "p",
        text: "Yang perlu Anda lakukan cuma mendaftar, membuktikan website itu milik Anda, lalu mengirimkan sitemap. Sitemap itu daftar isi website Anda, semacam katalog yang membantu petugas perpustakaan tadi tahu ada halaman apa saja. Setelah itu Anda bisa melihat kata kunci apa yang membawa orang ke website Anda, dan halaman mana yang bermasalah.",
      },
      { type: "h2", text: "2. Rapikan title dan meta description tiap halaman" },
      {
        type: "p",
        text: "Title adalah kalimat biru yang bisa diklik di hasil pencarian, dan description adalah dua baris abu-abu di bawahnya. Dua hal ini adalah iklan gratis Anda di Google, dan sering dibiarkan kosong atau seragam di semua halaman.",
      },
      {
        type: "p",
        text: "Aturannya: tiap halaman punya title sendiri yang menjelaskan isinya secara spesifik, dan description yang merangkum isi halaman itu, bukan mengulang judulnya. Jangan menumpuk kata kunci berulang, karena itu justru menurunkan kepercayaan Google. Tulis seperti Anda menjelaskan halaman itu ke calon pelanggan.",
      },
      { type: "h2", text: "3. Tulis konten yang menjawab pertanyaan pelanggan" },
      {
        type: "p",
        text: "Ini yang paling berpengaruh jangka panjang, dan paling sering diabaikan karena butuh usaha. Google mengutamakan halaman yang benar-benar menjawab apa yang dicari orang. Website profil yang cuma berisi tiga halaman tentang diri Anda tidak punya banyak yang bisa dijawab.",
      },
      {
        type: "p",
        text: "Sumber ide terbaiknya sudah ada di HP Anda: buka riwayat chat WhatsApp, dan lihat pertanyaan apa yang berulang kali ditanyakan calon pelanggan. Tiap pertanyaan yang muncul lebih dari tiga kali layak jadi satu halaman atau satu artikel. Anda tidak perlu menebak kata kunci, pelanggan Anda sudah memberitahukannya.",
      },
      { type: "h2", text: "4. Pastikan cepat dan mobile friendly" },
      {
        type: "p",
        text: "Google menilai pengalaman pengunjung, dan mayoritas pengunjung Anda datang dari ponsel. Halaman yang loading-nya lima detik atau tulisannya harus diperbesar dulu akan kalah dari pesaing yang lebih ringan, meski isinya sama bagusnya.",
      },
      {
        type: "p",
        text: "Cek gratis lewat PageSpeed Insights. Biasanya laporannya menunjuk ke gambar yang kebesaran, dan itu memang penyebab paling umum. Kompres gambarnya, dan sebagian besar masalah selesai tanpa perlu menyentuh hal teknis lain.",
      },
      { type: "h2", text: "5. Lengkapi Google Business Profile" },
      {
        type: "p",
        text: "Kalau bisnis Anda melayani area tertentu, ini langkah dengan hasil tercepat di seluruh daftar ini. Google Business Profile adalah kotak informasi yang muncul di sebelah kanan hasil pencarian dan di Google Maps, lengkap dengan foto, jam buka, dan ulasan.",
      },
      {
        type: "p",
        text: "Bedanya dengan SEO biasa: profil ini bisa muncul dalam hitungan hari, bukan bulan, dan langsung menyasar orang yang mencari layanan di kota Anda. Isi selengkap mungkin, tautkan ke website, unggah foto asli, dan mintalah ulasan dari pelanggan yang puas.",
      },
      { type: "h2", text: "Yang sebaiknya tidak Anda lakukan" },
      {
        type: "p",
        text: "Sambil menunggu hasil, ada beberapa jalan pintas yang menggoda tapi merugikan:",
      },
      {
        type: "list",
        items: [
          "Membeli backlink atau jasa \"halaman 1 Google dalam seminggu\". Google mengenali pola ini, dan hukumannya jauh lebih lama disembuhkan daripada manfaat sesaatnya.",
          "Menumpuk nama kota di footer, misalnya \"jasa kami melayani Bandung, Jakarta, Surabaya, Medan\" padahal Anda cuma di satu kota. Ini terbaca sebagai keyword stuffing.",
          "Mengganti-ganti judul halaman tiap minggu karena belum terlihat hasilnya. Google butuh kestabilan untuk menilai.",
          "Menyalin artikel dari website lain. Isi yang tidak orisinal hampir tidak pernah dapat peringkat.",
        ],
      },
      {
        type: "p",
        text: "Semua paket ModernWeb sudah termasuk fondasi SEO-nya, yaitu struktur halaman yang benar, title dan description tiap halaman, sitemap, serta website yang cepat dan mobile friendly, jadi Anda tinggal mengurus langkah 1, 3, dan 5. Kalau ingin dibantu menyiapkannya, silakan chat, gratis.",
      },
      {
        type: "faq",
        items: [
          {
            q: "Berapa lama sampai website saya muncul di halaman pertama Google?",
            a: "Untuk pencarian nama bisnis Anda sendiri, biasanya beberapa minggu setelah didaftarkan di Search Console. Untuk kata kunci yang diperebutkan banyak orang, misalnya \"jasa katering jakarta\", umumnya butuh beberapa bulan sampai lebih dari setahun, tergantung seberapa ketat persaingannya.",
          },
          {
            q: "Apakah saya perlu membayar Google supaya muncul di pencarian?",
            a: "Tidak. Muncul di hasil pencarian biasa itu gratis, dan Google tidak menerima bayaran untuk menaikkan peringkat. Yang berbayar adalah Google Ads, dan hasilnya ditandai sebagai iklan di bagian atas. Keduanya jalur yang berbeda.",
          },
          {
            q: "Bisnis saya melayani satu kota saja, apakah SEO tetap berguna?",
            a: "Justru paling berguna. Persaingan di tingkat kota jauh lebih ringan, dan Google Business Profile membuat bisnis Anda muncul di Maps saat orang di sekitar mencari layanan Anda. Ini sering lebih menghasilkan daripada mengejar kata kunci nasional.",
          },
          {
            q: "Apakah saya harus menulis artikel terus supaya peringkatnya naik?",
            a: "Tidak harus banyak, tapi harus relevan. Satu artikel yang benar-benar menjawab pertanyaan calon pelanggan lebih berguna daripada sepuluh artikel dangkal. Kalau tidak sempat menulis rutin, fokuskan saja ke melengkapi halaman layanan dan FAQ Anda.",
          },
        ],
      },
    ],
  },
  {
    slug: "website-vs-media-sosial",
    title: "Website vs Media Sosial: Kenapa Bisnis Butuh Keduanya",
    description:
      "Media sosial bertugas membuat orang menemukan Anda, website bertugas membuat mereka yakin. Cara keduanya bekerja sama, risiko mengandalkan satu saja, dan mana yang didahulukan kalau anggaran terbatas.",
    date: "2026-07-01",
    category: "Digitalisasi Bisnis",
    image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Ilustrasi artikel perbandingan website dan media sosial",
    content: [
      {
        type: "p",
        text: "\"Sudah ada Instagram, buat apa website lagi?\" Ini pertanyaan paling sering yang kami terima, dan pertanyaannya masuk akal. Instagram gratis, orangnya sudah ramai di sana, dan Anda sudah terlanjur mengumpulkan ribuan follower dengan susah payah.",
      },
      {
        type: "p",
        text: "Tapi pertanyaan itu sebenarnya membandingkan dua hal yang tugasnya berbeda. Di artikel ini kita bahas apa persisnya tugas masing-masing, apa yang terjadi kalau Anda cuma punya salah satunya, dan kalau uangnya memang terbatas, mana yang sebaiknya didahulukan.",
      },
      { type: "h2", text: "Tugasnya berbeda, bukan bersaing" },
      {
        type: "p",
        text: "Bayangkan Anda membuka kedai kopi. Media sosial itu spanduk dan brosur yang Anda sebar di sekitar. Tugasnya membuat orang yang tadinya tidak tahu jadi tahu, dan tertarik mampir. Website itu kedainya sendiri: tempat orang duduk, melihat daftar menu, memperhatikan kebersihannya, lalu memutuskan jadi pesan atau tidak.",
      },
      {
        type: "p",
        text: "Spanduk yang bagus tidak bisa menggantikan kedai, dan kedai yang bagus tidak akan ramai kalau tidak ada yang tahu keberadaannya. Begitu juga di dunia digital. Media sosial mendatangkan perhatian, website mengubah perhatian jadi keputusan. Kalau Anda menuntut Instagram melakukan dua-duanya, hasilnya biasanya mengecewakan.",
      },
      {
        type: "quote",
        text: "Media sosial itu spanduk yang menarik orang lewat. Website itu kedainya, tempat orang memutuskan jadi pesan atau tidak.",
      },
      { type: "h2", text: "Kalau cuma punya media sosial" },
      {
        type: "p",
        text: "Masalah pertama adalah Anda menumpang di rumah orang. Algoritma bisa berubah dan jangkauan postingan Anda turun drastis tanpa pemberitahuan. Akun bisa kena batasan atau bahkan hilang karena kesalahan sistem, dan mengurusnya tidak semudah menelepon customer service. Semua follower yang Anda kumpulkan bertahun-tahun ikut hilang bersamanya.",
      },
      {
        type: "p",
        text: "Masalah kedua lebih sepele tapi sering terjadi: informasi penting tenggelam. Feed itu urutannya kronologis dan terus bergerak. Postingan harga yang Anda buat tiga bulan lalu praktis tidak akan ditemukan calon pelanggan baru, dan akhirnya Anda mengetik ulang jawabannya di DM, lagi dan lagi.",
      },
      {
        type: "p",
        text: "Masalah ketiga, ini yang paling mahal: Anda tidak muncul di Google. Orang yang mengetik \"jasa katering pernikahan bandung\" tidak sedang membuka Instagram. Mereka sedang mencari, artinya niat belinya jauh lebih tinggi, dan Anda tidak ada di sana.",
      },
      { type: "h2", text: "Kalau cuma punya website" },
      {
        type: "p",
        text: "Kebalikannya juga tidak ideal. Website yang tidak pernah dipromosikan itu seperti kedai bagus di gang buntu tanpa papan nama. Google butuh waktu berbulan-bulan untuk mengenali website baru, dan sementara itu tidak ada yang datang.",
      },
      {
        type: "p",
        text: "Media sosial juga punya sesuatu yang tidak bisa ditiru website: keakraban. Orang melihat wajah Anda, proses kerja Anda, dan momen sehari-hari bisnis Anda. Rasa kenal itu yang membuat orang akhirnya berani mengeluarkan uang. Website jarang bisa membangun itu sendirian.",
      },
      {
        type: "p",
        text: "Ada juga soal kecepatan mencoba ide. Kalau Anda ingin menguji apakah produk baru diminati, satu postingan bisa memberi jawaban dalam sehari lewat komentar dan pesan yang masuk. Mengubah website untuk keperluan yang sama butuh waktu lebih lama, dan sering tidak sepadan kalau idenya masih coba-coba.",
      },
      { type: "h2", text: "Cara keduanya bekerja sama" },
      {
        type: "p",
        text: "Alurnya sederhana kalau tugas masing-masing sudah jelas:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Media sosial menarik perhatian orang yang tadinya tidak tahu bisnis Anda ada.",
          "Link di bio mengarahkan yang tertarik ke website, tempat semua informasi lengkap tersedia tanpa perlu bertanya.",
          "Website menjawab keraguan lewat portofolio, harga, dan testimoni, lalu mengarahkan ke tombol WhatsApp.",
          "Pesan yang masuk ke Anda sudah berkualitas, karena orangnya sudah tahu harga dan tetap menghubungi.",
        ],
      },
      {
        type: "p",
        text: "Efek sampingnya sering tidak disadari: pekerjaan Anda berkurang. Pertanyaan \"harganya berapa kak?\" yang selama ini memenuhi DM berpindah ke halaman yang bisa dibaca sendiri.",
      },
      { type: "h2", text: "Kalau anggaran terbatas, dahulukan yang mana?" },
      {
        type: "p",
        text: "Mulai dari media sosial. Ini jujur saja, meskipun kami menjual jasa website. Media sosial gratis, dan yang paling Anda butuhkan di awal adalah tahu apakah ada orang yang mau membeli produk Anda sama sekali. Website tidak akan menyelamatkan bisnis yang belum punya pembeli.",
      },
      {
        type: "p",
        text: "Website mulai masuk akal saat media sosial Anda sudah ramai tapi mulai terasa sesak: DM penuh pertanyaan berulang, orang minta portofolio, dan Anda mulai kehilangan calon klien yang butuh kesan lebih meyakinkan. Di titik itu website bukan lagi pelengkap, tapi jalan keluar.",
      },
      {
        type: "p",
        text: "Kalau bisnis Anda sudah sampai di titik itu dan tinggal butuh sisi websitenya, tim ModernWeb bisa bantu. Paket Startup mulai Rp 1.499.000 untuk 3 halaman, pengerjaan sekitar 5 hari, sudah termasuk hosting, domain, dan integrasi ke WhatsApp serta akun media sosial Anda. Ngobrol dulu juga boleh, gratis.",
      },
      {
        type: "faq",
        items: [
          {
            q: "Apakah Linktree atau link in bio sudah cukup menggantikan website?",
            a: "Untuk sementara bisa membantu, tapi fungsinya cuma daftar link, bukan tempat meyakinkan orang. Isinya tidak bisa dicari lewat Google, tampilannya sama dengan ribuan bisnis lain, dan halaman itu tetap milik platform lain, bukan milik Anda.",
          },
          {
            q: "Kalau sudah punya website, apakah media sosial boleh ditinggalkan?",
            a: "Sebaiknya tidak. Website jarang mendatangkan pengunjung sendiri di awal. Media sosial tetap jadi sumber orang yang datang ke website Anda, terutama sebelum Google mengenali website Anda dengan baik.",
          },
          {
            q: "Bisakah katalog produk di website tersambung ke WhatsApp?",
            a: "Bisa, dan ini pola yang paling sering dipakai klien kami. Pengunjung melihat detail produk di website, lalu tombol pesan membuka WhatsApp dengan pesan yang sudah terisi nama produknya, jadi Anda langsung tahu yang ditanyakan.",
          },
          {
            q: "Follower saya sudah puluhan ribu, apa website masih menambah sesuatu?",
            a: "Justru di posisi itu website paling terasa gunanya. Dengan audiens sebesar itu, pertanyaan berulang yang masuk juga banyak, dan website memindahkan jawabannya ke tempat yang bisa dibaca sendiri kapan saja.",
          },
        ],
      },
    ],
  },
  {
    slug: "cara-memilih-paket-website",
    title: "Cara Memilih Paket Website yang Tepat untuk Bisnis Anda",
    description:
      "Startup, Pro, atau Business? Panduan memilih paket website dari kebutuhan, bukan dari harga: berapa halaman yang benar-benar dipakai, kapan CMS layak dibayar, dan kenapa paket termurah sering justru pilihan paling tepat.",
    date: "2026-06-28",
    category: "Pembuatan Website",
    image: "https://images.unsplash.com/photo-1707902665498-a202981fb5ac?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Ilustrasi artikel cara memilih paket website",
    content: [
      {
        type: "p",
        text: "Anda membuka halaman harga, melihat tiga kolom berjajar, dan bingung. Kolom tengah ditandai \"paling populer\", kolom kanan isinya paling banyak centang, kolom kiri paling murah. Rasanya seperti diminta menebak, dan takutnya salah pilih lalu menyesal.",
      },
      {
        type: "p",
        text: "Cara paling gampang keluar dari kebingungan itu adalah berhenti membandingkan kolom, lalu mulai dari pertanyaan tentang bisnis Anda sendiri. Artikel ini memandu Anda lewat empat pertanyaan, dan di akhir Anda akan tahu paket mana yang masuk akal, termasuk kemungkinan bahwa yang termurah memang sudah cukup.",
      },
      { type: "h2", text: "Kesalahan paling mahal: membeli untuk bisnis yang belum ada" },
      {
        type: "p",
        text: "Kesalahan yang paling sering kami lihat bukan memilih paket terlalu kecil, melainkan terlalu besar. Orang membayangkan bisnisnya dua tahun lagi, lalu membeli paket untuk bisnis bayangan itu. Hasilnya delapan halaman yang tiga di antaranya tidak pernah diisi, dan CMS yang tidak pernah dibuka sekali pun.",
      },
      {
        type: "p",
        text: "Website itu seperti sepatu, bukan seperti tabungan. Membeli kekecilan memang menyiksa, tapi membeli kebesaran juga tidak membuat kaki Anda tumbuh lebih cepat. Belilah untuk ukuran kaki Anda hari ini. Halaman selalu bisa ditambah nanti saat memang sudah ada isinya.",
      },
      {
        type: "quote",
        text: "Website itu seperti sepatu, bukan tabungan. Beli untuk ukuran kaki Anda hari ini, bukan untuk bisnis bayangan dua tahun lagi.",
      },
      { type: "h2", text: "Pertanyaan 1: berapa halaman yang benar-benar akan Anda isi?" },
      {
        type: "p",
        text: "Bukan berapa halaman yang Anda inginkan, tapi berapa yang isinya sudah ada di kepala Anda sekarang. Cara mengeceknya sederhana: ambil kertas, tulis nama tiap halaman, lalu tulis dalam satu kalimat apa isinya. Halaman yang kalimatnya tidak bisa Anda tulis, berarti belum Anda butuhkan.",
      },
      {
        type: "p",
        text: "Mayoritas bisnis yang baru mulai selesai di tiga halaman: beranda, layanan atau produk, dan kontak. Ini bukan versi murahan, ini memang cukup. Kebutuhan bertambah saat Anda punya portofolio yang layak dipamerkan, profil tim, atau rencana menulis artikel secara rutin.",
      },
      { type: "h2", text: "Pertanyaan 2: seberapa sering isinya berubah?" },
      {
        type: "p",
        text: "Ini yang menentukan apakah CMS layak dibayar. CMS adalah panel tempat Anda mengubah isi website sendiri lewat browser, tanpa perlu menghubungi developer, mirip menulis postingan di Instagram.",
      },
      {
        type: "p",
        text: "Kalau isi website Anda praktis tetap sepanjang tahun, misalnya jasa yang harganya jarang berubah, CMS akan jadi fitur yang Anda bayar tapi tidak pernah dipakai. Kalau harga sering menyesuaikan, ada promo bulanan, atau Anda berencana rutin menulis artikel, CMS akan langsung terasa gunanya sejak bulan pertama.",
      },
      { type: "h3", text: "Patokan kasarnya" },
      {
        type: "p",
        text: "Kalau Anda memperkirakan mengubah isi website lebih dari sekali sebulan, ambil paket yang sudah termasuk CMS. Di bawah itu, minta bantuan vendor tiap kali perlu ubah biasanya lebih murah daripada membayar CMS di depan.",
      },
      { type: "h2", text: "Pertanyaan 3: apa yang terjadi kalau website Anda mati sehari?" },
      {
        type: "p",
        text: "Pertanyaan ini menentukan seberapa jauh Anda perlu membayar untuk keamanan dan performa. Kalau website Anda mati sehari dan yang terjadi cuma beberapa orang tidak jadi melihat profil, risikonya kecil. Kalau website Anda adalah tempat orang memesan dan membayar, sehari mati berarti kehilangan pemasukan langsung.",
      },
      {
        type: "p",
        text: "Untuk kelompok pertama, pengamanan standar sudah lebih dari cukup. Untuk kelompok kedua, tambahan di sisi keamanan dan performa jadi masuk akal, termasuk prioritas penanganan saat ada masalah.",
      },
      { type: "h2", text: "Mencocokkannya dengan paket ModernWeb" },
      {
        type: "p",
        text: "Kalau jawaban Anda sudah terkumpul, pencocokannya jadi gampang:",
      },
      {
        type: "list",
        items: [
          "Paket Startup, Rp 1.499.000, 3 halaman, pengerjaan 5 hari. Untuk bisnis baru atau UMKM yang butuh tempat resmi yang meyakinkan dan mengarahkan orang ke WhatsApp. Isinya jarang berubah.",
          "Paket Pro, Rp 2.489.000, 8 halaman, pengerjaan 10 hari, sudah termasuk CMS. Untuk bisnis berkembang yang punya portofolio, beberapa layanan berbeda, dan berencana rutin memperbarui isinya sendiri.",
          "Paket Business, Rp 4.980.000, halaman tanpa batas, pengerjaan 15 hari, termasuk form booking online, CMS penuh, dan multi-bahasa. Untuk perusahaan dengan banyak layanan, atau yang websitenya ikut menangani pemesanan.",
        ],
      },
      {
        type: "p",
        text: "Semua paket sudah termasuk hosting, domain, desain yang mobile friendly, dan integrasi WhatsApp, jadi tiga hal itu tidak perlu jadi bahan pertimbangan.",
      },
      { type: "h2", text: "Kalau masih ragu di antara dua paket" },
      {
        type: "p",
        text: "Ambil yang lebih kecil. Menambah halaman ke website yang sudah jalan itu pekerjaan biasa dan bisa dilakukan kapan saja saat Anda memang sudah punya isinya. Sebaliknya, uang yang sudah dibayarkan untuk halaman kosong tidak bisa ditarik kembali.",
      },
      {
        type: "p",
        text: "Kalau Anda ingin dibantu memetakannya, ceritakan saja bisnis Anda ke tim ModernWeb lewat WhatsApp. Kami akan bilang terus terang kalau paket termurah memang sudah cukup untuk kebutuhan Anda. Konsultasinya gratis dan tidak ada keharusan lanjut.",
      },
      {
        type: "faq",
        items: [
          {
            q: "Bisakah nanti naik paket kalau bisnis saya berkembang?",
            a: "Bisa. Menambah halaman atau memasang CMS di website yang sudah jalan itu hal biasa, dan Anda cukup membayar selisih pekerjaannya saja tanpa perlu membangun ulang dari nol.",
          },
          {
            q: "Kenapa harganya berbeda cukup jauh antar paket?",
            a: "Yang membedakan terutama jumlah halaman dan kedalaman desainnya, karena tiap halaman berarti tambahan waktu desain, penulisan struktur, dan pengujian. Selisihnya juga mencakup fitur seperti CMS dan form booking yang perlu dibangun dan diuji tersendiri.",
          },
          {
            q: "Apakah saya bisa minta desain yang mirip website tertentu?",
            a: "Bisa, dan itu justru membantu kami memahami selera Anda. Kirim saja beberapa contoh website yang Anda suka saat konsultasi. Kami akan bilang sejak awal kalau ada bagian yang di luar cakupan paket yang Anda pilih.",
          },
          {
            q: "Kalau saya belum punya konten dan foto sama sekali bagaimana?",
            a: "Itu kondisi yang umum dan tidak menghalangi. Yang paling menentukan justru kesiapan Anda menjawab pertanyaan tentang bisnis Anda, karena dari situ isinya kami susun. Untuk foto, sementara bisa memakai foto pendukung dulu lalu diganti setelah Anda punya yang asli.",
          },
        ],
      },
    ],
  },
  {
    slug: "kesalahan-umum-website-umkm",
    title: "5 Kesalahan Umum Website UMKM (dan Cara Menghindarinya)",
    description:
      "Lima kesalahan yang membuat website UMKM sepi meski tampilannya bagus: kontak susah dicari, loading lambat, tidak mobile friendly, tidak ada CTA, dan bicara soal diri sendiri. Lengkap dengan cara mengeceknya sendiri.",
    date: "2026-06-22",
    category: "Pembuatan Website",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Ilustrasi artikel kesalahan umum website UMKM",
    content: [
      {
        type: "p",
        text: "Websitenya sudah jadi. Tampilannya bagus, warnanya sesuai brand, fotonya rapi. Tapi sudah jalan beberapa bulan dan pesan yang masuk lewat website bisa dihitung jari. Anda mulai curiga jangan-jangan website memang tidak berguna untuk bisnis seperti Anda.",
      },
      {
        type: "p",
        text: "Biasanya bukan itu masalahnya. Ada lima kesalahan yang berulang kali kami temui, dan semuanya tidak kelihatan dari mata pemilik bisnis, karena Anda sudah tahu isi website Anda sendiri. Pengunjung tidak. Berikut kelimanya, lengkap dengan cara mengeceknya sendiri hari ini juga.",
      },
      { type: "h2", text: "1. Kontak yang harus dicari dulu" },
      {
        type: "p",
        text: "Ini yang paling sering, dan paling mahal. Nomor WhatsApp cuma ada di halaman Kontak, yang cuma bisa dibuka lewat menu. Artinya pengunjung yang sudah tertarik harus berhenti membaca, mencari menu, memilih halaman, lalu menyalin nomor. Setiap langkah itu adalah kesempatan dia berubah pikiran.",
      },
      {
        type: "p",
        text: "Aturannya sederhana: di layar mana pun pengunjung berhenti, cara menghubungi Anda harus terlihat tanpa perlu mencari. Tombol WhatsApp mengambang yang selalu ada di pojok adalah cara termurah menyelesaikan ini.",
      },
      {
        type: "quote",
        text: "Pengunjung tidak pernah bilang website Anda membingungkan. Mereka hanya pergi, dan Anda tidak pernah tahu.",
      },
      { type: "h2", text: "2. Loading lambat karena gambar tidak dikompres" },
      {
        type: "p",
        text: "Foto langsung dari kamera ponsel bisa 4 MB per gambar. Kalau halaman Anda memuat sepuluh foto seperti itu, pengunjung harus mengunduh 40 MB cuma untuk melihat beranda Anda. Di jaringan seluler yang biasa-biasa saja, itu belasan detik, dan kuota mereka ikut habis.",
      },
      {
        type: "p",
        text: "Padahal foto itu di layar cuma ditampilkan selebar 800 piksel. Dikompres ke format WebP, ukurannya bisa turun drastis tanpa perbedaan yang kelihatan mata. Ini pekerjaan sekali yang efeknya permanen.",
      },
      { type: "h2", text: "3. Berantakan di ponsel" },
      {
        type: "p",
        text: "Website dibuat dan diperiksa di layar laptop, lalu di-approve dari layar laptop juga. Padahal mayoritas pengunjung Anda datang dari ponsel. Yang terjadi di layar kecil sering tidak pernah dilihat siapa pun: teks kekecilan, tombol terlalu rapat sehingga salah pencet, tabel yang harus digeser ke samping, atau gambar yang menutupi tulisan.",
      },
      {
        type: "p",
        text: "Mobile friendly bukan sekadar \"muat di layar kecil\", tapi nyaman dipakai dengan satu jempol sambil berdiri di angkot.",
      },
      {
        type: "p",
        text: "Cara mengeceknya tidak perlu alat khusus. Buka website Anda di ponsel, lalu coba lakukan hal yang Anda harapkan dilakukan pengunjung, misalnya menemukan harga lalu mengirim pesan. Kalau Anda sendiri sampai perlu memperbesar layar dengan dua jari, pengunjung Anda juga.",
      },
      { type: "h2", text: "4. Tidak ada ajakan yang jelas di akhir" },
      {
        type: "p",
        text: "Banyak halaman berakhir begitu saja setelah penjelasan selesai. Pengunjung sudah tertarik, sudah yakin, lalu sampai di bawah halaman dan tidak ada apa-apa. Dia tidak akan berinisiatif mencari sendiri. Dia akan menutup tab.",
      },
      {
        type: "p",
        text: "Tiap halaman harus bisa menjawab satu pertanyaan: setelah membaca ini, pengunjung diminta melakukan apa? Satu ajakan yang jelas, bukan lima pilihan sekaligus. Terlalu banyak pilihan sama saja dengan tidak ada pilihan.",
      },
      { type: "h2", text: "5. Bicara soal diri sendiri, bukan soal pembaca" },
      {
        type: "p",
        text: "Ini yang paling halus dan paling sering luput. Beranda dibuka dengan \"Kami adalah perusahaan yang berdiri sejak 2015 dengan komitmen memberikan pelayanan terbaik\". Kalimat itu benar, tapi pengunjung tidak sedang mencari itu. Dia sedang mencari jawaban apakah masalahnya bisa Anda selesaikan.",
      },
      {
        type: "p",
        text: "Bandingkan dengan \"Atap bocor dan takut salah pilih tukang? Kami kerjakan sampai beres, dengan garansi setahun\". Isinya sama-sama tentang Anda, tapi masuknya lewat masalah pembaca. Profil perusahaan tetap penting, tapi tempatnya bukan di kalimat pertama.",
      },
      { type: "h2", text: "Cara mengeceknya sendiri dalam sepuluh menit" },
      {
        type: "p",
        text: "Anda tidak perlu ahli untuk menemukan kelima masalah ini. Lakukan ini sekarang:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Buka website Anda dari ponsel sendiri, pakai kuota, bukan wifi kantor. Hitung berapa detik sampai tampil.",
          "Minta orang yang belum pernah lihat website Anda untuk membukanya, lalu diam saja perhatikan. Jangan dibantu. Lihat di mana dia bingung.",
          "Dari halaman mana pun, hitung berapa kali harus menyentuh layar sampai bisa mengirim WhatsApp ke Anda. Lebih dari dua, terlalu jauh.",
          "Baca kalimat pertama di beranda Anda. Kalau diawali kata \"Kami\", pertimbangkan menulis ulang dari sisi pembaca.",
          "Cek kecepatannya gratis lewat PageSpeed Insights dari Google, lalu perbaiki gambar yang dilaporkan kebesaran.",
        ],
      },
      {
        type: "p",
        text: "Kabar baiknya, kelimanya bisa diperbaiki di website yang sudah jadi tanpa membangun ulang dari nol. Kalau setelah mengecek ternyata banyak yang perlu dibenahi dan Anda lebih suka menyerahkannya ke orang lain, tim ModernWeb bisa bantu. Ceritakan saja kondisinya lewat WhatsApp, gratis, dan kami akan bilang terus terang kalau website Anda sebenarnya sudah cukup baik.",
      },
      {
        type: "faq",
        items: [
          {
            q: "Website saya sepi, apakah pasti karena kesalahan ini?",
            a: "Belum tentu. Kesalahan ini membuat pengunjung yang sudah datang jadi pergi. Kalau memang belum ada yang datang sama sekali, masalahnya beda, yaitu belum ada yang tahu website Anda ada. Cek dulu di Google Analytics atau Search Console apakah ada pengunjungnya.",
          },
          {
            q: "Berapa detik loading yang masih bisa diterima?",
            a: "Di bawah tiga detik di jaringan seluler sudah cukup baik untuk website profil bisnis. Di atas lima detik, sebagian besar pengunjung pergi sebelum halaman Anda sempat tampil.",
          },
          {
            q: "Apakah tombol WhatsApp mengambang tidak mengganggu tampilan?",
            a: "Kalau ukurannya wajar dan tidak menutupi teks, justru sebaliknya. Pengunjung yang belum tertarik akan mengabaikannya, dan yang sudah tertarik tidak perlu mencari. Yang mengganggu itu popup yang menutupi seluruh layar, bukan tombol kecil di pojok.",
          },
          {
            q: "Bisakah kesalahan ini diperbaiki tanpa bikin website baru?",
            a: "Sebagian besar bisa. Kompres gambar, tambah tombol kontak, dan tulis ulang teks adalah pekerjaan ringan. Yang biasanya makan waktu adalah kalau struktur halamannya memang tidak dirancang untuk layar kecil sejak awal.",
          },
        ],
      },
    ],
  },
  {
    slug: "kenapa-bisnis-butuh-website",
    title: "Kenapa Bisnis Anda Butuh Website di 2026",
    description:
      "Calon pelanggan mencari nama bisnis Anda di Google sebelum memutuskan membeli. Apa yang mereka temukan menentukan lanjut atau tidak. Ini alasan website masih jadi aset penting di 2026, plus tanda bisnis Anda sudah butuh sekarang.",
    date: "2026-06-15",
    category: "Digitalisasi Bisnis",
    image: "https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Ilustrasi artikel kenapa bisnis butuh website",
    content: [
      {
        type: "p",
        text: "Ada calon pelanggan yang baru saja mendengar nama bisnis Anda dari temannya. Dia tertarik. Hal pertama yang dia lakukan bukan menelepon Anda, melainkan mengetik nama bisnis Anda di Google, sambil duduk di kursinya, dalam waktu kurang dari sepuluh detik.",
      },
      {
        type: "p",
        text: "Apa yang dia temukan di layar itulah yang menentukan dia lanjut atau berhenti. Artikel ini membahas apa yang sebenarnya terjadi di detik-detik tersebut, kenapa akun media sosial saja sering tidak cukup, dan bagaimana mengetahui apakah bisnis Anda memang sudah butuh website atau belum.",
      },
      { type: "h2", text: "Yang terjadi saat orang mencari nama bisnis Anda" },
      {
        type: "p",
        text: "Hasil pencarian itu punya tiga kemungkinan, dan ketiganya berbeda jauh akibatnya. Kalau yang muncul website resmi Anda, calon pelanggan merasa berhadapan dengan bisnis yang sungguhan. Kalau yang muncul cuma akun media sosial, dia masih ragu tapi biasanya lanjut mengecek. Kalau tidak ada apa-apa sama sekali, dia menyimpulkan sendiri bahwa bisnis Anda kecil atau sudah tidak aktif.",
      },
      {
        type: "p",
        text: "Yang perlu digarisbawahi: kesimpulan itu diambil tanpa Anda pernah tahu. Tidak ada pesan masuk yang bertanya \"apakah usaha ini masih jalan?\". Orangnya hanya pindah ke pesaing Anda yang websitenya ketemu.",
      },
      { type: "h2", text: "Website adalah satu-satunya aset yang benar-benar milik Anda" },
      {
        type: "p",
        text: "Akun media sosial itu seperti berjualan di lapak yang Anda sewa di dalam mal orang lain. Ramai memang, tapi aturan mainnya bukan Anda yang menentukan. Pemilik mal bisa mengubah tata letak, menaikkan biaya promosi, memindahkan lapak Anda ke pojok yang sepi, bahkan menutup lapak Anda karena kesalahpahaman sistem, tanpa perlu izin siapa pun.",
      },
      {
        type: "p",
        text: "Website dengan domain sendiri adalah ruko yang Anda beli. Alamatnya tetap, isinya Anda yang atur, dan tidak ada algoritma yang tiba-tiba memutuskan pelanggan Anda tidak boleh melihatnya. Kalau suatu hari sebuah platform media sosial surut, dan ini sudah berkali-kali terjadi, pelanggan Anda tetap tahu ke mana harus mencari.",
      },
      {
        type: "quote",
        text: "Media sosial itu lapak sewaan di mal orang lain. Website adalah ruko yang Anda beli sendiri.",
      },
      { type: "h2", text: "Bekerja 24 jam tanpa tambahan karyawan" },
      {
        type: "p",
        text: "Pertanyaan yang sama akan ditanyakan berulang kali oleh calon pelanggan yang berbeda: harganya berapa, lokasinya di mana, bisa kirim ke kota saya tidak, cara pesannya bagaimana. Selama ini Anda atau tim Anda menjawabnya satu per satu lewat chat, dan jawabannya sama terus.",
      },
      {
        type: "p",
        text: "Website memindahkan jawaban itu ke tempat yang bisa dibaca kapan saja, termasuk jam sebelas malam saat Anda sudah tidur. Pesan yang akhirnya masuk ke WhatsApp Anda jadi lebih berkualitas, karena orangnya sudah membaca harga dan tetap menghubungi. Artinya dia sudah setengah yakin sebelum ngobrol.",
      },
      { type: "h2", text: "\"Bisnis saya kecil, apa perlu website?\"" },
      {
        type: "p",
        text: "Ini pertanyaan yang paling sering kami dengar, dan jawabannya jujur saja: belum tentu perlu. Kalau semua pelanggan Anda datang dari mulut ke mulut di satu kampung yang sama, dan Anda memang tidak berniat melayani orang di luar itu, website tidak akan banyak mengubah keadaan.",
      },
      {
        type: "p",
        text: "Tapi ukuran bisnis sebenarnya bukan penentunya. Yang menentukan adalah apakah calon pelanggan Anda perlu mencari tahu dulu sebelum memutuskan. Warung nasi di pinggir jalan tidak perlu dicari tahu, orang tinggal masuk. Jasa desain interior, katering pernikahan, atau bengkel spesialis jelas perlu, karena orang mengeluarkan uang besar dan ingin yakin dulu.",
      },
      { type: "h2", text: "Tanda bisnis Anda sudah butuh website sekarang" },
      {
        type: "p",
        text: "Daripada menebak, cocokkan dengan daftar ini. Kalau tiga atau lebih terasa familiar, kemungkinan besar Anda sudah kehilangan calon pelanggan tanpa sadar:",
      },
      {
        type: "list",
        items: [
          "Anda sering mengetik jawaban yang sama berulang kali di chat, terutama soal harga dan cara pesan.",
          "Calon pelanggan meminta \"portofolionya ada di mana?\" dan Anda mengirim foto satu per satu lewat WhatsApp.",
          "Anda pernah kehilangan proyek karena calon klien merasa bisnis Anda kurang meyakinkan dibanding pesaing.",
          "Bisnis Anda melayani pembeli dari luar kota, tapi tidak ada tempat yang menjelaskan cakupan layanan dan ongkos kirim.",
          "Anda ingin memasang iklan, tapi bingung mau mengarahkan orang yang klik iklannya ke mana.",
        ],
      },
      {
        type: "p",
        text: "Kalau tidak ada satu pun yang cocok, tidak apa-apa. Simpan uangnya dulu, pakai untuk hal lain yang lebih mendesak. Website akan tetap ada saat Anda benar-benar membutuhkannya nanti.",
      },
      {
        type: "p",
        text: "Kalau ternyata beberapa poin di atas terasa mengena dan Anda ingin mulai tanpa ribet, tim ModernWeb bisa bantu. Paket Startup mulai Rp 1.499.000 untuk 3 halaman dengan pengerjaan sekitar 5 hari, sudah termasuk hosting dan domain. Ngobrol dulu lewat WhatsApp juga boleh, gratis dan tanpa keharusan lanjut.",
      },
      {
        type: "faq",
        items: [
          {
            q: "Apakah website masih relevan kalau semua orang sekarang main media sosial?",
            a: "Relevan, karena tugasnya berbeda. Media sosial bagus untuk membuat orang tahu bisnis Anda ada. Website adalah tempat mereka memastikan bisnis Anda layak dipercaya sebelum mengeluarkan uang. Keduanya saling melengkapi, bukan saling menggantikan.",
          },
          {
            q: "Berapa biaya yang harus saya siapkan untuk punya website?",
            a: "Untuk website bisnis sederhana berisi profil, layanan, dan kontak, di ModernWeb mulai Rp 1.499.000 sudah termasuk hosting dan domain. Biaya rutin setelahnya adalah perpanjangan hosting dan domain tiap tahun.",
          },
          {
            q: "Berapa lama sampai website saya mendatangkan pelanggan?",
            a: "Kalau pengunjungnya datang dari link yang Anda bagikan sendiri, misalnya di bio Instagram atau kartu nama, efeknya bisa terasa langsung. Kalau mengandalkan pencarian Google, umumnya butuh beberapa bulan karena Google perlu waktu mengenali website baru.",
          },
          {
            q: "Saya tidak paham teknologi, apakah nanti bisa mengurusnya sendiri?",
            a: "Untuk website profil sederhana, biasanya tidak ada yang perlu Anda urus sehari-hari. Kalau isinya sering berubah, misalnya harga atau artikel, pilih paket yang sudah termasuk CMS supaya bisa mengubah sendiri tanpa bantuan developer.",
          },
        ],
      },
    ],
  },
  {
    slug: "company-profile-vs-landing-page",
    title: "Company Profile vs Landing Page: Mana yang Anda Butuhkan?",
    description:
      "Company profile itu rumah bisnis Anda, landing page itu stan pameran untuk satu kampanye. Bedanya di tujuan, jumlah pintu keluar, dan cara mengukurnya. Panduan memilih yang sesuai kebutuhan Anda sekarang.",
    date: "2026-06-08",
    category: "Pembuatan Website",
    image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1605&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Ilustrasi artikel perbandingan company profile dan landing page",
    content: [
      {
        type: "p",
        text: "Anda sudah memutuskan bikin website, lalu muncul pertanyaan berikutnya yang tidak kalah membingungkan: yang dibuat itu company profile atau landing page? Dua-duanya website, dua-duanya berisi penjelasan tentang bisnis Anda, dan dari luar tampak mirip.",
      },
      {
        type: "p",
        text: "Bedanya bukan di tampilan, melainkan di tugas yang Anda berikan ke halaman itu. Salah memilih membuat uang keluar untuk sesuatu yang tidak menjawab kebutuhan Anda. Artikel ini menjelaskan bedanya lewat contoh nyata, dan memberi cara menentukan mana yang Anda butuhkan sekarang.",
      },
      { type: "h2", text: "Bedanya seperti toko dan stan pameran" },
      {
        type: "p",
        text: "Company profile itu toko Anda. Ada papan nama, etalase, ruang pamer, meja kasir, dan ruang tamu untuk ngobrol. Orang boleh masuk sekadar melihat-lihat, membandingkan, atau memastikan bisnis Anda beneran ada. Tokonya buka terus, sepanjang tahun, untuk siapa saja.",
      },
      {
        type: "p",
        text: "Landing page itu stan pameran. Dibangun untuk satu acara, memajang satu produk unggulan, dengan satu penjaga stan yang tugasnya cuma satu: mengumpulkan kontak orang yang tertarik. Tidak ada ruang pamer, tidak ada ruang tamu, tidak ada pintu ke bagian lain. Setelah acaranya selesai, stannya dibongkar.",
      },
      {
        type: "quote",
        text: "Company profile itu toko Anda yang buka sepanjang tahun. Landing page itu stan pameran untuk satu acara.",
      },
      { type: "h2", text: "Company profile: dibuka orang yang sedang menilai Anda" },
      {
        type: "p",
        text: "Pengunjung company profile datang dengan pertanyaan \"bisnis ini bisa dipercaya tidak?\". Biasanya mereka mendengar nama Anda dari kenalan, dari kartu nama, atau menemukannya di Google, lalu ingin memastikan sebelum menghubungi.",
      },
      {
        type: "p",
        text: "Karena itu isinya menyeluruh: profil, layanan, portofolio, testimoni, dan kontak. Pengunjung dibiarkan menjelajah sesuai keingintahuannya, karena setiap orang meyakinkan dirinya lewat jalur yang berbeda. Ada yang langsung ke portofolio, ada yang mengecek alamat kantor dulu.",
      },
      {
        type: "p",
        text: "Company profile juga aset jangka panjang. Dia bekerja diam-diam bertahun-tahun, muncul tiap kali nama bisnis Anda dicari, tanpa perlu Anda sentuh lagi.",
      },
      { type: "h2", text: "Landing page: dibuka orang yang baru saja klik iklan" },
      {
        type: "p",
        text: "Pengunjung landing page datang dari satu sumber yang Anda tentukan, biasanya iklan berbayar, dan mereka belum kenal Anda sama sekali. Perhatian mereka pendek, jadi halaman ini punya satu pekerjaan: mengubah klik itu jadi kontak, sebelum mereka pergi.",
      },
      {
        type: "p",
        text: "Karena itu bentuknya justru sengaja dibatasi. Tidak ada menu di atas, tidak ada link ke halaman lain, tidak ada blog. Semua pintu ditutup kecuali satu, yaitu tombol aksinya. Ini terdengar tidak ramah, tapi memang itu maksudnya. Tiap pilihan tambahan adalah kesempatan pengunjung teralihkan lalu hilang.",
      },
      {
        type: "p",
        text: "Landing page juga berumur pendek dan selalu berpasangan dengan biaya iklan. Tanpa iklan yang mengalirkan orang ke sana, halaman ini tidak akan didatangi siapa pun, karena dia memang tidak dirancang untuk ditemukan lewat Google.",
      },
      {
        type: "p",
        text: "Konsekuensi lain yang jarang disadari: landing page menuntut Anda punya penawaran yang benar-benar spesifik. \"Jasa desain interior\" terlalu luas untuk satu halaman. \"Desain interior apartemen studio, selesai 3 minggu\" baru punya cukup fokus untuk membuat orang mengisi kontak. Kalau penawaran Anda belum setajam itu, landing page akan terasa kosong.",
      },
      { type: "h2", text: "Cara menentukan mana yang Anda butuhkan" },
      {
        type: "p",
        text: "Jawab satu pertanyaan ini: dari mana pengunjung Anda akan datang? Kalau jawabannya \"orang yang mencari nama bisnis saya, atau yang saya kasih kartu nama\", Anda butuh company profile. Kalau jawabannya \"orang yang saya bayar iklannya untuk datang ke satu penawaran spesifik\", Anda butuh landing page.",
      },
      {
        type: "p",
        text: "Kalau Anda belum punya anggaran iklan sama sekali, jawabannya hampir pasti company profile. Landing page tanpa iklan itu seperti stan pameran yang didirikan di tengah kebun: rapi, tapi tidak ada yang lewat.",
      },
      { type: "h3", text: "Tanda Anda butuh landing page terpisah" },
      {
        type: "list",
        items: [
          "Anda sedang atau akan memasang iklan berbayar ke satu produk atau promo tertentu.",
          "Anda ingin mengukur dengan jelas berapa biaya iklan yang keluar untuk mendapat satu calon pembeli.",
          "Penawaran Anda musiman dan tidak cocok dipajang permanen di website utama, misalnya promo lebaran.",
          "Anda ingin menguji dua versi penawaran untuk melihat mana yang lebih banyak menghasilkan kontak.",
        ],
      },
      { type: "h2", text: "Banyak bisnis akhirnya butuh keduanya" },
      {
        type: "p",
        text: "Urutannya hampir selalu sama: company profile dulu sebagai rumah, baru landing page menyusul saat mulai beriklan. Keduanya juga saling menopang. Orang yang klik iklan Anda dan ragu-ragu sering mencari nama bisnis Anda di Google untuk memastikan, dan di situlah company profile menyelamatkan penjualannya.",
      },
      {
        type: "p",
        text: "Kalau Anda belum yakin masuk kategori mana, ceritakan saja rencana Anda ke tim ModernWeb lewat WhatsApp. Company profile 3 halaman mulai Rp 1.499.000 dengan pengerjaan sekitar 5 hari. Kalau ternyata yang Anda butuhkan cuma landing page, kami akan bilang apa adanya. Konsultasinya gratis.",
      },
      {
        type: "faq",
        items: [
          {
            q: "Apakah landing page bisa jadi bagian dari company profile?",
            a: "Bisa, dan itu praktik yang umum. Landing page dibuat sebagai halaman terpisah di domain yang sama, tanpa menu navigasi, khusus untuk menerima pengunjung dari iklan. Website utama Anda tetap berjalan seperti biasa.",
          },
          {
            q: "Mana yang lebih murah?",
            a: "Landing page biasanya lebih murah karena cuma satu halaman. Tapi perbandingannya kurang adil, sebab landing page hampir selalu perlu ditemani biaya iklan yang jalan terus, sedangkan company profile bekerja tanpa biaya tambahan.",
          },
          {
            q: "Apakah landing page bagus untuk SEO?",
            a: "Umumnya tidak, dan memang bukan itu tujuannya. Isinya sedikit dan fokusnya konversi, bukan menjawab pencarian. Kalau Anda ingin ditemukan lewat Google tanpa membayar iklan, yang Anda butuhkan company profile berisi konten yang menjawab pertanyaan calon pelanggan.",
          },
          {
            q: "Berapa lama landing page biasanya dipakai?",
            a: "Selama kampanyenya berjalan, bisa beberapa minggu sampai beberapa bulan. Setelah promonya berakhir, halaman itu biasanya dimatikan atau diarahkan ke halaman lain supaya pengunjung tidak menemukan penawaran yang sudah kedaluwarsa.",
          },
        ],
      },
    ],
  },
  {
    slug: "pentingnya-maintenance-website",
    title: "Pentingnya Maintenance Website Setelah Live",
    description:
      "Website bukan proyek sekali jadi. Apa saja yang sebenarnya dirawat, kenapa website yang dibiarkan pelan-pelan melambat dan rentan diretas, dan mana yang bisa Anda kerjakan sendiri tanpa bayar siapa pun.",
    date: "2026-06-01",
    category: "Pembuatan Website",
    image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Ilustrasi artikel pentingnya maintenance website",
    content: [
      {
        type: "p",
        text: "Website itu bukan lukisan yang sekali dipasang lalu selesai. Dia lebih mirip mobil operasional: kelihatannya baik-baik saja sampai suatu hari mogok di tengah jalan, dan biasanya di waktu yang paling tidak enak.",
      },
      {
        type: "p",
        text: "Masalahnya, pembusukan itu tidak kelihatan. Website yang dibiarkan tidak berubah tampilannya sedikit pun hari ini, tapi diam-diam melambat, menumpuk lubang keamanan, dan turun peringkat. Artikel ini menjelaskan apa yang sebenarnya dirawat, mana yang bisa Anda kerjakan sendiri gratis, dan kapan sebaiknya menyerahkannya ke orang lain.",
      },
      { type: "h2", text: "Kenapa website bisa rusak sendiri padahal tidak disentuh?" },
      {
        type: "p",
        text: "Ini pertanyaan yang wajar. Jawabannya: website Anda tidak berdiri sendiri. Dia berdiri di atas tumpukan perangkat lunak yang terus berubah, dan yang berubah itu bukan website Anda, melainkan dunia di sekitarnya.",
      },
      {
        type: "p",
        text: "Browser diperbarui tiap bulan dan kadang mengubah cara halaman ditampilkan. Standar keamanan naik, dan sertifikat yang tahun lalu aman jadi dianggap usang. Plugin yang Anda pakai ditemukan celahnya, lalu celah itu diumumkan ke publik, dan sejak saat itu semua website yang belum diperbarui jadi sasaran empuk. Anda diam, tapi tanahnya bergeser.",
      },
      {
        type: "quote",
        text: "Website itu seperti kendaraan: yang rutin dirawat selalu lebih murah daripada yang menunggu mogok.",
      },
      { type: "h2", text: "Apa saja yang sebenarnya dirawat" },
      {
        type: "p",
        text: "Maintenance sering terdengar kabur, seperti biaya yang tidak jelas untuk apa. Padahal isinya konkret:",
      },
      {
        type: "list",
        items: [
          "Update keamanan. Menambal celah yang baru ditemukan, sebelum ada yang memakainya untuk masuk. Ini bagian yang paling mendesak dan paling sering ditunda.",
          "Backup berkala. Salinan website yang disimpan terpisah, supaya kalau terjadi apa-apa Anda punya titik pulih. Backup yang tidak pernah diuji sama saja dengan tidak punya backup.",
          "Pemantauan uptime. Sistem yang memberi tahu saat website mati, supaya Anda tahu dari alat, bukan dari pelanggan yang komplain.",
          "Perbaikan isi. Harga yang sudah berubah, layanan yang sudah tidak ditawarkan, atau nomor kontak lama yang masih terpasang.",
          "Pengecekan link dan form. Tombol yang mengarah ke halaman mati, atau form kontak yang diam-diam berhenti mengirim email.",
        ],
      },
      { type: "h2", text: "Yang paling sering rusak diam-diam: form kontak" },
      {
        type: "p",
        text: "Dari semua hal di atas, ini yang paling sering kami temukan dan paling merugikan. Form kontak berhenti mengirim email karena pengaturan di sisi penyedia email berubah, dan tidak ada yang menyadarinya.",
      },
      {
        type: "p",
        text: "Yang bikin pahit: tidak ada tanda apa pun. Pengunjung mengisi form, melihat tulisan \"pesan terkirim\", dan menunggu balasan yang tidak akan pernah datang. Anda mengira website sedang sepi, padahal calon pelanggan mengira Anda mengabaikan mereka. Ini bisa berlangsung berbulan-bulan.",
      },
      {
        type: "p",
        text: "Karena itu kirim pesan uji lewat form Anda sendiri sebulan sekali. Butuh dua menit, dan ini kebiasaan paling menguntungkan di seluruh daftar ini.",
      },
      { type: "h2", text: "Dampaknya ke Google" },
      {
        type: "p",
        text: "Website yang tidak dirawat pelan-pelan kehilangan peringkat, dan turunnya bertahap sehingga tidak terasa. Halaman jadi lebih lambat dari pesaing yang lebih baru, sertifikat HTTPS yang kedaluwarsa membuat browser memasang peringatan merah yang bikin pengunjung langsung mundur, dan link mati membuat Google menganggap website Anda terbengkalai.",
      },
      {
        type: "p",
        text: "Kasus terburuknya adalah website yang diretas lalu disisipi halaman judi atau obat-obatan tanpa Anda sadari. Kalau Google menemukannya duluan, website Anda bisa ditandai berbahaya, dan memulihkan nama baik itu jauh lebih lama daripada mencegahnya.",
      },
      { type: "h2", text: "Mana yang bisa Anda kerjakan sendiri?" },
      {
        type: "p",
        text: "Tidak semua perlu dibayar. Beberapa hal ini gratis dan cuma butuh kedisiplinan:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Sebulan sekali, kirim pesan uji lewat form kontak dan klik tombol WhatsApp Anda sendiri.",
          "Sebulan sekali, buka website Anda dari ponsel dengan kuota, dan rasakan apakah masih terasa cepat.",
          "Pasang pengingat kalender untuk jatuh tempo domain dan hosting, jauh-jauh hari sebelum tanggalnya.",
          "Tiga bulan sekali, baca ulang halaman layanan dan harga Anda. Isi yang sudah tidak benar lebih merusak kepercayaan daripada website yang lambat.",
        ],
      },
      {
        type: "p",
        text: "Sisanya, terutama update keamanan dan backup, sebaiknya memang diserahkan ke orang yang mengerti, karena kesalahan di bagian itu akibatnya tidak sepadan dengan penghematannya.",
      },
      {
        type: "p",
        text: "Setiap paket ModernWeb sudah termasuk masa maintenance, mulai 1 minggu di Paket Startup sampai 2 bulan plus prioritas penanganan di Paket Business. Setelah masa itu habis, website Anda tetap jalan dan tim kami tetap bisa dihubungi kalau ada apa-apa. Mau tanya kondisi website Anda sekarang? Silakan chat, gratis.",
      },
      {
        type: "faq",
        items: [
          {
            q: "Kalau maintenance tidak diperpanjang, website saya langsung mati?",
            a: "Tidak. Website tetap jalan selama hosting dan domain masih aktif. Yang berhenti adalah perawatan rutinnya, artinya update keamanan dan backup tidak berjalan otomatis lagi. Risikonya menumpuk pelan-pelan, bukan langsung terasa.",
          },
          {
            q: "Website saya cuma profil sederhana, apa tetap perlu dirawat?",
            a: "Kebutuhannya lebih ringan, tapi tidak nol. Yang tetap wajib adalah memastikan form kontak berfungsi, sertifikat HTTPS aktif, serta domain dan hosting tidak lupa diperpanjang. Tiga hal itu saja sudah menutup sebagian besar risiko.",
          },
          {
            q: "Seberapa sering sebaiknya website di-backup?",
            a: "Untuk website profil yang jarang berubah, sebulan sekali biasanya cukup. Kalau isinya sering diperbarui atau ada pemesanan masuk, sebaiknya harian. Yang lebih penting: pastikan backup-nya disimpan terpisah dari servernya dan pernah dicoba dipulihkan.",
          },
          {
            q: "Bagaimana saya tahu website saya sedang bermasalah?",
            a: "Tanda yang gampang dikenali: muncul peringatan \"tidak aman\" di browser, website terasa makin lambat, atau ada halaman aneh yang tidak pernah Anda buat muncul di hasil pencarian Google. Search Console juga akan mengirim email kalau Google menemukan masalah keamanan.",
          },
        ],
      },
    ],
  },
  {
    slug: "apa-itu-domain-dan-hosting",
    title: "Apa Itu Domain dan Hosting? Panduan untuk Pemilik Bisnis",
    description:
      "Domain itu alamat, hosting itu tanah dan bangunannya. Penjelasan sederhana untuk pemilik bisnis: bedanya apa, kenapa harus diperpanjang tiap tahun, cara memilih nama, dan kenapa akunnya wajib atas nama Anda sendiri.",
    date: "2026-05-25",
    category: "Domain & Hosting",
    image: "https://images.unsplash.com/photo-1669630127566-adeac5492686?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Ilustrasi artikel penjelasan domain dan hosting",
    content: [
      {
        type: "p",
        text: "Biasanya kebingungan ini datang di satu momen yang sama: setahun setelah website jadi, masuk tagihan bertuliskan \"perpanjangan domain dan hosting\". Anda merasa sudah membayar lunas tahun lalu, dan sekarang muncul tagihan lagi untuk dua hal yang namanya pun tidak Anda pahami.",
      },
      {
        type: "p",
        text: "Tenang, ini tidak serumit kelihatannya, dan Anda tidak sedang ditipu. Artikel ini menjelaskan keduanya dengan bahasa manusia, kenapa bayarnya tiap tahun, cara memilih nama yang benar, dan satu hal yang paling sering merugikan pemilik bisnis tapi jarang diberitahukan.",
      },
      { type: "h2", text: "Domain itu alamat, hosting itu tanah dan bangunannya" },
      {
        type: "p",
        text: "Anggap website Anda sebuah toko fisik. Hosting adalah tanah dan bangunannya: tempat semua barang dagangan, rak, dan isi toko Anda benar-benar berada secara fisik. Di dunia digital, \"barang\" itu adalah file website Anda, yaitu halaman, gambar, dan datanya, yang disimpan di komputer khusus bernama server yang menyala 24 jam.",
      },
      {
        type: "p",
        text: "Domain adalah alamat tokonya, misalnya bisnisanda.com. Fungsinya persis seperti alamat rumah: memberi tahu orang harus ke mana. Tanpa alamat, toko Anda tetap ada, cuma tidak ada yang bisa menemukannya kecuali hafal koordinatnya.",
      },
      {
        type: "quote",
        text: "Hosting itu tanah dan bangunan tokonya. Domain itu alamat yang membuat orang bisa menemukannya.",
      },
      {
        type: "p",
        text: "Karena keduanya beda barang, keduanya juga bisa dibeli di tempat berbeda dan dipindah sendiri-sendiri. Anda bisa pindah hosting tanpa mengganti alamat, sama seperti memindahkan isi toko ke bangunan baru sambil mempertahankan nama jalan. Sebaliknya, alamat bisa diganti tanpa memindahkan barangnya.",
      },
      { type: "h3", text: "Kenapa harus bayar tiap tahun?" },
      {
        type: "p",
        text: "Karena dua-duanya sewa, bukan beli putus. Domain disewa dari lembaga pencatat nama di internet, dan selama Anda memperpanjang, nama itu tidak bisa diambil siapa pun. Hosting disewa karena servernya perlu listrik, perawatan, dan koneksi internet yang menyala terus.",
      },
      {
        type: "p",
        text: "Yang perlu Anda ingat: kalau domain telat diperpanjang, nama itu bisa dilepas ke publik dan diambil orang lain, termasuk pesaing Anda. Ini terdengar ekstrem tapi benar-benar terjadi. Pasang pengingat di kalender, atau nyalakan perpanjangan otomatis.",
      },
      { type: "h2", text: "Cara memilih nama domain" },
      {
        type: "p",
        text: "Nama domain itu ibarat nama jalan toko Anda, dan mengubahnya nanti itu mahal karena semua kartu nama, spanduk, dan link yang sudah tersebar ikut jadi salah. Jadi pikirkan sekali di depan:",
      },
      {
        type: "list",
        items: [
          "Sependek mungkin dan gampang dieja lewat telepon. Kalau Anda harus mengeja huruf per huruf, namanya terlalu rumit.",
          "Hindari tanda hubung dan angka. \"toko-kue-2\" gampang salah ketik dan terkesan kurang meyakinkan.",
          "Pakai nama brand Anda, bukan deretan kata kunci. \"jasabikinwebsitemurahbandung\" tidak membuat Anda naik peringkat, cuma bikin susah diingat.",
          "Cek dulu apakah namanya bentrok dengan merek yang sudah ada, supaya tidak bermasalah di kemudian hari.",
        ],
      },
      { type: "h3", text: "Pilih .com atau .id?" },
      {
        type: "p",
        text: "Kalau target pasar Anda orang Indonesia, .com dan .id sama bagusnya, dan Google tidak memihak salah satunya. Bedanya lebih ke rasa: .id terasa jelas lokal dan biasanya masih banyak nama bagus yang tersedia, sementara .com paling dikenal orang dan jadi tebakan default saat orang mengetik langsung di browser. Kalau nama .com Anda sudah diambil orang, .id adalah pilihan yang sepenuhnya masuk akal.",
      },
      { type: "h2", text: "Hosting yang bagus itu yang bagaimana?" },
      {
        type: "p",
        text: "Untuk website profil bisnis biasa, Anda tidak butuh hosting mahal. Yang benar-benar berpengaruh cuma tiga: lokasi servernya sebaiknya dekat dengan pengunjung Anda, uptime-nya tinggi (artinya jarang mati), dan ada backup otomatis. Sisanya, angka-angka besar yang dipajang di halaman penjualan hosting, jarang terasa bedanya untuk website sekelas ini.",
      },
      {
        type: "p",
        text: "Yang lebih sering bikin website lambat justru bukan hostingnya, melainkan gambar yang tidak dikompres. Foto 4 MB langsung dari kamera ponsel akan terasa berat di hosting semahal apa pun.",
      },
      { type: "h2", text: "Ini yang paling penting: akunnya harus atas nama Anda" },
      {
        type: "p",
        text: "Banyak pemilik bisnis menyerahkan pembelian domain dan hosting sepenuhnya ke vendor, lalu tidak pernah menerima akunnya. Kelihatannya praktis, sampai suatu hari Anda ingin ganti vendor, atau vendornya menghilang, dan ternyata alamat toko Anda terdaftar atas nama orang lain.",
      },
      {
        type: "p",
        text: "Posisinya jadi seperti menyewa ruko tapi sertifikatnya atas nama makelar. Anda kehilangan hak untuk pindah. Jadi pastikan satu hal ini sejak awal: domain terdaftar atas nama atau email Anda, dan Anda memegang akses ke akunnya, meskipun sehari-hari yang mengurus tetap vendor.",
      },
      {
        type: "p",
        text: "Di ModernWeb, semua paket sudah termasuk hosting dan domain, dan akunnya kami serahkan atas nama Anda saat serah terima, lengkap dengan cara memperpanjangnya. Kalau suatu hari Anda ingin pindah, tidak ada yang menahan. Mau tanya-tanya dulu soal nama domain yang cocok untuk bisnis Anda? Silakan chat, gratis.",
      },
      {
        type: "faq",
        items: [
          {
            q: "Berapa biaya domain dan hosting per tahun?",
            a: "Domain .com atau .id umumnya ratusan ribu per tahun, dan hosting untuk website profil bisnis biasanya juga di kisaran ratusan ribu sampai jutaan per tahun tergantung kapasitasnya. Di paket ModernWeb, keduanya sudah termasuk sehingga Anda tidak perlu membelinya terpisah.",
          },
          {
            q: "Kalau saya ganti vendor website, apakah domain saya ikut hilang?",
            a: "Tidak, selama domainnya terdaftar atas nama Anda. Domain bisa dipindahkan ke penyedia lain tanpa mengganti nama. Yang bermasalah adalah kalau domain didaftarkan atas nama vendor, karena kepindahannya jadi bergantung pada kerelaan mereka.",
          },
          {
            q: "Apakah saya bisa punya email seperti halo@bisnisanda.com?",
            a: "Bisa, dan itu memang salah satu keuntungan punya domain sendiri. Email dengan domain sendiri terlihat jauh lebih meyakinkan di mata calon klien dibanding alamat Gmail biasa.",
          },
          {
            q: "Apa yang terjadi kalau hosting saya habis dan tidak diperpanjang?",
            a: "Website Anda berhenti bisa dibuka, dan setelah masa tenggang tertentu datanya bisa dihapus. Bedanya dengan domain: nama domain yang hangus bisa diambil orang lain, sedangkan hosting yang hangus \"cuma\" menghilangkan isinya, itu pun kalau Anda tidak punya backup.",
          },
        ],
      },
    ],
  },
  {
    slug: "checklist-sebelum-website-live",
    title: "Checklist Sebelum Website Anda Live",
    description:
      "Checklist praktis sebelum website diumumkan ke publik: konten final, kontak yang benar-benar diuji, tampilan di semua layar, kecepatan, SEO dasar, dan akses kepemilikan. Termasuk hal yang paling sering terlewat.",
    date: "2026-05-18",
    category: "Pembuatan Website",
    image: "https://images.unsplash.com/photo-1754548930574-6a995e5eb5a7?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Ilustrasi artikel checklist sebelum website live",
    content: [
      {
        type: "p",
        text: "Website Anda sudah jadi dan rasanya sudah tidak sabar mengumumkannya. Tahan sebentar. Sisihkan satu jam untuk memeriksa daftar ini, karena kesan pertama itu tidak bisa diulang, dan pengunjung awal Anda biasanya justru orang-orang terpenting: kenalan, calon klien, dan pelanggan lama yang penasaran.",
      },
      {
        type: "p",
        text: "Yang paling sering ditemukan di menit-menit terakhir bukan bug rumit, melainkan hal sepele yang memalukan: nomor WhatsApp salah satu digit, atau teks contoh yang lupa dihapus. Checklist ini disusun dari kesalahan yang benar-benar sering kami temui saat serah terima.",
      },
      { type: "h2", text: "1. Konten: cari sisa-sisa teks contoh" },
      {
        type: "p",
        text: "Selama pembuatan, halaman diisi teks sementara supaya tata letaknya kelihatan. Teks itu punya kebiasaan buruk: bersembunyi di tempat yang jarang dilihat, misalnya di bagian bawah halaman kontak atau di deskripsi produk yang ketiga.",
      },
      {
        type: "p",
        text: "Cara tercepat menemukannya: buka tiap halaman, tekan Ctrl+F, lalu cari kata \"lorem\", \"contoh\", \"dummy\", dan \"coming soon\". Baca juga tiap halaman sampai bawah sekali saja, karena mata kita cenderung berhenti di tengah.",
      },
      { type: "h2", text: "2. Kontak: jangan cuma dilihat, harus dicoba" },
      {
        type: "p",
        text: "Ini bagian yang paling mahal kalau salah, karena artinya semua pengunjung yang tertarik tidak bisa menghubungi Anda dan Anda tidak akan pernah tahu. Melihat nomornya benar itu tidak cukup, karena salah satu digit tidak akan kelihatan.",
      },
      {
        type: "p",
        text: "Jadi benar-benar coba semuanya, dari ponsel Anda sendiri. Klik tombol WhatsApp-nya sampai aplikasi terbuka dan pastikan nomornya milik Anda. Kirim satu email uji ke alamat yang tertera. Isi form kontaknya dengan data palsu dan pastikan pesannya benar-benar masuk, termasuk mengecek folder spam.",
      },
      {
        type: "quote",
        text: "Kontak yang salah tidak akan pernah dilaporkan siapa pun. Orangnya cuma pergi, dan Anda mengira website Anda sepi.",
      },
      { type: "h2", text: "3. Tampilan: buka dari ponsel orang lain" },
      {
        type: "p",
        text: "Cek di ponsel, tablet, dan laptop. Tapi yang lebih berguna: pinjam ponsel orang lain, terutama yang layarnya lebih kecil atau ponselnya lebih tua dari milik Anda. Website yang lancar di ponsel baru bisa terasa berat di ponsel kelas menengah, dan itu yang dipakai mayoritas pengunjung.",
      },
      {
        type: "p",
        text: "Perhatikan hal yang gampang luput: tombol yang terlalu rapat sehingga salah pencet, teks yang harus diperbesar dulu, dan gambar yang menutupi tulisan.",
      },
      {
        type: "p",
        text: "Satu lagi yang sering terlupa: coba miringkan ponselnya ke posisi mendatar. Sebagian orang membaca sambil rebahan, dan tata letak yang rapi di posisi tegak kadang berantakan begitu layarnya diputar.",
      },
      { type: "h2", text: "4. Kecepatan dan SEO dasar" },
      {
        type: "p",
        text: "Jalankan PageSpeed Insights sekali sebelum live. Kalau laporannya menunjuk gambar yang kebesaran, kompres dulu, karena itu perbaikan sekali kerja yang efeknya permanen.",
      },
      {
        type: "p",
        text: "Untuk SEO, pastikan tiap halaman punya title dan description sendiri yang tidak seragam, sitemap sudah dikirim ke Google Search Console, dan kalau bisnis Anda melayani area tertentu, Google Business Profile sudah tertaut ke website. Ini fondasi yang jauh lebih murah dipasang sekarang daripada dibenahi setahun lagi.",
      },
      { type: "h2", text: "5. Yang paling sering terlewat: akses kepemilikan" },
      {
        type: "p",
        text: "Ini bukan soal teknis, tapi paling merugikan kalau dilewat, dan biasanya baru terasa dua tahun kemudian saat Anda ingin ganti vendor. Sebelum menganggap proyeknya selesai, pastikan Anda benar-benar memegang kuncinya sendiri:",
      },
      {
        type: "list",
        items: [
          "Domain terdaftar atas nama atau email Anda, bukan atas nama vendor, dan Anda bisa masuk ke akunnya.",
          "Anda tahu kapan domain dan hosting jatuh tempo, dan sudah memasang pengingatnya di kalender.",
          "Akun Google Search Console dan Google Business Profile memakai email Anda, bukan email vendor.",
          "Anda punya salinan file website dan tahu di mana backup-nya disimpan.",
          "Anda tahu cara menghubungi vendor kalau ada masalah, dan apa saja yang masih tercakup masa maintenance.",
        ],
      },
      { type: "h2", text: "Terakhir: minta orang lain yang mencobanya" },
      {
        type: "p",
        text: "Anda sudah melihat website ini ratusan kali, dan itu membuat Anda buta terhadap kebingungan yang dialami orang baru. Minta satu orang yang belum pernah melihatnya, sebaiknya yang mirip calon pelanggan Anda, untuk membukanya. Beri satu tugas, misalnya \"coba cari tahu berapa harganya lalu hubungi saya\".",
      },
      {
        type: "p",
        text: "Lalu diam. Jangan dibantu, jangan dijelaskan. Setiap kali dia ragu atau salah klik, itu adalah masalah nyata yang akan dialami pengunjung Anda nanti, bedanya mereka tidak akan bilang apa-apa.",
      },
      {
        type: "p",
        text: "Di ModernWeb, serah terima selalu melewati checklist ini bersama Anda, termasuk memastikan akun domain dan hosting berpindah atas nama Anda. Kalau Anda punya website yang dibuat pihak lain dan ingin diperiksa dengan daftar yang sama, boleh juga ngobrol dulu lewat WhatsApp, gratis.",
      },
      {
        type: "faq",
        items: [
          {
            q: "Apakah website harus sempurna dulu sebelum live?",
            a: "Tidak, dan menunggu sempurna justru sering membuat website tidak pernah live. Yang wajib benar sebelum diumumkan cuma yang ada di checklist ini, terutama kontak dan konten. Sisanya bisa disempurnakan sambil jalan.",
          },
          {
            q: "Sebaiknya live dulu baru diumumkan, atau langsung dua-duanya?",
            a: "Live dulu, diamkan beberapa hari, dan pakai waktu itu untuk mengecek dari berbagai perangkat sambil meminta beberapa orang mencobanya. Setelah yakin, baru umumkan ke media sosial dan pelanggan.",
          },
          {
            q: "Apa yang harus dicek setelah website live?",
            a: "Beberapa hari setelahnya, cek Search Console apakah halaman Anda sudah mulai terbaca Google, dan pastikan tidak ada laporan error. Cek juga apakah pesan dari form kontak benar-benar masuk, karena masalah pengiriman email sering baru muncul setelah domain aktif.",
          },
          {
            q: "Kalau setelah live ternyata ada yang salah, susah diperbaiki?",
            a: "Biasanya tidak. Salah ketik, ganti foto, atau perbaiki nomor kontak itu pekerjaan menit-menitan. Yang perlu diperhatikan justru kalau harus mengubah alamat halaman setelah live, karena link lama yang sudah tersebar bisa jadi mati.",
          },
        ],
      },
    ],
  },
];

/** Post terurut terbaru → terlama */
export const SORTED_POSTS = [...BLOG_POSTS].sort((a, b) =>
  b.date.localeCompare(a.date),
);

export const POSTS_PER_PAGE = 9;

export function getPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function formatPostDate(iso: string) {
  return new Intl.DateTimeFormat("id-ID", { dateStyle: "long" }).format(
    new Date(iso),
  );
}

/** Daftar kategori unik + jumlah artikelnya (widget sidebar & filter /blog). */
export const BLOG_CATEGORIES = Array.from(
  BLOG_POSTS.reduce(
    (map, post) => map.set(post.category, (map.get(post.category) ?? 0) + 1),
    new Map<string, number>(),
  ),
  ([name, count]) => ({ name, count }),
).sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));

/** Artikel tetangga berdasarkan urutan tanggal (untuk navigasi prev/next). */
export function getAdjacentPosts(slug: string) {
  const index = SORTED_POSTS.findIndex((post) => post.slug === slug);
  return {
    newer: index > 0 ? SORTED_POSTS[index - 1] : undefined,
    older:
      index >= 0 && index < SORTED_POSTS.length - 1
        ? SORTED_POSTS[index + 1]
        : undefined,
  };
}
