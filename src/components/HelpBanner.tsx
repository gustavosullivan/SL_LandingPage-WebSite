import { site } from "@/lib/site";

export function HelpBanner() {
  return (
    <section className="bg-navy py-16 text-center text-paper md:py-20">
      <div className="section-pad mx-auto max-w-4xl">
        <p className="text-xs font-semibold tracking-[0.24em] text-gold-soft uppercase">
          Precisa de ajuda?
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold md:text-5xl">
          Estamos aqui para lhe ajudar, 24 horas por dia, 7 dias por semana.
        </h2>
        <a
          href={site.phone.href}
          className="mt-8 inline-flex bg-gold px-8 py-3.5 text-sm font-semibold tracking-wide text-navy-deep transition hover:bg-gold-soft"
        >
          Ligar {site.phone.display}
        </a>
      </div>
    </section>
  );
}
