import { site } from "@/lib/site";

export function FloatingCta() {
  return (
    <a
      href={site.whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-lg shadow-black/25 transition hover:scale-105 md:right-6 md:bottom-6"
      aria-label="Falar no WhatsApp"
      title="WhatsApp"
    >
      ✆
    </a>
  );
}
