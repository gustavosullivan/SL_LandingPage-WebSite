import { Contact } from "@/components/Contact";
import { Differentials } from "@/components/Differentials";
import { Faq } from "@/components/Faq";
import { FloatingCta } from "@/components/FloatingCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Plan } from "@/components/Plan";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Plan />
        <Differentials />
        <Contact />
        <Faq />
      </main>
      <Footer />
      <FloatingCta />
    </>
  );
}
