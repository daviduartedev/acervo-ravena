"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
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

function PathwayGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <div ref={ref} className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
      {pathways.map((item, i) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.07 }}
          >
            <Link
              href={item.href}
              className="group flex flex-col overflow-hidden border border-foreground/10 bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.12)]"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                <Image
                  src={item.image}
                  alt={`Imagem de apoio para ${item.label}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:bg-black/0" />
              </div>
              <div className="flex flex-1 flex-col p-5 md:p-6">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-foreground/50">
                    <Icon size={15} strokeWidth={1.6} aria-hidden />
                    {item.label}
                  </span>
                  <ArrowRight
                    size={16}
                    strokeWidth={1.6}
                    className="text-foreground/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-foreground"
                    aria-hidden
                  />
                </div>
                <p className="text-sm font-light leading-relaxed text-muted-foreground md:text-base">
                  {item.description}
                </p>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}

function TimelinePreview() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section
      ref={ref}
      className="bg-black px-6 py-20 text-white md:px-10 md:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1fr] lg:items-start lg:gap-20">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/40"
            >
              Linha do tempo
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="text-4xl font-black leading-[0.95] tracking-tighter md:text-5xl"
            >
              Uma narrativa curta para entrar na história.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-5 font-light leading-relaxed text-white/60"
            >
              A versão completa ganhou página própria, com marcos, imagens e
              contexto para cada período do Ravena.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                href="/cronologia"
                className="mt-8 inline-flex items-center gap-2 bg-white px-6 py-3.5 text-sm font-semibold text-black transition-opacity hover:opacity-80 active:scale-[0.98]"
              >
                Abrir cronologia
                <ArrowRight size={15} strokeWidth={2} aria-hidden />
              </Link>
            </motion.div>
          </div>

          <ol className="grid gap-3">
            {timelineMilestones.slice(0, 4).map((milestone, i) => (
              <motion.li
                key={milestone.year}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 + i * 0.08 }}
                className="grid gap-4 border border-white/8 bg-white/4 p-5 transition-colors duration-200 hover:bg-white/7 md:grid-cols-[110px_1fr]"
              >
                <span className="font-black text-3xl leading-none tracking-tighter text-white/90">
                  {milestone.year}
                </span>
                <div>
                  <h3 className="font-bold text-lg text-white">{milestone.title}</h3>
                  <p className="mt-1.5 text-sm font-light leading-relaxed text-white/50">
                    {milestone.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const pathRef = useRef<HTMLElement>(null);
  const pathInView = useInView(pathRef, { once: true, margin: "-10% 0px" });

  return (
    <PageFrame>
      <Hero />

      <section ref={pathRef} className="bg-[#f8f7f4] px-6 py-20 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={pathInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-foreground/50">
                Navegue pelo acervo
              </p>
              <h2 className="text-4xl font-black leading-[0.95] tracking-tighter md:text-5xl">
                Cada tema, uma página.
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={pathInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-lg font-light leading-relaxed text-muted-foreground"
            >
              A experiência foi organizada para consulta: cada seção tem seu
              próprio ritmo de leitura e entrada direta pelo menu.
            </motion.p>
          </div>
          <PathwayGrid />
        </div>
      </section>

      <TimelinePreview />
      <DepoimentoDestaque />
      <ContribuaCTA />
    </PageFrame>
  );
}
