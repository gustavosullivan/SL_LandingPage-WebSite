import { Logo } from "@/components/Logo";
import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="section-pad mx-auto flex max-w-6xl items-center justify-between py-5">
        <a href="#topo" className="flex items-center gap-2.5 text-paper">
          <Logo className="h-8 w-8 text-gold-soft" />
          <span className="flex flex-col leading-none">
            <span className="text-[0.65rem] font-semibold tracking-[0.22em] uppercase text-gold-soft">
              Funerária
            </span>
            <span className="font-display text-2xl font-semibold tracking-tight md:text-[1.7rem]">
              São Luiz
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-paper/85 lg:flex">
          <a href="#servicos" className="transition hover:text-paper">
            Serviços
          </a>
          <a href="#planos" className="transition hover:text-paper">
            Planos
          </a>
          <a href="#cremacao" className="transition hover:text-paper">
            Cremação
          </a>
          <a href="#pet" className="transition hover:text-paper">
            Pet
          </a>
          <a href="#contato" className="transition hover:text-paper">
            Contato
          </a>
        </nav>

        <a
          href={site.phone.href}
          className="rounded-full bg-paper/95 px-4 py-2 text-sm font-semibold text-navy-deep transition hover:bg-paper"
        >
          Ligar 24h
        </a>
      </div>
    </header>
  );
}
