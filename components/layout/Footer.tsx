export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 pb-8 pt-24 md:px-16">
      <div className="mb-24 grid grid-cols-1 gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="mb-6 text-2xl font-medium tracking-tight">
            Ravena Cassino
            <br />
            Acervo Documental
          </h3>
          <p className="max-w-sm font-light text-muted-foreground">
            Um projeto dedicado à preservação histórica, arquitetônica e cultural do
            ícone de Laguna, SC.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <span className="mb-2 text-sm font-medium uppercase tracking-widest">
            Navegação
          </span>
          <a
            href="#historia"
            className="font-light text-muted-foreground transition-colors hover:text-foreground"
          >
            História
          </a>
          <a
            href="#timeline"
            className="font-light text-muted-foreground transition-colors hover:text-foreground"
          >
            Cronologia
          </a>
          <a
            href="#arquitetura"
            className="font-light text-muted-foreground transition-colors hover:text-foreground"
          >
            Arquitetura
          </a>
          <a
            href="#acervo"
            className="font-light text-muted-foreground transition-colors hover:text-foreground"
          >
            Acervo Fotográfico
          </a>
          <a
            href="#documentados"
            className="font-light text-muted-foreground transition-colors hover:text-foreground"
          >
            Publicações documentadas
          </a>
          <a
            href="#relatos"
            className="font-light text-muted-foreground transition-colors hover:text-foreground"
          >
            Entrevistas
          </a>
          <a
            href="#sobre"
            className="font-light text-muted-foreground transition-colors hover:text-foreground"
          >
            Sobre o Projeto
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <span className="mb-2 text-sm font-medium uppercase tracking-widest">
            Contato
          </span>
          <span className="font-light text-muted-foreground">
            Laguna, Santa Catarina
          </span>
          <a
            href="mailto:contato@acervoravena.com.br"
            className="font-light text-muted-foreground transition-colors hover:text-foreground"
          >
            contato@acervoravena.com.br
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm font-light text-muted-foreground md:flex-row">
        <span>&copy; {year} Acervo Ravena. Todos os direitos reservados.</span>
        <div className="flex gap-6">
          <a href="#" className="transition-colors hover:text-foreground">
            Termos
          </a>
          <a href="#" className="transition-colors hover:text-foreground">
            Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}
