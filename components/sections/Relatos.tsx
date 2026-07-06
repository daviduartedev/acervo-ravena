"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { relatoCards } from "@/content/depoimentos";

export function Relatos() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section ref={ref} id="relatos" className="bg-[#0d0d0b] px-6 py-24 text-white md:px-10 md:py-32 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 flex items-end justify-between border-b border-white/10 pb-4"
        >
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
            Relatos e Entrevistas
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
          {relatoCards.map((card, index) => (
            <motion.article
              key={card.id}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, ease: "easeOut", delay: index * 0.12 }}
              className={index === 1 ? "md:mt-24" : undefined}
            >
              <div className="relative mb-6 aspect-[4/3] overflow-hidden bg-white/5">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover grayscale transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 hover:bg-black/0" />
              </div>
              {card.title && (
                <h3 className="mb-3 text-2xl font-bold tracking-tight text-white">
                  {card.id === "juliano" ? (
                    card.title
                  ) : (
                    <>&ldquo;{card.title}&rdquo;</>
                  )}
                </h3>
              )}
              {card.excerpt && (
                <p className="font-light text-white/50">{card.excerpt}</p>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
