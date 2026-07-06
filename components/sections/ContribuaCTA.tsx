import { MessageCircle } from "lucide-react";

const WA = "https://wa.me/5548984660149";

export function ContribuaCTA() {
  return (
    <section id="contribua" className="bg-black px-6 py-20 md:px-10 md:py-24 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 border border-white/10 p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
              Contribua
            </p>
            <h2 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tighter text-white md:text-5xl">
              Você tem fotos, documentos ou histórias do Ravena?
            </h2>
            <p className="mt-5 max-w-2xl text-lg font-light leading-relaxed text-white/60">
              Materiais de famílias, antigos hóspedes, moradores e trabalhadores
              ajudam a ampliar o acervo e preservar a memória de Laguna - Santa Catarina.
            </p>
          </div>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 bg-white px-6 py-3.5 text-sm font-semibold text-black transition-opacity hover:opacity-85"
          >
            <MessageCircle size={16} strokeWidth={1.7} aria-hidden />
            Enviar material via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
