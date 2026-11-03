import { faqs } from "@/lib/site";

export function Faq() {
  return (
    <section id="faq" className="bg-mist py-24 md:py-32">
      <div className="section-pad mx-auto max-w-3xl">
        <p className="text-xs font-semibold tracking-[0.24em] text-sky uppercase">
          Perguntas frequentes
        </p>
        <h2 className="mt-4 font-display text-4xl leading-tight font-semibold text-ink md:text-5xl">
          Dúvidas sobre planos, cremação e atendimento
        </h2>

        <div className="mt-12 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {faqs.map((item) => (
            <details key={item.question} className="faq-item group py-5">
              <summary className="flex items-start justify-between gap-4">
                <span className="font-display text-xl font-semibold text-ink md:text-2xl">
                  {item.question}
                </span>
                <span className="faq-chevron mt-1 text-gold transition duration-300">
                  ↓
                </span>
              </summary>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft md:text-base">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
