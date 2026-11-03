import { services } from "@/lib/site";

export function Services() {
  return (
    <section id="servicos" className="bg-paper py-24 md:py-32">
      <div className="section-pad mx-auto max-w-6xl">
        <p className="text-xs font-semibold tracking-[0.24em] text-sky uppercase">
          O que fazemos
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight font-semibold text-ink md:text-5xl">
          Serviços funerários com acolhimento e preços claros
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
          Em Passo Fundo, a Funerária São Luiz organiza funeral, cremação e planos
          preventivos — aberta 24 horas no Centro da cidade.
        </p>

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => (
            <article key={item.title} className="border-t border-[var(--line)] pt-6">
              <span className="font-display text-3xl text-gold">
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
