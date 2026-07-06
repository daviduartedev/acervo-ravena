import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Camera,
  FileText,
  Landmark,
  MessageSquare,
  Timer,
} from "lucide-react";
import { PageFrame } from "@/components/layout/PageFrame";
import { Hero } from "@/components/sections/Hero";
import { DepoimentoDestaque } from "@/components/sections/DepoimentoDestaque";
import { ContribuaCTA } from "@/components/sections/ContribuaCTA";
import { timelineMilestones } from "@/content/timeline";

const pathways = [
  {
    href: "/historia",
    icon: BookOpen,
    label: "História",
    image: "/acervo/acervo-03.jpeg",
    description: "A formação, a retomada das obras e o papel do hotel na memória de Laguna.",
  },
  {
    href: "/cronologia",
    icon: Timer,
    label: "Cronologia",
    image: "/acervo/acervo-04.jpeg",
    description: "Os principais marcos do Ravena organizados como linha do tempo editorial.",
  },
  {
    href: "/arquitetura",
    icon: Landmark,
    label: "Arquitetura",
    image: "/acervo/acervo-06.jpeg",
    description: "Ficha técnica, escala construída e relação entre edifício, praia e cidade.",
  },
  {
    href: "/acervo",
    icon: Camera,
    label: "Acervo",
    image: "/acervo/acervo-07.jpeg",
    description: "Galeria fotográfica com registros em curadoria e visualização ampliada.",
  },
  {
    href: "/documentos",
    icon: FileText,
    label: "Documentos",
    image: "/acervo/acervo-08.jpeg",
    description: "Fontes, publicações, matérias e referências já documentadas sobre o hotel.",
  },
  {
    href: "/relatos",
    icon: MessageSquare,
    label: "Relatos",
    image: "/acervo/acervo-09.jpeg",
    description: "Memórias, entrevistas e vozes que ajudam a preencher o arquivo histórico.",
  },
] as const;

export default function HomePage() {
  return (
    <PageFrame>
      <Hero />

      <section className="px-6 py-20 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1fr] lg:items-end">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase text-foreground/60">
                Navegue pelo acervo
              </p>
              <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                As antigas seções agora são páginas do site.
              </h2>
            </div>
            <p className="max-w-2xl text-lg font-light leading-relaxed text-muted-foreground lg:justify-self-end">
              A experiência foi reorganizada para consulta: cada tema tem seu
              próprio ritmo, com entrada direta pelo menu e caminhos claros para
              continuar explorando.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {pathways.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group overflow-hidden rounded-[6px] border border-foreground/10 bg-background/70 shadow-[0_18px_60px_rgba(42,31,18,0.08)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <Image
                      src={item.image}
                      alt={`Imagem de apoio para ${item.label}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/60">
                        <Icon size={17} strokeWidth={1.6} aria-hidden />
                        {item.label}
                      </span>
                      <ArrowRight
                        size={18}
                        strokeWidth={1.6}
                        className="transition-transform group-hover:translate-x-1"
                        aria-hidden
                      />
                    </div>
                    <p className="text-base font-light leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#202820] px-6 py-20 text-[#f7f1e6] md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1fr] lg:items-start">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase text-[#f7f1e6]/50">
                Linha do tempo
              </p>
              <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                Uma narrativa curta para entrar na história.
              </h2>
              <p className="mt-5 font-light leading-relaxed text-[#f7f1e6]/70">
                A versão completa ganhou página própria, com marcos, imagens e
                contexto para cada período do Ravena.
              </p>
              <Link
                href="/cronologia"
                className="mt-8 inline-flex items-center gap-2 rounded-[6px] bg-[#f7f1e6] px-5 py-3 text-sm font-semibold text-[#202820] transition-colors hover:bg-white"
              >
                Abrir cronologia
                <ArrowRight size={16} strokeWidth={1.7} aria-hidden />
              </Link>
            </div>

            <ol className="grid gap-3">
              {timelineMilestones.slice(0, 4).map((milestone) => (
                <li
                  key={milestone.year}
                  className="grid gap-4 rounded-[6px] border border-[#f7f1e6]/10 bg-white/[0.04] p-5 md:grid-cols-[120px_1fr]"
                >
                  <span className="text-3xl font-semibold leading-none">
                    {milestone.year}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold">{milestone.title}</h3>
                    <p className="mt-2 font-light leading-relaxed text-[#f7f1e6]/70">
                      {milestone.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <DepoimentoDestaque />
      <ContribuaCTA />
    </PageFrame>
  );
}
