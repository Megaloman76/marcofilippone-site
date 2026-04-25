import Section from "../ui/Section";
import Container from "../ui/Container";

export default function Value() {
  return (
    <Section>
      <Container>

        <h2 className="text-3xl font-semibold mb-6">
          La sicurezza non è un problema tecnico
        </h2>

        <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
          Nelle organizzazioni complesse, il rischio informatico è una variabile
          strutturale. Senza governance, genera inefficienza operativa,
          perdita di controllo e aumento dell’esposizione.
        </p>

      </Container>
    </Section>
  );
}