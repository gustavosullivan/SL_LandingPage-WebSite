"use client";

import { useState } from "react";
import { Logo } from "@/components/Logo";
import { site } from "@/lib/site";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#estrutura", label: "Estrutura" },
  { href: "#planos", label: "Planos" },
  { href: "#cremacao", label: "Cremação" },
  { href: "#pet", label: "Pet" },
  { href: "#contato", label: "Fale Conosco" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-paper/95 backdrop-blur-md">
      <div className="section-pad mx-auto flex max-w-6xl items-center justify-between py-3.5 md:py-4">
        <a href="#topo" className="flex items-center gap-2.5 text-navy" onClick={() => setOpen(false)}>
          <Logo className="h-9 w-9 text-navy" />
          <span className="flex flex-col leading-none">
            <span className="text-[1.35rem] font-bold tracking-tight text-navy md:text-[1.55rem]">
              SÃO LUIZ
            </span>
            <span className="text-[0.65rem] tracking-[0.14em] text-ink-soft uppercase">
              serviços funerários
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-navy md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-sky">
              {link.label}
            </a>
          ))}
          <a
            href={site.phone.href}
            className="rounded-full bg-navy px-4 py-2 text-sm font-semibold text-paper transition hover:bg-navy-deep"
          >
            {site.phone.display}
          </a>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-navy md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="flex w-6 flex-col gap-1.5">
            <span className={`h-0.5 w-full bg-navy transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-full bg-navy transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-full bg-navy transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-[var(--line)] bg-paper px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-4 text-base font-medium text-navy">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href={site.phone.href} className="font-semibold text-sky" onClick={() => setOpen(false)}>
              Ligar {site.phone.display}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
