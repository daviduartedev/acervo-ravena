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
    imageSrc:
      "https://images.unsplash.com/photo-1692153142713-690838f861e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    imageAlt: "Vista do Ravena Cassino Hotel",
  },
  {
    id: "manoel-silveira",
    title: "As noites pareciam não ter fim.",
    excerpt:
      "Manoel Silveira, antigo crupiê do cassino, relembra a atmosfera eletrizante de 1945.",
    imageSrc:
      "https://images.unsplash.com/photo-1730282669807-12b3f79e1c27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    imageAlt: "Entrevista, relato histórico",
  },
];
