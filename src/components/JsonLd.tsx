import { faqs, site } from "@/lib/site";

export function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "FuneralHome",
    name: site.name,
    alternateName: [...site.alternateNames],
    legalName: site.legalName,
    url: site.url,
    image: `${site.url}/logo.png`,
    logo: `${site.url}/logo.png`,
    description: site.description,
    telephone: site.phone.e164,
    email: site.email,
    foundingDate: String(site.foundedYear),
    taxID: site.cnpj,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.postalCode,
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: site.region.split(",").map((city) => ({
      "@type": "City",
      name: city.replace(" e cidades vizinhas.", "").trim(),
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços da Funerária São Luiz",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cremação imediata em Passo Fundo" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cremação pet em Passo Fundo" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Plano funeral" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Plano cremação" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cremação imediata" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Translado funerário Brasil e exterior" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Funerária 24 horas em Passo Fundo" } },
      ],
    },
    sameAs: [site.social.instagram, site.social.facebook],
    priceRange: "$$",
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
