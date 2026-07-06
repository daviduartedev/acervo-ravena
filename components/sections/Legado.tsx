"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { siteCopy } from "@/content/site";

export function Legado() {
  const { title, lead, pillars } = siteCopy.legado;
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section
      ref={ref}
      id="legado"
      className="bg-black px-6 py-20 text-white md:px-10 md:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
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

        <ul className="grid grid-cols-1 gap-px bg-white/8 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.li
              key={pillar.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 + i * 0.1 }}
              className="bg-black p-8 md:p-10"
            >
              <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.2em] text-white/30">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-4 text-xl font-bold tracking-tight">{pillar.title}</h3>
              <p className="font-light leading-relaxed text-white/60">{pillar.description}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
