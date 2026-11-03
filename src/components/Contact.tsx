import { site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contato" className="bg-paper py-24 md:py-32">
      <div className="section-pad mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.24em] text-leaf">Contato</p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight font-semibold text-ink md:text-5xl">
          Estamos no Centro de Passo Fundo
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
          Precisa de atendimento agora ou quer conhecer o plano preventivo? Fale
          com a Funerária São Luiz.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-ink/45">
                Telefone
              </p>
              <a
                href={site.phone.href}
                className="mt-2 block font-display text-3xl font-semibold text-forest transition hover:text-leaf"
              >
                {site.phone.display}
              </a>
              <a
                href={site.phoneAlt.href}
                className="mt-1 block text-ink-soft transition hover:text-ink"
              >
                {site.phoneAlt.display}
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-ink/45">
                E-mail
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 block text-lg text-ink transition hover:text-leaf"
              >
                {site.email}
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-ink/45">
                Endereço
              </p>
              <p className="mt-2 max-w-sm text-base leading-relaxed text-ink-soft">
                {site.address.street}
                <br />
                {site.address.neighborhood} · {site.address.city}/{site.address.state}
                <br />
                CEP {site.address.postalCode}
              </p>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm font-medium text-leaf underline-offset-4 hover:underline"
              >
                Abrir no Google Maps
              </a>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={site.phone.href}
                className="rounded-full bg-forest px-6 py-3 text-sm font-semibold text-paper transition hover:bg-forest-deep"
              >
                Ligar agora
              </a>
              <a
                href={site.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[var(--line)] px-6 py-3 text-sm font-medium text-ink transition hover:bg-mist"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="min-h-[320px] overflow-hidden border border-[var(--line)] bg-mist">
            <iframe
              title="Mapa da Funerária São Luiz em Passo Fundo"
              src={site.mapsEmbed}
              className="h-full min-h-[320px] w-full border-0 grayscale-[20%] contrast-[1.05]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
