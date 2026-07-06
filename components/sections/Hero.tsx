"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const WA = "https://wa.me/5548984660149";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" as const, delay },
});

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Image
          src="/acervo/acervo-01.jpeg"
          alt="Ravena Cassino Hotel"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-20 pt-32 md:px-10 md:pb-28 lg:px-16">
        <motion.p
          {...fadeUp(0.1)}
          className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-white/50"
        >
          Laguna - Santa Catarina · Desde 1962
        </motion.p>

        <motion.h1
          {...fadeUp(0.2)}
          className="max-w-4xl text-[clamp(3rem,8vw,7rem)] font-bold leading-[0.92] tracking-tighter text-white"
        >
          Acervo<br />Ravena
        </motion.h1>

        <motion.p
          {...fadeUp(0.35)}
          className="mt-8 max-w-xl text-lg font-light leading-relaxed text-white/60 md:text-xl"
        >
          A memória do hotel que redesenhou a orla de Mar Grosso. Fotografias,
          documentos e relatos de quase um século de história preservados em
          acervo aberto.
        </motion.p>

        <motion.div
          {...fadeUp(0.48)}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <Link
            href="/acervo"
            className="inline-flex items-center justify-center gap-2 bg-white px-6 py-3.5 text-sm font-semibold text-black transition-opacity hover:opacity-85"
          >
            Ver acervo
            <ArrowRight size={15} strokeWidth={2} aria-hidden />
          </Link>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/60"
          >
            Contribuir com material
          </a>
        </motion.div>

        <motion.div
          {...fadeUp(0.6)}
          className="mt-16 grid grid-cols-3 gap-px border-t border-white/10 pt-8 sm:max-w-xl"
        >
          {[
            { value: "1950", label: "Sociedade fundadora" },
            { value: "1962", label: "Inauguração" },
            { value: "100+", label: "Apartamentos" },
          ].map((stat) => (
            <div key={stat.value} className="pr-6">
              <p className="text-3xl font-bold leading-none text-white md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-light text-white/50">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
