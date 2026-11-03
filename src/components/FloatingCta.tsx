import { site } from "@/lib/site";

export function FloatingCta() {
  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col gap-2 md:right-6 md:bottom-6">
      <a
        href={site.whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-[#1f6b4a] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:bg-[#18553b]"
        aria-label="Falar no WhatsApp"
      >
        WhatsApp
      </a>
      <a
        href={site.phone.href}
        className="rounded-full bg-forest-deep px-5 py-3 text-center text-sm font-semibold text-paper shadow-lg shadow-black/20 transition hover:bg-ink"
        aria-label={`Ligar para ${site.phone.display}`}
      >
        Ligar 24h
      </a>
    </div>
  );
}
