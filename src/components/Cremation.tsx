import { cremation, site } from "@/lib/site";

export function Cremation() {
  return (
    <section id="cremacao" className="relative overflow-hidden bg-navy text-paper">
      <div
        className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-[var(--glow)] blur-3xl"
        aria-hidden
      />
      <div className="section-pad relative mx-auto max-w-6xl py-24 md:py-32">
        <p className="text-xs font-semibold tracking-[0.24em] text-gold-soft uppercase">
          Serviço imediato
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight font-semibold md:text-5xl">
          {cremation.title}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-paper/80 md:text-lg">
          Valores transparentes para cremação imediata em Passo Fundo, com opções
          à vista e parceladas.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3 bg-navy-deep/55 px-5 py-4">
              <span className="text-sm text-paper/75">À vista</span>
              <strong className="font-display text-3xl font-semibold text-gold-soft">
                {cremation.cash}
              </strong>
            </div>
            <div className="bg-navy-deep/55 px-5 py-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-sm text-paper/75">Parcelado</span>
                <strong className="font-display text-2xl font-semibold">
                  {cremation.installmentTotal}
                </strong>
              </div>
              <p className="mt-2 text-sm text-paper/65">{cremation.entry}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {cremation.installments.map((item) => (
                <div
                  key={item.times}
                  className="border border-paper/15 px-4 py-4 text-center"
                >
                  <p className="text-xs font-semibold tracking-wide text-gold-soft uppercase">
                    {item.times}x
                  </p>
                  <p className="mt-2 text-lg font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-paper/15 bg-navy-deep/40 p-7 md:p-8">
            <p className="font-display text-2xl font-semibold">Serviços adicionais</p>
            <ul className="mt-6 space-y-5">
              {cremation.extras.map((extra) => (
                <li
                  key={extra.name}
                  className="flex items-start justify-between gap-4 border-b border-paper/10 pb-4 last:border-0"
                >
                  <div>
                    <p className="font-medium">{extra.name}</p>
                    {"note" in extra && extra.note ? (
                      <p className="mt-1 text-xs text-paper/55">{extra.note}</p>
                    ) : null}
                  </div>
                  <p className="shrink-0 font-semibold text-gold-soft">{extra.price}</p>
                </li>
              ))}
            </ul>
            <a
              href={site.phone.href}
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-navy-deep transition hover:bg-gold-soft"
            >
              Solicitar cremação — {site.phone.display}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
