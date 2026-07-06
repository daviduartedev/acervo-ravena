"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { siteCopy } from "@/content/site";

export function ImpactoLaguna() {
  const { title, lead, paragraphs } = siteCopy.impactoLaguna;
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <section
      ref={ref}
      id="impacto"
      className="bg-[#0d0d0b] px-6 py-20 text-white md:px-10 md:py-24 lg:px-16"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1fr] lg:gap-20">
        <div>
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
        <div className="grid gap-6 text-lg font-light leading-relaxed text-white/60 md:text-xl">
          {paragraphs.map((paragraph, i) => (
            <motion.p
              key={paragraph.slice(0, 32)}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 + i * 0.1 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
