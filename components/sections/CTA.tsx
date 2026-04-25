import Container from "../ui/Container";
import Button from "../ui/Button";

export default function CTA() {
  return (
    <section className="py-32 bg-[#0F1115] text-center">
      <Container>

        <p className="text-xl mb-6">
          Se devi strutturare o evolvere il tuo modello di sicurezza,
          possiamo analizzare insieme il contesto.
        </p>

        <Button>Contattami</Button>

      </Container>
    </section>
  );
}