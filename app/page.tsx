"use client";

export default function Home() {
  return (
    <main className="bg-[#0B0B0C] text-white">

      {/* HERO */}
      <section className="min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* TESTO */}
          <div>
            <h1 className="text-6xl md:text-7xl font-semibold leading-tight tracking-tight mb-6">
              CyberSecurity Strategy
              <br />
              & Governance
            </h1>

            <p className="text-lg text-gray-400 max-w-xl mb-10">
              Supporto aziende strutturate nella gestione del rischio,
              nella conformità normativa e nella costruzione di modelli
              di sicurezza realmente governabili.
            </p>

            <div className="flex gap-4">
              <a
                href="/contact"
                className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:opacity-90 transition"
              >
                Contattami
              </a>

              <a
                href="/services"
                className="border border-gray-700 px-6 py-3 rounded-xl hover:border-gray-500 transition"
              >
                Servizi
              </a>
            </div>
          </div>

          {/* IMMAGINE */}
          <div className="relative">
            <img
              src="/profile.jpg"
              alt="Marco Filippone"
              className="rounded-2xl grayscale hover:grayscale-0 transition duration-500 border border-gray-800 shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* PROBLEMA */}
      <section className="py-32 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-semibold mb-6">
            La sicurezza non è un problema tecnico.
          </h2>

          <p className="text-gray-400 leading-relaxed">
            In molte organizzazioni la cybersecurity è ancora frammentata:
            strumenti non integrati, responsabilità poco definite e scarsa
            visibilità sul rischio reale. Questo genera inefficienza operativa
            e aumenta l’esposizione.
          </p>

        </div>
      </section>

      {/* POSIZIONAMENTO */}
      <section className="py-32 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-semibold mb-6">
            Un approccio strutturato
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Non mi limito a introdurre strumenti o controlli. Definisco strutture
            decisionali, processi e architetture che permettono alla direzione
            di avere visibilità, controllo e capacità di intervento.
          </p>

        </div>
      </section>

      {/* SERVIZI */}
      <section className="py-32 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-semibold mb-12">
            Aree di intervento
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Governance",
                desc: "Definizione di modelli di sicurezza e processi decisionali."
              },
              {
                title: "Risk Management",
                desc: "Analisi e gestione del rischio ICT in contesti complessi."
              },
              {
                title: "Compliance",
                desc: "Adeguamento a NIS2, ISO 27001 e normative correlate."
              }
            ].map((item) => (
              <div
                key={item.title}
                className="border border-gray-800 p-8 rounded-2xl hover:bg-[#111] transition"
              >
                <h3 className="text-xl font-medium mb-4">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* METODO */}
      <section className="py-32 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-semibold mb-12">
            Metodo
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Analisi",
                desc: "Mappatura asset, valutazione del rischio e identificazione dei gap."
              },
              {
                title: "Strutturazione",
                desc: "Definizione di governance, processi e architetture."
              },
              {
                title: "Controllo",
                desc: "Monitoraggio continuo e supporto decisionale."
              }
            ].map((step) => (
              <div key={step.title}>
                <div className="text-sm text-gray-500 mb-2">{step.title}</div>
                <div className="text-lg text-gray-300">{step.desc}</div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-gray-800 text-center">
        <div className="max-w-3xl mx-auto px-6">

          <p className="text-xl mb-6">
            Se devi strutturare o evolvere il tuo modello di sicurezza,
            possiamo analizzare insieme il contesto.
          </p>

          <a
            href="/contact"
            className="bg-white text-black px-8 py-4 rounded-xl font-medium hover:opacity-90 transition"
          >
            Contattami
          </a>

        </div>
      </section>

    </main>
  );
}