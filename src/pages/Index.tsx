import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import Services from "@/components/landing/Services";
import TargetClients from "@/components/landing/TargetClients";
import Differentials from "@/components/landing/Differentials";
import Results from "@/components/landing/Results";
import ObjectionBreaker from "@/components/landing/ObjectionBreaker";
import Process from "@/components/landing/Process";
import Testimonials from "@/components/landing/Testimonials";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

const Index = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Services />
      <TargetClients />
      <Differentials />
      <Results />
      <ObjectionBreaker />
      <Process />
      <Testimonials />
      <FinalCTA />
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default Index;
