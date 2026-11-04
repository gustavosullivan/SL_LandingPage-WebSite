import { funeralPlans, site } from "@/lib/site";

export function Plans() {
  return (
    <>
      <section className="relative overflow-hidden py-24 text-center text-white md:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,37,71,0.78), rgba(0,37,71,0.78)), url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=2000&q=80')",
          }}
          aria-hidden
        />
        <div className="section-pad relative mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold md:text-5xl">
            Planos de Assistência Funeral
          </h2>
          <p className="mt-5 text-base text-white/85 md:text-lg">
            Um plano completo para proteger você e a quem você mais ama.
          </p>
          <a
            href="#planos"
            className="mt-8 inline-flex bg-copper px-8 py-3.5 text-sm font-semibold tracking-wide text-white uppercase transition hover:bg-copper-dark"
          >
            Saiba mais sobre os planos
          </a>
        </div>
      </section>

      <section id="planos" className="bg-mist py-20 md:py-28">
        <div className="section-pad mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-condensed text-xs tracking-[0.24em] text-copper uppercase">
              São Luiz Prev e Plus
            </p>
            <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">
              Escolha o plano ideal para sua família
            </h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {funeralPlans.map((plan) => (
              <article
                key={plan.id}
                className={`flex flex-col bg-paper p-7 shadow-sm md:p-9 ${
                  plan.highlight ? "ring-2 ring-copper" : "ring-1 ring-[var(--line)]"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-navy">{plan.name}</h3>
                    <p className="mt-1 font-condensed text-xs tracking-[0.2em] text-copper uppercase">
                      {plan.slogan}
                    </p>
                  </div>
                  {plan.highlight ? (
                    <span className="bg-navy px-3 py-1 text-[0.7rem] font-semibold tracking-wide text-white uppercase">
                      Plus
                    </span>
                  ) : null}
                </div>

                <ul className="mt-8 grid flex-1 gap-2.5 sm:grid-cols-2">
                  {plan.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-2 text-sm text-ink-soft">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 border-t border-[var(--line)] pt-6">
                  <p className="font-condensed text-xs tracking-[0.18em] text-ink/45 uppercase">
                    Parcelas
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {plan.installments.map((item) => (
                      <div
                        key={`${plan.id}-${item.times}`}
                        className="bg-mist px-3 py-3 text-center"
                      >
                        <p className="text-xs font-semibold text-copper">
                          {item.times}x
                        </p>
                        <p className="mt-1 text-sm font-bold text-navy">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={site.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold uppercase transition ${
                    plan.highlight
                      ? "bg-copper text-white hover:bg-copper-dark"
                      : "bg-navy text-white hover:bg-navy-deep"
                  }`}
                >
                  Quero o {plan.name}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
