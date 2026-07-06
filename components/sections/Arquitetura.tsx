import Image from "next/image";
import { siteCopy } from "@/content/site";

export function Arquitetura() {
  const { title, lead, ficha, paragraphs } = siteCopy.arquitetura;

  return (
    <section className="px-6 py-20 md:px-10 md:py-24 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1fr]">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase text-foreground/60">
            {title}
          </p>
          <h2 className="mb-8 text-4xl font-semibold leading-tight md:text-5xl">
            {lead}
          </h2>

          <dl className="overflow-hidden rounded-[6px] border border-foreground/10 bg-background/70">
            {ficha.map((item) => (
              <div
                key={item.label}
                className="grid grid-cols-[0.85fr_1fr] gap-4 border-b border-foreground/10 px-5 py-4 text-sm last:border-b-0"
              >
                <dt className="font-light text-muted-foreground">{item.label}</dt>
                <dd className="text-right font-semibold">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="grid gap-8">
          <figure className="relative aspect-[16/10] overflow-hidden rounded-[6px] border border-foreground/10 bg-muted shadow-[0_20px_70px_rgba(42,31,18,0.12)]">
            <Image
              src="/acervo/acervo-06.jpeg"
              alt="Registro arquitetônico do Ravena Cassino Hotel"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />
          </figure>

          <div className="grid gap-6 text-lg font-light leading-relaxed text-muted-foreground md:text-xl">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
