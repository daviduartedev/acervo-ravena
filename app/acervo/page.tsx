import type { Metadata } from "next";
import { PageFrame } from "@/components/layout/PageFrame";
import { PageHero } from "@/components/sections/PageHero";
import { AcervoGallery } from "@/components/sections/AcervoGallery";
import { ContribuaCTA } from "@/components/sections/ContribuaCTA";

export const metadata: Metadata = {
  title: "Acervo Fotográfico | Acervo Ravena",
  description:
    "Galeria de fotografias e registros documentais do Ravena Cassino Hotel.",
};

export default function AcervoPage() {
  return (
    <PageFrame>
      <PageHero
        eyebrow="Acervo fotográfico"
        title="Imagens para reconhecer, catalogar e preservar."
        lead="A galeria reúne registros do hotel e do entorno, com espaço para expansão conforme novas fotos forem identificadas e incorporadas à curadoria."
        imageSrc="/acervo/acervo-07.jpeg"
        imageAlt="Registro do acervo fotográfico Ravena"
      />
      <AcervoGallery />
      <ContribuaCTA />
    </PageFrame>
  );
}
