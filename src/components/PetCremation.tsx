import { petCremation, site } from "@/lib/site";

export function PetCremation() {
  return (
    <section id="pet" className="bg-paper py-20 md:py-28">
      <div className="section-pad mx-auto max-w-6xl">
        <p className="font-condensed text-xs tracking-[0.24em] text-copper uppercase">
          Também cuidamos do seu pet
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold text-navy md:text-4xl">
          {petCremation.title}
        </h2>
        <p className="mt-4 max-w-2xl text-base text-ink-soft md:text-lg">
          Despedida digna e cuidadosa. Prazo de entrega: {petCremation.deliveryNote}.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {petCremation.options.map((option) => (
            <article key={option.name} className="border border-[var(--line)] bg-mist/70 p-6 md:p-7">
              <p className="font-condensed text-xs tracking-[0.16em] text-copper uppercase">
                Opção
              </p>
              <h3 className="mt-3 text-xl font-bold text-navy">{option.name}</h3>
              <p className="mt-4 text-3xl font-bold text-ink">{option.price}</p>
              {option.note ? (
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{option.note}</p>
              ) : null}
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={site.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-copper px-6 py-3.5 text-sm font-semibold text-white uppercase transition hover:bg-copper-dark"
          >
            Falar sobre cremação pet
          </a>
          <a
            href={site.phone.href}
            className="border border-navy/25 px-6 py-3.5 text-sm font-semibold text-navy uppercase transition hover:bg-mist"
          >
            Ligar {site.phone.display}
          </a>
        </div>
      </div>
    </section>
  );
}
