"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { DESTINATIONS, REGIONS, TRIP_TYPES, img, waLink, type Region, type TripType } from "@/lib/data";
import { Icon, WhatsApp } from "./Icon";

export function Explorer() {
  const [type, setType] = useState<TripType | null>(null);
  const [region, setRegion] = useState<Region | null>(null);
  const [active, setActive] = useState(0);
  const drag = useRef<{ x: number; moved: boolean } | null>(null);
  const [dx, setDx] = useState(0);
  const wasDrag = useRef(false);

  const list = useMemo(
    () => DESTINATIONS.filter((d) => (!type || d.types.includes(type)) && (!region || d.region === region)),
    [type, region],
  );

  useEffect(() => setActive(list.length > 2 ? 1 : 0), [list]);

  const step = (n: number) => setActive((a) => Math.max(0, Math.min(list.length - 1, a + n)));

  const onDown = (e: React.PointerEvent) => {
    drag.current = { x: e.clientX, moved: false };
    wasDrag.current = false;
  };
  const onMove = (e: React.PointerEvent) => {
    if (!drag.current) return;
    const d = e.clientX - drag.current.x;
    if (Math.abs(d) > 6) drag.current.moved = true;
    setDx(d);
  };
  const onUp = () => {
    if (!drag.current) return;
    if (dx < -60) step(1);
    else if (dx > 60) step(-1);
    wasDrag.current = drag.current.moved;
    drag.current = null;
    setDx(0);
  };

  const current = list[active];

  return (
    <section id="destinos" className="explorer">
      <div className="container">
        <div className="glass type-panel" data-reveal>
          <div className="type-copy">
            <h2>
              Que tipo de viagem <em>você procura?</em>
            </h2>
            <p>Toque num estilo e o carrossel logo abaixo mostra só os destinos que combinam.</p>
          </div>
          <div className="type-grid" role="group" aria-label="Filtrar por estilo de viagem">
            {TRIP_TYPES.map((t) => (
              <button key={t.id} className={`type-tile ${type === t.id ? "is-active" : ""}`} aria-pressed={type === t.id} onClick={() => setType(type === t.id ? null : t.id)}>
                <Icon name={t.icon} size={22} />
                <span>{t.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="explorer-head" data-reveal>
          <p className="eyebrow">
            <span className="dot" /> Destinos
          </p>
          <h2 className="section-title">
            Brasil de <em>norte a sul</em>
          </h2>
          <div className="region-tabs" role="tablist" aria-label="Filtrar por região">
            {[null, ...REGIONS].map((r) => (
              <button key={r ?? "todas"} role="tab" aria-selected={region === r} className={region === r ? "is-active" : ""} onClick={() => setRegion(r)}>
                {r ?? "Todas"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {list.length === 0 ? (
        <p className="empty container">
          Nenhum destino com essa combinação ainda.{" "}
          <button onClick={() => { setType(null); setRegion(null); }}>Limpar filtros</button>
        </p>
      ) : (
        <>
          <div
            className="coverflow"
            onPointerDown={onDown}
            onPointerMove={onMove}
            onPointerUp={onUp}
            onPointerCancel={onUp}
            onPointerLeave={onUp}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") step(1);
              if (e.key === "ArrowLeft") step(-1);
            }}
            tabIndex={0}
            role="region"
            aria-roledescription="carrossel"
            aria-label="Destinos"
          >
            <div className="coverflow-track">
              {list.map((d, i) => {
                const off = i - active + dx / 320;
                const abs = Math.abs(off);
                const style = {
                  transform: `translateX(${off * 58}%) translateZ(${-abs * 180}px) rotateY(${Math.max(-1, Math.min(1, off)) * -38}deg)`,
                  opacity: abs > 3.2 ? 0 : 1 - abs * 0.18,
                  zIndex: 100 - Math.round(abs * 10),
                  transition: drag.current ? "none" : undefined,
                } as React.CSSProperties;
                return (
                  <article
                    key={d.id}
                    className={`cf-card ${i === active ? "is-active" : ""}`}
                    style={style}
                    aria-hidden={i !== active}
                    onClick={() => {
                      if (!wasDrag.current && i !== active) setActive(i);
                    }}
                  >
                    <div className="cf-photo">
                      <img src={img(d.photo)} alt={`${d.name}, ${d.state}`} loading="lazy" draggable={false} />
                      <span className="cf-region">{d.region}</span>
                    </div>
                    <div className="cf-body">
                      <span className="cf-state">
                        <Icon name="pin" size={14} /> {d.state}
                      </span>
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                      <dl>
                        <div>
                          <dt><Icon name="sun" size={14} /> Melhor época</dt>
                          <dd>{d.season}</dd>
                        </div>
                        <div>
                          <dt><Icon name="clock" size={14} /> Sugestão</dt>
                          <dd>{d.days}</dd>
                        </div>
                      </dl>
                    </div>
                  </article>
                );
              })}
            </div>
            <button className="cf-arrow prev" onClick={() => step(-1)} disabled={active === 0} aria-label="Destino anterior">
              <Icon name="arrowL" />
            </button>
            <button className="cf-arrow next" onClick={() => step(1)} disabled={active === list.length - 1} aria-label="Próximo destino">
              <Icon name="arrowR" />
            </button>
          </div>
          {current && (
            <div className="cf-footer container">
              <span className="cf-count">
                {String(active + 1).padStart(2, "0")} <i>/</i> {String(list.length).padStart(2, "0")}
              </span>
              <a className="btn btn-primary" href={waLink(`Olá! Quero montar um roteiro para ${current.name}.`)} target="_blank" rel="noopener">
                <WhatsApp size={18} /> Montar roteiro para {current.name}
              </a>
              <span className="cf-hint">
                <Icon name="drag" size={16} /> arraste ou use as setas
              </span>
            </div>
          )}
        </>
      )}
    </section>
  );
}
