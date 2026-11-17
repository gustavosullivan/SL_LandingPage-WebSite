import { cremation, site } from "@/lib/site";

/** Unused legacy section — kept for reference; Offers renders the live cremation block. */
export function Cremation() {
  return (
    <section id="cremacao-legacy" className="bg-navy py-24 text-paper">
      <div className="section-pad mx-auto max-w-6xl">
        <h2 className="font-display text-4xl font-semibold">{cremation.title}</h2>
        <p className="mt-3 text-paper/75">
          {cremation.cash} · {cremation.note}
        </p>
        <a
          href={site.phone.href}
          className="mt-6 inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy-deep"
        >
          Solicitar — {site.phone.display}
        </a>
      </div>
    </section>
  );
}
