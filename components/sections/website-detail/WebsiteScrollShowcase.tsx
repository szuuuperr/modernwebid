"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

// Showcase gambar website dengan animasi 3D saat scroll — adaptasi
// ContainerScroll (Aceternity UI) tanpa title component: frame device dimulai
// agak rebah (rotateX 20°) lalu berdiri tegak seiring elemen melewati
// viewport. Hanya transform (framer-motion) sehingga tetap mulus, dan saat
// prefers-reduced-motion gambar tampil statis tanpa animasi.
export default function WebsiteScrollShowcase({
  image,
  alt,
}: {
  image: string;
  alt: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const rotateX = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0.9, 1] : [1.05, 1],
  );

  return (
    <div className="website-scroll" ref={containerRef}>
      <motion.div
        className="website-scroll-frame"
        style={prefersReducedMotion ? undefined : { rotateX, scale }}
      >
        <div className="website-scroll-screen">
          <img src={image} alt={alt} />
        </div>
      </motion.div>
    </div>
  );
}
