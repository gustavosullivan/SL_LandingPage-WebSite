const cards = [
  {
    title: "Cremação",
    text: "Serviço avulso R$ 3.300",
    href: "#cremacao",
    image:
      "https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Cremação pet",
    text: "Despedida digna",
    href: "#pet",
    image:
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1000&q=80",
    focus: "object-[72%_center]",
  },
  {
    title: "Nossa estrutura",
    text: "Conheça o espaço",
    href: "#estrutura",
    kicker: "Espaço",
    image: "/estrutura/recepcao-1.jpg",
  },
  {
    title: "Planos",
    text: "Funeral R$ 105 · cremação R$ 119",
    href: "#planos",
    image:
      "https://images.unsplash.com/photo-1435527173128-983b87201f4d?auto=format&fit=crop&w=1000&q=80",
    focus: "object-center",
  },
  {
    title: "Entre em contato",
    text: "Ligue ou chame no WhatsApp",
    href: "#contato",
    kicker: "Atendimento",
    image: "/estrutura/fachada-capa.jpg",
  },
  {
    title: "Sobre nós",
    text: "50 anos de história",
    href: "#sobre",
    kicker: "A casa",
    image: "/sobre-poster.jpg",
    featured: true,
  },
] as const;

export function IntroBand() {
  return (
    <section id="servicos" className="bg-paper pt-14 pb-4 md:pt-20 md:pb-6">
      <div className="section-pad mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {cards.map((card, index) => (
            <a
              key={card.title}
              href={card.href}
              className={`service-card group relative block overflow-hidden ${
                "featured" in card && card.featured ? "ring-1 ring-gold/80" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={card.image}
                alt=""
                className={`absolute inset-0 h-full w-full object-cover ${"focus" in card ? card.focus : ""}`}
              />
              <span className="service-card-shade absolute inset-0" aria-hidden />
              <span className="service-card-shine" aria-hidden />
              <span className="relative flex h-full flex-col justify-end p-4 text-paper md:p-5">
                <span className="text-[0.65rem] font-semibold tracking-[0.18em] text-gold-soft uppercase">
                  {"kicker" in card ? card.kicker : "Serviço"}
                </span>
                <span className="mt-1 font-display text-2xl leading-none font-semibold md:text-3xl">
                  {card.title}
                </span>
                <span className="mt-2 text-sm text-paper/85 md:max-h-0 md:overflow-hidden md:transition-all md:duration-500 md:group-hover:max-h-12">
                  {card.text}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
