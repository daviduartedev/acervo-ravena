import { siteCopy } from "@/content/site";

export function ImpactoLaguna() {
  const { title, lead, paragraphs } = siteCopy.impactoLaguna;

  return (
    <section
      id="impacto"
      className="grid grid-cols-1 gap-12 px-6 py-24 md:grid-cols-12 md:gap-8 md:px-16 md:py-32"
    >
      <div className="md:col-span-4">
        <h2 className="border-b border-foreground/10 pb-4 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60">
          {title}
        </h2>
        <p className="mt-8 text-3xl font-medium leading-tight tracking-tighter md:text-4xl">
          {lead}
        </p>
      </div>
      <div className="flex flex-col gap-6 text-lg font-light leading-relaxed text-muted-foreground md:col-span-7 md:col-start-6 md:text-xl">
        {paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
