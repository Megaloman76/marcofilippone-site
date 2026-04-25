export default function Home() {
  return (
    <main className="bg-[#0B0B0C] text-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-24">

        {/* HERO */}
        <section className="mb-32">
          <h1 className="text-5xl md:text-7xl font-semibold leading-tight mb-6">
            CyberSecurity Strategy - Software Engineering - Governance
          </h1>

          <p className="text-lg text-gray-400 max-w-2xl mb-10">
            Supporto aziende strutturate nella gestione del rischio informatico,
            nella conformità normativa e nella costruzione di modelli di sicurezza governabili.
          </p>

          <div className="flex gap-4">
            <button className="bg-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-500 transition-all duration-300">
              Richiedi un confronto
            </button>
            <button className="border border-gray-700 px-6 py-3 rounded-lg hover:border-gray-500 transition-all duration-300">
              Approfondisci
            </button>
          </div>
        </section>

        {/* IMPACT STATEMENT */}
        <section className="mb-32 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
            Valuto l’efficacia reale dei controlli, non la loro presenza.
          </h2>
        </section>

        {/* POSIZIONAMENTO */}
        <section className="mb-32 max-w-3xl">
          <p className="text-xl text-gray-300 leading-relaxed">
            Non mi limito a introdurre strumenti o controlli. Definisco strutture decisionali,
            processi e architetture che permettono alla direzione di avere visibilità,
            controllo e capacità di intervento.
          </p>
        </section>

        {/* CONTESTO */}
        <section className="mb-32 max-w-3xl">
          <p className="text-gray-400 leading-relaxed">
            In molte organizzazioni la sicurezza è ancora frammentata: strumenti non integrati,
            responsabilità poco definite e scarsa visibilità sul rischio reale.
            Questo genera inefficienza operativa e aumenta l’esposizione.
          </p>
        </section>

        {/* COSA FAI */}
        <section className="mb-32 grid md:grid-cols-3 gap-8">
          {[
            "Cybersecurity Governance",
            "Risk Management",
            "Compliance (NIS2, ISO 27001)"
          ].map((item) => (
            <div
              key={item}
              className="border border-gray-800 p-6 rounded-xl hover:scale-[1.01] transition-all duration-300"
            >
              <h3 className="text-lg font-medium">{item}</h3>
            </div>
          ))}
        </section>

        {/* METODO STRUTTURATO */}
        <section className="mb-32">
          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Analisi",
                text: "Mappatura asset, valutazione del rischio e identificazione dei gap rispetto a normative e controlli."
              },
              {
                title: "Strutturazione",
                text: "Definizione di modelli di governance, processi e architetture di sicurezza sostenibili."
              },
              {
                title: "Controllo",
                text: "Monitoraggio continuo, revisione dei controlli e supporto decisionale basato su dati."
              }
            ].map((item) => (
              <div
                key={item.title}
                className="border border-gray-800 p-6 rounded-xl hover:scale-[1.01] transition-all duration-300"
              >
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.text}</p>
              </div>
            ))}

          </div>
        </section>

        {/* CCIP VISIVO (CORE DIFFERENZIANTE) */}
        <section className="mb-32">
          <div className="grid md:grid-cols-4 gap-6">

            {[
              { label: "Effectiveness Score", value: "82%" },
              { label: "Controls Assessed", value: "124" },
              { label: "Low Effectiveness", value: "9" },
              { label: "Evidence Coverage", value: "76%" },
            ].map((kpi) => (
              <div
                key={kpi.label}
                className="bg-[#121316] border border-gray-800 p-6 rounded-2xl shadow-xl shadow-black/20 hover:scale-[1.01] transition-all duration-300"
              >
                <div className="text-sm text-gray-400">{kpi.label}</div>
                <div className="text-3xl font-semibold mt-3">{kpi.value}</div>
              </div>
            ))}

          </div>

          <p className="mt-10 text-gray-400 max-w-3xl leading-relaxed">
            Ogni controllo viene valutato attraverso un modello strutturato che integra stato di implementazione,
            evidenze, esposizioni e remediation, restituendo uno score che rappresenta l’efficacia reale
            e non la sola conformità formale.
          </p>
        </section>

        {/* CREDIBILITÀ */}
        <section className="mb-32 max-w-3xl">
          <p className="text-gray-400 leading-relaxed">
            Marco Filippone è un Chief Information Security Officer e advisor specializzato in cybersecurity governance,
            risk management e compliance normativa. Esperienza come Ict Operations & Services Manager in Organizzazioni Multi-sede,in Italia e all'estero. Opera su contesti complessi contribuendo alla costruzione
            di ecosistemi IT resilienti, tracciabili e governabili.
          </p>
        </section>

        {/* CTA */}
        <section>
          <div className="border border-gray-800 p-10 rounded-xl text-center hover:scale-[1.01] transition-all duration-300">
            <p className="text-lg mb-6">
              Se hai bisogno di strutturare o evolvere il tuo modello di sicurezza,
              possiamo analizzare insieme il contesto.
            </p>

            <button className="bg-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-500 transition-all duration-300">
              Contattami
            </button>
          </div>
        </section>

      </div>
    </main>
  );
}