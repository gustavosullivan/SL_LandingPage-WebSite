import { site } from "@/lib/site";

export function About() {
  const years = 2026 - site.foundedYear;

  return (
    <section id="sobre" className="bg-paper py-20 md:py-28">
      <div className="section-pad mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div>
          <h2 className="text-3xl font-bold text-navy md:text-4xl">{site.name}</h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
            {site.subtitle}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
            Se precisar, conte com a São Luiz. Desde {site.foundedYear} homenageando
            vidas com carinho e respeito em Passo Fundo.
          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
              <p className="font-condensed text-xs tracking-[0.2em] text-copper uppercase">
                Localização
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink">
                {site.address.full}
              </p>
            </div>
            <div>
              <p className="font-condensed text-xs tracking-[0.2em] text-copper uppercase">
                E-mail
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 block text-sm text-sky hover:underline"
              >
                {site.email}
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-mist p-6 text-center">
            <p className="text-4xl font-bold text-navy">{years} anos</p>
            <p className="mt-2 font-condensed text-xs tracking-[0.16em] text-ink-soft uppercase">
              Desde {site.foundedYear}
            </p>
          </div>
          <div className="bg-copper p-6 text-center text-white">
            <p className="text-4xl font-bold">24h</p>
            <p className="mt-2 font-condensed text-xs tracking-[0.16em] uppercase">
              Plantão
            </p>
          </div>
          <div className="col-span-2 bg-navy p-6 text-center text-white">
            <p className="font-condensed text-xs tracking-[0.2em] text-copper uppercase">
              Atendimento
            </p>
            <a
              href={site.phone.href}
              className="mt-2 block text-2xl font-bold hover:text-copper"
            >
              {site.phone.display}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
