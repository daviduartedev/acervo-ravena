import Link from "next/link";
import { MapPin, Phone, Github, Linkedin } from "lucide-react";
import { footerNavLinks } from "@/content/navigation";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/80 bg-[#171815] px-6 pb-8 pt-20 text-[#f7f1e6] md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex text-3xl font-semibold leading-tight">
              Acervo Ravena<br />Cassino Hotel
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
              href="https://wa.me/5548984660149"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-light text-[#f7f1e6]/70 transition-colors hover:text-[#f7f1e6]"
            >
              <Phone size={16} strokeWidth={1.6} aria-hidden />
              (48) 9 8466-0149
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-[#f7f1e6]/10 pt-8 md:flex-row md:items-center">
          <span className="text-sm font-light text-[#f7f1e6]/50">
            &copy; {year} Acervo Ravena Cassino Hotel. Todos os direitos reservados.
          </span>
          <span className="flex items-center gap-2 text-xs font-light text-[#f7f1e6]/35">
            Desenvolvido por
            <a
              href="https://www.linkedin.com/in/davi-duarte-8675ba27b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Davi Duarte"
              className="transition-opacity hover:opacity-70"
            >
              <Linkedin size={14} strokeWidth={1.5} />
            </a>
            <a
              href="https://github.com/daviduartedev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Davi Duarte"
              className="transition-opacity hover:opacity-70"
            >
              <Github size={14} strokeWidth={1.5} />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
