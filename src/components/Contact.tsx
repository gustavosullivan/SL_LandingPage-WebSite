import { site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contato" className="bg-paper py-24 md:py-32">
      <div className="section-pad mx-auto max-w-6xl">
        <p className="text-xs font-semibold tracking-[0.24em] text-sky uppercase">
          Contato
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight font-semibold text-ink md:text-5xl">
          Aberto 24h no Centro de Passo Fundo
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
          Precisa de atendimento agora, quer contratar um plano ou saber sobre
          cremação? Fale com a Funerária São Luiz.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-8">
            <div>
              <p className="text-xs tracking-[0.18em] text-ink/45 uppercase">
                Telefone
              </p>
              <a
                href={site.phone.href}
                className="mt-2 block font-display text-3xl font-semibold text-navy transition hover:text-sky"
              >
                {site.phone.display}
              </a>
              <p className="mt-2 text-sm text-ink-soft">{site.hoursLabel}</p>
            </div>

            <div>
              <p className="text-xs tracking-[0.18em] text-ink/45 uppercase">
                E-mail / Site
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 block text-lg text-ink transition hover:text-sky"
              >
                {site.email}
              </a>
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-ink-soft transition hover:text-ink"
              >
                www.lucianocogo.com.br
              </a>
            </div>

            <div>
              <p className="text-xs tracking-[0.18em] text-ink/45 uppercase">
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
                className="mt-3 inline-block text-sm font-medium text-sky underline-offset-4 hover:underline"
              >
                Abrir no Google Maps
              </a>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={site.phone.href}
                className="rounded-full bg-navy px-6 py-3 text-sm font-semibold text-paper transition hover:bg-navy-deep"
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
              className="h-full min-h-[320px] w-full border-0 grayscale-[15%] contrast-[1.05]"
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
