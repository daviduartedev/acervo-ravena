import { ExternalLink } from "lucide-react";
import {
  publicacaoTipoLabels,
  publicacoesDocumentadas,
  type PublicacaoDocumentada,
} from "@/content/publicacoes";
import { siteCopy } from "@/content/site";

function PublicacaoCard({ item }: { item: PublicacaoDocumentada }) {
  return (
    <article className="flex flex-col border border-foreground/10 bg-background p-6 md:p-8">
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <span className="border border-foreground/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-foreground/70">
          {publicacaoTipoLabels[item.tipo]}
        </span>
        <span className="text-xs font-light text-muted-foreground">{item.data}</span>
      </div>

      <h3 className="mb-2 text-lg font-medium leading-snug tracking-tight md:text-xl">
        {item.titulo}
      </h3>
      <p className="mb-1 text-sm font-medium text-foreground/80">{item.fonte}</p>
      <p className="mb-6 flex-1 font-light leading-relaxed text-muted-foreground">
        {item.resumo}
      </p>

      {item.nota && (
        <p className="mb-6 text-xs font-light leading-relaxed text-muted-foreground/80">
          {item.nota}
        </p>
      )}

      {item.url ? (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-opacity hover:opacity-60"
        >
          Acessar fonte
          <ExternalLink size={14} strokeWidth={1.5} aria-hidden />
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
    <section
      id="documentados"
      className="border-t border-foreground/10 bg-card px-6 py-24 md:px-16 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60">
              {title}
            </p>
            <h2 className="text-3xl font-medium tracking-tighter md:text-4xl">{lead}</h2>
          </div>
          <p className="max-w-md text-sm font-light leading-relaxed text-muted-foreground md:text-base">
            {note}
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
