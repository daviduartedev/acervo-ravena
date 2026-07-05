"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#historia", label: "História" },
  { href: "#timeline", label: "Cronologia" },
  { href: "#acervo", label: "Acervo" },
  { href: "#documentados", label: "Documentados" },
  { href: "#relatos", label: "Relatos" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-stone-800 bg-stone-950 px-6 py-5 text-stone-100">
        <div className="text-base font-semibold uppercase tracking-widest">
          Ravena Cassino
        </div>
        <nav className="hidden gap-8 text-xs font-medium uppercase tracking-widest lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-stone-400 transition-colors hover:text-stone-100"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="lg:hidden text-stone-400 hover:text-stone-100 transition-colors"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X size={22} strokeWidth={1.5} />
          ) : (
            <Menu size={22} strokeWidth={1.5} />
          )}
        </button>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-stone-950 px-6 pt-28 text-stone-100">
          <nav className="flex flex-col gap-6 text-3xl font-medium tracking-tight">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-stone-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
