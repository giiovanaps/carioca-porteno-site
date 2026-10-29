import { Header, Logo } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Explorer } from "@/components/Explorer";
import { Orbit } from "@/components/Orbit";
import { Planner } from "@/components/Planner";
import { Reveal } from "@/components/Reveal";
import { Tilt } from "@/components/Tilt";
import { Icon, WhatsApp } from "@/components/Icon";
import { BRAND, FAQS, ROUTES, STEPS, img, waLink } from "@/lib/data";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <div className="aerial">
          <div className="aerial-bg" aria-hidden="true">
            <img src={img("amazonia")} alt="" loading="lazy" />
          </div>

          <Explorer />

          <section id="roteiros" className="routes container">
            <div className="routes-head" data-reveal>
              <div>
                <p className="eyebrow">
                  <span className="dot" /> Roteiros prontos para ajustar
                </p>
                <h2 className="section-title">
                  Quatro viagens <em>que funcionam</em>
                </h2>
              </div>
              <p>Combinações de destinos que fazem sentido no mapa e na logística. Use como ponto de partida e mude o que quiser.</p>
            </div>
            <div className="routes-grid">
              {ROUTES.map((r, i) => (
                <div key={r.id} data-reveal style={{ ["--d" as string]: i }}>
                  <Tilt className="route-card">
                    <a href={waLink(`Olá! Quero saber mais sobre o roteiro ${r.name} (${r.path}).`)} target="_blank" rel="noopener">
                      <img src={img(r.photo)} alt={`${r.name}: ${r.path}`} loading="lazy" />
                      <span className="route-num">{String(i + 1).padStart(2, "0")}</span>
                      <span className="route-tag">{r.tag}</span>
                      <div className="route-info">
                        <h3>{r.name}</h3>
                        <p>{r.path}</p>
                        <span className="route-meta">
                          <Icon name="clock" size={14} /> {r.days}
                          <span className="route-go">
                            <Icon name="arrowUR" size={18} />
                          </span>
                        </span>
                      </div>
                      <span className="glare" aria-hidden="true" />
                    </a>
                  </Tilt>
                </div>
              ))}
            </div>
          </section>
        </div>

        <Orbit />

        <section id="como-funciona" className="steps container">
          <div className="steps-head" data-reveal>
            <p className="eyebrow">
              <span className="dot" /> Como funciona
            </p>
            <h2 className="section-title">
              Da primeira mensagem <em>ao embarque</em>
            </h2>
          </div>
          <ol className="steps-grid">
            {STEPS.map((s, i) => (
              <li key={s.n} className="glass step" data-reveal style={{ ["--d" as string]: i }}>
                <span className="step-n">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="planejar" className="plan">
          <div className="plan-bg" aria-hidden="true">
            <img src={img("sancho")} alt="" loading="lazy" />
          </div>
          <div className="container plan-grid">
            <div className="plan-copy" data-reveal>
              <p className="eyebrow">
                <span className="dot" /> Planejar
              </p>
              <h2 className="section-title big">
                Conta pra gente <em>onde você quer acordar</em>
              </h2>
              <p>Preencha em menos de um minuto. A mensagem chega no WhatsApp da equipe e a gente responde com as primeiras ideias de roteiro.</p>
              <div className="faq">
                {FAQS.map((f) => (
                  <details key={f.q}>
                    <summary>
                      {f.q}
                      <Icon name="plus" size={18} />
                    </summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
            <div data-reveal>
              <Planner />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <Logo />
            <p className="footer-tag">Roteiros sob medida pelas cinco regiões do Brasil.</p>
          </div>
          <nav aria-label="Rodapé">
            <a href="#destinos">Destinos</a>
            <a href="#roteiros">Roteiros</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="/creditos">Créditos das fotos</a>
          </nav>
          <div className="footer-contact">
            <a className="btn btn-glass" href={waLink("Olá! Vim pelo site da Rota Brasilis.")} target="_blank" rel="noopener">
              <WhatsApp size={18} /> WhatsApp
            </a>
            <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} {BRAND.name}. Projeto conceitual de portfólio.</span>
          <span>
            Design e desenvolvimento <b>Flash Sites</b>
          </span>
        </div>
      </footer>
      <Reveal />
    </>
  );
}
