import { site } from "@/lib/site";

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-navy-deep text-paper">
      <div
        className="hero-media absolute inset-0 bg-cover bg-[center_30%]"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(7,31,56,0.25) 0%, rgba(7,31,56,0.15) 40%, rgba(7,31,56,0.55) 100%), url('https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=2400&q=80')",
        }}
        aria-hidden
      />

      <div className="relative z-10 flex min-h-[72svh] flex-col justify-end px-6 pb-14 pt-24 md:min-h-[78svh] md:px-10 md:pb-16 lg:px-16">
        <p className="reveal text-sm font-bold tracking-[0.22em] text-paper uppercase md:text-base">
          Desde {site.foundedYear}
        </p>
        <h1 className="reveal reveal-delay-1 mt-3 max-w-4xl font-script text-[clamp(3.4rem,12vw,7rem)] leading-[0.95] text-paper">
          Todos os momentos
        </h1>
        <p className="reveal reveal-delay-2 mt-5 max-w-lg text-base leading-relaxed text-paper/90 md:text-lg">
          Na Funerária São Luiz cuidamos de cada detalhe para homenagear quem você ama —
          com respeito, presença e atendimento 24 horas em Passo Fundo.
        </p>
        <div className="reveal reveal-delay-3 mt-8 flex flex-wrap gap-3">
          <a
            href="#servicos-destaque"
            className="inline-flex rounded-sm bg-paper px-6 py-3 text-sm font-semibold text-navy transition hover:bg-mist"
          >
            Todos os serviços
          </a>
          <a
            href={site.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-sm border border-paper/50 px-6 py-3 text-sm font-semibold text-paper transition hover:bg-paper/10"
          >
            WhatsApp {site.phone.display}
          </a>
        </div>
      </div>
    </section>
  );
}
