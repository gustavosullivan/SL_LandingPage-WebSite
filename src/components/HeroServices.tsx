const tiles = [
  {
    href: "#servicos",
    title: "Cerimônias",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80",
  },
  {
    href: "#planos",
    title: "Planos de Assistência Funeral",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    href: "#cremacao",
    title: "Cremação",
    image:
      "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    href: "#pet",
    title: "Serviços PET",
    image:
      "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    href: "#planos",
    title: "Urnas",
    image:
      "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    href: "#servicos",
    title: "Todos os serviços",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486af76?auto=format&fit=crop&w=1200&q=80",
  },
] as const;

export function HeroServices() {
  return (
    <section id="servicos-destaque" className="bg-[#f3f1ea]">
      <div className="mx-auto grid max-w-6xl gap-1 p-1 sm:grid-cols-2 lg:grid-cols-3">
        {tiles.map((tile) => (
          <a
            key={tile.title}
            href={tile.href}
            className="group relative block min-h-[240px] overflow-hidden md:min-h-[280px]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('${tile.image}')` }}
              aria-hidden
            />
            <div className="absolute inset-0 bg-navy-deep/25 transition group-hover:bg-navy-deep/35" />
            <div className="absolute inset-x-0 top-0 bg-navy/90 px-4 py-3 text-center">
              <span className="text-sm font-semibold tracking-wide text-paper md:text-base">
                {tile.title}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
