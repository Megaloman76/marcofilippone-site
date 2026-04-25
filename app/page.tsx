import Hero from "@/components/sections/Hero";

export default function Home() {
  const data = {
    headline: "CyberSecurity Strategy & Software Engineering",
    subheadline:
      "Supporto aziende nella gestione del rischio informatico e nella costruzione di modelli di sicurezza governabili.",
    heroImage: {
      asset: { url: "/hero.jpg" },
    },
  };

  return (
    <main>
      <Hero data={data} />
    </main>
  );
}