import { siteCopy } from "@/content/site";

export function Legado() {
  const { title, lead, pillars } = siteCopy.legado;

  return (
    <section className="bg-[#171815] px-6 py-20 text-[#f7f1e6] md:px-10 md:py-24 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase text-[#f7f1e6]/50">
            {title}
          </p>
          <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
            {lead}
          </h2>
        </div>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {pillars.map((pillar) => (
            <li
              key={pillar.id}
              className="rounded-[6px] border border-[#f7f1e6]/10 bg-white/[0.04] p-7 md:p-8"
            >
              <h3 className="mb-4 text-xl font-semibold">{pillar.title}</h3>
              <p className="font-light leading-relaxed text-[#f7f1e6]/70">
                {pillar.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
