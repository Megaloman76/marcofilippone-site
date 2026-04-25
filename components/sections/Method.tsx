import Section from "../ui/Section";
import Container from "../ui/Container";

export default function Method() {
  const steps = ["Analisi", "Strategia", "Implementazione", "Monitoraggio"];

  return (
    <Section>
      <Container>

        <h2 className="text-3xl font-semibold mb-12">
          Un approccio strutturato
        </h2>

        <div className="grid md:grid-cols-4 gap-8 text-gray-400">
          {steps.map((step, i) => (
            <div key={step}>
              <div className="text-sm text-gray-600 mb-2">
                0{i + 1}
              </div>
              <div className="text-white text-lg">{step}</div>
            </div>
          ))}
        </div>

      </Container>
    </Section>
  );
}