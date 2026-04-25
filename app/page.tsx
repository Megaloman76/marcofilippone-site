export default function Home() {
  return (
    <main className="bg-[#0B0B0C] text-white">

      {/* HERO */}
      <section className="min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-6xl md:text-7xl font-semibold leading-tight mb-6">
            CyberSecurity
            <br />
            Strategy & Governance
          </h1>

          <p className="text-lg text-gray-400 max-w-xl mb-10">
            Supporto aziende strutturate nella gestione del rischio informatico,
            nella conformità normativa e nella costruzione di modelli di sicurezza governabili.
          </p>

          <div className="flex gap-4">
            <a href="/contact" className="bg-indigo-600 px-6 py-3 rounded-xl hover:bg-indigo-500 transition">
              Contattami
            </a>

            <a href="/services" className="border border-gray-700 px-6 py-3 rounded-xl hover:border-gray-500 transition">
              Servizi
            </a>
          </div>

        </div>
      </section>

      {/* VALUE */}
      <section className="py-32 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">
            Valuto l’efficacia reale dei controlli, non la loro presenza.
          </h2>

          <p className="text-gray-400">
            Non mi limito a introdurre strumenti o controlli. Definisco strutture decisionali,
            processi e architetture che permettono alla direzione di avere visibilità,
            controllo e capacità di intervento.
          </p>
        </div>
      </section>

      {/* KPI / CCIP */}
      <section className="py-32 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6">

          {[
            { label: "Effectiveness Score", value: "82%" },
            { label: "Controls Assessed", value: "124" },
            { label: "Low Effectiveness", value: "9" },
            { label: "Evidence Coverage", value: "76%" },
          ].map((kpi) => (
            <div key={kpi.label} className="bg-[#121316] p-8 rounded-2xl border border-gray-800">
              <div className="text-gray-400 text-sm">{kpi.label}</div>
              <div className="text-4xl font-semibold mt-3">{kpi.value}</div>
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-gray-800 text-center">
        <div className="max-w-3xl mx-auto px-6">

          <p className="text-xl mb-6">
            Se hai bisogno di strutturare o evolvere il tuo modello di sicurezza,
            possiamo analizzare insieme il contesto.
          </p>

          <a href="/contact" className="bg-indigo-600 px-8 py-4 rounded-xl text-lg hover:bg-indigo-500 transition">
            Contattami
          </a>

        </div>
      </section>

    </main>
  );
}