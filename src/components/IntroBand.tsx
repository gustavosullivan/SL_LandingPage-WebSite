import { site } from "@/lib/site";

const points = [
  { label: "Desde", value: String(site.foundedYear) },
  { label: "Planos", value: "Prev e Plus" },
  { label: "Também", value: "Cremação e pet" },
] as const;

export function IntroBand() {
  return (
    <section id="sobre" className="bg-paper py-16 md:py-24">
      <div className="section-pad mx-auto max-w-6xl">
        <p className="text-xs font-semibold tracking-[0.24em] text-sky uppercase">
          Passo Fundo · RS
        </p>
        <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight font-semibold text-navy md:text-6xl">
          Funerária São Luiz
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
          Cuidamos de cada detalhe para homenagear quem você ama, com atendimento
          humanizado e presença de verdade.
        </p>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {points.map((point) => (
            <div
              key={point.label}
              className="border border-[var(--line)] bg-mist/70 px-5 py-5 transition duration-300 hover:-translate-y-1 hover:border-navy/25 hover:bg-white"
            >
              <p className="text-xs font-semibold tracking-[0.18em] text-sky uppercase">
                {point.label}
              </p>
              <p className="mt-2 font-display text-3xl font-semibold text-navy">
                {point.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
