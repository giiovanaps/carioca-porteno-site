# Carioca Porteño Tour

## Atualização visual de 12/10/2026
- Tipografia editorial Fraunces, espaçamento responsivo e superfícies mais limpas em `app/premium.css`.
- Transições discretas, conteúdo sempre visível e movimento reduzido em `components/site-motion.tsx` e `app/motion.css`. O aviso da Flash aparece uma vez por aba.
- Faixa de apresentação com a identidade da Flash Sites em `app/flash-brand.css`.
- Copy e ordem das seções preservadas; somente a avaliação real de Leonardo g é exibida.
- Compilação e TypeScript validados; conferência em navegador realizada em desktop e mobile.

## Executar localmente
Node.js 22.13 ou superior e pnpm na versão indicada em `package.json`.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

A prévia local abre em `http://127.0.0.1:5173`. Consulte `HOSPEDAGEM.md` para configurar servidor, banco de dados e autenticação em outra hospedagem.

## Apresentação na Netlify
O arquivo `netlify.toml` configura o comando `node scripts/build-netlify.mjs` e a pasta de publicação `.next`. Essa compilação usa Next.js nativo, compatível com o adaptador da Netlify; a compilação original em `dist/` é destinada à Cloudflare.

As páginas públicas e animações estão disponíveis na apresentação Netlify. O banco D1 e o login administrativo da hospedagem original não são migrados: `/admin/reservas` fica indisponível, e a API não confirma solicitações que não foram gravadas. Os contatos pelo WhatsApp continuam funcionando. Para usar reservas persistentes na Netlify, é necessário configurar um banco e uma autenticação próprios.

Site reconstruído com base nos layouts desktop e mobile fornecidos em 25/09 e no briefing de 09/10/2026.

## Conteúdo
- Identidade azul marinho e amarelo, hierarquia e sequência visual das referências.
- Fotografias reais autorizadas, logo original, WhatsApp e redes oficiais.
- Home, catálogo, seis páginas de serviços, contato e privacidade em português e espanhol.
- Metadados, canonical, hreflang, dados estruturados, sitemap, robots e llms.txt.
- Formulário com armazenamento em D1, validação no servidor, referência única e proteção contra envio duplicado.
- Área restrita /admin/reservas para consultar e responder às solicitações.

## Reservas
A solicitação fica armazenada no site. Os valores e a disponibilidade não foram fornecidos; portanto, o formulário registra um pedido e a equipe conclui a reserva e o pagamento. Não há cobrança automática. E-mail automático não está configurado.

## Fotografias
As imagens de redes sociais são os recortes reais disponibilizados na conversa anterior. A foto de casal no Pão de Açúcar foi fornecida em 1440 × 1920. As demais têm resolução de origem reduzida e podem ser substituídas por originais com os mesmos nomes. Não foram geradas fotografias de clientes.

## Desenvolvimento
Use os helpers do plugin Sites para instalar e construir. Migrations: drizzle/0000_hard_terrax.sql. A publicação aplica a migração no banco hospedado. Preview de navegador não executado: o recurso control-browser não está disponível neste ambiente.

O endereço provisório está definido em lib/content.ts e app/layout.tsx. Ao instalar um domínio próprio, atualizar ORIGIN nos dois arquivos e republicar.

## Fontes do briefing
WhatsApp e CADASTUR: perfil oficial na captura fornecida.
Avaliação: Leonardo g, Tripadvisor, fevereiro/2026, com link para a página original no site.
Não foram inventados preços, durações fixas, disponibilidade, avaliações ou clientes.
