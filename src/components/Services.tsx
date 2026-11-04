import { highlightServices } from "@/lib/site";

export function Services() {
  return (
    <section id="servicos" className="bg-paper py-10 md:py-14">
      <div className="section-pad mx-auto max-w-6xl">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {highlightServices.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="service-card group block"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-500"
              />
              <div className="relative z-10 flex h-full min-h-[220px] items-end p-4">
                <span className="text-base font-semibold tracking-wide text-white uppercase">
                  {item.title}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
