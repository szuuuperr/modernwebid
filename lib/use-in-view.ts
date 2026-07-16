"use client";

import { useEffect, useRef, useState } from "react";

// Reveal-on-scroll untuk komponen yang TIDAK bisa memakai ScrollReveal —
// yaitu yang className-nya dinamis atau bisa mount/unmount (React akan
// menimpa/kehilangan class "in-view" yang ditambahkan manual ke DOM).
// Threshold & rootMargin identik dengan ScrollReveal agar animasinya seragam.
export function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}
