import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, FileArchive, MapPinned } from "lucide-react";

const heroStats = [
  { value: "1950", label: "início da sociedade fundadora" },
  { value: "1962", label: "inauguração em Mar Grosso" },
  { value: "100+", label: "apartamentos após a expansão" },
] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-32 md:px-10 md:pb-24 md:pt-40 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.75fr] lg:items-end">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-[6px] border border-foreground/10 bg-background/70 px-3 py-2 text-sm font-medium text-foreground/70">
            <FileArchive size={16} strokeWidth={1.6} aria-hidden />
            Acervo documental em Laguna, SC
          </div>

          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.96] text-foreground md:text-7xl lg:text-8xl">
            Acervo Ravena Cassino Hotel
          </h1>

          <p className="mt-7 max-w-2xl text-lg font-light leading-relaxed text-muted-foreground md:text-xl">
            Um site institucional para preservar a memória do hotel que ajudou a
            redesenhar a orla de Mar Grosso, reunindo fotografias, documentos,
            relatos e contexto urbano em uma experiência navegável.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/acervo"
              className="inline-flex items-center justify-center gap-2 rounded-[6px] bg-foreground px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-foreground/90"
            >
              Ver acervo
              <ArrowRight size={16} strokeWidth={1.7} aria-hidden />
            </Link>
            <Link
              href="/historia"
              className="inline-flex items-center justify-center gap-2 rounded-[6px] border border-foreground/10 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Conhecer a história
            </Link>
          </div>

          <dl className="mt-12 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div
                key={stat.value}
                className="rounded-[6px] border border-foreground/10 bg-background/60 p-4"
              >
                <dt className="text-3xl font-semibold leading-none">{stat.value}</dt>
                <dd className="mt-2 text-sm font-light leading-snug text-muted-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="grid gap-4">
          <figure className="relative aspect-[4/5] overflow-hidden rounded-[6px] border border-foreground/10 bg-muted shadow-[0_26px_90px_rgba(42,31,18,0.18)]">
            <Image
              src="/acervo/acervo-01.jpeg"
              alt="Registro histórico do Ravena Cassino Hotel"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-5 pb-5 pt-20 text-sm font-light text-white/90">
              Registro fotográfico do hotel em seu contexto urbano original.
            </figcaption>
          </figure>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-[6px] border border-foreground/10 bg-[#29332b] p-5 text-[#f7f1e6]">
              <MapPinned size={22} strokeWidth={1.6} aria-hidden />
              <p className="mt-5 text-sm font-light leading-relaxed text-[#f7f1e6]/70">
                Mar Grosso aparece aqui como território, memória e transformação
                urbana.
              </p>
            </div>
            <div className="rounded-[6px] border border-foreground/10 bg-[#5b2333] p-5 text-[#f7f1e6]">
              <Clock3 size={22} strokeWidth={1.6} aria-hidden />
              <p className="mt-5 text-sm font-light leading-relaxed text-[#f7f1e6]/70">
                A cronologia organiza os marcos do Ravena em uma narrativa visual.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
