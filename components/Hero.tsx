"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { HERO_SLIDES, img } from "@/lib/data";
import { Icon } from "./Icon";

const DURATION = 7000;

const PERKS = [
  { icon: "compass", title: "Roteiro", accent: "sob medida", text: "Nada de pacote pronto. Datas, hotéis e ritmo escolhidos com você." },
  { icon: "pin", title: "Guias", accent: "locais", text: "Gente que mora no destino e conhece o melhor horário de cada trilha." },
  { icon: "chat", title: "WhatsApp", accent: "na viagem", text: "Voo atrasou, choveu, mudou o plano: uma mensagem e a gente resolve." },
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const root = useRef<HTMLElement>(null);

  const go = useCallback((i: number) => setIndex((i + HERO_SLIDES.length) % HERO_SLIDES.length), []);

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
    <section id="topo" className="hero" ref={root} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="hero-stage" aria-hidden="true">
        {HERO_SLIDES.map((s, i) => (
          <div key={s.photo} className={`hero-slide ${i === index ? "is-active" : ""}`}>
            <img src={img(s.photo)} alt="" fetchPriority={i === 0 ? "high" : "low"} loading={i === 0 ? "eager" : "lazy"} />
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
            Montamos viagens pelo Brasil com hotel, transfer, guia e horários resolvidos. Você chega e só precisa olhar em volta.
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

        <ul className="hero-perks">
          {PERKS.map((p, i) => (
            <li className="glass perk" key={p.title} style={{ ["--d" as string]: i }}>
              <span className="perk-icon">
                <Icon name={p.icon} size={18} />
              </span>
              <div>
                <strong>
                  {p.title} <em>{p.accent}</em>
                </strong>
                <span>{p.text}</span>
              </div>
            </li>
          ))}
        </ul>

        <nav className="hero-index" aria-label="Destinos em destaque">
          {HERO_SLIDES.map((s, i) => (
            <button key={s.photo} className={i === index ? "is-active" : ""} onClick={() => go(i)} aria-label={`Mostrar ${s.place}`} aria-current={i === index}>
              <span className="num">{String(i + 1).padStart(2, "0")}</span>
              <span className="bar">
                <i style={{ animationDuration: `${DURATION}ms`, animationPlayState: paused ? "paused" : "running" }} />
              </span>
              <span className="name">{s.place}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="hero-stats container">
        {[
          ["5", "regiões", "do Amapá ao Rio Grande do Sul"],
          ["6", "biomas", "da Caatinga ao Pampa"],
          ["12", "destinos", "para começar a conversa"],
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
