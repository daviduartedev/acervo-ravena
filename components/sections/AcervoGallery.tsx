"use client";

import { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
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
    <section className="px-6 pb-24 pt-8 md:px-10 md:pb-28 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.72fr_1fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase text-foreground/60">
              Galeria
            </p>
            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              Um arquivo visual pronto para crescer.
            </h2>
          </div>
          <p className="max-w-2xl text-lg font-light leading-relaxed text-muted-foreground lg:justify-self-end">
            Cada imagem pode ser ampliada para leitura mais cuidadosa. As
            legendas atuais são genéricas até que a curadoria identifique datas,
            autoria e contexto específico de cada registro.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {acervoItems.map((item, index) => (
            <li key={item.slug}>
              <button
                type="button"
                onClick={() => setSelected(item)}
                className="group w-full overflow-hidden rounded-[6px] border border-foreground/10 bg-background/70 text-left shadow-[0_18px_60px_rgba(42,31,18,0.06)]"
                aria-label={`Ampliar ${item.alt}`}
              >
                <span className="relative block aspect-[4/3] overflow-hidden bg-muted">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute right-3 top-3 grid size-10 place-items-center rounded-[6px] bg-background/90 text-foreground shadow-sm">
                    <Search size={17} strokeWidth={1.6} aria-hidden />
                  </span>
                </span>
                <span className="block p-5">
                  <span className="text-sm font-semibold text-foreground/60">
                    Registro {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-2 block font-light leading-relaxed text-muted-foreground">
                    {item.caption}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        {selected && (
          <DialogContent aria-describedby={selected.caption ? "acervo-lightbox-caption" : undefined}>
            <DialogTitle>{selected.alt}</DialogTitle>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[6px] bg-black">
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
