"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    src: "/estrutura/fachada-capa.jpg",
    alt: "Fachada da Funerária São Luiz em Passo Fundo",
    label: "Fachada",
  },
  {
    src: "/estrutura/recepcao-1.jpg",
    alt: "Recepção da Funerária São Luiz",
    label: "Recepção",
  },
  {
    src: "/estrutura/recepcao-2.jpg",
    alt: "Entrada da Funerária São Luiz",
    label: "Entrada",
  },
  {
    src: "/estrutura/sala-atendimento.jpg",
    alt: "Sala de atendimento da Funerária São Luiz",
    label: "Atendimento",
  },
  {
    src: "/estrutura/urnas.jpg",
    alt: "Urnas da Funerária São Luiz",
    label: "Urnas",
  },
  {
    src: "/estrutura/espera.jpg",
    alt: "Sala de espera da Funerária São Luiz",
    label: "Espera",
  },
] as const;

const layers = [
  { rotate: 0, x: "0%", y: "0%", scale: 0.9, z: 30 },
  { rotate: 1, x: "7%", y: "2%", scale: 0.9, z: 20 },
  { rotate: -1, x: "-7%", y: "3%", scale: 0.9, z: 10 },
] as const;

const highlights = [
  "Atendimento humanizado, com empatia e clareza em cada etapa",
  "Ambiente pensado para acolher famílias com conforto e privacidade",
  "Recepção e sala de atendimento para conversar com calma",
  "Variedade de urnas e ornamentação para homenagens dignas",
  "Plantão 24 horas no Centro de Passo Fundo",
] as const;

export function Structure() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => {
        const jump = 1 + Math.floor(Math.random() * (slides.length - 1));
        return (current + jump) % slides.length;
      });
    }, 2000);
    return () => window.clearInterval(timer);
  }, []);

  const goTo = (next: number) => {
    setIndex((next + slides.length) % slides.length);
  };

  return (
    <section id="estrutura" className="bg-paper pt-4 pb-24 md:pt-6 md:pb-32">
      <div className="section-pad mx-auto max-w-6xl">
        <p className="font-display text-3xl font-semibold text-navy md:text-4xl">
          Conheça nosso espaço
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight font-semibold text-ink md:text-5xl">
          Nossa estrutura
        </h2>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="relative mx-auto aspect-[4/3] w-full max-w-xl">
              {slides.map((slide, i) => {
                const depth = (i - index + slides.length) % slides.length;
                const layer = depth < layers.length ? layers[depth] : null;
                const cover = i === 0;

                return (
                  <button
                    key={slide.src}
                    type="button"
                    aria-label={slide.label}
                    onClick={() => setIndex(i)}
                    className={`absolute inset-0 overflow-hidden border-[6px] border-paper bg-mist shadow-[0_22px_50px_rgba(12,58,102,0.16)] transition-all duration-700 ease-out ${
                      layer ? "" : "pointer-events-none opacity-0"
                    }`}
                    style={
                      layer
                        ? {
                            transform: `translate(${layer.x}, ${layer.y}) rotate(${layer.rotate}deg) scale(${layer.scale})`,
                            zIndex: layer.z,
                            opacity: 1,
                          }
                        : { zIndex: 0, opacity: 0 }
                    }
                  >
                    {cover ? (
                      <span
                        aria-hidden
                        className="absolute inset-0 scale-110 bg-cover bg-center blur-md"
                        style={{ backgroundImage: `url(${slide.src})` }}
                      />
                    ) : null}
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className={`absolute inset-0 h-full w-full ${cover ? "object-contain" : "object-cover"}`}
                    />
                    {depth === 0 ? (
                      <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/45 to-transparent px-5 pt-16 pb-5 text-left">
                        <span className="block text-xs font-semibold tracking-[0.2em] text-gold-soft uppercase">
                          São Luiz
                        </span>
                        <span className="mt-1 block font-display text-2xl font-semibold text-paper">
                          {slide.label}
                        </span>
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </div>

            <div className="mx-auto mt-6 flex max-w-md items-center justify-between gap-3">
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
                      i === index ? "w-8 bg-navy" : "w-2.5 bg-navy/25 hover:bg-navy/50"
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

            <div className="mx-auto mt-3 h-1 max-w-md overflow-hidden bg-navy/10">
              <div key={index} className="structure-progress h-full bg-gold" />
            </div>
          </div>

          <div>
            <p className="text-base leading-relaxed text-ink-soft md:text-lg">
              Nossa estrutura foi pensada para acolher famílias com respeito,
              privacidade e conforto — especialmente em um dos momentos mais
              difíceis da vida: a perda de um ente querido.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-soft md:text-lg">
              Cada detalhe do espaço da Funerária São Luiz reforça um atendimento
              de qualidade, humano e presente, para que você se sinta seguro e bem cuidado.
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
