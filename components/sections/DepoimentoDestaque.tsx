"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { depoimentoJuliano } from "@/content/depoimentos";

export function DepoimentoDestaque() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <section ref={ref} className="bg-black px-6 py-24 md:px-10 md:py-32 lg:px-16">
      <motion.blockquote
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto max-w-4xl"
      >
        <p className="text-2xl font-light leading-relaxed tracking-tight text-white/90 md:text-3xl lg:text-4xl lg:leading-snug">
          &ldquo;{depoimentoJuliano.quote}&rdquo;
        </p>
        <footer className="mt-10 text-xs font-semibold uppercase tracking-[0.25em] text-white/35">
          <cite className="not-italic">
            {depoimentoJuliano.author}, {depoimentoJuliano.role}
          </cite>
        </footer>
      </motion.blockquote>
    </section>
  );
}
