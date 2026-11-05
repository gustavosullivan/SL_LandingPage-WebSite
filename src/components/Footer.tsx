import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-paper">
      <div className="section-pad mx-auto flex max-w-6xl flex-col gap-10 py-14 md:flex-row md:items-end md:justify-between">
        <div>
          <img
            src="/logo.png"
            alt="São Luiz Funerária"
            className="h-16 w-auto rounded-sm bg-white p-1"
          />
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
            <a href={`mailto:${site.email}`} className="hover:text-paper">
              {site.email}
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
