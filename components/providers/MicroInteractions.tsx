"use client";

import { useEffect, useRef } from "react";

// Micro-interaction global premium (transform/opacity-only, tanpa library):
// - Liquid cursor : titik + cincin mengikuti kursor dengan lerp & stretch
//   sesuai kecepatan; cincin membesar di atas elemen interaktif.
// - Magnetic button : CTA tertarik halus ke arah kursor saat di-hover.
// - 3D tilt kartu : kartu miring mengikuti kursor via CSS var --rx/--ry;
//   penerapannya di rule :hover CSS sehingga transisi tetap milik CSS.
// - Ripple : gelombang menyebar dari titik klik tombol.
// - Parallax card : hero card bergeser mengikuti mouse
//   via CSS var --mx/--my di <html>.
//
// Performa: satu rAF loop untuk cursor+parallax (berhenti saat tab hidden /
// kursor keluar jendela), delegasi pointerover untuk magnetic/tilt (tanpa
// re-scan per route), dan SEMUANYA nonaktif saat prefers-reduced-motion.
// Cursor/magnetic/tilt/parallax hanya untuk pointer halus (bukan touch).

// Tombol di dalam kartu (.price-card-button, .inspiration-card-button) TIDAK
// magnetic: kartunya sendiri sudah bergerak (3D tilt), tombol yang ikut
// tertarik kursor membuat gerakannya bertabrakan.
const MAGNETIC_SELECTOR = [
  ".cta-button", ".hero-button", ".cta-banner-button",
  ".inspiration-more-button",
  ".solving-cta-button", ".fab-button", ".inspiration-empty-reset",
  ".blog-comment-submit", ".website-detail-cta",
].join(",");

const TILT_SELECTOR = [
  ".problem-card", ".price-card", ".price-card-recomendation",
  ".inspiration-card", ".blog-card", ".blog-featured", ".blog-side-card",
].join(",");

// Ripple memakai daftar magnetic + tombol di dalam kartu (ripple tetap ada
// di sana, hanya efek magnetic yang dihilangkan).
const RIPPLE_SELECTOR = [
  MAGNETIC_SELECTOR, ".price-card-button", ".inspiration-card-button",
].join(",");

const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], input, textarea, select, summary";
const TEXT_FIELD_SELECTOR = "input, textarea, select";

export default function MicroInteractions() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cleanups: (() => void)[] = [];
    function listen(
      target: EventTarget,
      type: string,
      handler: EventListener,
      options?: AddEventListenerOptions,
    ) {
      target.addEventListener(type, handler, options);
      cleanups.push(() => target.removeEventListener(type, handler, options));
    }

    // ---------- Ripple (jalan juga di touch) ----------
    function onRippleClick(e: Event) {
      const { target, clientX, clientY } = e as MouseEvent;
      const el = (target as Element).closest?.<HTMLElement>(RIPPLE_SELECTOR);
      if (!el) return;
      const r = el.getBoundingClientRect();
      const size = Math.max(r.width, r.height) * 2;
      const ink = document.createElement("span");
      ink.className = "ripple-ink";
      ink.style.width = ink.style.height = `${size}px`;
      // Klik keyboard (clientX/Y = 0) → ripple dari tengah tombol.
      const cx = clientX || r.left + r.width / 2;
      const cy = clientY || r.top + r.height / 2;
      ink.style.left = `${cx - r.left - size / 2}px`;
      ink.style.top = `${cy - r.top - size / 2}px`;
      el.appendChild(ink);
      ink.addEventListener("animationend", () => ink.remove(), { once: true });
    }
    listen(document, "click", onRippleClick);

    if (!window.matchMedia("(pointer: fine)").matches) {
      return () => cleanups.forEach((fn) => fn());
    }

    // ---------- Liquid cursor + parallax (satu rAF loop) ----------
    const dot = dotRef.current;
    const ring = ringRef.current;
    let mx = -100, my = -100;      // posisi mouse (target)
    let dx = -100, dy = -100;      // posisi dot (lerp cepat)
    let rx = -100, ry = -100;      // posisi ring (lerp lambat → trailing)
    let scale = 1, targetScale = 1;
    let rafId = 0, running = false;

    function loop() {
      dx += (mx - dx) * 0.4;
      dy += (my - dy) * 0.4;
      const px = rx, py = ry;
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      scale += (targetScale - scale) * 0.18;

      // Stretch cincin searah gerakan (efek "liquid").
      const vx = rx - px, vy = ry - py;
      const stretch = Math.min(Math.hypot(vx, vy) * 0.008, 0.3);
      const angle = Math.atan2(vy, vx);

      if (dot) dot.style.transform = `translate3d(${dx}px, ${dy}px, 0) translate(-50%, -50%)`;
      if (ring)
        ring.style.transform =
          `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%) ` +
          `rotate(${angle}rad) scale(${(scale * (1 + stretch)).toFixed(3)}, ${(scale * (1 - stretch)).toFixed(3)})`;

      // Parallax: -1..1 dari tengah viewport, dipakai .hero-card via CSS.
      document.documentElement.style.setProperty("--mx", ((mx / window.innerWidth) * 2 - 1).toFixed(3));
      document.documentElement.style.setProperty("--my", ((my / window.innerHeight) * 2 - 1).toFixed(3));

      if (running) rafId = requestAnimationFrame(loop);
    }

    function startLoop() {
      if (running) return;
      running = true;
      rafId = requestAnimationFrame(loop);
    }
    function stopLoop() {
      running = false;
      cancelAnimationFrame(rafId);
    }
    cleanups.push(stopLoop);

    function onPointerMove(e: Event) {
      const ev = e as PointerEvent;
      mx = ev.clientX;
      my = ev.clientY;
      if (dot) dot.style.opacity = "1";
      if (ring) ring.style.opacity = "1";
      startLoop();
    }
    listen(window, "pointermove", onPointerMove, { passive: true });
    listen(document, "visibilitychange", () => {
      if (document.hidden) stopLoop();
    });
    listen(document.documentElement, "mouseleave", () => {
      if (dot) dot.style.opacity = "0";
      if (ring) ring.style.opacity = "0";
      stopLoop();
    });

    // Cursor berubah sesuai objek: membesar di elemen interaktif,
    // menyembunyikan diri di field teks (biar caret native yang tampil).
    function onCursorOver(e: Event) {
      const t = e.target as Element;
      const interactive = !!t.closest?.(INTERACTIVE_SELECTOR);
      const textField = !!t.closest?.(TEXT_FIELD_SELECTOR);
      targetScale = interactive && !textField ? 1.8 : 1;
      dot?.classList.toggle("is-hidden", textField);
      ring?.classList.toggle("is-hidden", textField);
      dot?.classList.toggle("on-interactive", interactive && !textField);
      ring?.classList.toggle("on-interactive", interactive && !textField);
    }
    listen(document, "pointerover", onCursorOver, { passive: true });

    // ---------- Magnetic button ----------
    const activeMagnets = new WeakSet<HTMLElement>();
    function onMagnetOver(e: Event) {
      const el = (e.target as Element).closest?.<HTMLElement>(MAGNETIC_SELECTOR);
      if (!el || activeMagnets.has(el)) return;
      activeMagnets.add(el);
      // Pusat diambil sekali saat enter (sebelum ada transform) supaya tidak
      // feedback-loop dengan pergeseran magnet itu sendiri.
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const move = (ev: PointerEvent) => {
        const x = (ev.clientX - cx) * 0.3;
        const y = (ev.clientY - cy) * 0.35;
        el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
      };
      const leave = () => {
        el.style.transform = "";
        el.removeEventListener("pointermove", move);
        activeMagnets.delete(el);
      };
      el.addEventListener("pointermove", move);
      el.addEventListener("pointerleave", leave, { once: true });
    }
    listen(document, "pointerover", onMagnetOver, { passive: true });

    // ---------- 3D tilt kartu (set CSS var; CSS :hover yang menerapkan) ----------
    const activeTilts = new WeakSet<HTMLElement>();
    function onTiltOver(e: Event) {
      const el = (e.target as Element).closest?.<HTMLElement>(TILT_SELECTOR);
      if (!el || activeTilts.has(el)) return;
      activeTilts.add(el);
      const r = el.getBoundingClientRect();
      const move = (ev: PointerEvent) => {
        const px = (ev.clientX - r.left) / r.width - 0.5;
        const py = (ev.clientY - r.top) / r.height - 0.5;
        el.style.setProperty("--ry", `${(px * 6).toFixed(2)}deg`);
        el.style.setProperty("--rx", `${(-py * 6).toFixed(2)}deg`);
      };
      const leave = () => {
        el.style.setProperty("--rx", "0deg");
        el.style.setProperty("--ry", "0deg");
        el.removeEventListener("pointermove", move);
        activeTilts.delete(el);
      };
      el.addEventListener("pointermove", move);
      el.addEventListener("pointerleave", leave, { once: true });
    }
    listen(document, "pointerover", onTiltOver, { passive: true });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <div aria-hidden>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </div>
  );
}
