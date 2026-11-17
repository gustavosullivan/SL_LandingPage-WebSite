import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-paper">
      <div className="section-pad mx-auto max-w-6xl py-10">
        <div className="grid items-end gap-6 md:grid-cols-[1fr_auto_1fr]">
          <div className="flex flex-wrap items-center gap-3">
            <img
              src="/logo.png"
              alt="São Luiz Funerária"
              className="h-16 w-auto rounded-sm bg-white p-1"
            />
            <img
              src="/brand/infinity-memorial.png"
              alt="Infinity Memorial"
              className="h-16 w-16 rounded-sm bg-white object-contain p-1"
            />
          </div>
          <div className="text-center text-xs md:col-start-2">
            <p className="text-paper/70">Desenvolvido por Elo e Sully Tech</p>
            <p className="mt-1 text-paper/45">
              © {site.foundedYear}–2026 {site.name}, Elo e Sully Tech. Todos os direitos
              reservados.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-start gap-3 md:justify-end">
            <img src="/brand/elo-badge.png" alt="Elo Tecnologia" className="h-14 w-auto" />
            <img src="/brand/sully-badge.png" alt="Sully Tech" className="h-16 w-auto" />
          </div>
        </div>
      </div>
    </footer>
  );
}
