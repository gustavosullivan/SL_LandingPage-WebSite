import { site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contato" className="scroll-mt-28 bg-mist py-16 md:py-24">
      <div className="section-pad mx-auto max-w-6xl">
        <p className="text-xs font-semibold tracking-[0.24em] text-sky uppercase">
          Entre em contato
        </p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl leading-tight font-semibold text-navy md:text-5xl">
          Fale com a São Luiz
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft md:text-base">
          Estamos no centro de Passo Fundo, abertos 24 horas. Ligue, chame no WhatsApp
          ou venha até a casa. Atendemos a região: {site.region}
        </p>

        <div className="mt-8 grid items-stretch gap-4 lg:grid-cols-[20rem_1fr]">
          <div className="rounded-[1.5rem] bg-navy p-5 text-paper">
            <p className="font-display text-2xl leading-snug font-semibold">
              {site.address.street}
            </p>
            <p className="mt-2 text-sm text-paper/75">
              {site.address.neighborhood} · {site.address.city}/{site.address.state}
              <br />
              CEP {site.address.postalCode}
            </p>
            <p className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold">
              <span className="h-2 w-2 animate-pulse rounded-full bg-gold" />
              Aberto 24 horas
            </p>
            <a
              href={site.phone.href}
              className="mt-4 block font-display text-3xl font-semibold text-paper transition hover:text-gold-soft"
            >
              {site.phone.display}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="mt-1 block text-sm text-paper/75 transition hover:text-paper"
            >
              {site.email}
            </a>
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={site.phone.href}
                className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-navy-deep transition hover:bg-gold-soft"
              >
                Ligar agora
              </a>
              <a
                href={site.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-paper/30 px-4 py-2 text-sm font-semibold text-paper transition hover:bg-white/10"
              >
                WhatsApp
              </a>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-paper/30 px-4 py-2 text-sm font-semibold text-paper transition hover:bg-white/10"
              >
                Abrir no mapa
              </a>
            </div>
          </div>

          <div className="h-72 overflow-hidden rounded-[1.75rem] bg-navy md:h-80">
            <iframe
              title="Mapa da Funerária São Luiz em Passo Fundo"
              src={site.mapsEmbed}
              className="h-full w-full border-0"
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
