export type Depoimento = {
  id: string;
  quote: string;
  author: string;
  role: string;
};

export const depoimentoJuliano: Depoimento = {
  id: "juliano",
  quote:
    "O Ravena não é só um hotel antigo, mas um acontecimento que mudou o litoral da Laguna. Seu valor está justamente na capacidade de trazer essa ocupação que só fez bem para os arredores e transformou a praia (Mar Grosso).",
  author: "Juliano",
  role: "Gerente atual do Ravena Cassino Hotel",
};

export type RelatoCard = {
  id: string;
  title: string;
  excerpt: string;
  author?: string;
  imageSrc: string;
  imageAlt: string;
};

export const relatoCards: RelatoCard[] = [
  {
    id: "juliano",
    title: "Um marco para Laguna",
    excerpt: depoimentoJuliano.quote,
    author: `${depoimentoJuliano.author}, ${depoimentoJuliano.role}`,
    imageSrc: "/acervo/acervo-03.jpeg",
    imageAlt: "Vista do Ravena Cassino Hotel",
  },
  {
    id: "registro-historico",
    title: "",
    excerpt: "",
    imageSrc: "/acervo/acervo-05.jpeg",
    imageAlt: "Registro histórico do Ravena Cassino Hotel",
  },
];
