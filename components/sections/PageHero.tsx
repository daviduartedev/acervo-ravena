import Image from "next/image";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lead: string;
  imageSrc?: string;
  imageAlt?: string;
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  lead,
  imageSrc,
  imageAlt,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-32 md:px-10 md:pb-20 md:pt-40 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.68fr] lg:items-end">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase text-foreground/60">
            {eyebrow}
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] md:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-muted-foreground md:text-xl">
            {lead}
          </p>
          {children && <div className="mt-8">{children}</div>}
        </div>

        {imageSrc && imageAlt && (
          <figure className="relative aspect-[4/3] overflow-hidden rounded-[6px] border border-foreground/10 bg-muted shadow-[0_24px_80px_rgba(42,31,18,0.16)]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-5 pb-5 pt-16 text-sm text-white/90">
              Registro do acervo Ravena Cassino Hotel.
            </figcaption>
          </figure>
        )}
      </div>
    </section>
  );
}
