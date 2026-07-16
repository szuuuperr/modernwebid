"use client";

import { useEffect, useRef } from "react";
import Matter from "matter-js";

// Konten scene fisika: keyword (kotak), logo (lingkaran), dan kota (pil).
// Posisi awal diatur lewat inline style left/top; matter-js membaca ukuran
// elemen dari DOM, lalu menganimasikan left/top/transform setiap frame.
const KEYWORDS: {
  text?: string;
  img?: string;
  alt?: string;
  left: number;
  top: number;
}[] = [
  { img: "/assets/logo.svg", alt: "Logo ModernWeb", left: 600, top: 20 },
  { text: "Jasa pembuatan website murah", left: 1000, top: 30 },
  { text: "Jasa pembuatan website terbaik", left: 100, top: 10 },
  { text: "Jasa pembuatan website terima beres", left: 1000, top: 50 },
  { text: "Harga atau biaya pembuatan website", left: 100, top: 50 },
  { text: "Buat website murah", left: 600, top: 50 },
  { text: "Bikin web", left: 200, top: 50 },
  { text: "Cara bikin web", left: 600, top: 50 },
  { text: "bikin website gratis", left: 200, top: 50 },
  { text: "cara bikin website tanpa coding", left: 1000, top: 50 },
  { text: "harga bikin website", left: 200, top: 50 },
  { text: "biaya pembuatan website", left: 600, top: 50 },
];

const CIRCLES = [
  { img: "/assets/logo-html.svg", alt: "Logo HTML5", left: 300, top: 10 },
  { img: "/assets/logo-css.svg", alt: "Logo CSS", left: 500, top: 10 },
  { img: "/assets/logo-javascript.svg", alt: "Logo JavaScript", left: 700, top: 50 },
  { img: "/assets/logo-m-blue.svg", alt: "Logo M ModernWeb biru", left: 900, top: 0 },
  { img: "/assets/logo-m-black.svg", alt: "Logo M ModernWeb hitam", left: 200, top: 0 },
  { img: "/assets/logo-m-white.svg", alt: "Logo M ModernWeb putih", left: 1000, top: 0 },
];

const PILLS = [
  { text: "Bikin website jogja", left: 1000, top: 40 },
  { text: "Bikin website solo", left: 400, top: 50 },
  { text: "Bikin website surabaya", left: 1000, top: 20 },
  { text: "Bikin website semarang", left: 1000, top: 50 },
  { text: "Bikin website magelang", left: 400, top: 20 },
  { text: "Bikin website jakarta", left: 100, top: 30 },
  { text: "Bikin website bogor", left: 700, top: 40 },
  { text: "Bikin website bandung", left: 800, top: 50 },
];

const BODY_OPTIONS = {
  density: 0.01,
  friction: 0.1,
  restitution: 0.5,
  render: { opacity: 0 },
};

export default function SeoScene() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const matterBox = sceneRef.current;
    if (!matterBox) return;

    const { Engine, Render, Runner, Bodies, Composite, MouseConstraint, Mouse, Events, Body } = Matter;

    const engine = Engine.create();
    const render = Render.create({
      element: matterBox,
      engine,
      options: {
        width: matterBox.clientWidth,
        height: matterBox.clientHeight,
        wireframes: false,
        background: "transparent",
      },
    });

    const matterElems = matterBox.querySelectorAll<HTMLElement>(".dm-matter-elem");
    const matterCircle = matterBox.querySelectorAll<HTMLElement>(".dm-matter-elem-circle");
    const matterPill = matterBox.querySelectorAll<HTMLElement>(".dm-matter-elem-pill");

    function createRectangles() {
      return Array.from(matterElems).map((el) => {
        const body = Bodies.rectangle(
          el.offsetLeft + el.offsetWidth / 2,
          el.offsetTop + el.offsetHeight / 2,
          el.offsetWidth,
          el.offsetHeight,
          BODY_OPTIONS,
        );
        Composite.add(engine.world, body);
        return body;
      });
    }

    function createCircles() {
      return Array.from(matterCircle).map((el) => {
        const body = Bodies.circle(
          el.offsetLeft + el.offsetWidth / 2,
          el.offsetTop + el.offsetHeight / 2,
          Math.max(el.offsetWidth, el.offsetHeight) / 2,
          BODY_OPTIONS,
        );
        Composite.add(engine.world, body);
        return body;
      });
    }

    function createPills() {
      return Array.from(matterPill).map((el) => {
        const width = el.offsetWidth;
        const height = el.offsetHeight;
        const posX = el.offsetLeft + width / 2;
        const posY = el.offsetTop + height / 2;
        const radius = height / 2;

        const leftCircle = Bodies.circle(posX - width / 2 + radius, posY, radius, BODY_OPTIONS);
        const rightCircle = Bodies.circle(posX + width / 2 - radius, posY, radius, BODY_OPTIONS);
        const rect = Bodies.rectangle(posX, posY, width - height, height, BODY_OPTIONS);

        const pillBody = Body.create({
          parts: [leftCircle, rightCircle, rect],
          friction: 0.1,
          restitution: 0.5,
        });
        Composite.add(engine.world, pillBody);
        return pillBody;
      });
    }

    function createBoundaries() {
      const w = matterBox!.clientWidth;
      const h = matterBox!.clientHeight;
      const wallOptions = { isStatic: true, render: { opacity: 0 } };
      Composite.add(engine.world, [
        Bodies.rectangle(w / 2, h, w, 1, wallOptions), // lantai
        Bodies.rectangle(0, h / 2, 1, h, wallOptions), // dinding kiri
        Bodies.rectangle(w, h / 2, 1, h, wallOptions), // dinding kanan
        Bodies.rectangle(w / 2, 0, w, 1, wallOptions), // atap
      ]);
    }

    let elemBodies = createRectangles();
    let elemCircles = createCircles();
    let elemPills = createPills();
    createBoundaries();

    const runner = Runner.create();

    // Kontrol mouse untuk drag elemen
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: 0.2, render: { visible: false } },
    });
    Composite.add(engine.world, mouseConstraint);
    render.mouse = mouse;

    // Sinkronkan posisi & rotasi elemen DOM dengan body fisika setiap frame
    function syncElements(bodies: Matter.Body[], elems: NodeListOf<HTMLElement>) {
      bodies.forEach((body, index) => {
        const el = elems[index];
        if (!el) return;
        el.style.left = body.position.x - el.offsetWidth / 2 + "px";
        el.style.top = body.position.y - el.offsetHeight / 2 + "px";
        el.style.transform = "rotate(" + body.angle + "rad)";
      });
    }

    Events.on(engine, "afterUpdate", () => {
      syncElements(elemBodies, matterElems);
      syncElements(elemCircles, matterCircle);
      syncElements(elemPills, matterPill);
    });

    // Biarkan scroll & swipe tetap jalan saat pointer di atas canvas;
    // touch hanya diteruskan ke matter saat sedang men-drag body.
    type MouseWithHandlers = Matter.Mouse & {
      mousewheel: EventListener;
      mousedown: EventListener;
      mousemove: EventListener;
      mouseup: EventListener;
    };

    function allowNativeScroll() {
      const m = mouseConstraint.mouse as MouseWithHandlers;
      const el = m.element;
      el.removeEventListener("mousewheel", m.mousewheel);
      el.removeEventListener("DOMMouseScroll", m.mousewheel);

      el.removeEventListener("touchstart", m.mousedown);
      el.removeEventListener("touchmove", m.mousemove);
      el.removeEventListener("touchend", m.mouseup);

      el.addEventListener("touchstart", m.mousedown, { passive: true });
      el.addEventListener("touchmove", (e: Event) => {
        if (mouseConstraint.body) m.mousemove(e);
      });
      el.addEventListener("touchend", (e: Event) => {
        if (mouseConstraint.body) m.mouseup(e);
      });
    }

    allowNativeScroll();

    function handleResize() {
      if (!matterBox) return;
      Composite.clear(engine.world, false);
      createBoundaries();
      elemBodies = createRectangles();
      elemCircles = createCircles();
      elemPills = createPills();
      Composite.add(engine.world, mouseConstraint);

      render.options.width = matterBox.clientWidth;
      render.options.height = matterBox.clientHeight;

      allowNativeScroll();
    }

    window.addEventListener("resize", handleResize);

    // Engine baru dijalankan saat scene masuk viewport (sekali saja)
    let engineStarted = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !engineStarted) {
            engineStarted = true;
            Runner.run(runner, engine);
            Render.run(render);
          }
        });
      },
      { threshold: 0.1 },
    );
    observer.observe(matterBox);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      Render.stop(render);
      Runner.stop(runner);
      render.canvas.remove();
      Engine.clear(engine);
    };
  }, []);

  return (
    // data-nosnippet: teks keyword/pills di scene ini adalah gimmick visual —
    // jangan sampai dipakai Google sebagai snippet hasil pencarian
    // (pola "jasa X + daftar kota" bisa terbaca sebagai keyword stuffing).
    <div className="scene" ref={sceneRef} data-nosnippet="">
      {KEYWORDS.map((item, i) => (
        <div
          key={i}
          className="dm-matter-elem"
          style={{ left: item.left, top: item.top }}
        >
          {item.img ? <img src={item.img} alt={item.alt ?? ""} loading="lazy" /> : item.text}
        </div>
      ))}
      {CIRCLES.map((item, i) => (
        <div
          key={i}
          className="dm-matter-elem-circle"
          style={{ left: item.left, top: item.top }}
        >
          <img src={item.img} alt={item.alt} loading="lazy" />
        </div>
      ))}
      {PILLS.map((item, i) => (
        <div
          key={i}
          className="dm-matter-elem-pill"
          style={{ left: item.left, top: item.top }}
        >
          {item.text}
        </div>
      ))}
    </div>
  );
}
