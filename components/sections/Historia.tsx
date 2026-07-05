export function Historia() {
  return (
    <section
      id="historia"
      className="grid grid-cols-1 gap-16 px-6 py-32 md:grid-cols-12 md:gap-8 md:px-16 md:py-48"
    >
      <div className="flex flex-col gap-8 md:col-span-4">
        <h2 className="border-b border-foreground/10 pb-4 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60">
          A Gênese
        </h2>
        <p className="text-4xl font-medium leading-[1.05] tracking-tighter md:text-5xl">
          O auge do luxo e do entretenimento no sul do Brasil.
        </p>
      </div>
      <div className="flex flex-col gap-8 text-xl font-light leading-snug text-muted-foreground md:col-span-7 md:col-start-6 md:text-2xl">
        <p className="text-foreground">
          Inaugurado em uma época de efervescência cultural, o Ravena Cassino Hotel
          não era apenas uma hospedagem; era o epicentro da vida social em Laguna.
          Com sua arquitetura imponente e salões que respiravam elegância, atraía
          figuras ilustres e a alta sociedade.
        </p>
        <p>
          As roletas giravam enquanto orquestras embalavam as noites. No entanto, o
          brilho dos cassinos no Brasil teve um fim abrupto, forçando o Ravena a se
          reinventar e adaptar-se a novas eras, deixando para trás um rastro de
          histórias não contadas e memórias que ainda ecoam por seus corredores.
        </p>
        <p>
          Hoje, este acervo busca resgatar esses fragmentos. Fotografias desgastadas
          pelo tempo, relatos de antigos funcionários e as lembranças daqueles que
          dançaram em seus salões formam o mosaico do que um dia foi o grande Ravena.
        </p>
      </div>
    </section>
  );
}
