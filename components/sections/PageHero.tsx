"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lead: string;
  imageSrc?: string;
  imageAlt?: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, lead, imageSrc, imageAlt, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-black pb-20 pt-32 text-white md:pb-24 md:pt-40">
      {imageSrc && (
        <div className="absolute inset-0">
          <Image
            src={imageSrc}
            alt={imageAlt ?? ""}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-white/40"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tighter md:text-6xl lg:text-7xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.22 }}
          className="mt-7 max-w-2xl text-lg font-light leading-relaxed text-white/60 md:text-xl"
        >
          {lead}
        </motion.p>
        {children && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-8"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
