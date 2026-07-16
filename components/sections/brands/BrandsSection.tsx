const BRAND_LOGOS = [
  { src: "/assets/logoipsum-1.svg", alt: "Partner 1" },
  { src: "/assets/logoipsum-2.svg", alt: "Partner 2" },
  { src: "/assets/logoipsum-3.svg", alt: "Partner 3" },
  { src: "/assets/logoipsum-4.svg", alt: "Partner 4" },
  { src: "/assets/logoipsum-5.svg", alt: "Partner 5" },
  { src: "/assets/logoipsum-6.svg", alt: "Partner 6" },
  { src: "/assets/logoipsum-3.svg", alt: "Partner 7" },
];

export default function BrandsSection() {
  return (
    <section className="brand-section" id="brands">
      <div className="brand-title">
        <div className="line"></div>
        <p>Dipercaya Oleh Pelaku Bisnis Luar Biasa</p>
        <div className="line"></div>
      </div>
      <div className="brand-container">
        <div className="brand-logos">
          {/* Logo dirender dua kali agar animasi marquee terlihat mulus */}
          {[...BRAND_LOGOS, ...BRAND_LOGOS].map((logo, i) => (
            <img key={i} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>
    </section>
  );
}
