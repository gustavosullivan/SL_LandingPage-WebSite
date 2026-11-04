import { testimonials } from "@/lib/site";

export function Testimonials() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="section-pad mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-navy md:text-4xl">
            O que nossos clientes falam sobre nós
          </h2>
          <p className="mt-4 text-ink-soft">
            Confira alguns depoimentos sobre nossos serviços e atendimentos:
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote
              key={item.name}
              className="border border-[var(--line)] bg-mist/50 p-6 md:p-7"
            >
              <p className="text-sm leading-relaxed text-ink-soft md:text-base">
                “{item.text}”
              </p>
              <footer className="mt-5 font-condensed text-xs tracking-[0.16em] font-semibold text-navy uppercase">
                {item.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
