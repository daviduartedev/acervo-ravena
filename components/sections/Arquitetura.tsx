import { siteCopy } from "@/content/site";

export function Arquitetura() {
  const { title, lead, ficha, paragraphs } = siteCopy.arquitetura;

  return (
    <section
      id="arquitetura"
      className="grid grid-cols-1 gap-16 px-6 py-24 md:grid-cols-12 md:gap-8 md:px-16 md:py-32"
    >
      <div className="md:col-span-5">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60">
          {title}
        </p>
        <h2 className="mb-10 text-3xl font-medium leading-tight tracking-tighter md:text-4xl lg:text-5xl">
          {lead}
        </h2>

        <dl className="divide-y divide-border">
          {ficha.map((item) => (
            <div key={item.label} className="flex justify-between gap-4 py-3 text-sm">
              <dt className="font-light text-muted-foreground">{item.label}</dt>
              <dd className="text-right font-medium">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="flex flex-col gap-6 text-lg font-light leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7 md:text-xl">
        {paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
