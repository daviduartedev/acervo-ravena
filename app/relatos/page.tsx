import type { Metadata } from "next";
import { PageFrame } from "@/components/layout/PageFrame";
import { PageHero } from "@/components/sections/PageHero";
import { DepoimentoDestaque } from "@/components/sections/DepoimentoDestaque";
import { Relatos } from "@/components/sections/Relatos";
import { ContribuaCTA } from "@/components/sections/ContribuaCTA";

export const metadata: Metadata = {
  title: "Relatos | Acervo Ravena",
  description:
    "Relatos, entrevistas e memórias relacionadas ao Ravena Cassino Hotel.",
};

export default function RelatosPage() {
  return (
    <PageFrame>
      <PageHero
        eyebrow="Relatos"
        title="A memória oral como parte do acervo."
        lead="Depoimentos ajudam a recompor atmosferas, rotinas e transformações que os documentos formais nem sempre registram."
        imageSrc="/acervo/acervo-09.jpeg"
        imageAlt="Imagem histórica do Ravena Cassino Hotel"
      />
      <DepoimentoDestaque />
      <Relatos />
      <ContribuaCTA />
    </PageFrame>
  );
}
