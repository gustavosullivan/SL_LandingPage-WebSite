import { services } from "@/lib/site";

export function Services() {
  return (
    <section id="servicos" className="bg-paper py-24 md:py-32">
      <div className="section-pad mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.24em] text-leaf">
          O que fazemos
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight font-semibold text-ink md:text-5xl">
          Serviços funerários com acolhimento e organização
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
          Em Passo Fundo, a Funerária São Luiz cuida de cada etapa com respeito —
          para que a família possa se despedir com tranquilidade.
        </p>

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => (
            <article key={item.title} className="border-t border-[var(--line)] pt-6">
              <span className="font-display text-3xl text-brass">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft md:text-base">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
