import Image from "next/image";
import { relatoCards } from "@/content/depoimentos";

export function Relatos() {
  return (
    <section className="px-6 py-20 md:px-10 md:py-24 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.72fr_1fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase text-foreground/60">
              Relatos e entrevistas
            </p>
            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              Vozes que dão escala humana ao arquivo.
            </h2>
          </div>
          <p className="max-w-2xl text-lg font-light leading-relaxed text-muted-foreground lg:justify-self-end">
            Os relatos aproximam o acervo da vida cotidiana: trabalho, hospedagem,
            festas, turismo, praia e transformações percebidas por quem viveu o
            Ravena de perto.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {relatoCards.map((card) => (
            <article
              key={card.id}
              className="overflow-hidden rounded-[6px] border border-foreground/10 bg-background/70 shadow-[0_18px_60px_rgba(42,31,18,0.06)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:p-7">
                <h3 className="mb-3 text-2xl font-semibold leading-tight">
                  {card.title}
                </h3>
                <p className="font-light leading-relaxed text-muted-foreground">
                  {card.excerpt}
                </p>
                {card.author && (
                  <p className="mt-5 text-sm font-semibold text-foreground/60">
                    {card.author}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
