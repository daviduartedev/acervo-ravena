import type { Metadata } from "next";
import { PageFrame } from "@/components/layout/PageFrame";
import { PageHero } from "@/components/sections/PageHero";
import { ContribuaCTA } from "@/components/sections/ContribuaCTA";
import { Historia } from "@/components/sections/Historia";
import { ImpactoLaguna } from "@/components/sections/ImpactoLaguna";
import { Legado } from "@/components/sections/Legado";

export const metadata: Metadata = {
  title: "História | Acervo Ravena",
  description:
    "A trajetória do Ravena Cassino Hotel e seu papel na memória urbana de Laguna.",
};

export default function HistoriaPage() {
  return (
    <PageFrame>
      <PageHero
        eyebrow="História"
        title="Do projeto hoteleiro à memória coletiva de Laguna."
        lead="A história do Ravena atravessa investimento privado, infraestrutura pública, turismo, cidade e lembranças preservadas por quem viveu o hotel."
        imageSrc="/acervo/acervo-03.jpeg"
        imageAlt="Registro histórico do Ravena Cassino Hotel"
      />
      <Historia />
      <ImpactoLaguna />
      <Legado />
      <ContribuaCTA />
    </PageFrame>
  );
}
