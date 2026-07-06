import { Quote } from "lucide-react";
import { depoimentoJuliano } from "@/content/depoimentos";

export function DepoimentoDestaque() {
  return (
    <section className="px-6 py-20 md:px-10 md:py-24 lg:px-16">
      <blockquote className="mx-auto grid max-w-7xl gap-8 rounded-[6px] border border-foreground/10 bg-background/70 p-8 shadow-[0_18px_60px_rgba(42,31,18,0.08)] md:p-12 lg:grid-cols-[120px_1fr]">
        <div className="grid size-16 place-items-center rounded-[6px] bg-[#5b2333] text-[#f7f1e6]">
          <Quote size={28} strokeWidth={1.5} aria-hidden />
        </div>
        <div>
          <p className="text-2xl font-light leading-relaxed text-foreground md:text-3xl lg:text-4xl">
            &ldquo;{depoimentoJuliano.quote}&rdquo;
          </p>
          <footer className="mt-8 text-sm font-light text-muted-foreground md:text-base">
            <cite className="not-italic">
              {depoimentoJuliano.author}, {depoimentoJuliano.role}
            </cite>
          </footer>
        </div>
      </blockquote>
    </section>
  );
}
