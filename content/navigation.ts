export const primaryNavLinks = [
  { href: "/historia", label: "História" },
  { href: "/cronologia", label: "Cronologia" },
  { href: "/arquitetura", label: "Arquitetura" },
  { href: "/acervo", label: "Acervo" },
  { href: "/documentos", label: "Documentos" },
  { href: "/relatos", label: "Relatos" },
  { href: "/projeto", label: "Projeto" },
] as const;

export const footerNavLinks = [
  { href: "/", label: "Início" },
  ...primaryNavLinks,
] as const;
