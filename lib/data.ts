// Conteúdo central do site. Troque marca e contato aqui.
export const BRAND = {
  name: "Rota Brasilis",
  tagline: "Viagens autorais pelo Brasil",
  // TODO: substituir pelo WhatsApp oficial da agência (DDI + DDD + número, só dígitos)
  whatsapp: "5511999999999",
  email: "contato@rotabrasilis.com.br",
  instagram: "https://instagram.com/",
};

export const waLink = (text: string) =>
  `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(text)}`;

export const img = (name: string) => `/assets/brasil/${name}.webp`;

export type Region = "Norte" | "Nordeste" | "Centro-Oeste" | "Sudeste" | "Sul";
export type TripType = "natureza" | "praias" | "aguas" | "cultura" | "aventura" | "romance";

export const TRIP_TYPES: { id: TripType; label: string; icon: string }[] = [
  { id: "natureza", label: "Natureza", icon: "leaf" },
  { id: "praias", label: "Praias & ilhas", icon: "wave" },
  { id: "aguas", label: "Águas cristalinas", icon: "drop" },
  { id: "aventura", label: "Aventura", icon: "peak" },
  { id: "cultura", label: "Cultura", icon: "column" },
  { id: "romance", label: "Lua de mel", icon: "heart" },
];

export const REGIONS: Region[] = ["Norte", "Nordeste", "Centro-Oeste", "Sudeste", "Sul"];

export type Destination = {
  id: string;
  name: string;
  state: string;
  region: Region;
  photo: string;
  types: TripType[];
  season: string;
  days: string;
  text: string;
};

export const DESTINATIONS: Destination[] = [
  { id: "lencois", name: "Lençóis Maranhenses", state: "Maranhão", region: "Nordeste", photo: "lencois-aereo", types: ["natureza", "aventura", "aguas"], season: "Jun a set", days: "4 a 5 dias", text: "Dunas brancas até o horizonte e lagoas de água doce que surgem depois das chuvas." },
  { id: "noronha", name: "Fernando de Noronha", state: "Pernambuco", region: "Nordeste", photo: "noronha", types: ["praias", "aguas", "romance"], season: "Ago a jan", days: "5 a 6 dias", text: "Baía do Sancho, piscinas naturais da Atalaia e golfinhos-rotadores vistos do mirante logo cedo." },
  { id: "jericoacoara", name: "Jericoacoara", state: "Ceará", region: "Nordeste", photo: "jericoacoara", types: ["praias", "romance", "aventura"], season: "Jul a jan", days: "4 a 5 dias", text: "Ruas de areia, pôr do sol na Duna do Pôr do Sol, Pedra Furada na maré baixa e kite na Lagoa do Paraíso." },
  { id: "chapada-diamantina", name: "Chapada Diamantina", state: "Bahia", region: "Nordeste", photo: "chapada-diamantina", types: ["natureza", "aventura"], season: "Abr a out", days: "5 a 7 dias", text: "Morros em mesa, poços azuis e trilhas clássicas como o Vale do Pati." },
  { id: "salvador", name: "Salvador", state: "Bahia", region: "Nordeste", photo: "salvador", types: ["cultura", "praias"], season: "Set a mar", days: "3 a 4 dias", text: "Ladeiras do Pelourinho, acarajé no fim da tarde e o sol se pondo atrás do Farol da Barra." },
  { id: "amazonia", name: "Amazônia", state: "Amazonas", region: "Norte", photo: "amazonia", types: ["natureza", "aventura"], season: "Ano todo", days: "4 a 6 dias", text: "Encontro das Águas, canoa pelos igapós e noites em lodge flutuante no Rio Negro." },
  { id: "jalapao", name: "Jalapão", state: "Tocantins", region: "Norte", photo: "jalapao", types: ["aventura", "natureza", "aguas"], season: "Mai a set", days: "5 a 6 dias", text: "Dunas douradas, fervedouros onde não se afunda e cachoeiras no meio do cerrado." },
  { id: "bonito", name: "Bonito", state: "Mato Grosso do Sul", region: "Centro-Oeste", photo: "bonito", types: ["aguas", "natureza"], season: "Ano todo", days: "4 a 5 dias", text: "A Gruta do Lago Azul pela manhã e flutuação no Rio da Prata, com peixes passando a um palmo do rosto." },
  { id: "pantanal", name: "Pantanal", state: "MS e MT", region: "Centro-Oeste", photo: "pantanal", types: ["natureza"], season: "Jul a out", days: "4 a 5 dias", text: "Focagem noturna, araras-azuis no café da manhã e chance real de ver onça-pintada às margens do Rio Cuiabá." },
  { id: "rio", name: "Rio de Janeiro", state: "Rio de Janeiro", region: "Sudeste", photo: "rio-pao-de-acucar", types: ["cultura", "praias", "romance"], season: "Ano todo", days: "4 a 5 dias", text: "Trilha do Dois Irmãos ao amanhecer, bondinho do Pão de Açúcar no fim da tarde e samba na Pedra do Sal." },
  { id: "iguacu", name: "Cataratas do Iguaçu", state: "Paraná", region: "Sul", photo: "iguacu", types: ["natureza", "aventura"], season: "Ano todo", days: "3 a 4 dias", text: "Mais de 270 quedas d'água em plena Mata Atlântica, na fronteira com a Argentina." },
  { id: "itaimbezinho", name: "Cânions do Sul", state: "RS e SC", region: "Sul", photo: "itaimbezinho", types: ["natureza", "aventura", "romance"], season: "Mar a ago", days: "3 a 4 dias", text: "Paredões de 700 metros no Itaimbezinho, trilha do Rio do Boi e noites frias em Cambará do Sul." },
];

export const HERO_SLIDES = [
  { photo: "lencois", place: "Lençóis Maranhenses", state: "MA", title: ["Lagoas que", "só aparecem", "no inverno"] },
  { photo: "noronha", place: "Fernando de Noronha", state: "PE", title: ["Tartarugas", "antes do", "café"] },
  { photo: "iguacu-aereo", place: "Cataratas do Iguaçu", state: "PR", title: ["275 quedas", "d'água em", "um só dia"] },
  { photo: "rio", place: "Rio de Janeiro", state: "RJ", title: ["Do Cristo", "ao Arpoador", "sem pressa"] },
];

export const ROUTES = [
  { id: "emocoes", name: "Rota das Emoções", path: "Jeri · Delta do Parnaíba · Lençóis", days: "8 dias", photo: "lencois", tag: "Nordeste" },
  { id: "aguas", name: "Águas do Centro-Oeste", path: "Bonito · Pantanal", days: "7 dias", photo: "bonito-flutuacao", tag: "Centro-Oeste" },
  { id: "selva", name: "Imersão na Selva", path: "Manaus · Rio Negro · Lodge", days: "5 dias", photo: "amazonia", tag: "Norte" },
  { id: "sul", name: "Cânions e Cataratas", path: "Aparados da Serra · Iguaçu", days: "7 dias", photo: "itaimbezinho-canion", tag: "Sul" },
];

export const ORBIT = ["sancho", "jalapao-cachoeira", "pantanal", "salvador", "iguacu", "chapada-diamantina", "bonito", "jericoacoara", "rio-pao-de-acucar", "lencois-aereo"];

export const STEPS = [
  { n: "01", title: "Conversa", text: "Uma chamada de 20 minutos: datas, orçamento, quem vai e o que ninguém pode perder." },
  { n: "02", title: "Roteiro", text: "Você recebe um roteiro dia a dia, com hotel, transfer, passeios e tempo livre marcados no mapa." },
  { n: "03", title: "Ajustes", text: "Trocou de ideia sobre um hotel ou quer um dia a mais na praia? Mudamos até fechar." },
  { n: "04", title: "Viagem", text: "Voo atrasou ou choveu no dia do passeio: você manda mensagem e a gente remarca." },
];

export const FAQS = [
  { q: "Vocês montam roteiros para qualquer região do Brasil?", a: "Sim, das cinco regiões. Muitas vezes vale juntar dois destinos próximos, como Bonito com Pantanal ou Jericoacoara com Lençóis." },
  { q: "Os roteiros são pacotes fechados?", a: "Não. Os roteiros desta página são exemplos. Datas, hotéis e passeios mudam conforme quem viaja." },
  { q: "Qual a melhor época para viajar?", a: "Cada destino tem a sua. Lençóis enche de junho a setembro, o Pantanal seca de julho a outubro. A época sugerida está em cada card." },
  { q: "Como funciona o pagamento?", a: "Com o roteiro aprovado, mandamos a proposta com o valor de cada item e as opções de parcelamento." },
];
