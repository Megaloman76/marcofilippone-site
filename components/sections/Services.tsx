import Section from "../ui/Section";
import Container from "../ui/Container";

export default function Services() {
  const items = [
    "Cybersecurity Governance",
    "Risk Management",
    "Compliance (NIS2, ISO 27001)",
    "Software Engineering",
  ];

  return (
    <Section>
      <Container>

        <h2 className="text-3xl font-semibold mb-12">
          Aree di intervento
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item}
              className="bg-[#121316] p-6 rounded-xl border border-gray-800 hover:bg-[#1b1e24] transition"
            >
              <h3 className="text-lg">{item}</h3>
            </div>
          ))}
        </div>

      </Container>
    </Section>
  );
}