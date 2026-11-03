import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="section-pad mx-auto flex max-w-6xl items-center justify-between py-5">
        <a href="#topo" className="group flex items-baseline gap-2 text-paper">
          <span className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
            São Luiz
          </span>
          <span className="hidden text-[0.7rem] uppercase tracking-[0.22em] text-brass-soft/90 sm:inline">
            Funerária
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-paper/85 md:flex">
          <a href="#servicos" className="transition hover:text-paper">
            Serviços
          </a>
          <a href="#plano" className="transition hover:text-paper">
            Plano
          </a>
          <a href="#contato" className="transition hover:text-paper">
            Contato
          </a>
        </nav>

        <a
          href={site.phone.href}
          className="rounded-full bg-paper/95 px-4 py-2 text-sm font-medium text-forest-deep transition hover:bg-paper"
        >
          Ligar agora
        </a>
      </div>
    </header>
  );
}
