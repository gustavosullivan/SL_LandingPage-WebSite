import { Logo } from "@/components/Logo";
import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-paper/95 backdrop-blur-sm">
      <div className="section-pad mx-auto flex max-w-6xl items-center justify-between py-3.5">
        <a href="#topo" className="flex items-center gap-3 text-navy">
          <Logo className="h-9 w-9 text-copper" />
          <span className="leading-tight">
            <span className="block text-xl font-bold tracking-wide uppercase">
              São Luiz
            </span>
            <span className="font-condensed text-[0.7rem] tracking-[0.14em] text-ink-soft uppercase">
              serviços funerários
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-navy lg:flex">
          <a href="#sobre" className="hover:text-copper">
            Sobre
          </a>
          <a href="#servicos" className="hover:text-copper">
            Serviços
          </a>
          <a href="#planos" className="hover:text-copper">
            Planos
          </a>
          <a href="#cremacao" className="hover:text-copper">
            Cremação
          </a>
          <a href="#pet" className="hover:text-copper">
            Pet
          </a>
          <a href="#contato" className="hover:text-copper">
            Fale Conosco
          </a>
        </nav>

        <a
          href={site.phone.href}
          className="rounded-sm bg-copper px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-copper-dark"
        >
          {site.phone.display}
        </a>
      </div>
    </header>
  );
}
