"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { acervoItems, type AcervoItem } from "@/content/acervo";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

export function AcervoGallery() {
  const [selected, setSelected] = useState<AcervoItem | null>(null);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section
      ref={ref}
      id="acervo"
      className="bg-black px-6 py-24 text-white md:px-10 md:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 border-b border-white/10 pb-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/40"
        >
          Acervo Fotográfico
        </motion.h2>

        <ul className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4">
          {acervoItems.map((item, i) => (
            <motion.li
              key={item.slug}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.05 }}
            >
              <button
                type="button"
                onClick={() => setSelected(item)}
                className="group relative aspect-[4/3] w-full overflow-hidden bg-white/5"
                aria-label={`Ampliar ${item.alt}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
              </button>
            </motion.li>
          ))}
        </ul>
      </div>

      <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        {selected && (
          <DialogContent aria-describedby={selected.caption ? "acervo-lightbox-caption" : undefined} className="bg-black border-white/10 max-w-4xl">
            <DialogTitle className="text-white text-sm font-light">{selected.alt}</DialogTitle>
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
              <Image
                src={selected.src}
                alt={selected.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-contain"
                priority
              />
            </div>
            {selected.caption && (
              <DialogDescription id="acervo-lightbox-caption" className="text-center text-sm text-white/60">
                {selected.caption}
              </DialogDescription>
            )}
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
