import type { Metadata } from "next";
import { PageFrame } from "@/components/layout/PageFrame";
import { PageHero } from "@/components/sections/PageHero";
import { Timeline } from "@/components/sections/Timeline";

export const metadata: Metadata = {
  title: "Cronologia | Acervo Ravena",
  description:
    "Linha do tempo editorial com os principais marcos do Ravena Cassino Hotel.",
};

export default function CronologiaPage() {
  return (
    <PageFrame>
      <PageHero
        eyebrow="Cronologia"
        title="Marcos que explicam a presença do Ravena em Mar Grosso."
        lead="Da sociedade fundadora à permanência do hotel, a linha do tempo organiza eventos, imagens e contexto urbano em uma leitura contínua."
        imageSrc="/acervo/acervo-04.jpeg"
        imageAlt="Fotografia documental do Ravena Cassino Hotel"
      />
      <Timeline />
    </PageFrame>
  );
}
