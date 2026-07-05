import Image from "next/image";
import { relatoCards } from "@/content/depoimentos";

export function Relatos() {
  return (
    <section id="relatos" className="px-6 py-24 md:px-16 md:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex items-end justify-between border-b border-foreground/10 pb-4">
          <h2 className="text-sm font-medium uppercase tracking-widest">
            Relatos & Entrevistas
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
          {relatoCards.map((card, index) => (
            <article
              key={card.id}
              className={index === 1 ? "md:mt-24" : undefined}
            >
              <div className="relative mb-6 aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover grayscale transition-transform duration-700 hover:scale-105"
                />
              </div>
              <h3 className="mb-3 text-2xl font-medium tracking-tight">
                {card.id === "juliano" ? (
                  card.title
                ) : (
                  <>&ldquo;{card.title}&rdquo;</>
                )}
              </h3>
              <p className="font-light text-muted-foreground">{card.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
