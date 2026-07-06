"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export function Historia() {
  return (
    <>
      <section className="bg-black px-6 py-20 text-white md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
              A gênese
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tighter md:text-7xl">
              O Ravena nasceu como um gesto ambicioso de cidade e turismo.
            </h2>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#0d0d0b] px-6 py-20 text-white md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="text-2xl font-light leading-relaxed text-white/80 md:text-3xl">
              Inaugurado em uma época de efervescência cultural, o Ravena Cassino
              Hotel não era apenas uma hospedagem. Era uma referência social e
              urbana em Laguna, com arquitetura imponente e salões que
              representavam a elegância do litoral sul.
            </p>
          </Reveal>
          <div className="flex flex-col gap-6 text-lg font-light leading-relaxed text-white/50">
            <Reveal delay={0.1}>
              <p>
                O empreendimento atravessou mudanças profundas no turismo, na
                ocupação de Mar Grosso e na vida cotidiana da cidade. A cada nova
                etapa, o edifício ajudou a consolidar uma frente urbana mais ativa,
                conectada à praia e à memória de gerações.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                Hoje, este acervo busca organizar esses fragmentos: fotografias,
                relatos, referências jornalísticas e lembranças que ainda ecoam nas
                histórias de moradores, visitantes e trabalhadores do hotel.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
