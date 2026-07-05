export type TimelineMilestone = {
  year: string;
  title: string;
  era: string;
  description: string;
  image: string;
};

export const timelineMilestones: TimelineMilestone[] = [
  {
    year: "1950",
    era: "Fundação",
    title: "A sociedade fundadora",
    description:
      "Formação de uma sociedade composta por 12 sócios oriundos de Laguna, Florianópolis, Criciúma e Braço do Norte, com o objetivo de construir um hotel-cassino no bairro Mar Grosso. As obras têm início, mas são interrompidas pela desistência dos investidores iniciais.",
    image: "/acervo/acervo-01.jpeg",
  },
  {
    year: "1961",
    era: "Retomada",
    title: "Um novo investidor",
    description:
      "O empresário têxtil Sr. Antônio assume a continuidade do projeto após convite do prefeito Joacir Ungareti. Como parte do acordo, recebe lotes no entorno do empreendimento e compromete-se a contribuir com a implantação de infraestrutura urbana no bairro.",
    image: "/acervo/acervo-03.jpeg",
  },
  {
    year: "1962",
    era: "Inauguração",
    title: "Abertura das portas",
    description:
      "Após cerca de um ano e oito meses de obra, o Ravena Cassino Hotel é inaugurado com 39 apartamentos, consolidando-se como um dos principais equipamentos turísticos de Laguna e âncora do desenvolvimento de Mar Grosso.",
    image: "/acervo/acervo-04.jpeg",
  },
  {
    year: "1969",
    era: "Expansão",
    title: "Mais de 100 apartamentos",
    description:
      "Ampliação significativa do hotel, que passa a contar com mais de 100 apartamentos. A expansão fortalece a posição do Ravena como referência da hotelaria regional e acelera o crescimento urbano e turístico do entorno.",
    image: "/acervo/acervo-06.jpeg",
  },
  {
    year: "1960–1970",
    era: "Urbanização",
    title: "Indutor do Mar Grosso",
    description:
      "Durante as décadas de 1960 e 1970, o Ravena atua como principal indutor da urbanização e da expansão turística de Mar Grosso, estimulando a ocupação do bairro, a chegada de infraestrutura e o desenvolvimento econômico local.",
    image: "/acervo/acervo-07.jpeg",
  },
  {
    year: "Hoje",
    era: "Memória",
    title: "Em funcionamento",
    description:
      "O Ravena Cassino Hotel permanece em operação, mantendo sua atividade original. Preserva seu papel histórico, urbano e cultural na formação de Mar Grosso e na memória coletiva de Laguna.",
    image: "/acervo/acervo-09.jpeg",
  },
];
