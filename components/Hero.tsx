"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { HERO_SLIDES, img } from "@/lib/data";
import { Icon } from "./Icon";

const DURATION = 6500;
const N = HERO_SLIDES.length;

export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const root = useRef<HTMLElement>(null);

  const go = useCallback((i: number) => setIndex(((i % N) + N) % N), []);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(index + 1), DURATION);
    return () => clearTimeout(t);
  }, [index, paused, go]);

  // Parallax 3D: ponteiro e rolagem alimentam variáveis CSS lidas pelas camadas.
  useEffect(() => {
    const el = root.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let mx = 0, my = 0, tx = 0, ty = 0, raf = 0;
    const onMove = (e: PointerEvent) => {
      tx = e.clientX / window.innerWidth - 0.5;
      ty = e.clientY / window.innerHeight - 0.5;
    };
    const loop = () => {
      mx += (tx - mx) * 0.06;
      my += (ty - my) * 0.06;
      const sp = Math.min(1, window.scrollY / window.innerHeight);
      el.style.setProperty("--mx", mx.toFixed(4));
      el.style.setProperty("--my", my.toFixed(4));
      el.style.setProperty("--sp", sp.toFixed(4));
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  const slide = HERO_SLIDES[index];

  return (
    <section id="topo" className="hero" ref={root}>
      <div className="hero-stage" aria-hidden="true">
        {HERO_SLIDES.map((s, i) => (
          <div key={s.photo} className={`hero-slide ${i === index ? "is-active" : ""}`}>
            <img src={img(s.photo)} alt="" fetchPriority={i === 0 ? "high" : "low"} loading={i < 2 ? "eager" : "lazy"} />
          </div>
        ))}
        <div className="hero-shade" />
        <div className="hero-grain" />
      </div>

      <div className="hero-content container">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="dot" /> {slide.place} · {slide.state}
          </p>
          <h1 className="hero-title" key={index} aria-live="polite">
            {slide.title.map((line, i) => (
              <span className="line" key={line}>
                <span style={{ animationDelay: `${120 + i * 110}ms` }}>{line}</span>
              </span>
            ))}
          </h1>
          <p className="hero-lead">
            Montamos viagens pelo Brasil e pela América do Sul com hotel, transfer, guia e horários resolvidos. Você chega e só precisa olhar em volta.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#destinos">
              Explorar destinos <Icon name="arrowR" size={18} />
            </a>
            <a className="btn btn-ghost" href="#planejar">
              Montar meu roteiro
            </a>
          </div>
        </div>

        <div className="hero-deck" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div className="deck" aria-hidden="true">
            {HERO_SLIDES.map((s, i) => {
              // Posição relativa ao cartão ativo: 0 na frente, positivos empilhados atrás, -1 saindo.
              let pos = (i - index + N) % N;
              if (pos === N - 1) pos = -1;
              return (
                <button
                  key={s.photo}
                  tabIndex={-1}
                  className="deck-card"
                  data-pos={pos}
                  style={{ ["--pos" as string]: pos }}
                  onClick={() => pos > 0 && go(i)}
                >
                  <img src={img(s.photo)} alt="" draggable={false} />
                  <span className="deck-label">
                    <Icon name="pin" size={14} /> {s.place}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="deck-controls">
            <button className="deck-arrow" onClick={() => go(index - 1)} aria-label="Destino anterior">
              <Icon name="arrowL" size={18} />
            </button>
            <div className="deck-progress">
              <span className="deck-count">
                {String(index + 1).padStart(2, "0")} <i>/ {String(N).padStart(2, "0")}</i>
              </span>
              <span className="bar">
                <i key={index} style={{ animationDuration: `${DURATION}ms`, animationPlayState: paused ? "paused" : "running" }} />
              </span>
            </div>
            <button className="deck-arrow" onClick={() => go(index + 1)} aria-label="Próximo destino">
              <Icon name="arrowR" size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="hero-stats container">
        {[
          ["4", "países", "Brasil, Chile, Peru e Colômbia"],
          ["16", "destinos", "do Caribe aos Andes"],
          ["5", "regiões", "do Brasil, de norte a sul"],
        ].map(([n, label, sub]) => (
          <div className="stat" key={label}>
            <span className="stat-n">{n}</span>
            <span>
              <b>{label}</b>
              <small>{sub}</small>
            </span>
          </div>
        ))}
        <a href="#destinos" className="scroll-cue" aria-label="Rolar para destinos">
          <span />
        </a>
      </div>
    </section>
  );
}
