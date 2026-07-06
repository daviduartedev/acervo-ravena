import type { Metadata } from "next";
import { PageFrame } from "@/components/layout/PageFrame";
import { PageHero } from "@/components/sections/PageHero";
import { SobreProjeto } from "@/components/sections/SobreProjeto";
import { ContribuaCTA } from "@/components/sections/ContribuaCTA";

export const metadata: Metadata = {
  title: "Projeto | Acervo Ravena",
  description:
    "Objetivos, curadoria e convite de contribuição do Acervo Ravena.",
};

export default function ProjetoPage() {
  return (
    <PageFrame>
      <PageHero
        eyebrow="Projeto"
        title="Um acervo vivo para organizar lembranças dispersas."
        lead="O site foi pensado para crescer com novas imagens, documentos e histórias, mantendo cada contribuição ligada ao contexto do Ravena e de Laguna."
        imageSrc="/acervo/acervo-02.jpeg"
        imageAlt="Registro do acervo Ravena Cassino Hotel"
      />
      <SobreProjeto />
      <ContribuaCTA />
    </PageFrame>
  );
}
