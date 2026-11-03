import { Contact } from "@/components/Contact";
import { Cremation } from "@/components/Cremation";
import { Differentials } from "@/components/Differentials";
import { Faq } from "@/components/Faq";
import { FloatingCta } from "@/components/FloatingCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PetCremation } from "@/components/PetCremation";
import { Plans } from "@/components/Plans";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Plans />
        <Cremation />
        <PetCremation />
        <Differentials />
        <Contact />
        <Faq />
      </main>
      <Footer />
      <FloatingCta />
    </>
  );
}
