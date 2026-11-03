import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="topo"
      className="grain relative min-h-[100svh] overflow-hidden bg-forest-deep text-paper"
    >
      <div
        className="hero-media absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(13,36,30,0.88) 0%, rgba(13,36,30,0.55) 45%, rgba(13,36,30,0.72) 100%), url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2400&q=80')",
        }}
        aria-hidden
      />

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end pb-16 pt-28 md:justify-center md:pb-24 md:pt-20">
        <div className="section-pad mx-auto w-full max-w-6xl">
          <p className="reveal text-xs uppercase tracking-[0.28em] text-brass-soft">
            Passo Fundo · RS · Desde {site.foundedYear}
          </p>

          <h1 className="reveal reveal-delay-1 mt-5 max-w-4xl font-display text-[clamp(3.2rem,9vw,6.4rem)] leading-[0.92] font-semibold tracking-tight">
            São Luiz
          </h1>

          <p className="reveal reveal-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-paper/88 md:text-xl">
            {site.tagline}
          </p>

          <div className="reveal reveal-delay-3 mt-10 flex flex-wrap items-center gap-3">
            <a
              href={site.phone.href}
              className="cta-pulse inline-flex items-center justify-center rounded-full bg-brass px-7 py-3.5 text-sm font-semibold tracking-wide text-forest-deep transition hover:bg-brass-soft"
            >
              Ligar {site.phone.display}
            </a>
            <a
              href={site.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-paper/35 bg-paper/5 px-7 py-3.5 text-sm font-medium text-paper backdrop-blur-sm transition hover:bg-paper/15"
            >
              Falar no WhatsApp
            </a>
          </div>

          <p className="reveal reveal-delay-3 mt-8 text-sm text-paper/70">
            {site.hoursLabel} · Centro de Passo Fundo
          </p>
        </div>
      </div>
    </section>
  );
}
