# Carioca Porteño Tour — entrega para o programador
Atualização de 11/10/2026.

## Alterações desta entrega
- Cards de passeios em destaque com o mesmo tamanho e legendas alinhadas.
- Imagens dos cards de jet ski e traslado preenchendo toda a área da foto.
- Perguntas frequentes centralizadas em /perguntas-frequentes e /es/perguntas-frequentes, com links no menu e rodapé.
- Removido o bloco de perguntas da home, catálogo e páginas de serviços; conteúdo preservado nos dois idiomas.
- Dados estruturados FAQPage presentes somente nas páginas de perguntas; sitemap atualizado.
- Capa do city tour com Cristo Redentor inteiro; card do Cristo na home com imagem completa e legenda abaixo.
- Nova imagem da página do helicóptero: public/assets/capa-helicoptero-sobrevoo-rio.webp.

## Conteúdo da pasta
Código-fonte em app/, components/, lib/, db/ e build/; imagens e favicon em public/assets/; dependências fixadas em package.json e pnpm-lock.yaml; estrutura SQL em drizzle/. O pacote de entrega também inclui dist/ com a versão compilada.

## Ambiente e instalação
Node.js 22.13 ou superior. Gerenciador de pacotes pnpm 11.25.0.

```sh
corepack enable
corepack prepare pnpm@11.25.0 --activate
pnpm install --frozen-lockfile
pnpm exec vinext dev --port 5173
pnpm exec vinext build
```

Os comandos diretos do Vinext acima não dependem de helpers instalados no computador que criou o projeto. Os arquivos build/ e scripts/ são parte do código e devem permanecer juntos.

## Hospedagem compatível com o projeto atual
O projeto utiliza React com Vinext/Vite, servidor Cloudflare Workers e banco Cloudflare D1. dist/client é apenas o conjunto de arquivos públicos: não representa sozinho o site inteiro. O arquivo principal compilado é dist/server/index.js. Não basta copiar o projeto para public_html de uma hospedagem exclusivamente PHP ou enviar apenas dist/client para hospedagem estática.

Para hospedar em uma conta própria da Cloudflare:
1. Criar Worker e banco D1 próprios.
2. Criar um arquivo de configuração próprio para Wrangler, com name, main apontando para dist/server/index.js, no_bundle: true, compatibility_date: 2026-05-15 e compatibility_flags: [nodejs_compat].
3. Configurar assets.directory como dist/client e a ligação D1 como DB, usando o ID real do banco; o ID zerado em vite.config.ts e dist/server/wrangler.json é um exemplo de desenvolvimento, não um banco de produção.
4. Executar a migração SQL drizzle/0000_hard_terrax.sql no banco novo. A exportação não inclui dados pessoais nem registros existentes de reservas.
5. Proteger /admin/reservas com autenticação própria antes de disponibilizar a gestão. O código atual usa app/chatgpt-auth.ts e cabeçalhos autenticados da hospedagem original: esse login precisa ser substituído ou integrado na nova hospedagem. Não confiar em cabeçalhos de identidade enviados diretamente pelo visitante.
6. Publicar usando a configuração própria de Wrangler. Não reutilizar a identidade do Site em .openai/hosting.json para criar outra hospedagem.
7. Configurar o domínio e testar todas as páginas, alternância PT/ES, perguntas, galeria, menu móvel, links WhatsApp e formulário de reservas.

Para usar Vercel, servidor Node ou outro provedor, adaptar db/index.ts (Cloudflare D1), a autenticação administrativa e o build para o ambiente escolhido. O código visual e o conteúdo estão incluídos para essa adaptação.

## Domínio e SEO
Substituir o endereço provisório em lib/content.ts (ORIGIN) e app/layout.tsx (metadataBase) pelo domínio definitivo. Recompilar após a troca. Isso atualiza canonical, hreflang, Open Graph, sitemap, robots e llms.txt. A nova página de FAQ mantém perguntas e respostas em português e espanhol.

## Formulário e gestão
POST /api/reservas valida a solicitação, verifica duplicidade e grava em D1. O formulário não cobra nem confirma disponibilidade. Pagamento e envio automático de e-mail não estão configurados. A tela /admin/reservas consulta os registros e permite abrir a conversa pelo WhatsApp. As reservas não serão persistidas fora da hospedagem original até o novo banco e a API estarem configurados.

## Imagens
A nova capa do helicóptero é ilustrativa, gerada para este site, e não representa a aeronave de um operador específico. Arquivo final: public/assets/capa-helicoptero-sobrevoo-rio.webp. Brief utilizado: fotografia realista de um helicóptero turístico em voo sobre o Rio de Janeiro, aeronave inteira e em destaque, com Baía de Guanabara e Pão de Açúcar ao fundo, sem texto ou logos. As fotografias de clientes e demais arquivos existentes foram preservados.

## Validação realizada
Compilação de produção Vinext/Vite e TypeScript sem erros. Verificações de conteúdo, rotas, navegação, dados estruturados e arquivos de imagem concluídas. A conferência visual em navegador não foi executada neste ambiente.
