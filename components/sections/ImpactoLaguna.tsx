import { siteCopy } from "@/content/site";

export function ImpactoLaguna() {
  const { title, lead, paragraphs } = siteCopy.impactoLaguna;

  return (
    <section className="border-y border-foreground/10 bg-[#eef1eb] px-6 py-20 md:px-10 md:py-24 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1fr]">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase text-foreground/60">
            {title}
          </p>
          <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
            {lead}
          </h2>
        </div>
        <div className="grid gap-6 text-lg font-light leading-relaxed text-muted-foreground md:text-xl">
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
