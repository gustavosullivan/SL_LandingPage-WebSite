const cards = [
  {
    title: "Cremação",
    text: "Imediata, com valores claros",
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
    title: "Urnas",
    text: "Showroom completo",
    href: "#estrutura",
    image: "/estrutura/showroom-urnas-1.jpg",
  },
  {
    title: "Planos",
    text: "Prev e Plus",
    href: "#planos",
    image: "/estrutura/sala-atendimento.png",
  },
  {
    title: "Translado",
    text: "Frota própria, 24 horas",
    href: "#servicos",
    image: "/estrutura/frota.jpg",
  },
  {
    title: "Todos os serviços",
    text: "Ver a São Luiz por completo",
    href: "#servicos",
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1000&q=80",
    focus: "object-[center_40%]",
    featured: true,
  },
] as const;

export function IntroBand() {
  return (
    <section id="servicos" className="bg-paper py-14 md:py-20">
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
                  {"featured" in card && card.featured ? "Ver tudo" : "Serviço"}
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
