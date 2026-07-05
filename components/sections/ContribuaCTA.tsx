export function ContribuaCTA() {
  return (
    <section className="bg-foreground px-6 py-32 text-center text-background">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8">
        <h2 className="text-4xl font-medium tracking-tighter md:text-6xl">
          Faça parte do acervo
        </h2>
        <p className="mb-4 text-lg font-light opacity-80 md:text-xl">
          Você ou sua família possuem fotografias, documentos ou histórias do Ravena
          Cassino Hotel? Ajude-nos a preservar a memória de Laguna.
        </p>
        <button
          type="button"
          aria-disabled="true"
          className="bg-background px-8 py-4 text-sm font-medium uppercase tracking-widest text-foreground transition-colors hover:bg-background/90"
        >
          Enviar Relato
        </button>
      </div>
    </section>
  );
}
