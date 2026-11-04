import { Contact } from "@/components/Contact";
import { Cremation } from "@/components/Cremation";
import { Differentials } from "@/components/Differentials";
import { Faq } from "@/components/Faq";
import { FloatingCta } from "@/components/FloatingCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HelpBanner } from "@/components/HelpBanner";
import { Hero } from "@/components/Hero";
import { HeroServices } from "@/components/HeroServices";
import { IntroBand } from "@/components/IntroBand";
import { PetCremation } from "@/components/PetCremation";
import { Plans } from "@/components/Plans";
import { Services } from "@/components/Services";
import { Structure } from "@/components/Structure";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HeroServices />
        <IntroBand />
        <Services />
        <Structure />
        <Plans />
        <Cremation />
        <PetCremation />
        <Differentials />
        <Contact />
        <Faq />
        <HelpBanner />
      </main>
      <Footer />
      <FloatingCta />
    </>
  );
}
