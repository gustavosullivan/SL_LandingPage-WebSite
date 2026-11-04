import { site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contato" className="bg-mist py-20 md:py-28">
      <div className="section-pad mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-navy md:text-4xl">Podemos te ajudar?</h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft md:text-lg">
            Se preferir entrar em contato por mensagem, responderemos assim que
            possível. Preencha o formulário com dúvidas, elogios ou sugestões.
          </p>

          <div className="mt-10 space-y-5">
            <div>
              <p className="font-condensed text-xs tracking-[0.18em] text-copper uppercase">
                Telefone
              </p>
              <a href={site.phone.href} className="mt-1 block text-2xl font-bold text-navy">
                {site.phone.display}
              </a>
              <p className="mt-1 text-sm text-ink-soft">{site.hoursLabel}</p>
            </div>
            <div>
              <p className="font-condensed text-xs tracking-[0.18em] text-copper uppercase">
                Endereço
              </p>
              <p className="mt-1 text-sm leading-relaxed text-ink">{site.address.full}</p>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-medium text-sky hover:underline"
              >
                Abrir no Google Maps
              </a>
            </div>
          </div>
        </div>

        <div className="bg-paper p-6 shadow-sm md:p-8">
          <h3 className="text-xl font-bold text-navy">Envie sua mensagem</h3>
          <form
            className="mt-6 space-y-4"
            action={site.whatsapp.href}
            method="get"
            target="_blank"
            rel="noopener noreferrer"
          >
            <input className="input-cogo" name="nome" placeholder="Seu nome" required />
            <input
              className="input-cogo"
              name="telefone"
              placeholder="Seu telefone (DDD+Número)"
              required
            />
            <input
              className="input-cogo"
              type="email"
              name="email"
              placeholder="Seu e-mail"
              required
            />
            <textarea
              className="input-cogo min-h-28"
              name="mensagem"
              placeholder="Escreva sua mensagem aqui..."
              required
            />
            <a
              href={site.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center bg-copper px-6 py-3.5 text-sm font-semibold text-white uppercase transition hover:bg-copper-dark"
            >
              Enviar mensagem
            </a>
          </form>
        </div>
      </div>

      <div className="section-pad mx-auto mt-12 max-w-6xl">
        <div className="min-h-[280px] overflow-hidden border border-[var(--line)] bg-paper">
          <iframe
            title="Mapa da Funerária São Luiz em Passo Fundo"
            src={site.mapsEmbed}
            className="h-full min-h-[280px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
