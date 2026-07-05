import { siteCopy } from "@/content/site";

export function Legado() {
  const { title, lead, pillars } = siteCopy.legado;

  return (
    <section id="legado" className="bg-foreground px-6 py-24 text-background md:px-16 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl md:mb-20">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-background/60">
            {title}
          </p>
          <h2 className="text-3xl font-medium tracking-tighter md:text-4xl">{lead}</h2>
        </div>

        <ul className="grid grid-cols-1 gap-px bg-background/10 md:grid-cols-3">
          {pillars.map((pillar) => (
            <li
              key={pillar.id}
              className="bg-foreground p-8 md:p-10"
            >
              <h3 className="mb-4 text-lg font-medium tracking-tight">{pillar.title}</h3>
              <p className="font-light leading-relaxed text-background/70">
                {pillar.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
