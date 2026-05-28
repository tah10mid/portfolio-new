import { useRef, useEffect, useCallback } from "react";
import heroCharacterSrc from "../assets/hero-character.png";
import heroRevealSrc from "../assets/hero-reveal.png";

function loadImage(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.src = src;
  });
}

export default function Hero() {
  const canvasRef = useRef(null);
  const offscreenRef = useRef(null);
  const state = useRef({
    mx: 0.5, my: 0.5,
    sx: 0.5, sy: 0.5,
    radius: 0,
    hovering: false,
    baseImg: null,
    revealImg: null,
    raf: null,
  });

  const getImageRect = useCallback((img, w, h) => {
    const aspect = img.width / img.height;
    const dh = h * 0.95;
    const dw = dh * aspect;
    const dx = (w - dw) / 2;
    const dy = h - dh;
    return { x: dx, y: dy, w: dw, h: dh };
  }, []);

  const drawImageWithFade = useCallback((ctx, img, r, w, h) => {
    ctx.save();
    ctx.drawImage(img, r.x, r.y, r.w, r.h);
    const fadeH = h * 0.18;
    const fadeGrad = ctx.createLinearGradient(0, h - fadeH, 0, h);
    fadeGrad.addColorStop(0, "rgba(0,0,0,0)");
    fadeGrad.addColorStop(1, "rgba(0,0,0,1)");
    ctx.globalCompositeOperation = "destination-out";
    ctx.fillStyle = fadeGrad;
    ctx.fillRect(0, h - fadeH, w, fadeH);
    ctx.restore();
  }, []);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const s = state.current;
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;

    if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
      canvas.width = w * dpr;
      canvas.height = h * dpr;
    }

    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);

    s.sx += (s.mx - s.sx) * 0.07;
    s.sy += (s.my - s.sy) * 0.07;

    const maxR = Math.min(w, h) * 0.42;
    const targetR = s.hovering ? maxR : 0;
    s.radius += (targetR - s.radius) * 0.045;
    if (s.radius < 0.3) s.radius = 0;

    if (s.baseImg) {
      const r = getImageRect(s.baseImg, w, h);
      drawImageWithFade(ctx, s.baseImg, r, w, h);
    }

    if (s.revealImg && s.radius > 0.3) {
      if (!offscreenRef.current) {
        offscreenRef.current = document.createElement("canvas");
      }
      const off = offscreenRef.current;
      off.width = w * dpr;
      off.height = h * dpr;
      const octx = off.getContext("2d");
      octx.setTransform(dpr, 0, 0, dpr, 0, 0);
      octx.clearRect(0, 0, w, h);

      const r = getImageRect(s.revealImg, w, h);
      drawImageWithFade(octx, s.revealImg, r, w, h);

      octx.globalCompositeOperation = "destination-in";
      const cx = s.sx * w;
      const cy = s.sy * h;
      const rad = s.radius;
      const grad = octx.createRadialGradient(cx, cy, 0, cx, cy, rad);
      grad.addColorStop(0, "rgba(0,0,0,1)");
      grad.addColorStop(0.6, "rgba(0,0,0,0.8)");
      grad.addColorStop(1, "rgba(0,0,0,0)");
      octx.fillStyle = grad;
      octx.fillRect(0, 0, w, h);
      octx.globalCompositeOperation = "source-over";

      ctx.drawImage(off, 0, 0, w * dpr, h * dpr, 0, 0, w, h);
    }

    s.raf = requestAnimationFrame(draw);
  }, [getImageRect, drawImageWithFade]);

  useEffect(() => {
    const s = state.current;
    Promise.all([loadImage(heroCharacterSrc), loadImage(heroRevealSrc)]).then(
      ([base, reveal]) => {
        s.baseImg = base;
        s.revealImg = reveal;
        s.raf = requestAnimationFrame(draw);
      }
    );
    return () => { if (s.raf) cancelAnimationFrame(s.raf); };
  }, [draw]);

  const handleMouseMove = useCallback((e) => {
    const hero = canvasRef.current?.closest(".hero");
    if (!hero) return;
    const rect = hero.getBoundingClientRect();
    state.current.mx = (e.clientX - rect.left) / rect.width;
    state.current.my = (e.clientY - rect.top) / rect.height;
    state.current.hovering = true;
  }, []);

  const handleMouseLeave = useCallback(() => {
    state.current.hovering = false;
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <h1 className="hero__watermark" aria-hidden="true">
        Hi! I'm Tahmid
      </h1>

      <canvas ref={canvasRef} className="hero__canvas" />

      <div className="hero__buttons">
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}>
          Contact
        </a>
        <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo("about"); }}>
          Who I'm
        </a>
      </div>
    </section>
  );
}
