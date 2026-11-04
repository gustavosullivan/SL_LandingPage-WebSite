import { petCremation, site } from "@/lib/site";

export function PetCremation() {
  return (
    <section id="pet" className="bg-paper py-24 md:py-32">
      <div className="section-pad mx-auto max-w-6xl">
        <p className="text-xs font-semibold tracking-[0.24em] text-sky uppercase">
          Também cuidamos do seu pet
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight font-semibold text-ink md:text-5xl">
          {petCremation.title}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
          Despedida digna e cuidadosa. Prazo de entrega: {petCremation.deliveryNote}.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {petCremation.options.map((option) => (
            <article
              key={option.name}
              className="border border-[var(--line)] bg-mist/60 p-6 md:p-7"
            >
              <p className="text-xs font-semibold tracking-[0.16em] text-sky uppercase">
                Opção
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-navy">
                {option.name}
              </h3>
              <p className="mt-4 font-display text-3xl font-semibold text-ink">
                {option.price}
              </p>
              {option.note ? (
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {option.note}
                </p>
              ) : null}
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={site.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-paper transition hover:bg-navy-deep"
          >
            Falar sobre cremação pet
          </a>
          <a
            href={site.phone.href}
            className="rounded-full border border-navy/25 px-6 py-3.5 text-sm font-medium text-navy transition hover:bg-mist"
          >
            Ligar {site.phone.display}
          </a>
        </div>
      </div>
    </section>
  );
}
