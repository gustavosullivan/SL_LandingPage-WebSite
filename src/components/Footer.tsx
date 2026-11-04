import { Logo } from "@/components/Logo";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="section-pad mx-auto flex max-w-6xl flex-col gap-10 py-14 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <Logo className="h-8 w-8 text-copper" />
            <div>
              <p className="text-2xl font-bold tracking-wide uppercase">São Luiz</p>
              <p className="font-condensed text-[0.7rem] tracking-[0.14em] text-white/65 uppercase">
                serviços funerários
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
            Homenageando vidas com carinho e respeito em Passo Fundo desde{" "}
            {site.foundedYear}.
          </p>
        </div>

        <div className="text-sm text-white/65 md:text-right">
          <p>{site.address.full}</p>
          <p className="mt-2">
            <a href={site.phone.href} className="hover:text-copper">
              {site.phone.display}
            </a>
            {" · "}
            <a href={site.url} className="hover:text-copper">
              www.lucianocogo.com.br
            </a>
          </p>
          <p className="mt-4 text-xs text-white/45">
            © {site.foundedYear}–2026 {site.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
