"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ExternalLink } from "lucide-react";
import {
  publicacaoTipoLabels,
  publicacoesDocumentadas,
  type PublicacaoDocumentada,
} from "@/content/publicacoes";
import { siteCopy } from "@/content/site";

function PublicacaoCard({ item, index }: { item: PublicacaoDocumentada; index: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
      className="flex flex-col border border-white/10 bg-white/4 p-6 md:p-8"
    >
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <span className="border border-white/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/60">
          {publicacaoTipoLabels[item.tipo]}
        </span>
        <span className="text-xs font-light text-white/40">{item.data}</span>
      </div>

      <h3 className="mb-2 text-lg font-bold leading-snug tracking-tight text-white md:text-xl">
        {item.titulo}
      </h3>
      <p className="mb-1 text-sm font-semibold text-white/70">{item.fonte}</p>
      <p className="mb-6 flex-1 font-light leading-relaxed text-white/50">{item.resumo}</p>

      {item.nota && (
        <p className="mb-6 text-xs font-light leading-relaxed text-white/35">{item.nota}</p>
      )}

      {item.url ? (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-opacity hover:opacity-60"
        >
          Acessar fonte
          <ExternalLink size={13} strokeWidth={1.5} aria-hidden />
        </a>
      ) : (
        <span className="text-sm font-light text-white/35">Sem link público disponível</span>
      )}
    </motion.li>
  );
}

export function Documentos() {
  const { title, lead, note } = siteCopy.documentados;
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section
      ref={ref}
      id="documentados"
      className="bg-[#0d0d0b] px-6 py-24 text-white md:px-10 md:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/40"
            >
              {title}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
              className="text-4xl font-bold leading-[1.05] tracking-tighter md:text-5xl"
            >
              {lead}
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-md text-sm font-light leading-relaxed text-white/40 md:text-base"
          >
            {note}
          </motion.p>
        </div>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {publicacoesDocumentadas.map((item, index) => (
            <PublicacaoCard key={item.id} item={item} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
}
