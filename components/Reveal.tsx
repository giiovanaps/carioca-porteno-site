"use client";
import { useEffect } from "react";

// Revela elementos com [data-reveal] ao entrar na tela e atualiza a profundidade do fundo aéreo.
export function Reveal() {
  useEffect(() => {
    document.documentElement.classList.add("js");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));

    const aerial = document.querySelector<HTMLElement>(".aerial");
    const aerialImg = aerial?.querySelector<HTMLElement>(".aerial-bg img");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (!aerial || !aerialImg || reduce) return;
        const r = aerial.getBoundingClientRect();
        if (r.bottom < 0 || r.top > window.innerHeight) return;
        const p = Math.max(0, Math.min(1, -r.top / Math.max(1, r.height - window.innerHeight)));
        // Transform direto na imagem: só a camada do fundo é recomposta, sem recalcular as seções.
        aerialImg.style.transform = `scale(${(1.1 + p * 0.45).toFixed(4)}) rotate(${(p * -6).toFixed(3)}deg)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return null;
}
