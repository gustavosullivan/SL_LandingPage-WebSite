import { differentials } from "@/lib/site";

export function Differentials() {
  return (
    <section className="bg-mist py-24 md:py-32">
      <div className="section-pad mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.24em] text-leaf">
          Por que a São Luiz
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight font-semibold text-ink md:text-5xl">
          Confiança construída em mais de duas décadas
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {differentials.map((item) => (
            <article key={item.title} className="flex gap-5">
              <div className="mt-2 h-px w-10 shrink-0 bg-brass" />
              <div>
                <h3 className="font-display text-2xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft md:text-base">
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
