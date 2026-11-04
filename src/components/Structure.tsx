"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/estrutura/fachada.jpg",
    alt: "Fachada da Funerária São Luiz em Passo Fundo",
    label: "Fachada",
  },
  {
    src: "/estrutura/recepcao-1.png",
    alt: "Recepção acolhedora da São Luiz",
    label: "Recepção",
  },
  {
    src: "/estrutura/recepcao-2.png",
    alt: "Área de espera da Funerária São Luiz",
    label: "Acolhimento",
  },
  {
    src: "/estrutura/sala-atendimento.png",
    alt: "Sala de atendimento personalizado",
    label: "Atendimento",
  },
  {
    src: "/estrutura/loja-vestuario.jpg",
    alt: "Loja com vestuário e ornamentação",
    label: "Loja",
  },
  {
    src: "/estrutura/showroom-urnas-1.jpg",
    alt: "Showroom de urnas da São Luiz",
    label: "Showroom",
  },
  {
    src: "/estrutura/showroom-urnas-2.png",
    alt: "Variedade de urnas disponíveis",
    label: "Urnas",
  },
  {
    src: "/estrutura/showroom-urnas-3.png",
    alt: "Exposição de urnas com acabamento especial",
    label: "Opções",
  },
  {
    src: "/estrutura/frota.jpg",
    alt: "Frota própria da Funerária São Luiz",
    label: "Frota 24h",
  },
] as const;

const highlights = [
  "Atendimento humanizado, com empatia e clareza em cada etapa",
  "Ambiente pensado para acolher famílias com conforto e privacidade",
  "Estrutura completa: recepção, sala de atendimento, loja e showroom",
  "Variedade de urnas e ornamentação para homenagens dignas",
  "Frota própria e plantão 24 horas em Passo Fundo",
] as const;

export function Structure() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [paused]);

  const goTo = (next: number) => {
    setIndex((next + slides.length) % slides.length);
  };

  return (
    <section id="estrutura" className="bg-paper py-24 md:py-32">
      <div className="section-pad mx-auto max-w-6xl">
        <p className="text-xs font-semibold tracking-[0.24em] text-sky uppercase">
          Conheça nosso espaço
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight font-semibold text-ink md:text-5xl">
          Nossa estrutura
        </h2>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div
            className="relative overflow-hidden border border-[var(--line)] bg-mist shadow-[0_24px_60px_rgba(12,58,102,0.12)]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              {slides.map((slide, i) => (
                <div
                  key={slide.src}
                  className={`absolute inset-0 transition-all duration-700 ease-out ${
                    i === index
                      ? "scale-100 opacity-100"
                      : "pointer-events-none scale-105 opacity-0"
                  }`}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover"
                    priority={i === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/55 via-transparent to-transparent" />
                </div>
              ))}

              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-5">
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] text-gold-soft uppercase">
                    São Luiz
                  </p>
                  <p className="mt-1 font-display text-2xl font-semibold text-paper">
                    {slides[index].label}
                  </p>
                </div>
                <p className="rounded-full bg-paper/15 px-3 py-1 text-xs font-semibold text-paper backdrop-blur-sm">
                  {index + 1} / {slides.length}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 border-t border-[var(--line)] bg-paper px-4 py-3">
              <button
                type="button"
                onClick={() => goTo(index - 1)}
                className="rounded-full border border-navy/20 px-4 py-2 text-sm font-semibold text-navy transition hover:bg-mist"
                aria-label="Foto anterior"
              >
                ←
              </button>

              <div className="flex flex-1 items-center justify-center gap-2 overflow-x-auto py-1">
                {slides.map((slide, i) => (
                  <button
                    key={slide.src}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Ir para ${slide.label}`}
                    className={`h-2.5 rounded-full transition-all ${
                      i === index
                        ? "w-8 bg-navy"
                        : "w-2.5 bg-navy/25 hover:bg-navy/50"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => goTo(index + 1)}
                className="rounded-full border border-navy/20 px-4 py-2 text-sm font-semibold text-navy transition hover:bg-mist"
                aria-label="Próxima foto"
              >
                →
              </button>
            </div>

            <div className="absolute top-0 left-0 h-1 w-full bg-navy/10">
              <div
                key={index}
                className="h-full bg-gold"
                style={{
                  animation: paused ? "none" : "structureProgress 4.2s linear forwards",
                  width: paused ? `${((index + 1) / slides.length) * 100}%` : undefined,
                }}
              />
            </div>
          </div>

          <div>
            <p className="text-base leading-relaxed text-ink-soft md:text-lg">
              Nossa estrutura foi pensada para acolher famílias com respeito,
              privacidade e conforto — especialmente em um dos momentos mais
              difíceis da vida: a perda de um ente querido.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-soft md:text-lg">
              Da recepção ao showroom, cada detalhe do espaço da Funerária São Luiz
              reforça um atendimento de qualidade, humano e presente, para que
              você se sinta seguro e bem cuidado.
            </p>

            <ul className="mt-8 space-y-3.5">
              {highlights.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-ink md:text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#contato"
                className="rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-paper transition hover:bg-navy-deep"
              >
                Conhecer pessoalmente
              </a>
              <a
                href="#planos"
                className="rounded-full border border-navy/25 px-6 py-3.5 text-sm font-medium text-navy transition hover:bg-mist"
              >
                Ver planos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
