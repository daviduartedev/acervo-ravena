import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { footerNavLinks } from "@/content/navigation";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/80 bg-[#171815] px-6 pb-8 pt-20 text-[#f7f1e6] md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex text-3xl font-semibold leading-tight">
              Ravena Cassino
              <br />
              Acervo Documental
            </Link>
            <p className="mt-6 max-w-md font-light leading-relaxed text-[#f7f1e6]/70">
              Um projeto dedicado à preservação histórica, arquitetônica e cultural
              do ícone de Laguna - Santa Catarina.
            </p>
          </div>

          <nav className="grid gap-3" aria-label="Navegação do rodapé">
            <span className="mb-2 text-sm font-semibold uppercase text-[#f7f1e6]/50">
              Navegação
            </span>
            {footerNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-light text-[#f7f1e6]/70 transition-colors hover:text-[#f7f1e6]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="grid content-start gap-4">
            <span className="mb-1 text-sm font-semibold uppercase text-[#f7f1e6]/50">
              Contato
            </span>
            <span className="inline-flex items-center gap-2 font-light text-[#f7f1e6]/70">
              <MapPin size={16} strokeWidth={1.6} aria-hidden />
              Laguna - Santa Catarina
            </span>
            <a
              href="mailto:contato@acervoravena.com.br"
              className="inline-flex items-center gap-2 font-light text-[#f7f1e6]/70 transition-colors hover:text-[#f7f1e6]"
            >
              <Mail size={16} strokeWidth={1.6} aria-hidden />
              contato@acervoravena.com.br
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-[#f7f1e6]/10 pt-8 text-sm font-light text-[#f7f1e6]/50 md:flex-row">
          <span>&copy; {year} Acervo Ravena. Todos os direitos reservados.</span>
          <span>Memória, arquitetura e cidade em acervo vivo.</span>
        </div>
      </div>
    </footer>
  );
}
