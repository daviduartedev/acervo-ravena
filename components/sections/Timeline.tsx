"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useInView } from "motion/react";
import { timelineMilestones, type TimelineMilestone } from "@/content/timeline";

export function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = timelineMilestones[activeIndex];

  return (
    <section id="timeline" className="relative bg-black text-white">
      <div className="px-6 pb-16 pt-24 md:px-16 md:pb-20 md:pt-32">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
          Cronologia
        </p>
        <h2 className="max-w-2xl text-4xl font-medium tracking-tighter md:text-5xl">
          Quase um século de história em Laguna
        </h2>
        <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-white/60">
          Role a página para acompanhar, marco a marco, a construção da memória do
          Ravena Cassino Hotel.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24 md:px-16 md:pb-32">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <ol className="relative flex flex-col">
            <div
              aria-hidden
              className="absolute bottom-0 left-3 top-0 w-px bg-white/10"
            />

            {timelineMilestones.map((milestone, index) => (
              <TimelineEntry
                key={milestone.year}
                milestone={milestone}
                index={index}
                isActive={index === activeIndex}
                onActivate={() => setActiveIndex(index)}
              />
            ))}
          </ol>

          <div className="relative hidden md:block">
            <div className="sticky top-28 h-[64vh] w-full overflow-hidden bg-white/5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.year}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={active.image}
                    alt={active.title}
                    fill
                    sizes="50vw"
                    className="object-cover"
                    priority
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
                  />
                  <div className="absolute inset-x-6 bottom-6 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                    <span>{active.era}</span>
                    <span>
                      {String(activeIndex + 1).padStart(2, "0")} /{" "}
                      {String(timelineMilestones.length).padStart(2, "0")}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineEntry({
  milestone,
  index,
  isActive,
  onActivate,
}: {
  milestone: TimelineMilestone;
  index: number;
  isActive: boolean;
  onActivate: () => void;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { margin: "-45% 0px -45% 0px" });

  useEffect(() => {
    if (inView) onActivate();
  }, [inView, onActivate]);

  const handleJump = () => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <li ref={ref} className="relative flex gap-6 border-t border-white/10 py-10 first:border-t-0 md:min-h-[60vh] md:items-center md:border-t-0 md:py-0">
      <div className="flex w-6 shrink-0 justify-center pt-2">
        <span
          aria-hidden
          className={`h-3 w-3 rounded-full transition-colors duration-300 ${
            isActive ? "bg-white" : "bg-white/20"
          }`}
        />
      </div>

      <div className="min-w-0 flex-1">
        <div className="relative mb-6 aspect-[4/3] w-full overflow-hidden bg-white/5 md:hidden">
          <Image
            src={milestone.image}
            alt={milestone.title}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="mb-4 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span className="h-px w-8 bg-white/20" />
          <span>{milestone.era}</span>
        </div>

        <button
          type="button"
          onClick={handleJump}
          className={`font-serif-timeline text-left text-5xl font-medium leading-none tracking-tighter transition-colors duration-300 md:text-6xl ${
            isActive ? "text-white" : "text-white/30"
          }`}
        >
          {milestone.year}
        </button>

        <h3
          className={`mt-3 text-xl font-medium tracking-tight transition-colors duration-300 md:text-2xl ${
            isActive ? "text-white" : "text-white/40"
          }`}
        >
          {milestone.title}
        </h3>

        <p
          className={`mt-3 max-w-md text-base font-light leading-relaxed transition-colors duration-300 ${
            isActive ? "text-white/70" : "text-white/25"
          }`}
        >
          {milestone.description}
        </p>
      </div>
    </li>
  );
}
