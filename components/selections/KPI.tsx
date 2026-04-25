import Container from "../ui/Container";
import Section from "../ui/Section";
import Card from "../ui/Card";

export default function KPI() {
  const data = [
    { label: "Effectiveness Score", value: "82%" },
    { label: "Controls Assessed", value: "124" },
    { label: "Low Effectiveness", value: "9" },
    { label: "Evidence Coverage", value: "76%" },
  ];

  return (
    <Section>
      <Container>
        <div className="grid md:grid-cols-4 gap-6">
          {data.map((item) => (
            <Card key={item.label}>
              <div className="text-sm text-gray-400">{item.label}</div>
              <div className="text-3xl font-semibold mt-3">
                {item.value}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
