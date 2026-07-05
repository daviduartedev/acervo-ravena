export type PublicacaoTipo =
  | "imprensa"
  | "blog"
  | "acervo"
  | "seminario"
  | "referencia";

export type PublicacaoDocumentada = {
  id: string;
  tipo: PublicacaoTipo;
  titulo: string;
  fonte: string;
  data: string;
  resumo: string;
  url?: string;
  nota?: string;
};

export const publicacaoTipoLabels: Record<PublicacaoTipo, string> = {
  imprensa: "Imprensa",
  blog: "Blog / Web",
  acervo: "Acervo institucional",
  seminario: "Seminário / Apresentação",
  referencia: "Referência bibliográfica",
};

/** Materiais publicados ou oficialmente documentados sobre o Ravena Cassino Hotel. */
export const publicacoesDocumentadas: PublicacaoDocumentada[] = [
  {
    id: "a-nacao-1969",
    tipo: "imprensa",
    titulo: "Matéria sobre a ampliação do Ravena Cassino Hotel",
    fonte: "Jornal A Nação",
    data: "1969",
    resumo:
      "Registro jornalístico da expansão do hotel em 1969, quando o empreendimento passou a contar com mais de 100 apartamentos. Documento consultado na Hemeroteca Digital Catarinense.",
    url: "https://hemeroteca2.cultura.sc.gov.br/docreader/DocReader.aspx?bib=883662&pagfis=43604",
    nota: "Edição 00219, acervo Hemeroteca Digital Catarinense.",
  },
  {
    id: "rock-laguna-valmir-guedes",
    tipo: "blog",
    titulo: "A história do Rock Laguna 1, 2 e 3",
    fonte: "Blog do Valmir Guedes",
    data: "17 ago. 2014",
    resumo:
      "Série de textos sobre a história cultural de Laguna, com contexto sobre o litoral e a ocupação turística da região, útil para situar o Ravena no ambiente local.",
    url: "https://valmirguedes.blogspot.com/2014/08/a-historia-do-rock-laguna-1-2-e-3.html",
  },
  {
    id: "hemeroteca-ravena",
    tipo: "acervo",
    titulo: "Pesquisa sobre o Ravena Cassino Hotel",
    fonte: "Hemeroteca Digital Catarinense",
    data: "Consulta em abr. 2026",
    resumo:
      "Repositório oficial de jornais catarinenses. Permite localizar outras matérias, anúncios e registros de imprensa relacionados ao hotel e ao turismo em Laguna.",
    url: "https://hemeroteca2.cultura.sc.gov.br/docreader/DocReader.aspx?bib=883662&pesq=ravena%20cassino%20hotel&hf=hemeroteca.ciasc.sc.gov.br&pagfis=43604",
  },
  {
    id: "seminario-ravena-2026",
    tipo: "seminario",
    titulo: "Ravena Cassino Hotel: valor cognitivo, afetivo e pragmático",
    fonte: "Seminário acadêmico (Tony Torquato)",
    data: "abr. 2026",
    resumo:
      "Apresentação com ficha técnica do edifício, cronologia do empreendimento, dimensões do legado urbano e depoimento de Juliano, gerente atual do hotel.",
    nota: "Material de apoio utilizado na curadoria deste acervo documental.",
  },
];
