"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1541190041139-c5f28bdfe5d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxoaXN0b3JpYyUyMGFyY2hpdGVjdHVyZSUyMGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MXx8fHwxNzgzMjA5Mzg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Arquitetura histórica do Ravena Cassino Hotel",
  },
  {
    src: "https://images.unsplash.com/photo-1692153142713-690838f861e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHx2aW50YWdlJTIwaG90ZWx8ZW58MXx8fHwxNzgzMjA5Mzg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Vista do Ravena Cassino Hotel em Laguna",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {heroImages.map((image, idx) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === idx ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={idx === 0}
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      <div className="absolute bottom-0 left-0 flex w-full flex-col items-end justify-between gap-8 p-6 text-white md:flex-row md:p-16">
        <div className="max-w-2xl">
          <h1 className="mb-6 text-6xl font-medium leading-[0.9] tracking-tighter md:text-8xl">
            Memória do
            <br />
            Ravena
          </h1>
          <p className="max-w-lg text-lg font-light leading-relaxed opacity-90 md:text-xl">
            Um acervo documental preservando o legado, a arquitetura e as histórias
            do emblemático Ravena Cassino Hotel em Laguna, Santa Catarina.
          </p>
        </div>

        <div className="flex gap-4">
          <button
            type="button"
            aria-label="Slide anterior"
            onClick={() =>
              setCurrentSlide((p) => (p === 0 ? heroImages.length - 1 : p - 1))
            }
            className="rounded-full border border-white/30 p-3 transition-colors hover:bg-white hover:text-black"
          >
            <ChevronLeft size={20} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label="Próximo slide"
            onClick={() =>
              setCurrentSlide((p) => (p === heroImages.length - 1 ? 0 : p + 1))
            }
            className="rounded-full border border-white/30 p-3 transition-colors hover:bg-white hover:text-black"
          >
            <ChevronRight size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
