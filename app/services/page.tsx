export default function Services() {
  return (
    <main className="bg-[#0B0B0C] text-white py-32">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-4xl font-semibold mb-12">Servizi</h1>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            "Cybersecurity Governance",
            "Risk Management",
            "Compliance NIS2 / ISO 27001"
			"Software Engineering"
          ].map((item) => (
            <div key={item} className="bg-[#121316] p-8 rounded-2xl border border-gray-800">
              <h3 className="text-xl">{item}</h3>
            </div>
          ))}

        </div>

      </div>
    </main>
  );
}