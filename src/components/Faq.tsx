import { faqs } from "@/lib/site";

export function Faq() {
  return (
    <section id="faq" className="bg-mist py-20 md:py-28">
      <div className="section-pad mx-auto max-w-3xl">
        <p className="font-condensed text-xs tracking-[0.24em] text-copper uppercase">
          Perguntas frequentes
        </p>
        <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">
          Dúvidas sobre planos, cremação e atendimento
        </h2>

        <div className="mt-10 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {faqs.map((item) => (
            <details key={item.question} className="faq-item group py-5">
              <summary className="flex items-start justify-between gap-4">
                <span className="text-lg font-semibold text-navy md:text-xl">
                  {item.question}
                </span>
                <span className="faq-chevron mt-1 text-copper transition duration-300">
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
