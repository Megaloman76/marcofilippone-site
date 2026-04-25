import Button from "../ui/Button";
import Container from "../ui/Container";

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center">

      {/* IMAGE */}
      <img
        src="/hero.jpg"
        alt="Cybersecurity Strategy"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />

      <Container>
        <div className="relative z-10 max-w-3xl">

          <h1 className="text-5xl md:text-7xl font-semibold leading-tight mb-6">
            CyberSecurity Strategy
            <br />
            & Software Engineering
          </h1>

          <p className="text-lg text-gray-300 mb-8">
            Supporto aziende nella gestione del rischio informatico,
            nella conformità normativa e nella costruzione di modelli
            di sicurezza realmente governabili.
          </p>

          <div className="flex gap-4">
            <Button>Contattami</Button>
            <Button variant="secondary">Scopri i servizi</Button>
          </div>

        </div>
      </Container>
    </section>
  );
}