import type { Metadata } from "next";
import credits from "@/lib/creditos.json";
import { img } from "@/lib/data";

export const metadata: Metadata = { title: "Créditos das fotos | Rota Brasilis" };

type Credit = { file: string; author: string; license: string; source: string };

export default function Creditos() {
  const list = Object.entries(credits as Record<string, Credit>);
  return (
    <main className="credits container">
      <a href="/" className="back">← Voltar ao site</a>
      <h1 className="section-title">Créditos das fotos</h1>
      <p>Todas as fotos vêm do Wikimedia Commons e foram redimensionadas e convertidas para WebP. Clique em cada uma para ver a página original e a licença completa.</p>
      <ul>
        {list.map(([id, c]) => (
          <li key={id}>
            <img src={img(id)} alt="" loading="lazy" />
            <div>
              <a href={c.source} target="_blank" rel="noopener">{c.file.replace(/^File:/, "").replace(/\.[a-z]+$/i, "")}</a>
              <span>{c.author || "Autor não informado"} · {c.license}</span>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
