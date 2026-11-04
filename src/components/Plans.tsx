import { funeralPlans, site } from "@/lib/site";

export function Plans() {
  return (
    <section id="planos" className="bg-mist py-24 md:py-32">
      <div className="section-pad mx-auto max-w-6xl">
        <p className="text-xs font-semibold tracking-[0.24em] text-sky uppercase">
          Planos funerários
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight font-semibold text-ink md:text-5xl">
          São Luiz Prev e Plus — proteção para todos os momentos
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
          Escolha o plano ideal para sua família. Valores parcelados, coberturas
          claras e atendimento prioritário em Passo Fundo.
        </p>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {funeralPlans.map((plan) => (
            <article
              key={plan.id}
              className={`flex flex-col border bg-paper p-7 md:p-9 ${
                plan.highlight
                  ? "border-gold/50 shadow-[0_20px_50px_rgba(12,58,102,0.12)]"
                  : "border-[var(--line)]"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-3xl font-semibold text-navy">
                    {plan.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold tracking-[0.2em] text-sky uppercase">
                    {plan.slogan}
                  </p>
                </div>
                {plan.highlight ? (
                  <span className="rounded-full bg-navy px-3 py-1 text-[0.7rem] font-semibold tracking-wide text-gold-soft uppercase">
                    Plus
                  </span>
                ) : null}
              </div>

              <ul className="mt-8 grid flex-1 gap-2.5 sm:grid-cols-2">
                {plan.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex gap-2 text-sm text-ink-soft"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky" />
                    {benefit}
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-[var(--line)] pt-6">
                <p className="text-xs font-semibold tracking-[0.18em] text-ink/45 uppercase">
                  Parcelas
                </p>
                <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {plan.installments.map((item) => (
                    <div
                      key={`${plan.id}-${item.times}`}
                      className="bg-mist px-3 py-3 text-center"
                    >
                      <p className="text-xs font-semibold text-sky">
                        {item.times}x
                      </p>
                      <p className="mt-1 text-sm font-semibold text-navy">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={site.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition ${
                  plan.highlight
                    ? "bg-navy text-paper hover:bg-navy-deep"
                    : "border border-navy/25 text-navy hover:bg-mist"
                }`}
              >
                Quero o {plan.name}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
