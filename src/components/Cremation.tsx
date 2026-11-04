import { cremation, site } from "@/lib/site";

export function Cremation() {
  return (
    <section id="cremacao" className="bg-navy py-20 text-white md:py-28">
      <div className="section-pad mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="font-condensed text-xs tracking-[0.24em] text-copper uppercase">
            Serviço imediato
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">{cremation.title}</h2>
          <p className="mt-4 text-base text-white/80 md:text-lg">
            Valores transparentes para cremação imediata em Passo Fundo, com opções
            à vista e parceladas.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3 bg-navy-deep px-5 py-4">
              <span className="text-sm text-white/75">À vista</span>
              <strong className="text-3xl font-bold text-copper">{cremation.cash}</strong>
            </div>
            <div className="bg-navy-deep px-5 py-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-sm text-white/75">Parcelado</span>
                <strong className="text-2xl font-bold">{cremation.installmentTotal}</strong>
              </div>
              <p className="mt-2 text-sm text-white/65">{cremation.entry}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {cremation.installments.map((item) => (
                <div key={item.times} className="border border-white/15 px-4 py-4 text-center">
                  <p className="font-condensed text-xs tracking-wide text-copper uppercase">
                    {item.times}x
                  </p>
                  <p className="mt-2 text-lg font-bold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-navy-deep/70 p-7 md:p-8">
            <p className="text-2xl font-bold">Serviços adicionais</p>
            <ul className="mt-6 space-y-5">
              {cremation.extras.map((extra) => (
                <li
                  key={extra.name}
                  className="flex items-start justify-between gap-4 border-b border-white/10 pb-4 last:border-0"
                >
                  <div>
                    <p className="font-medium">{extra.name}</p>
                    {"note" in extra && extra.note ? (
                      <p className="mt-1 text-xs text-white/55">{extra.note}</p>
                    ) : null}
                  </div>
                  <p className="shrink-0 font-bold text-copper">{extra.price}</p>
                </li>
              ))}
            </ul>
            <a
              href={site.phone.href}
              className="mt-8 inline-flex w-full items-center justify-center bg-copper px-6 py-3.5 text-sm font-semibold text-white uppercase transition hover:bg-copper-dark"
            >
              Solicitar cremação
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
