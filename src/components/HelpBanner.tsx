import { site } from "@/lib/site";

export function HelpBanner() {
  return (
    <section className="bg-copper py-16 text-center text-white md:py-20">
      <div className="section-pad mx-auto max-w-4xl">
        <p className="font-condensed text-xs tracking-[0.24em] uppercase">
          Precisa de ajuda?
        </p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
          Estamos aqui para lhe ajudar, 24 horas por dia, 7 dias por semana.
        </h2>
        <a
          href={site.phone.href}
          className="mt-8 inline-flex bg-navy px-8 py-3.5 text-sm font-semibold tracking-wide text-white uppercase transition hover:bg-navy-deep"
        >
          Ligar {site.phone.display}
        </a>
      </div>
    </section>
  );
}
