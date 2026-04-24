export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-bold max-w-3xl">
          Cybersecurity, Governance IT e Compliance NIS2
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          Supporto aziende nella gestione del rischio cyber, nella strutturazione
          della sicurezza e nell’adeguamento normativo, con un approccio concreto
          e orientato al business.
        </p>

        <div className="mt-8">
          <a
            href="#contatti"
            className="px-6 py-3 bg-black text-white rounded-lg"
          >
            Contattami
          </a>
        </div>
      </section>

      {/* SERVIZI */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-10 text-center">
            Cosa posso fare per la tua azienda
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div>
              <h3 className="font-semibold text-lg">Governance & CISO</h3>
              <p className="mt-2 text-gray-600">
                Definizione modello di sicurezza, policy, gestione fornitori e
                strutturazione funzione IT/Cyber.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">NIS2 & Compliance</h3>
              <p className="mt-2 text-gray-600">
                Supporto nell’adeguamento normativo, analisi del perimetro,
                gestione audit e documentazione.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Risk & Incident Management</h3>
              <p className="mt-2 text-gray-600">
                Analisi del rischio, gestione incidenti e definizione di processi
                operativi per la continuità aziendale.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CREDIBILITÀ */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">
            Approccio concreto, orientato al business
          </h2>

          <p className="text-gray-600">
            Lavoro a stretto contatto con direzione, IT e funzioni aziendali per
            trasformare la sicurezza da obbligo tecnico a leva strategica.
            Focus su risultati reali, sostenibilità operativa e riduzione del rischio.
          </p>
        </div>
      </section>

      {/* CONTATTI */}
      <section id="contatti" className="px-6 py-20 bg-gray-50 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Contatto
        </h2>

        <p className="text-gray-600 mb-6">
          Per collaborazioni o approfondimenti.
        </p>

        <a
          href="mailto:tuamail@example.com"
          className="px-6 py-3 bg-black text-white rounded-lg"
        >
          Scrivimi
        </a>
      </section>

    </main>
  );
}