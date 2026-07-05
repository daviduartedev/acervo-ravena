import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Historia } from "@/components/sections/Historia";
import { DepoimentoDestaque } from "@/components/sections/DepoimentoDestaque";
import { Timeline } from "@/components/sections/Timeline";
import { Legado } from "@/components/sections/Legado";
import { Arquitetura } from "@/components/sections/Arquitetura";
import { AcervoGallery } from "@/components/sections/AcervoGallery";
import { ImpactoLaguna } from "@/components/sections/ImpactoLaguna";
import { Documentos } from "@/components/sections/Documentos";
import { Relatos } from "@/components/sections/Relatos";
import { SobreProjeto } from "@/components/sections/SobreProjeto";
import { ContribuaCTA } from "@/components/sections/ContribuaCTA";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary selection:text-primary-foreground">
      <Header />
      <main>
        <Hero />
        <Historia />
        <DepoimentoDestaque />
        <Timeline />
        <Legado />
        <Arquitetura />
        <AcervoGallery />
        <ImpactoLaguna />
        <Documentos />
        <Relatos />
        <SobreProjeto />
        <ContribuaCTA />
      </main>
      <Footer />
    </div>
  );
}
