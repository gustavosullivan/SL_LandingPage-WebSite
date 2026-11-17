"use client";

import { useState } from "react";
import { faqs } from "@/lib/site";

export function Faq() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [picked, setPicked] = useState<number | null>(null);
  const current = picked === null ? null : faqs[picked];

  return (
    <section id="faq" className="scroll-mt-28 bg-paper py-16 md:py-24">
      <div className="section-pad mx-auto max-w-6xl">
        <p className="text-xs font-semibold tracking-[0.24em] text-sky uppercase">
          Perguntas frequentes
        </p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl leading-tight font-semibold text-navy md:text-5xl">
          Dúvidas sobre planos, cremação e atendimento
        </h2>

        <div className="relative mt-8 max-w-3xl">
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="faq-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex w-full items-center justify-between rounded-full bg-navy px-5 py-3.5 text-left text-paper"
          >
            <span className="text-sm font-semibold">
              {current ? current.question : "Clique para ver as dúvidas"}
            </span>
            <span
              className={`text-lg text-gold-soft transition duration-300 ${menuOpen ? "rotate-45" : ""}`}
              aria-hidden
            >
              +
            </span>
          </button>

          {menuOpen ? (
            <div
              id="faq-menu"
              role="menu"
              className="offer-swap absolute z-20 mt-2 w-full overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-paper shadow-[0_18px_40px_rgba(12,58,102,0.12)]"
            >
              {faqs.map((item, index) => {
                const on = picked === index;
                return (
                  <button
                    key={item.question}
                    type="button"
                    role="menuitem"
                    aria-pressed={on}
                    onClick={() => {
                      setPicked(index);
                      setMenuOpen(false);
                    }}
                    className={`block w-full border-t border-[var(--line)] px-5 py-3 text-left text-sm font-semibold first:border-t-0 ${
                      on ? "bg-navy text-paper" : "text-navy hover:bg-mist"
                    }`}
                  >
                    <span className={on ? "text-gold-soft" : "text-sky"}>0{index + 1}</span>
                    <span className="ml-2">{item.question}</span>
                  </button>
                );
              })}
            </div>
          ) : null}
        </div>

        {current && picked !== null ? (
          <div key={current.question} className="offer-swap mt-4 max-w-3xl rounded-[1.5rem] bg-navy px-6 py-6 text-paper">
            <p className="font-display text-2xl font-semibold text-gold-soft">0{picked + 1}</p>
            <h3 className="mt-2 font-display text-2xl leading-snug font-semibold md:text-3xl">
              {current.question}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-paper/80 md:text-base">{current.answer}</p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
