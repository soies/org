import About from "@/components/about";
import { EventSection } from "@/components/event-section";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <About />
      <EventSection />
    </main>
  );
}
