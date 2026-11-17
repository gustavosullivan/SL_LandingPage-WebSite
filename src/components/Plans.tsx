import { funeralPlan, site } from "@/lib/site";

/** Unused legacy section — kept for reference; Offers renders the live plans. */
export function Plans() {
  return (
    <section id="planos-legacy" className="bg-mist py-24 md:py-32">
      <div className="section-pad mx-auto max-w-6xl">
        <h2 className="font-display text-4xl font-semibold text-navy">{funeralPlan.name}</h2>
        <p className="mt-3 text-ink-soft">{funeralPlan.monthly} por mês.</p>
        <a
          href={site.whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex rounded-full bg-navy px-6 py-3 text-sm font-semibold text-paper"
        >
          Quero o plano funeral
        </a>
      </div>
    </section>
  );
}
