import Link from "next/link";
import { Mail } from "lucide-react";

export function ContribuaCTA() {
  return (
    <section id="contribua" className="px-6 py-20 md:px-10 md:py-24 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[6px] bg-[#5b2333] p-8 text-[#f7f1e6] md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase text-[#f7f1e6]/60">
            Contribua
          </p>
          <h2 className="max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
            Você tem fotos, documentos ou histórias do Ravena?
          </h2>
          <p className="mt-5 max-w-2xl text-lg font-light leading-relaxed text-[#f7f1e6]/75">
            Materiais de famílias, antigos hóspedes, moradores e trabalhadores
            ajudam a ampliar o acervo e preservar a memória de Laguna.
          </p>
        </div>
        <Link
          href="mailto:contato@acervoravena.com.br"
          className="inline-flex items-center justify-center gap-2 rounded-[6px] bg-[#f7f1e6] px-5 py-3 text-sm font-semibold text-[#5b2333] transition-colors hover:bg-white"
        >
          <Mail size={16} strokeWidth={1.7} aria-hidden />
          Enviar material
        </Link>
      </div>
    </section>
  );
}
