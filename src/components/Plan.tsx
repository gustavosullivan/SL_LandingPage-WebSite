import { planBenefits, site } from "@/lib/site";

export function Plan() {
  return (
    <section id="plano" className="relative overflow-hidden bg-forest text-paper">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[var(--glow)] blur-3xl"
        aria-hidden
      />
      <div className="section-pad relative mx-auto grid max-w-6xl gap-12 py-24 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-32">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-brass-soft">
            Plano funerário preventivo
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight font-semibold md:text-5xl">
            Proteja sua família hoje. Evite decisões sob pressão amanhã.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-paper/80 md:text-lg">
            O plano preventivo da São Luiz é a escolha mais inteligente para quem
            quer tranquilidade financeira e atendimento prioritário no momento em
            que a família mais precisa.
          </p>

          <ul className="mt-8 space-y-3">
            {planBenefits.map((benefit) => (
              <li key={benefit} className="flex gap-3 text-sm md:text-base">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                <span className="text-paper/90">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border border-paper/15 bg-forest-deep/55 p-8 backdrop-blur-sm md:p-10">
          <p className="font-display text-3xl font-semibold md:text-4xl">
            Solicite uma proposta
          </p>
          <p className="mt-4 text-sm leading-relaxed text-paper/75 md:text-base">
            Sem compromisso. Nossa equipe explica coberturas, condições e a melhor
            forma de incluir sua família — com clareza e respeito.
          </p>
          <div className="mt-8 flex flex-col gap-3">
            <a
              href={site.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-brass px-6 py-3.5 text-center text-sm font-semibold text-forest-deep transition hover:bg-brass-soft"
            >
              Quero conhecer o plano
            </a>
            <a
              href={site.phone.href}
              className="inline-flex items-center justify-center rounded-full border border-paper/30 px-6 py-3.5 text-center text-sm font-medium text-paper transition hover:bg-paper/10"
            >
              Ligar {site.phone.display}
            </a>
          </div>
          <p className="mt-6 text-xs text-paper/55">
            Atendimento comercial e emergencial · Passo Fundo/RS
          </p>
        </div>
      </div>
    </section>
  );
}
