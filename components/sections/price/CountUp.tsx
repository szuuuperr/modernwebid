"use client";

import { useEffect, useRef } from "react";

// Number counter: angka harga naik dari 0 saat kartu pertama kali terlihat.
// Server tetap merender nilai final (SEO & no-JS aman); animasi hanya jalan
// di client setelah elemen masuk viewport, dan di-skip saat
// prefers-reduced-motion. textContent di-update via ref (bukan state) agar
// tidak re-render tiap frame.
type CountUpProps = {
  /** Nilai final berformat, mis. "Rp 1.499.000" */
  value: string;
  className?: string;
};

export default function CountUp({ value, className }: CountUpProps) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const target = Number(value.replace(/[^0-9]/g, ""));
    if (!target) return;
    const prefix = value.match(/^[^0-9]*/)?.[0] ?? "";
    const formatter = new Intl.NumberFormat("id-ID");

    let rafId = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.disconnect();
          const start = performance.now();
          const duration = 1100;
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
            el.textContent = prefix + formatter.format(Math.round(target * eased));
            if (p < 1) rafId = requestAnimationFrame(tick);
            else el.textContent = value; // pastikan persis nilai aslinya
          };
          rafId = requestAnimationFrame(tick);
        });
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, [value]);

  return (
    <p className={className} ref={ref}>
      {value}
    </p>
  );
}
