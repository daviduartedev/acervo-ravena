"use client";

import { useState } from "react";
import Image from "next/image";
import { acervoItems, type AcervoItem } from "@/content/acervo";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

export function AcervoGallery() {
  const [selected, setSelected] = useState<AcervoItem | null>(null);

  return (
    <section id="acervo" className="px-6 py-24 md:px-16 md:py-32">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 border-b border-foreground/10 pb-4 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60">
          Acervo Fotográfico
        </h2>

        <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {acervoItems.map((item) => (
            <li key={item.slug}>
              <button
                type="button"
                onClick={() => setSelected(item)}
                className="group relative aspect-[4/3] w-full overflow-hidden bg-muted"
                aria-label={`Ampliar ${item.alt}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        {selected && (
          <DialogContent aria-describedby={selected.caption ? "acervo-lightbox-caption" : undefined}>
            <DialogTitle>{selected.alt}</DialogTitle>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-black">
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
              <DialogDescription
                id="acervo-lightbox-caption"
                className="text-center text-base text-white/90"
              >
                {selected.caption}
              </DialogDescription>
            )}
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
