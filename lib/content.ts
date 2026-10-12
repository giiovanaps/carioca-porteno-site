import {regionalTours} from "./regional-tours";
export type Lang="pt"|"es";
export const ORIGIN="https://carioca-porteno-tour.giiovanapatriciia.chatgpt.site";
export const PHONE="5521984123910";
export const SOCIAL={
instagram:"https://www.instagram.com/cariocaportenotour/",
facebook:"https://www.facebook.com/p/Carioca-Porte%C3%B1o-Tour-61576772393616/",
tiktok:"https://www.tiktok.com/@carioca.porteno.tour",
tripadvisor:"https://www.tripadvisor.com.br/Attraction_Review-g303506-d33405201-Reviews-Carioca_Porteno_Tour-Rio_de_Janeiro_State_of_Rio_de_Janeiro.html",
katy:"https://www.instagram.com/katycariocaporteno/"};
export function wa(lang:Lang,experience?:string){return "https://wa.me/"+PHONE+"?text="+encodeURIComponent(lang==="es"?"¡Hola, Carioca Porteño Tour! Quiero información "+(experience?"sobre "+experience+".":"para planificar mi viaje a Río."):"Olá, Carioca Porteño Tour! Quero informações "+(experience?"sobre "+experience+".":"para planejar minha viagem ao Rio."));}
export const url=(lang:Lang,path="")=>(lang==="es"?"/es":"")+"/"+path;
export const asset=(name:string)=>"/assets/"+name;
export const pick=(lang:Lang,pt:string,es:string)=>lang==="es"?es:pt;
export type Experience={id:string;path:string;photo:string;detailPhoto?:string;icon:string;regional?:boolean;price?:Record<Lang,string>;details?:{title:Record<Lang,string>;items:Record<Lang,string[]>}[];photoCredit?:{author:string;source:string;license:string};title:Record<Lang,string>;short:Record<Lang,string>;seo:Record<Lang,string>;intro:Record<Lang,string>;highlights:Record<Lang,string[]>;notes:Record<Lang,string>;};
export const experiences:Experience[]=[
{id:"city-tour",path:"passeios/city-tour-rio-de-janeiro",photo:"capa-passeios-ipanema.webp",detailPhoto:"capa-cristo-rio.webp",icon:"mountain",price:{pt:"A partir de R$ 250,00",es:"Desde R$ 250,00"},title:{pt:"Passeios",es:"Paseos"},short:{pt:"City tour, principais atrações e roteiros personalizados.",es:"City tours, principales atracciones e itinerarios personalizados."},seo:{pt:"Cristo Redentor, Pão de Açúcar e Escadaria Selarón",es:"Cristo Redentor, Pan de Azúcar y Escalera Selarón"},intro:{pt:"Nosso trio mais amado reúne três cartões postais do Rio de Janeiro em um só passeio: Cristo Redentor, Pão de Açúcar e Escadaria Selarón. Escolha uma opção privativa ou compartilhada, com traslado executivo e atendimento personalizado.",es:"Nuestro trío más querido reúne tres lugares emblemáticos de Río de Janeiro en un solo paseo: Cristo Redentor, Pan de Azúcar y Escalera Selarón. Elige una opción privada o compartida, con traslado ejecutivo y atención personalizada."},highlights:{pt:["Cristo Redentor e vistas do Corcovado","Pão de Açúcar e Baía de Guanabara","Escadaria Selarón","Modalidade privativa ou compartilhada","Traslado executivo"],es:["Cristo Redentor y vistas del Corcovado","Pan de Azúcar y Bahía de Guanabara","Escalera Selarón","Modalidad privada o compartida","Traslado ejecutivo"]},details:[{title:{pt:"Itens opcionais",es:"Servicios opcionales"},items:{pt:["Almoço opcional","Ingressos opcionais","Outros lugares e roteiros personalizados sob consulta"],es:["Almuerzo opcional","Entradas opcionales","Otros lugares e itinerarios personalizados bajo consulta"]}}],notes:{pt:"Valor inicial sujeito à confirmação para a data e a modalidade escolhidas. Almoço e ingressos são opcionais e não devem ser considerados incluídos no valor inicial. Confirme o preço atual, duração, ponto de encontro, transporte e condições da modalidade escolhida com a equipe.",es:"Precio inicial sujeto a confirmación para la fecha y la modalidad elegidas. Almuerzo y entradas son opcionales y no deben considerarse incluidos en el precio inicial. Confirma precio actual, duración, punto de encuentro, transporte y condiciones de la modalidad elegida con el equipo."}},
{id:"transfer",path:"servicos/transfer-aeroporto-rio",photo:"capa-transfer-executivo.webp",icon:"car",title:{pt:"Traslados / Receptivo",es:"Traslados / Recepción"},short:{pt:"Aeroportos, hotéis e traslados no Rio de Janeiro.",es:"Aeropuertos, hoteles y traslados en Río de Janeiro."},seo:{pt:"Transfer Galeão e Santos Dumont no Rio de Janeiro",es:"Traslados Galeão y Santos Dumont en Río de Janeiro"},intro:{pt:"Comece e termine sua viagem com um traslado organizado. Recepção e transfer privativo ou compartilhado dos aeroportos Galeão (GIG) e Santos Dumont (SDU), além de hotéis, eventos e outros destinos sob consulta.",es:"Empieza y termina tu viaje con un traslado organizado. Recepción y traslados privados o compartidos desde Galeão (GIG) y Santos Dumont (SDU), además de hoteles, eventos y otros destinos bajo consulta."},highlights:{pt:["Aeroporto Internacional do Galeão (GIG)","Aeroporto Santos Dumont (SDU)","Hotéis, eventos e destinos turísticos","Opções privativas ou compartilhadas"],es:["Aeropuerto Internacional Galeão (GIG)","Aeropuerto Santos Dumont (SDU)","Hoteles, eventos y destinos turísticos","Opciones privadas o compartidas"]},notes:{pt:"Informe voo, horário, origem, destino, pessoas e bagagens. A equipe confirma o veículo e as condições do receptivo.",es:"Indica vuelo, horario, origen, destino, pasajeros y equipaje. El equipo confirma el vehículo y las condiciones de recepción."}},
{id:"helicoptero",path:"passeios/helicoptero-rio-de-janeiro",photo:"capa-helicoptero-rio.webp",detailPhoto:"capa-helicoptero-sobrevoo-rio.webp",icon:"helicopter",title:{pt:"Helicóptero",es:"Helicóptero"},short:{pt:"Voe sobre as belezas do Rio e tenha uma vista inesquecível.",es:"Vuela sobre Río y disfruta una vista inolvidable."},seo:{pt:"Passeio de helicóptero no Rio de Janeiro",es:"Paseo en helicóptero en Río de Janeiro"},intro:{pt:"Uma forma especial de ver o Rio: do alto. Consulte as opções de passeio de helicóptero e encontre o voo que combina com sua viagem, com orientação antes da reserva.",es:"Una forma especial de ver Río: desde el cielo. Consulta las opciones de paseo en helicóptero y encuentra el vuelo ideal para tu viaje, con orientación antes de reservar."},highlights:{pt:["Vistas panorâmicas do Rio de Janeiro","Cristo Redentor e Pão de Açúcar, conforme o voo escolhido","Copacabana, Ipanema e paisagens do Rio, conforme o roteiro","Opções de trajetos sob consulta","Uma experiência para guardar na memória","Atendimento em português e espanhol"],es:["Vistas panorámicas de Río de Janeiro","Cristo Redentor y Pan de Azúcar, según el vuelo elegido","Copacabana, Ipanema y paisajes de Río, según el recorrido","Recorridos bajo consulta","Una experiencia para recordar","Atención en español y portugués"]},notes:{pt:"Duração, percurso, saída e restrições são informados na cotação. O voo depende da disponibilidade e das condições meteorológicas e operacionais.",es:"Duración, recorrido, salida y restricciones se informan en el presupuesto. El vuelo depende de la disponibilidad y las condiciones meteorológicas y operativas."}},
{id:"lancha",path:"passeios/lancha-barco-rio",photo:"capa-lancha-rio.webp",icon:"boat",title:{pt:"Lancha / Barco",es:"Lancha / Barco"},short:{pt:"Passeios pelo mar, paisagens e momentos para relaxar.",es:"Paseos por el mar, paisajes y momentos para relajarse."},seo:{pt:"Passeios de lancha e barco no Rio de Janeiro",es:"Paseos en lancha y barco en Río de Janeiro"},intro:{pt:"Sol, mar e uma nova perspectiva do Rio. Conheça as opções de lancha e barco para aproveitar as paisagens a dois, em família ou com seu grupo.",es:"Sol, mar y una nueva perspectiva de Río. Conoce las opciones de lancha y barco para disfrutar los paisajes en pareja, en familia o con tu grupo."},highlights:{pt:["Paisagens do litoral e passeios no mar","Opções para diferentes perfis de viagem","Roteiros e embarcações sob consulta","Orientação antes de reservar"],es:["Paisajes costeros y paseos por el mar","Opciones para diferentes estilos de viaje","Recorridos y embarcaciones bajo consulta","Orientación antes de reservar"]},notes:{pt:"Consulte capacidade, duração, embarque, paradas e itens incluídos. Saídas dependem das condições do mar e da disponibilidade.",es:"Consulta capacidad, duración, embarque, paradas y servicios incluidos. Las salidas dependen de las condiciones del mar y de la disponibilidad."}},
{id:"jetski",path:"passeios/jet-ski-rio",photo:"capa-jetski-real.webp",icon:"waves",title:{pt:"Jet Ski",es:"Jet Ski"},short:{pt:"Aventura e paisagens incríveis nas águas do Rio.",es:"Aventura y paisajes increíbles en las aguas de Río."},seo:{pt:"Jet ski no Rio de Janeiro",es:"Jet ski en Río de Janeiro"},intro:{pt:"Para quem quer incluir aventura no roteiro. Consulte as opções de jet ski, o local da atividade e as condições para participar.",es:"Para quienes quieren incluir aventura en su itinerario. Consulta las opciones de jet ski, el lugar de la actividad y las condiciones para participar."},highlights:{pt:["Uma experiência de aventura no mar","Orientação sobre a atividade","Opções e disponibilidade sob consulta","Atendimento em português e espanhol"],es:["Una experiencia de aventura en el mar","Orientación sobre la actividad","Opciones y disponibilidad bajo consulta","Atención en español y portugués"]},notes:{pt:"Duração, regras de participação, condução, equipamentos e encontro são confirmados na proposta. A atividade depende das condições do mar.",es:"Duración, reglas de participación y conducción, equipamiento y encuentro se confirman en la propuesta. La actividad depende de las condiciones del mar."}},
{id:"futebol",path:"passeios/maracana-futebol",photo:"capa-maracana.webp",icon:"football",title:{pt:"Futebol no Maracanã",es:"Fútbol en el Maracaná"},short:{pt:"Tours e experiências para apaixonados por futebol.",es:"Tours y experiencias para amantes del fútbol."},seo:{pt:"Maracanã: futebol e tour no Rio de Janeiro",es:"Maracaná: fútbol y tours en Río de Janeiro"},intro:{pt:"Conheça um dos grandes palcos do futebol e descubra as opções para incluir o Maracanã na sua viagem. Consulte tours e experiências de acordo com sua data.",es:"Conoce uno de los grandes escenarios del fútbol y descubre las opciones para incluir el Maracaná en tu viaje. Consulta tours y experiencias para la fecha de tu visita."},highlights:{pt:["Maracanã e a história do futebol brasileiro","Tours e experiências sob consulta","Opções de acordo com a programação","Atendimento para brasileiros e visitantes de outros países"],es:["Maracaná y la historia del fútbol brasileño","Tours y experiencias bajo consulta","Opciones según la programación","Atención a brasileños y viajeros de otros países"]},notes:{pt:"Jogos, tours, setores, ingressos e traslados têm disponibilidades próprias. A equipe confirma as opções para sua data.",es:"Partidos, tours, sectores, entradas y traslados tienen disponibilidad propia. El equipo confirma las opciones para tu fecha."}},
...regionalTours
];
export const destinations=[
{pt:"Cristo Redentor",es:"Cristo Redentor",tagpt:"CITY TOUR",tages:"CITY TOUR",photo:"capa-cristo-rio.webp",service:0},
{pt:"Pão de Açúcar",es:"Pan de Azúcar",tagpt:"RIO DE JANEIRO",tages:"RÍO DE JANEIRO",photo:"capa-pao-acucar.webp",service:0},
{pt:"Escadaria Selarón",es:"Escalera Selarón",tagpt:"SANTA TERESA E LAPA",tages:"SANTA TERESA Y LAPA",photo:"capa-selaron.webp",service:0},
{pt:"Passeios no mar",es:"Paseos por el mar",tagpt:"LANCHA E BARCO",tages:"LANCHA Y BARCO",photo:"capa-lancha-rio.webp",service:3},
{pt:"Voo de helicóptero",es:"Vuelo en helicóptero",tagpt:"VISTA PANORÂMICA",tages:"VISTA PANORÁMICA",photo:"capa-helicoptero-rio.webp",service:2},
{pt:"Maracanã",es:"Maracaná",tagpt:"FUTEBOL E TOUR",tages:"FÚTBOL Y TOUR",photo:"capa-maracana.webp",service:5}];
export const photos=[
{file:"grupo-escadaria.webp",pt:"Amigos na Escadaria Selarón",es:"Amigos en la Escalera Selarón"},
{file:"casal-pao-de-acucar.webp",pt:"Um dia especial no Pão de Açúcar",es:"Un día especial en el Pan de Azúcar"},
{file:"turista-cristo.webp",pt:"Sorrisos no Cristo Redentor",es:"Sonrisas en el Cristo Redentor"},
{file:"transfer-clientes.webp",pt:"Uma viagem para viver juntos",es:"Un viaje para disfrutar juntos"},
{file:"bondinho-santa-teresa.webp",pt:"As cores de Santa Teresa",es:"Los colores de Santa Teresa"},
{file:"turista-selaron.webp",pt:"Memórias na Escadaria Selarón",es:"Recuerdos en la Escalera Selarón"}];
const faqEntries=[
  {
    "pt": [
      "Posso solicitar minha reserva pelo site?",
      "Sim. Escolha a experiência, informe a data e a quantidade de pessoas. Sua solicitação fica registrada com um número de referência. A equipe confirma disponibilidade, valores e condições antes de concluir a reserva."
    ],
    "es": [
      "¿Puedo solicitar una reserva desde la web?",
      "Sí. Elige la experiencia e indica la fecha y los participantes. Tu solicitud queda registrada con un número de referencia. El equipo confirma disponibilidad, precio y condiciones antes de finalizar la reserva."
    ]
  },
  {
    "pt": [
      "Vocês atendem em espanhol?",
      "Sim. A Carioca Porteño Tour oferece atendimento em português e espanhol."
    ],
    "es": [
      "¿Atienden en español?",
      "Sí. Carioca Porteño Tour ofrece atención en español y portugués."
    ]
  },
  {
    "pt": [
      "Vocês fazem transfer do Galeão e do Santos Dumont?",
      "Sim. Há opções privativas ou compartilhadas dos aeroportos Galeão (GIG) e Santos Dumont (SDU), além de hotéis e outros destinos sob consulta. Informe seu voo, horário, destino, pessoas e bagagens para receber uma proposta."
    ],
    "es": [
      "¿Hay traslados desde Galeão y Santos Dumont?",
      "Sí. Hay opciones privadas o compartidas desde Galeão (GIG) y Santos Dumont (SDU), además de hoteles y otros destinos bajo consulta. Indica el vuelo, horario, destino, participantes y equipaje para recibir una propuesta."
    ]
  },
  {
    "pt": [
      "Qual é o valor dos passeios?",
      "O valor depende da experiência, data, pessoas e modalidade. Solicite uma cotação para receber os itens incluídos e as condições do seu passeio. Os preços iniciais exibidos no site precisam ser confirmados para sua data."
    ],
    "es": [
      "¿Cuál es el precio de los paseos?",
      "El precio depende de la experiencia, fecha, participantes y modalidad. Solicita un presupuesto para conocer los servicios incluidos y las condiciones. Los precios iniciales de la web deben confirmarse para tu fecha."
    ]
  },
  {
    "pt": [
      "Posso montar um roteiro personalizado?",
      "Sim. Conte os lugares que deseja visitar, onde ficará hospedado e como imagina sua viagem. A equipe orienta você sobre as opções de roteiro e disponibilidade."
    ],
    "es": [
      "¿Puedo personalizar mi itinerario?",
      "Sí. Cuéntanos los lugares que deseas visitar, dónde te alojarás y cómo imaginas tu viaje. El equipo te orienta sobre los itinerarios y la disponibilidad."
    ]
  },
  {
    "pt": [
      "Como a reserva é confirmada?",
      "A reserva é confirmada com a equipe depois de verificar disponibilidade e combinar condições e pagamento. O formulário não realiza cobranças nem garante uma vaga."
    ],
    "es": [
      "¿Cómo se confirma una reserva?",
      "La reserva se confirma con el equipo después de comprobar disponibilidad y acordar las condiciones y el pago. El formulario no realiza cobros ni garantiza una plaza."
    ]
  },
  {
    "pt": [
      "Qual é a diferença entre privativo e compartilhado?",
      "Na modalidade privativa, a experiência é organizada para o seu grupo. Na compartilhada, outras pessoas podem participar. Consulte quais passeios e traslados oferecem cada opção e confirme o roteiro e os horários da modalidade escolhida."
    ],
    "es": [
      "¿Qué diferencia hay entre privado y compartido?",
      "En la modalidad privada, la experiencia se organiza para tu grupo. En la compartida pueden participar otros viajeros. Consulta qué paseos y traslados ofrecen cada opción y confirma el itinerario y los horarios."
    ]
  },
  {
    "pt": [
      "Ingressos e almoço estão incluídos?",
      "Os itens incluídos variam conforme o passeio e a proposta. No city tour anunciado a partir de R$ 250,00, almoço e ingressos são opcionais. Peça a lista de inclusões e custos adicionais antes de confirmar."
    ],
    "es": [
      "¿Están incluidas las entradas y el almuerzo?",
      "Los servicios incluidos dependen del paseo y la propuesta. En el city tour anunciado desde R$ 250,00, el almuerzo y las entradas son opcionales. Pide la lista de servicios incluidos y gastos adicionales antes de confirmar."
    ]
  },
  {
    "pt": [
      "Posso levar crianças?",
      "Informe a idade de cada criança ao solicitar a reserva. A equipe confirma a possibilidade de participação, valores, necessidades de transporte e eventuais regras específicas da atividade."
    ],
    "es": [
      "¿Puedo ir con niños?",
      "Indica la edad de cada niño al solicitar la reserva. El equipo confirma la posibilidad de participar, los precios, las necesidades de transporte y las reglas específicas de la actividad."
    ]
  },
  {
    "pt": [
      "Vocês buscam no hotel?",
      "Informe seu hotel e bairro. A equipe confirma o ponto de encontro, o horário e se o embarque e o retorno ao hotel fazem parte da opção escolhida. Não considere esse transporte incluído sem confirmação na proposta."
    ],
    "es": [
      "¿Recogen en el hotel?",
      "Indica el hotel y el barrio. El equipo confirma el punto de encuentro, el horario y si la recogida y el regreso al hotel forman parte de la opción elegida. Confirma este servicio en la propuesta."
    ]
  },
  {
    "pt": [
      "Quanto tempo dura cada passeio?",
      "A duração varia conforme o roteiro, a modalidade e as condições do dia. Antes de reservar, confirme os horários de saída e retorno e informe se tem um voo, evento ou outro compromisso na mesma data."
    ],
    "es": [
      "¿Cuánto dura cada paseo?",
      "La duración depende del itinerario, la modalidad y las condiciones del día. Antes de reservar, confirma la salida y el regreso e indica si tienes un vuelo, un evento u otro compromiso ese día."
    ]
  },
  {
    "pt": [
      "O que acontece se chover ou o mar não estiver favorável?",
      "Passeios no mar e voos dependem das condições de operação. Confirme previamente como funcionam eventuais alterações, reagendamentos ou cancelamentos. A equipe informa as condições aplicáveis à experiência escolhida."
    ],
    "es": [
      "¿Qué pasa si llueve o el mar no está en buenas condiciones?",
      "Los paseos por el mar y los vuelos dependen de las condiciones de operación. Consulta previamente cómo se gestionan los cambios, reprogramaciones o cancelaciones. El equipo informa las condiciones de la experiencia elegida."
    ]
  },
  {
    "pt": [
      "Como funcionam pagamento, alterações e cancelamento?",
      "Antes de confirmar, peça à equipe as formas de pagamento e as condições de alteração, cancelamento e reembolso aplicáveis à sua reserva. O site registra solicitações e não recebe pagamentos pelo formulário."
    ],
    "es": [
      "¿Cómo funcionan el pago, los cambios y las cancelaciones?",
      "Antes de confirmar, pide al equipo las formas de pago y las condiciones de cambio, cancelación y reembolso aplicables a tu reserva. La web registra solicitudes y no recibe pagos mediante el formulario."
    ]
  },
  {
    "pt": [
      "A experiência no Maracanã é um tour ou um jogo?",
      "Há consultas para tours e experiências de futebol conforme a programação e a disponibilidade. Informe sua data e o que gostaria de fazer. A equipe confirma a opção disponível, ingressos, setores e possíveis traslados."
    ],
    "es": [
      "¿La experiencia en el Maracaná es un tour o un partido?",
      "Se pueden consultar tours y experiencias de fútbol según la programación y la disponibilidad. Indica tu fecha y qué te gustaría hacer. El equipo confirma la opción disponible, entradas, sectores y posibles traslados."
    ]
  }
];
export function faqs(lang:Lang){return faqEntries.map(entry=>entry[lang]);}
export function parsePage(segments:string[]=[]){const lang:Lang=segments[0]==="es"?"es":"pt";const path=(lang==="es"?segments.slice(1):segments).join("/");return {lang,path,service:experiences.find(e=>e.path===path)};}
