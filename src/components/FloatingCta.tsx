import { site } from "@/lib/site";

export function FloatingCta() {
  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col items-end gap-3 md:right-6 md:bottom-6">
      <a
        href={site.whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 transition hover:scale-105 hover:bg-[#1ebe57]"
        aria-label="Falar no WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden>
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.86 11.86 0 0 0 5.74 1.46h.01c6.54 0 11.88-5.34 11.88-11.9 0-3.18-1.24-6.16-3.41-8.43ZM12.05 21.75h-.01a9.84 9.84 0 0 1-5.02-1.38l-.36-.21-3.74.98 1-3.64-.24-.37a9.82 9.82 0 0 1-1.51-5.24c0-5.43 4.42-9.85 9.86-9.85 2.63 0 5.1 1.02 6.96 2.88a9.8 9.8 0 0 1 2.88 6.97c0 5.43-4.42 9.84-9.84 9.84Zm5.4-7.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
        </svg>
      </a>
      <a
        href={site.phone.href}
        className="rounded-full bg-navy px-4 py-2.5 text-sm font-semibold text-paper shadow-lg shadow-black/20 transition hover:bg-navy-deep"
        aria-label={`Ligar para ${site.phone.display}`}
      >
        Ligar 24h
      </a>
    </div>
  );
}
