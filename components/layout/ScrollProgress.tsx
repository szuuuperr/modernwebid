"use client";

import { useEffect, useRef } from "react";

// Progress bar tipis gradient biru di tepi atas halaman yang mengikuti
// kemajuan scroll. Update via transform scaleX (GPU-friendly) + rAF throttle.
export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId = 0;
    const update = () => {
      rafId = 0;
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      barRef.current?.style.setProperty("transform", `scaleX(${progress})`);
    };
    const onScroll = () => {
      if (!rafId) rafId = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <div className="scroll-progress" ref={barRef} aria-hidden />;
}
