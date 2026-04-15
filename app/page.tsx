import About from "./_components/sections/About";
import FAQ from "./_components/sections/FAQ";
import FinalCTA from "./_components/sections/FinalCTA";
import Hero from "./_components/sections/Hero";
import Process from "./_components/sections/Process";
import Services from "./_components/sections/Services";
import Testimonials from "./_components/sections/Testimonials";
import TrustStrip from "./_components/sections/TrustStrip";
import WorkTeaser from "./_components/sections/WorkTeaser";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <WorkTeaser />
      <Services />
      <Process />
      <About />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
