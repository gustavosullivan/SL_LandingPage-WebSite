import { site } from "@/lib/site";

export function Hero() {
  return (
    <section id="topo" className="relative min-h-[78vh] overflow-hidden bg-navy-deep text-paper md:min-h-[88vh]">
      <div
        className="hero-media absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0,37,71,0.35) 0%, rgba(0,37,71,0.55) 100%), url('https://images.unsplash.com/photo-1490750967868-88aa4486af76?auto=format&fit=crop&w=2400&q=80')",
        }}
        aria-hidden
      />

      <div className="relative z-10 flex min-h-[78vh] flex-col items-center justify-center px-6 text-center md:min-h-[88vh]">
        <p className="reveal font-condensed text-sm tracking-[0.35em] text-white uppercase md:text-base">
          Desde {site.foundedYear}
        </p>
        <h1 className="reveal reveal-delay-1 mt-4 font-script text-[clamp(3.4rem,12vw,7rem)] leading-none text-white">
          {site.tagline}
        </h1>
        <a
          href="#servicos"
          className="reveal reveal-delay-2 mt-10 inline-flex items-center justify-center bg-copper px-8 py-3.5 text-sm font-semibold tracking-wide text-white uppercase transition hover:bg-copper-dark"
        >
          Todos os serviços
        </a>
      </div>
    </section>
  );
}
