import Container from "../ui/Container";
import Section from "../ui/Section";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <Section>
      <Container>
        <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-6">
          CyberSecurity Strategy & Governance
        </h1>

        <p className="text-lg text-gray-400 max-w-2xl mb-10">
          Supporto aziende strutturate nella gestione del rischio informatico,
          nella conformità normativa e nella costruzione di modelli di sicurezza governabili.
        </p>

        <div className="flex gap-4">
          <Button>Richiedi un confronto</Button>
          <Button variant="secondary">Approfondisci</Button>
        </div>
      </Container>
    </Section>
  );
}