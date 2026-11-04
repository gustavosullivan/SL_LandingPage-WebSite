import { Logo } from "@/components/Logo";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-paper">
      <div className="section-pad mx-auto flex max-w-6xl flex-col gap-10 py-14 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <Logo className="h-8 w-8 text-gold-soft" />
            <p className="font-display text-3xl font-semibold">São Luiz</p>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-paper/70">
            Funerária em Passo Fundo/RS. Planos Prev e Plus, cremação imediata e
            cremação pet. {site.hoursLabel}.
          </p>
        </div>

        <div className="text-sm text-paper/65 md:text-right">
          <p>{site.address.full}</p>
          <p className="mt-2">
            <a href={site.phone.href} className="hover:text-paper">
              {site.phone.display}
            </a>
            {" · "}
            <a href={site.url} className="hover:text-paper">
              www.lucianocogo.com.br
            </a>
          </p>
          <p className="mt-4 text-xs text-paper/45">
            © {site.foundedYear}–2026 {site.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
