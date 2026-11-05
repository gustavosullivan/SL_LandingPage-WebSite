import { site } from "@/lib/site";

const marks = [
  { value: String(site.foundedYear), label: "em Passo Fundo" },
  { value: "24h", label: "atendimento contínuo" },
  { value: "Prev e Plus", label: "planos da casa" },
] as const;

export function About() {
  return (
    <section id="sobre" className="bg-mist py-20 md:py-28">
      <div className="section-pad mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative overflow-hidden border border-[var(--line)]">
          <img
            src="/estrutura/recepcao-1.png"
            alt="Recepção da Funerária São Luiz"
            className="aspect-[4/5] h-full w-full object-cover"
          />
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.24em] text-sky uppercase">Sobre nós</p>
          <h2 className="mt-4 font-display text-4xl leading-tight font-semibold text-navy md:text-5xl">
            Uma casa presente desde {site.foundedYear}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            A Funerária São Luiz acompanha famílias de Passo Fundo há mais de duas décadas.
            O trabalho é de presença: acolher com respeito, explicar com clareza e conduzir
            cada etapa sem pressa.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            A equipe fica disponível a qualquer hora. Da organização do funeral aos planos
            preventivos e à cremação — também para pets —, o cuidado segue o mesmo: a família
            amparada em um momento difícil.
          </p>

          <dl className="mt-10 grid gap-6 sm:grid-cols-3">
            {marks.map((mark) => (
              <div key={mark.value} className="border-t border-[var(--line)] pt-4">
                <dt className="font-display text-2xl font-semibold text-navy">{mark.value}</dt>
                <dd className="mt-1 text-sm text-ink-soft">{mark.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
