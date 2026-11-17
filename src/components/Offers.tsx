"use client";

import { useState } from "react";
import {
  cremation,
  cremationPlan,
  funeralPlan,
  petCremation,
  site,
  supportServices,
} from "@/lib/site";

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden>
      <path
        d="M12 3.5 5.5 6.2v5.3c0 4.2 2.7 7.4 6.5 8.8 3.8-1.4 6.5-4.6 6.5-8.8V6.2L12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="m9.2 12.1 1.9 1.9 3.8-3.9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GuideIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden>
      <path
        d="M7 4.5h7.2L17.5 8v11.5H7V4.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M14.2 4.5V8h3.3" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9.5 12h5M9.5 15h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function TransferIcon() {
  return (
    <svg viewBox="0 0 48 24" className="h-7 w-auto" fill="none" aria-hidden>
      <path
        d="M3 15.5h11.5l2.2-4.2h4.8l1.6 4.2H28"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="8.5" cy="17.8" r="1.7" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="22.5" cy="17.8" r="1.7" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M32 14.5c3.8-1.2 7.4-3.4 10.5-6.5.2 3.2-.4 5.8-1.7 7.8H32.8L32 14.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M34.2 16h6.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const supportIcons = {
  seguros: ShieldIcon,
  auxilio: GuideIcon,
  translado: TransferIcon,
} as const;

export function Offers() {
  const [petPick, setPetPick] = useState(0);

  return (
    <section className="bg-mist pt-8 pb-16 md:pt-12 md:pb-24">
      <div className="section-pad mx-auto max-w-6xl">
        <h2
          id="planos"
          className="scroll-mt-28 max-w-2xl font-display text-4xl leading-tight font-semibold text-navy md:text-5xl"
        >
          Planos e serviços
        </h2>

        <p className="mt-3 max-w-2xl text-sm text-ink-soft md:text-base">
          Dois planos mensais separados. A cremação imediata é outro serviço, avulso.
        </p>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <div className="overflow-hidden border border-[var(--line)] bg-paper shadow-[0_16px_40px_rgba(12,58,102,0.06)]">
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[var(--line)] px-5 py-5 md:px-6">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-sky uppercase">Mensal</p>
                <h3 className="mt-2 font-display text-3xl font-semibold text-navy md:text-4xl">
                  {funeralPlan.name}
                </h3>
              </div>
              <div className="text-right">
                <p className="font-display text-3xl font-semibold text-navy md:text-4xl">
                  {funeralPlan.monthly}
                  <span className="ml-1 text-base font-medium text-ink-soft">por mês</span>
                </p>
              </div>
            </div>
            <div className="px-5 py-5 md:px-6">
              <p className="text-xs font-semibold tracking-[0.16em] text-ink/45 uppercase">
                O que está incluso
              </p>
              <ul className="mt-4 grid gap-2">
                {funeralPlan.benefits.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={site.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-paper transition hover:bg-navy-deep"
              >
                Quero o plano funeral
              </a>
            </div>
          </div>

          <div className="overflow-hidden border border-[var(--line)] bg-paper shadow-[0_16px_40px_rgba(12,58,102,0.06)]">
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[var(--line)] px-5 py-5 md:px-6">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-sky uppercase">Mensal</p>
                <h3 className="mt-2 font-display text-3xl font-semibold text-navy md:text-4xl">
                  {cremationPlan.name}
                </h3>
              </div>
              <div className="text-right">
                <p className="font-display text-3xl font-semibold text-navy md:text-4xl">
                  {cremationPlan.monthly}
                  <span className="ml-1 text-base font-medium text-ink-soft">por mês</span>
                </p>
              </div>
            </div>
            <div className="px-5 py-5 md:px-6">
              <p className="text-xs font-semibold tracking-[0.16em] text-ink/45 uppercase">
                O que está incluso
              </p>
              <ul className="mt-4 grid gap-2">
                {cremationPlan.benefits.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={site.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-paper transition hover:bg-navy-deep"
              >
                Quero o plano cremação
              </a>
            </div>
          </div>
        </div>

        <div
          id="cremacao"
          className="scroll-mt-28 relative mt-6 overflow-hidden bg-navy text-paper"
        >
          <div
            className="pointer-events-none absolute -top-16 -right-10 h-48 w-48 rounded-full bg-[var(--glow)] blur-3xl"
            aria-hidden
          />
          <div className="relative p-5 md:p-6">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-gold-soft uppercase">
                  Serviço avulso
                </p>
                <h3 className="mt-2 font-display text-3xl leading-none font-semibold md:text-4xl">
                  {cremation.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm text-paper/75 md:text-base">{cremation.note}</p>
              </div>
              <div className="text-right">
                <p className="text-xs tracking-[0.14em] text-paper/50 uppercase">Valor</p>
                <p className="font-display text-3xl font-semibold text-gold-soft md:text-4xl">
                  {cremation.cash}
                </p>
              </div>
            </div>

            <ul className="mt-5 grid gap-2 sm:grid-cols-3">
              {cremation.benefits.map((item) => (
                <li
                  key={item}
                  className="border border-paper/15 bg-navy-deep/40 px-4 py-3 text-sm text-paper/85"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-paper/10 pt-5">
              <div>
                <p className="text-xs font-semibold tracking-[0.16em] text-gold-soft uppercase">
                  Serviços adicionais
                </p>
                <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm text-paper/80">
                  {cremation.extras.map((extra) => (
                    <li key={extra.name}>
                      {extra.name}: <span className="font-semibold text-gold-soft">{extra.price}</span>
                      {"note" in extra && extra.note ? (
                        <span className="text-paper/50"> · {extra.note}</span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={site.phone.href}
                className="inline-flex items-center justify-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy-deep transition hover:bg-gold-soft"
              >
                Solicitar — {site.phone.display}
              </a>
            </div>
          </div>
        </div>

        <div id="pet" className="scroll-mt-28 relative mt-4 overflow-hidden bg-navy text-paper">
          <div
            className="pointer-events-none absolute -top-16 -left-10 h-48 w-48 rounded-full bg-[var(--glow)] blur-3xl"
            aria-hidden
          />
          <div className="relative p-5 md:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-display text-3xl leading-none font-semibold md:text-4xl">
                {petCremation.title}
              </h3>
              <a
                href={site.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy-deep transition hover:bg-gold-soft"
              >
                Falar no WhatsApp
              </a>
            </div>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-paper/75 md:text-base">
              Despedida digna e cuidadosa. Prazo de entrega: {petCremation.deliveryNote}.
            </p>

            <div className="mt-5 grid gap-2">
              {petCremation.options.map((option, index) => {
                const on = petPick === index;
                return (
                  <button
                    key={option.name}
                    type="button"
                    aria-pressed={on}
                    onClick={() => setPetPick(index)}
                    className={`price-cell px-4 py-3 text-left ${
                      on ? "bg-gold text-navy-deep" : "bg-navy-deep/55 hover:bg-navy-deep/80"
                    }`}
                  >
                    <span className="flex items-center justify-between gap-3">
                      <span className="text-sm font-medium">{option.name}</span>
                      <strong className="font-display text-2xl font-semibold">{option.price}</strong>
                    </span>
                    {option.note ? (
                      <span
                        className={`mt-1 block text-xs ${on ? "text-navy-deep/75" : "text-paper/60"}`}
                      >
                        {option.note}
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div id="atendimento-extra" className="scroll-mt-28 mt-6">
          <p className="text-xs font-semibold tracking-[0.18em] text-sky uppercase">
            Também cuidamos de
          </p>
          <h3 className="mt-2 font-display text-3xl font-semibold text-navy md:text-4xl">
            Seguros, auxílio e translado
          </h3>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {supportServices.map((item) => {
              const Icon = supportIcons[item.id as keyof typeof supportIcons];
              return (
                <article
                  key={item.id}
                  className="border border-[var(--line)] bg-paper p-5 shadow-[0_12px_28px_rgba(12,58,102,0.05)]"
                >
                  <div className="text-navy">
                    <Icon />
                  </div>
                  <h4 className="mt-4 font-display text-xl font-semibold text-navy">{item.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.text}</p>
                </article>
              );
            })}
          </div>
          <div className="mt-6 flex justify-center">
            <a
              href={site.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-paper transition hover:bg-navy-deep"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-2.2 2.2Z" />
              </svg>
              Entre em contato conosco no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
