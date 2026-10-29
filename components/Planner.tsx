"use client";
import { useState } from "react";
import { DESTINATIONS, TRIP_TYPES, waLink } from "@/lib/data";
import { WhatsApp } from "./Icon";

export function Planner() {
  const [style, setStyle] = useState<string[]>([]);
  const [error, setError] = useState("");

  const toggle = (id: string) => setStyle((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("nome") || "").trim();
    if (!name) {
      setError("Diz pra gente como você se chama.");
      return;
    }
    setError("");
    const styles = TRIP_TYPES.filter((t) => style.includes(t.id)).map((t) => t.label.toLowerCase());
    const msg = [
      `Olá! Sou ${name} e quero planejar uma viagem.`,
      `Destino: ${f.get("destino") || "ainda não sei"}`,
      `Quando: ${f.get("quando") || "flexível"}`,
      `Pessoas: ${f.get("pessoas")}`,
      styles.length ? `Estilo: ${styles.join(", ")}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(waLink(msg), "_blank", "noopener");
  };

  return (
    <form className="planner glass" onSubmit={submit} noValidate>
      <div className="field">
        <label htmlFor="nome">Seu nome</label>
        <input id="nome" name="nome" autoComplete="given-name" placeholder="Como podemos te chamar" aria-invalid={!!error} aria-describedby={error ? "nome-erro" : undefined} />
        {error && (
          <span className="field-error" id="nome-erro" role="alert">
            {error}
          </span>
        )}
      </div>
      <div className="field-row">
        <div className="field">
          <label htmlFor="destino">Destino</label>
          <select id="destino" name="destino" defaultValue="">
            <option value="">Ainda não sei</option>
            {DESTINATIONS.map((d) => (
              <option key={d.id}>{d.name}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="pessoas">Pessoas</label>
          <select id="pessoas" name="pessoas" defaultValue="2">
            {["1", "2", "3", "4", "5", "6 ou mais"].map((n) => (
              <option key={n}>{n}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="quando">Quando</label>
        <input id="quando" name="quando" placeholder="Ex.: julho, 10 dias" />
      </div>
      <fieldset className="field">
        <legend>Estilo da viagem</legend>
        <div className="chips">
          {TRIP_TYPES.map((t) => (
            <button type="button" key={t.id} className={`chip ${style.includes(t.id) ? "is-active" : ""}`} aria-pressed={style.includes(t.id)} onClick={() => toggle(t.id)}>
              {t.label}
            </button>
          ))}
        </div>
      </fieldset>
      <button className="btn btn-primary btn-block" type="submit">
        <WhatsApp size={18} /> Enviar pelo WhatsApp
      </button>
      <p className="planner-note">Abre o WhatsApp com a mensagem pronta. Você revisa antes de enviar.</p>
    </form>
  );
}
