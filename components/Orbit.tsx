"use client";
import { useEffect, useRef } from "react";
import { DESTINATIONS, ORBIT, img } from "@/lib/data";

const LABEL: Record<string, string> = {
  sancho: "Baía do Sancho",
  "jalapao-cachoeira": "Cachoeira da Velha",
  pantanal: "Arara-azul, Pantanal",
  "rio-pao-de-acucar": "Pão de Açúcar",
  "lencois-aereo": "Lençóis Maranhenses",
};
const label = (p: string) => LABEL[p] ?? DESTINATIONS.find((d) => d.photo === p)?.name ?? p;

// Cilindro 3D de fotos: gira sozinho, acelera com a rolagem e pode ser arrastado.
export function Orbit() {
  const ring = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ring.current;
    const st = stage.current;
    if (!el || !st) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let angle = 0, vel = reduce ? 0 : 0.06, dragX: number | null = null, lastY = window.scrollY, raf = 0, visible = false;

    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(st);

    const loop = () => {
      if (visible) {
        const dy = window.scrollY - lastY;
        lastY = window.scrollY;
        if (dragX === null && !reduce) {
          vel += (0.06 - vel) * 0.03 + dy * 0.004;
          vel = Math.max(-2, Math.min(2, vel));
        }
        angle += vel;
        el.style.transform = `translateZ(calc(var(--radius) * -1)) rotateX(-6deg) rotateY(${angle}deg)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const down = (e: PointerEvent) => {
      dragX = e.clientX;
      st.setPointerCapture(e.pointerId);
    };
    const move = (e: PointerEvent) => {
      if (dragX === null) return;
      vel = (e.clientX - dragX) * 0.25;
      dragX = e.clientX;
    };
    const up = () => (dragX = null);
    st.addEventListener("pointerdown", down);
    st.addEventListener("pointermove", move);
    st.addEventListener("pointerup", up);
    st.addEventListener("pointercancel", up);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      st.removeEventListener("pointerdown", down);
      st.removeEventListener("pointermove", move);
      st.removeEventListener("pointerup", up);
      st.removeEventListener("pointercancel", up);
    };
  }, []);

  return (
    <section id="orbita" className="orbit">
      <div className="orbit-bg" aria-hidden="true">
        <img src={img("itaimbezinho-canion")} alt="" loading="lazy" />
      </div>
      <div className="container orbit-head" data-reveal>
        <p className="eyebrow">
          <span className="dot" /> Experiência 3D
        </p>
        <h2 className="section-title big">
          Gire o Brasil <em>e escolha</em>
          <br /> por onde começar
        </h2>
        <p className="orbit-lead">Dez cenários brasileiros em fotos reais. Arraste para girar, role a página para acelerar.</p>
      </div>
      <div className="orbit-stage" ref={stage} aria-label="Galeria 3D de destinos, arraste para girar">
        <div className="orbit-ring" ref={ring} style={{ ["--n" as string]: ORBIT.length }}>
          {ORBIT.map((p, i) => (
            <figure key={p} className="orbit-item" style={{ ["--i" as string]: i }}>
              <img src={img(p)} alt={label(p)} loading="lazy" draggable={false} />
              <figcaption>{label(p)}</figcaption>
            </figure>
          ))}
        </div>
        <div className="orbit-floor" aria-hidden="true" />
      </div>
    </section>
  );
}
