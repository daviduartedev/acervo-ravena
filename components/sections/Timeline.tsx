"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useInView } from "motion/react";
import { timelineMilestones, type TimelineMilestone } from "@/content/timeline";

export function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = timelineMilestones[activeIndex];

  return (
    <section id="timeline" className="relative bg-[#0d0d0b] text-white">
      <div className="border-b border-white/8 px-6 pb-14 pt-20 md:px-10 md:pb-16 md:pt-28 lg:px-16">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
          Cronologia
        </p>
        <h2 className="max-w-xl text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">
          Quase um século de história em Laguna
        </h2>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24 md:px-10 md:pb-32 lg:px-16">
        <div className="grid gap-12 pt-12 md:grid-cols-2 md:gap-16 md:pt-16">
          <ol className="flex flex-col divide-y divide-white/8">
            {timelineMilestones.map((milestone, index) => (
              <TimelineEntry
                key={milestone.year}
                milestone={milestone}
                index={index}
                total={timelineMilestones.length}
                isActive={index === activeIndex}
                onActivate={() => setActiveIndex(index)}
              />
            ))}
          </ol>

          <div className="relative hidden md:block">
            <div className="sticky top-24 overflow-hidden bg-white/5" style={{ height: "65vh" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.year}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-4">
                    <p className="font-bold leading-none text-white" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                      {active.year}
                    </p>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                      {String(activeIndex + 1).padStart(2, "0")} / {String(timelineMilestones.length).padStart(2, "0")}
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
  total,
  isActive,
  onActivate,
}: {
  milestone: TimelineMilestone;
  index: number;
  total: number;
  isActive: boolean;
  onActivate: () => void;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { margin: "-40% 0px -40% 0px" });

  useEffect(() => {
    if (inView) onActivate();
  }, [inView, onActivate]);

  return (
    <li ref={ref} className="relative py-8 first:pt-0">
      <div className="relative mb-4 aspect-[4/3] overflow-hidden md:hidden">
        <Image src={milestone.image} alt={milestone.title} fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      <div className="flex items-start gap-5">
        <div className="shrink-0 pt-1">
          <motion.span
            animate={{ scale: isActive ? 1 : 0.7, opacity: isActive ? 1 : 0.3 }}
            transition={{ duration: 0.3 }}
            className="block h-3 w-3 rounded-full bg-white"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-3 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")} · {milestone.era}
            </span>
          </div>
          <motion.p
            animate={{ opacity: isActive ? 1 : 0.3 }}
            transition={{ duration: 0.3 }}
            className="mb-2 text-5xl font-bold leading-none tracking-tighter md:text-6xl"
          >
            {milestone.year}
          </motion.p>
          <motion.h3
            animate={{ opacity: isActive ? 1 : 0.35 }}
            transition={{ duration: 0.3 }}
            className="mb-3 text-xl font-semibold"
          >
            {milestone.title}
          </motion.h3>
          <motion.p
            animate={{ opacity: isActive ? 0.65 : 0.2 }}
            transition={{ duration: 0.3 }}
            className="max-w-md text-base font-light leading-relaxed"
          >
            {milestone.description}
          </motion.p>
        </div>
      </div>
    </li>
  );
}
