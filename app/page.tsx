import Hero from "@/components/sections/Hero";
import Value from "@/components/sections/Value";
import Services from "@/components/sections/Services";
import Method from "@/components/sections/Method";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Value />
      <Services />
      <Method />
      <CTA />
    </main>
  );
}