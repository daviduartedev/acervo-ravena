"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { primaryNavLinks } from "@/content/navigation";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full px-4 py-3 md:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between border border-white/10 bg-black/80 px-5 py-3 backdrop-blur-xl">
          <Link
            href="/"
            className="text-sm font-bold uppercase tracking-[0.18em] text-white"
            onClick={() => setOpen(false)}
          >
            Acervo Ravena Cassino Hotel
          </Link>

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Navegação principal">
            {primaryNavLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-colors ${
                    active
                      ? "text-white"
                      : "text-white/40 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/5548984660149"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-black md:inline-flex"
            >
              Contribuir
            </a>
            <button
              type="button"
              className="grid size-9 place-items-center border border-white/20 text-white transition-colors hover:bg-white hover:text-black xl:hidden"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? (
                <X size={18} strokeWidth={1.8} aria-hidden />
              ) : (
                <Menu size={18} strokeWidth={1.8} aria-hidden />
              )}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col bg-black pt-[72px]">
          <nav className="flex flex-col px-6 pt-8" aria-label="Menu móvel">
            {primaryNavLinks.map((link, i) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  style={{ transitionDelay: `${i * 30}ms` }}
                  className={`border-b border-white/8 py-5 text-3xl font-black tracking-tighter transition-colors ${
                    active ? "text-white" : "text-white/40 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-auto px-6 pb-12 pt-8">
            <a
              href="https://wa.me/5548984660149"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center bg-white py-4 text-sm font-bold uppercase tracking-[0.15em] text-black"
            >
              Contribuir com material
            </a>
          </div>
        </div>
      )}
    </>
  );
}
