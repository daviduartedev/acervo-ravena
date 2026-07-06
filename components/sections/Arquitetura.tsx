"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { siteCopy } from "@/content/site";

export function Arquitetura() {
  const { title, lead, ficha, paragraphs } = siteCopy.arquitetura;
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <section
      ref={ref}
      id="arquitetura"
      className="bg-[#0d0d0b] px-6 py-20 text-white md:px-10 md:py-28 lg:px-16"
    >
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:gap-20">
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
            className="mb-10 text-4xl font-bold leading-[1.05] tracking-tighter md:text-5xl"
          >
            {lead}
          </motion.h2>

          <dl className="divide-y divide-white/10">
            {ficha.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.07 }}
                className="flex justify-between gap-4 py-3 text-sm"
              >
                <dt className="font-light text-white/40">{item.label}</dt>
                <dd className="text-right font-semibold text-white">{item.value}</dd>
              </motion.div>
            ))}
          </dl>
        </div>

        <div className="flex flex-col gap-6 text-lg font-light leading-relaxed text-white/60 md:text-xl">
          {paragraphs.map((paragraph, i) => (
            <motion.p
              key={paragraph.slice(0, 40)}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 + i * 0.12 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
