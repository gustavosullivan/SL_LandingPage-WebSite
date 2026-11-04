import type { Metadata } from "next";
import { Cormorant_Garamond, Great_Vibes, Outfit } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const keywords = [
  "funerária Passo Fundo",
  "Funerária São Luiz",
  "funerária São Luiz Passo Fundo",
  "São Luiz Prev",
  "São Luiz Plus",
  "plano funerário Passo Fundo",
  "cremação imediata Passo Fundo",
  "cremação pet Passo Fundo",
  "funerária 24 horas Passo Fundo",
  "casa de velório Passo Fundo",
];

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Funerária São Luiz | Passo Fundo/RS — Atendimento 24h",
    template: "%s | Funerária São Luiz Passo Fundo",
  },
  description: site.description,
  keywords,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.name,
    title: "Funerária São Luiz | Passo Fundo/RS — Atendimento 24h",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Funerária São Luiz | Passo Fundo/RS",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "funeral services",
  other: {
    "geo.region": "BR-RS",
    "geo.placename": "Passo Fundo",
    "geo.position": `${site.geo.lat};${site.geo.lng}`,
    ICBM: `${site.geo.lat}, ${site.geo.lng}`,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${outfit.variable} ${cormorant.variable} ${greatVibes.variable} h-full`}
    >
      <body className="min-h-full antialiased">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
