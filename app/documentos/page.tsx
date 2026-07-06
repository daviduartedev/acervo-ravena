import type { Metadata } from "next";
import { PageFrame } from "@/components/layout/PageFrame";
import { PageHero } from "@/components/sections/PageHero";
import { Documentos } from "@/components/sections/Documentos";

export const metadata: Metadata = {
  title: "Documentos | Acervo Ravena",
  description:
    "Publicações, fontes e materiais documentados sobre o Ravena Cassino Hotel.",
};

export default function DocumentosPage() {
  return (
    <PageFrame>
      <PageHero
        eyebrow="Documentos"
        title="Fontes verificáveis para sustentar a memória."
        lead="Matérias, hemerotecas, apresentações e referências ajudam a ligar lembrança, cidade e pesquisa histórica em um acervo consultável."
        imageSrc="/acervo/acervo-08.jpeg"
        imageAlt="Registro documental do Ravena Cassino Hotel"
      />
      <Documentos />
    </PageFrame>
  );
}
