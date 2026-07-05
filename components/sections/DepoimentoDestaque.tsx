import { depoimentoJuliano } from "@/content/depoimentos";

export function DepoimentoDestaque() {
  return (
    <section className="bg-black px-6 py-24 md:px-16 md:py-32">
      <blockquote className="mx-auto max-w-4xl">
        <p className="font-light text-2xl leading-relaxed tracking-tight text-white/90 md:text-3xl lg:text-4xl lg:leading-snug">
          &ldquo;{depoimentoJuliano.quote}&rdquo;
        </p>
        <footer className="mt-10 text-sm font-light text-white/40 md:text-base">
          <cite className="not-italic uppercase tracking-widest">
            {depoimentoJuliano.author}, {depoimentoJuliano.role}
          </cite>
        </footer>
      </blockquote>
    </section>
  );
}
