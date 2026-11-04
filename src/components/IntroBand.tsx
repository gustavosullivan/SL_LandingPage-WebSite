import { site } from "@/lib/site";

export function IntroBand() {
  return (
    <section className="bg-paper py-16 md:py-20">
      <div className="section-pad mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-end">
        <div>
          <h2 className="font-display text-4xl font-semibold text-navy md:text-5xl">
            Funerária São Luiz
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
            {site.heroLead}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
            Se precisar, conte com a São Luiz. Desde {site.foundedYear} homenageando
            vidas com carinho e respeito em Passo Fundo.
          </p>
        </div>
        <div className="space-y-5 border-t border-[var(--line)] pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-8">
          <div>
            <p className="text-xs tracking-[0.18em] text-ink/45 uppercase">Localização</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{site.address.full}</p>
          </div>
          <div>
            <p className="text-xs tracking-[0.18em] text-ink/45 uppercase">Plantão 24h</p>
            <a
              href={site.phone.href}
              className="mt-2 block text-2xl font-semibold text-navy transition hover:text-sky"
            >
              {site.phone.display}
            </a>
          </div>
          <div>
            <p className="text-xs tracking-[0.18em] text-ink/45 uppercase">E-mail</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 block text-sm text-ink-soft transition hover:text-navy"
            >
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
