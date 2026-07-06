import { ExternalLink } from "lucide-react";
import {
  publicacaoTipoLabels,
  publicacoesDocumentadas,
  type PublicacaoDocumentada,
} from "@/content/publicacoes";
import { siteCopy } from "@/content/site";

function PublicacaoCard({ item }: { item: PublicacaoDocumentada }) {
  return (
    <article className="flex h-full flex-col rounded-[6px] border border-foreground/10 bg-background/70 p-6 shadow-[0_18px_60px_rgba(42,31,18,0.06)] md:p-7">
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <span className="rounded-[6px] border border-foreground/10 px-2.5 py-1 text-xs font-semibold text-foreground/70">
          {publicacaoTipoLabels[item.tipo]}
        </span>
        <span className="text-sm font-light text-muted-foreground">{item.data}</span>
      </div>

      <h3 className="mb-2 text-xl font-semibold leading-snug">{item.titulo}</h3>
      <p className="mb-1 text-sm font-semibold text-foreground/80">{item.fonte}</p>
      <p className="mb-6 flex-1 font-light leading-relaxed text-muted-foreground">
        {item.resumo}
      </p>

      {item.nota && (
        <p className="mb-6 text-sm font-light leading-relaxed text-muted-foreground/80">
          {item.nota}
        </p>
      )}

      {item.url ? (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-opacity hover:opacity-70"
        >
          Acessar fonte
          <ExternalLink size={14} strokeWidth={1.6} aria-hidden />
        </a>
      ) : (
        <span className="text-sm font-light text-muted-foreground">
          Sem link público disponível
        </span>
      )}
    </article>
  );
}

export function Documentos() {
  const { title, lead, note } = siteCopy.documentados;

  return (
    <section className="border-y border-foreground/10 bg-[#eef1eb] px-6 py-20 md:px-10 md:py-24 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase text-foreground/60">
              {title}
            </p>
            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              {lead}
            </h2>
          </div>
          <p className="max-w-2xl text-base font-light leading-relaxed text-muted-foreground md:text-lg lg:justify-self-end">
            {note}
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {publicacoesDocumentadas.map((item) => (
            <li key={item.id}>
              <PublicacaoCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
