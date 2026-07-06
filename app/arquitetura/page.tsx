import type { Metadata } from "next";
import { PageFrame } from "@/components/layout/PageFrame";
import { PageHero } from "@/components/sections/PageHero";
import { Arquitetura } from "@/components/sections/Arquitetura";
import { Legado } from "@/components/sections/Legado";

export const metadata: Metadata = {
  title: "Arquitetura | Acervo Ravena",
  description:
    "Ficha técnica, escala construída e legado arquitetônico do Ravena Cassino Hotel.",
};

export default function ArquiteturaPage() {
  return (
    <PageFrame>
      <PageHero
        eyebrow="Arquitetura"
        title="Um edifício que ajudou a definir a escala da orla."
        lead="A dimensão arquitetônica do Ravena combina ficha técnica, expansão hoteleira e o papel do edifício como indutor de infraestrutura em Mar Grosso."
        imageSrc="/acervo/acervo-06.jpeg"
        imageAlt="Imagem do Ravena Cassino Hotel"
      />
      <Arquitetura />
      <Legado />
    </PageFrame>
  );
}
