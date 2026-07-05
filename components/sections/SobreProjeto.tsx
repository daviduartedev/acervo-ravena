import { siteCopy } from "@/content/site";

export function SobreProjeto() {
  const { title, lead, paragraphs } = siteCopy.sobreProjeto;

  return (
    <section
      id="sobre"
      className="border-t border-foreground/10 bg-card px-6 py-24 md:px-16 md:py-32"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60">
          {title}
        </h2>
        <p className="mb-8 text-3xl font-medium tracking-tighter md:text-4xl">
          {lead}
        </p>
        <div className="flex flex-col gap-6 text-lg font-light leading-relaxed text-muted-foreground">
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
