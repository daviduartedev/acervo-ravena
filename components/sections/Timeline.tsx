import Image from "next/image";
import { timelineMilestones } from "@/content/timeline";

export function Timeline() {
  return (
    <section className="px-6 pb-24 pt-8 md:px-10 md:pb-28 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.75fr_1fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase text-foreground/60">
              Cronologia completa
            </p>
            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              Cada período mostra como hotel, praia e cidade avançaram juntos.
            </h2>
          </div>
          <p className="max-w-2xl text-lg font-light leading-relaxed text-muted-foreground lg:justify-self-end">
            A leitura foi redesenhada para consulta direta: ano, contexto,
            descrição e fotografia aparecem no mesmo bloco, sem depender de uma
            interação específica para entender o conteúdo.
          </p>
        </div>

        <ol className="relative grid gap-5">
          {timelineMilestones.map((milestone, index) => (
            <li
              key={`${milestone.year}-${milestone.title}`}
              className="grid gap-6 rounded-[6px] border border-foreground/10 bg-background/70 p-5 shadow-[0_18px_60px_rgba(42,31,18,0.06)] md:grid-cols-[150px_1fr_280px] md:p-6 lg:grid-cols-[190px_1fr_360px]"
            >
              <div>
                <span className="text-sm font-semibold text-muted-foreground">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(timelineMilestones.length).padStart(2, "0")}
                </span>
                <p className="mt-4 font-serif-timeline text-5xl font-medium leading-none md:text-6xl">
                  {milestone.year}
                </p>
                <p className="mt-3 text-sm font-semibold uppercase text-foreground/60">
                  {milestone.era}
                </p>
              </div>

              <div className="self-center">
                <h3 className="text-2xl font-semibold leading-tight md:text-3xl">
                  {milestone.title}
                </h3>
                <p className="mt-4 text-base font-light leading-relaxed text-muted-foreground md:text-lg">
                  {milestone.description}
                </p>
              </div>

              <figure className="relative aspect-[4/3] overflow-hidden rounded-[6px] border border-foreground/10 bg-muted">
                <Image
                  src={milestone.image}
                  alt={milestone.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-cover"
                />
              </figure>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
