import { MessageCircle } from "lucide-react";

const WA = "https://wa.me/5548984660149";

export function ContribuaCTA() {
  return (
    <section id="contribua" className="bg-white px-6 py-20 md:px-10 md:py-28 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-black/40">
              Contribua
            </p>
            <h2 className="max-w-3xl text-4xl font-black leading-[0.95] tracking-tighter text-black md:text-5xl lg:text-6xl">
              Você tem fotos, documentos ou histórias do Ravena?
            </h2>
            <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-black/60 md:text-xl">
              Materiais de famílias, antigos hóspedes, moradores e trabalhadores
              ajudam a ampliar o acervo e preservar a memória de Laguna - Santa Catarina.
            </p>
          </div>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 bg-black px-7 py-4 text-sm font-semibold text-white transition-opacity hover:opacity-75 active:scale-[0.98]"
          >
            <MessageCircle size={16} strokeWidth={1.7} aria-hidden />
            Enviar via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
