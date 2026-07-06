"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Archive, Menu, X } from "lucide-react";
import { primaryNavLinks } from "@/content/navigation";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full px-3 py-3 md:px-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-[6px] border border-foreground/10 bg-background/90 px-4 py-3 shadow-[0_18px_60px_rgba(42,31,18,0.12)] backdrop-blur-xl md:px-5">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-3 text-foreground"
            aria-label="Ir para a página inicial do Acervo Ravena"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-[6px] border border-foreground/10 bg-foreground text-background">
              <Archive size={18} strokeWidth={1.6} aria-hidden />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-semibold leading-none">
                Acervo Ravena
              </span>
              <span className="mt-1 block truncate text-xs font-light text-muted-foreground">
                Cassino Hotel, Laguna
              </span>
            </span>
          </Link>

          <nav
            className="hidden items-center gap-1 xl:flex"
            aria-label="Navegação principal"
          >
            {primaryNavLinks.map((link) => {
              const active = isActive(pathname, link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-[6px] px-3 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "bg-foreground text-background"
                      : "text-foreground/70 hover:bg-foreground/5 hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/projeto#contribua"
              className="hidden rounded-[6px] border border-foreground/10 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background md:inline-flex"
            >
              Contribuir
            </Link>
            <button
              type="button"
              className="grid size-10 place-items-center rounded-[6px] border border-foreground/10 text-foreground transition-colors hover:bg-foreground hover:text-background xl:hidden"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              {isMenuOpen ? (
                <X size={20} strokeWidth={1.7} aria-hidden />
              ) : (
                <Menu size={20} strokeWidth={1.7} aria-hidden />
              )}
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-x-3 top-[86px] z-40 rounded-[6px] border border-foreground/10 bg-background/95 p-4 shadow-[0_24px_80px_rgba(42,31,18,0.18)] backdrop-blur-xl md:inset-x-5 xl:hidden">
          <nav className="grid gap-1" aria-label="Navegação móvel">
            {primaryNavLinks.map((link) => {
              const active = isActive(pathname, link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-[6px] px-4 py-3 text-lg font-medium transition-colors ${
                    active
                      ? "bg-foreground text-background"
                      : "text-foreground/75 hover:bg-foreground/5 hover:text-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}
