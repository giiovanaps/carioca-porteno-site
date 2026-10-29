// Conteúdo central do site. Troque marca e contato aqui.
export const BRAND = {
  name: "Rota Brasilis",
  tagline: "Viagens sob medida pelo Brasil e América do Sul",
  // TODO: substituir pelo WhatsApp oficial da agência (DDI + DDD + número, só dígitos)
  whatsapp: "5511999999999",
  email: "contato@rotabrasilis.com.br",
  instagram: "https://instagram.com/",
};

export const waLink = (text: string) =>
  `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(text)}`;

export const img = (name: string) => `/assets/brasil/${name}.webp`;

export type Region = "Norte" | "Nordeste" | "Centro-Oeste" | "Sudeste" | "Sul" | "América do Sul";
export type TripType = "natureza" | "praias" | "aguas" | "cultura" | "aventura" | "romance";

export const TRIP_TYPES: { id: TripType; label: string; icon: string }[] = [
  { id: "natureza", label: "Natureza", icon: "leaf" },
  { id: "praias", label: "Praias & ilhas", icon: "wave" },
  { id: "aguas", label: "Águas cristalinas", icon: "drop" },
  { id: "aventura", label: "Aventura", icon: "peak" },
  { id: "cultura", label: "Cultura", icon: "column" },
  { id: "romance", label: "Lua de mel", icon: "heart" },
];

export const REGIONS: Region[] = ["Norte", "Nordeste", "Centro-Oeste", "Sudeste", "Sul", "América do Sul"];

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
  { id: "lencois", name: "Lençóis Maranhenses", state: "Maranhão", region: "Nordeste", photo: "lencois-lagoa", types: ["natureza", "aventura", "aguas"], season: "Jun a set", days: "4 a 5 dias", text: "Dunas brancas até o horizonte e lagoas de água doce que surgem depois das chuvas." },
  { id: "noronha", name: "Fernando de Noronha", state: "Pernambuco", region: "Nordeste", photo: "noronha-porcos", types: ["praias", "aguas", "romance"], season: "Ago a jan", days: "5 a 6 dias", text: "Baía do Sancho, piscinas naturais da Atalaia e golfinhos-rotadores vistos do mirante logo cedo." },
  { id: "jericoacoara", name: "Jericoacoara", state: "Ceará", region: "Nordeste", photo: "jeri-lagoa", types: ["praias", "romance", "aventura"], season: "Jul a jan", days: "4 a 5 dias", text: "Rede armada dentro da Lagoa do Paraíso, Pedra Furada na maré baixa e pôr do sol na Duna do Pôr do Sol." },
  { id: "chapada-diamantina", name: "Chapada Diamantina", state: "Bahia", region: "Nordeste", photo: "chapada-diamantina", types: ["natureza", "aventura"], season: "Abr a out", days: "5 a 7 dias", text: "Morros em mesa, poços azuis e trilhas clássicas como o Vale do Pati." },
  { id: "salvador", name: "Salvador", state: "Bahia", region: "Nordeste", photo: "salvador", types: ["cultura", "praias"], season: "Set a mar", days: "3 a 4 dias", text: "Ladeiras do Pelourinho, acarajé no fim da tarde e o sol se pondo atrás do Farol da Barra." },
  { id: "amazonia", name: "Amazônia", state: "Amazonas", region: "Norte", photo: "amazonia-selva", types: ["natureza", "aventura"], season: "Ano todo", days: "4 a 6 dias", text: "Encontro das Águas, canoa pelos igapós e noites em lodge flutuante no Rio Negro." },
  { id: "jalapao", name: "Jalapão", state: "Tocantins", region: "Norte", photo: "jalapao", types: ["aventura", "natureza", "aguas"], season: "Mai a set", days: "5 a 6 dias", text: "Dunas douradas, fervedouros onde não se afunda e cachoeiras no meio do cerrado." },
  { id: "bonito", name: "Bonito", state: "Mato Grosso do Sul", region: "Centro-Oeste", photo: "bonito", types: ["aguas", "natureza"], season: "Ano todo", days: "4 a 5 dias", text: "A Gruta do Lago Azul pela manhã e flutuação no Rio da Prata, com peixes passando a um palmo do rosto." },
  { id: "pantanal", name: "Pantanal", state: "MS e MT", region: "Centro-Oeste", photo: "pantanal", types: ["natureza"], season: "Jul a out", days: "4 a 5 dias", text: "Focagem noturna, araras-azuis no café da manhã e chance real de ver onça-pintada às margens do Rio Cuiabá." },
  { id: "rio", name: "Rio de Janeiro", state: "Rio de Janeiro", region: "Sudeste", photo: "rio-cristo", types: ["cultura", "praias", "romance"], season: "Ano todo", days: "4 a 5 dias", text: "Cristo Redentor no fim da tarde, bondinho do Pão de Açúcar e samba na Pedra do Sal à noite." },
  { id: "peru-humantay", name: "Laguna Humantay", state: "Cusco, Peru", region: "América do Sul", photo: "peru-humantay", types: ["natureza", "aventura"], season: "Mai a set", days: "5 a 7 dias", text: "Lagoa turquesa a 4.200 metros, aos pés do nevado Humantay. Sai de Cusco de madrugada e volta no fim do dia." },
  { id: "peru-vinicunca", name: "Montanha Colorida", state: "Vinicunca, Peru", region: "América do Sul", photo: "peru-vinicunca", types: ["aventura", "natureza"], season: "Mai a set", days: "Combine com Cusco", text: "Faixas de minerais em vermelho, ocre e turquesa a mais de 5.000 metros. Subida curta, ar rarefeito e vista para o Ausangate." },
  { id: "chile-portillo", name: "Portillo", state: "Andes, Chile", region: "América do Sul", photo: "chile-portillo", types: ["aventura", "romance", "natureza"], season: "Jun a set", days: "4 a 5 dias", text: "Piscina aquecida de frente para a Laguna del Inca congelada, esqui na cordilheira e cerca de 160 km até Santiago." },
  { id: "san-andres", name: "San Andrés", state: "Caribe, Colômbia", region: "América do Sul", photo: "san-andres", types: ["praias", "aguas", "romance"], season: "Jan a abr", days: "5 a 6 dias", text: "O mar de sete cores, coco loco em Johnny Cay e snorkel no Acuario, com peixes coloridos em água na altura da cintura." },
  { id: "iguacu", name: "Cataratas do Iguaçu", state: "Paraná", region: "Sul", photo: "iguacu", types: ["natureza", "aventura"], season: "Ano todo", days: "3 a 4 dias", text: "Mais de 270 quedas d'água em plena Mata Atlântica, na fronteira com a Argentina." },
];

export const HERO_SLIDES = [
  { photo: "peru-humantay", place: "Laguna Humantay", state: "Peru", title: ["Uma lagoa", "a 4.200", "metros"] },
  { photo: "peru-vinicunca", place: "Montanha Colorida", state: "Peru", title: ["Montanha", "de sete", "cores"] },
  { photo: "rio-cristo", place: "Rio de Janeiro", state: "Brasil", title: ["Do Cristo", "ao Arpoador", "sem pressa"] },
  { photo: "san-andres", place: "San Andrés", state: "Colômbia", title: ["O mar de", "sete cores", "do Caribe"] },
  { photo: "lencois-lagoa", place: "Lençóis Maranhenses", state: "Brasil", title: ["Lagoas que", "só aparecem", "no inverno"] },
  { photo: "chile-portillo", place: "Portillo", state: "Chile", title: ["Piscina", "quente", "na neve"] },
  { photo: "jeri-lagoa", place: "Jericoacoara", state: "Brasil", title: ["Rede", "dentro", "da lagoa"] },
];

export const ROUTES = [
  { id: "emocoes", name: "Rota das Emoções", path: "Jeri · Delta do Parnaíba · Lençóis", days: "8 dias", photo: "lencois-lagoa", tag: "Nordeste" },
  { id: "aguas", name: "Águas do Centro-Oeste", path: "Bonito · Pantanal", days: "7 dias", photo: "bonito-flutuacao", tag: "Centro-Oeste" },
  { id: "selva", name: "Imersão na Selva", path: "Manaus · Rio Negro · Lodge", days: "5 dias", photo: "amazonia-selva", tag: "Norte" },
  { id: "cusco", name: "Cusco em Altitude", path: "Cusco · Humantay · Vinicunca", days: "7 dias", photo: "peru-vinicunca", tag: "Peru" },
];

export const ORBIT = ["san-andres", "jalapao-cachoeira", "pantanal", "chile-portillo", "salvador", "iguacu", "chapada-diamantina", "peru-humantay", "bonito", "rio-pao-de-acucar", "sancho", "jalapao"];

export const STEPS = [
  { n: "01", title: "Conversa", text: "Uma chamada de 20 minutos: datas, orçamento, quem vai e o que ninguém pode perder." },
  { n: "02", title: "Roteiro", text: "Você recebe um roteiro dia a dia, com hotel, transfer, passeios e tempo livre marcados no mapa." },
  { n: "03", title: "Ajustes", text: "Trocou de ideia sobre um hotel ou quer um dia a mais na praia? Mudamos até fechar." },
  { n: "04", title: "Viagem", text: "Voo atrasou ou choveu no dia do passeio: você manda mensagem e a gente remarca." },
];

export const FAQS = [
  { q: "Vocês montam roteiros fora do Brasil?", a: "Sim. Além das cinco regiões do Brasil, montamos viagens para Peru, Chile e San Andrés, na Colômbia. Muitas vezes vale juntar destinos próximos, como Cusco com Vinicunca ou Bonito com Pantanal." },
  { q: "Os roteiros são pacotes fechados?", a: "Não. Os roteiros desta página são exemplos. Datas, hotéis e passeios mudam conforme quem viaja." },
  { q: "Qual a melhor época para viajar?", a: "Cada destino tem a sua. Lençóis enche de junho a setembro, Cusco tem céu limpo de maio a setembro e Portillo tem neve no inverno chileno. A época sugerida está em cada card." },
  { q: "Como funciona o pagamento?", a: "Com o roteiro aprovado, mandamos a proposta com o valor de cada item e as opções de parcelamento." },
];
