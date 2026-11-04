import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Cremation } from "@/components/Cremation";
import { Faq } from "@/components/Faq";
import { FloatingCta } from "@/components/FloatingCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HelpBanner } from "@/components/HelpBanner";
import { Hero } from "@/components/Hero";
import { PetCremation } from "@/components/PetCremation";
import { Plans } from "@/components/Plans";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Plans />
        <Cremation />
        <PetCremation />
        <Testimonials />
        <Contact />
        <Faq />
        <HelpBanner />
      </main>
      <Footer />
      <FloatingCta />
    </>
  );
}
