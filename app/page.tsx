"use client";

export default function Home() {
  return (
    <main className="bg-[#0B0B0C] text-white">

      {/* HERO */}
      <section className="relative h-[90vh] flex items-center">

        {/* IMAGE */}
        <img
          src="/hero.jpg"
          alt="Cybersecurity Strategy"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-6xl mx-auto px-6">

          <h1 className="text-5xl md:text-7xl font-semibold leading-tight max-w-4xl mb-6">
            CyberSecurity Strategy
            <br />
            & Software Engineering
          </h1>

          <p className="text-lg text-gray-300 max-w-xl mb-8">
            Supporto aziende nella gestione del rischio informatico,
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
              className="border border-white/40 px-6 py-3 rounded-xl hover:border-white transition"
            >
              Scopri i servizi
            </a>
          </div>

        </div>
      </section>

      {/* SEZIONE VALUE */}
      <section className="py-32 border-t border-gray-800">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-semibold mb-6">
            La sicurezza non è un problema tecnico
          </h2>

          <p className="text-gray-400 leading-relaxed text-lg">
            Nelle organizzazioni complesse, il rischio informatico è una variabile
            strutturale. Senza governance, genera inefficienza operativa,
            perdita di controllo e aumento dell’esposizione.
          </p>

        </div>
      </section>

      {/* SEZIONE SERVIZI */}
      <section className="py-32 bg-[#0F1115]">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-semibold mb-12">
            Aree di intervento
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              "Cybersecurity Governance",
              "Risk Management",
              "Compliance & Normative",
              "Software Engineering"
            ].map((item) => (
              <div
                key={item}
                className="bg-[#15171c] p-6 rounded-xl border border-gray-800 hover:bg-[#1b1e24] transition"
              >
                <h3 className="text-lg">{item}</h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* METODO */}
      <section className="py-32 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-semibold mb-12">
            Un approccio strutturato
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-gray-400">

            {[
              "Analisi",
              "Strategia",
              "Implementazione",
              "Monitoraggio"
            ].map((step, i) => (
              <div key={step}>
                <div className="text-sm text-gray-600 mb-2">
                  0{i + 1}
                </div>
                <div className="text-white text-lg">{step}</div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#0F1115] text-center">
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