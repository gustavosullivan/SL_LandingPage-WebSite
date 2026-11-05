"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

const menuLinks = [
  { href: "#sobre", label: "Sobre nós" },
  { href: "#estrutura", label: "Nossa estrutura" },
  { href: "#planos", label: "Planos Prev e Plus" },
  { href: "#cremacao", label: "Cremação" },
  { href: "#pet", label: "Cremação pet" },
  { href: "#contato", label: "Fale conosco" },
  { href: "#faq", label: "Perguntas frequentes" },
] as const;

function BrandIcon({
  href,
  src,
  label,
}: {
  href: string;
  src: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex transition hover:scale-105"
    >
      <img src={src} alt="" className="h-8 w-8" />
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [overHero, setOverHero] = useState(true);
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const update = () => {
      const hero = document.getElementById("topo");
      if (!hero) {
        setOverHero(window.scrollY < 180);
        return;
      }
      const headerHeight = rootRef.current?.offsetHeight ?? 86;
      setOverHero(window.scrollY < hero.offsetTop + hero.offsetHeight - headerHeight);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onPointer = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      ref={rootRef}
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ${
        overHero
          ? "border-b border-transparent bg-transparent shadow-none"
          : "border-b border-white/60 bg-white/45 shadow-[0_8px_30px_rgba(255,255,255,0.18)] backdrop-blur-xl"
      }`}
    >
      <div className="section-pad relative mx-auto flex h-[4.6rem] max-w-6xl items-center justify-between md:h-[5.4rem]">
        <button
          type="button"
          className="relative z-10 flex h-10 items-center gap-2 text-navy"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="flex w-6 flex-col gap-1.5">
            <span className={`h-0.5 w-full bg-navy transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-full bg-navy transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-full bg-navy transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
          <span className="hidden text-sm font-medium sm:inline">Menu</span>
        </button>

        <a
          href="#topo"
          className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
          onClick={() => setOpen(false)}
        >
          <img
            src="/logo-header.png"
            alt="São Luiz Funerária"
            className="h-12 w-auto sm:h-14 md:h-[4.4rem]"
          />
        </a>

        <div className="relative z-10 flex items-center gap-2 sm:gap-3">
          <span className="hidden items-center gap-1.5 text-[0.7rem] font-semibold tracking-[0.16em] text-navy uppercase sm:flex">
            Nossas redes
            <svg viewBox="0 0 24 12" className="h-3 w-6" aria-hidden="true">
              <path
                d="M1 6h20M16 1.5 21.5 6 16 10.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <BrandIcon
            href={site.whatsapp.href}
            src="/brand/whatsapp.svg"
            label="WhatsApp da Funerária São Luiz"
          />
          <BrandIcon
            href={site.social.instagram}
            src="/brand/instagram.svg"
            label="Instagram da Funerária São Luiz"
          />
          <BrandIcon
            href={site.social.facebook}
            src="/brand/facebook.svg"
            label="Facebook da Funerária São Luiz"
          />
        </div>
      </div>

      {open ? (
        <nav className="section-pad border-t border-white/50 bg-white/75 py-3 backdrop-blur-xl">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1">
            {menuLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-navy transition hover:bg-white/80"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
