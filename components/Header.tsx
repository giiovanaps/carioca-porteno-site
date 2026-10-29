"use client";
import { useEffect, useState } from "react";
import { BRAND, waLink } from "@/lib/data";
import { Icon, WhatsApp } from "./Icon";

const NAV = [
  ["Destinos", "#destinos"],
  ["Roteiros", "#roteiros"],
  ["Experiência 3D", "#orbita"],
  ["Como funciona", "#como-funciona"],
  ["Contato", "#planejar"],
];

export function Logo() {
  return (
    <a href="#topo" className="logo" aria-label={`${BRAND.name}, início`}>
      <svg width="30" height="30" viewBox="0 0 64 64" aria-hidden="true">
        <path d="M8 48 L26 16 L36 33 L43 23 L58 48 Z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
        <circle cx="46" cy="13" r="5" fill="var(--sun)" />
      </svg>
      <span>
        ROTA<b>BRASILIS</b>
      </span>
    </a>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className={`header ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <div className="header-inner">
        <Logo />
        <nav className="nav" aria-label="Principal">
          {NAV.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <a className="btn btn-glass header-cta" href={waLink("Olá! Quero planejar uma viagem pelo Brasil.")} target="_blank" rel="noopener">
          <WhatsApp size={18} /> <span>Falar com especialista</span>
        </a>
        <button className="menu-btn" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          <Icon name={open ? "close" : "menu"} size={24} />
        </button>
      </div>
    </header>
  );
}
