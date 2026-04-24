export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center px-6 md:px-20">
        <div className="max-w-5xl">
          <p className="text-sm text-zinc-400 mb-4">
            Cybersecurity Strategy & Engineering
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
            Marco Filippone
          </h1>

          <h2 className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-2xl">
            CISO Advisor — NIS2 & ISO 27001  
            Governance, Security Architecture, Risk Management
          </h2>

          <div className="flex gap-4">
            <a
              href="#contatti"
              className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-zinc-200 transition"
            >
              Contattami
            </a>

            <a
              href="#servizi"
              className="border border-zinc-600 px-6 py-3 rounded-md hover:border-white transition"
            >
              Servizi
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-6 md:px-20 py-20 border-t border-zinc-800">
        <div className="max-w-4xl">
          <h3 className="text-2xl font-semibold mb-6">
            Approccio strategico alla sicurezza
          </h3>

          <p className="text-zinc-400 leading-relaxed">
            Supporto aziende e organizzazioni nella strutturazione della sicurezza
            informatica in modo concreto, misurabile e sostenibile.  
            Lavoro su governance, architetture e processi, con un focus diretto
            su conformità normativa e riduzione del rischio operativo.
          </p>
        </div>
      </section>

      {/* SERVIZI */}
      <section id="servizi" className="px-6 md:px-20 py-20 border-t border-zinc-800">
        <h3 className="text-2xl font-semibold mb-10">Servizi</h3>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-6 border border-zinc-800 rounded-lg hover:border-white transition">
            <h4 className="text-lg font-medium mb-3">CISO Advisory</h4>
            <p className="text-zinc-400 text-sm">
              Supporto strategico alla funzione sicurezza: governance, policy,
              gestione rischio e allineamento business.
            </p>
          </div>

          <div className="p-6 border border-zinc-800 rounded-lg hover:border-white transition">
            <h4 className="text-lg font-medium mb-3">NIS2 Compliance</h4>
            <p className="text-zinc-400 text-sm">
              Analisi perimetro, gap assessment e definizione roadmap
              di adeguamento proporzionata e difendibile.
            </p>
          </div>

          <div className="p-6 border border-zinc-800 rounded-lg hover:border-white transition">
            <h4 className="text-lg font-medium mb-3">ISO 27001</h4>
            <p className="text-zinc-400 text-sm">
              Implementazione e strutturazione del sistema di gestione
              della sicurezza delle informazioni.
            </p>
          </div>

        </div>
      </section>

      {/* CREDIBILITÀ */}
      <section className="px-6 md:px-20 py-20 border-t border-zinc-800">
        <div className="max-w-4xl">
          <h3 className="text-2xl font-semibold mb-6">
            Esperienza operativa reale
          </h3>

          <p className="text-zinc-400 leading-relaxed">
            Esperienza diretta nella gestione di infrastrutture complesse,
            ambienti multi-sede e contesti regolati.  
            Approccio orientato all’efficacia operativa, non alla teoria.
          </p>
        </div>
      </section>

      {/* CONTATTI */}
      <section id="contatti" className="px-6 md:px-20 py-20 border-t border-zinc-800">
        <h3 className="text-2xl font-semibold mb-6">Contatti</h3>

        <p className="text-zinc-400 mb-6">
          Per collaborazioni o consulenze, puoi contattarmi direttamente.
        </p>

        <a
          href="mailto:tuamail@example.com"
          className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-zinc-200 transition"
        >
          Scrivimi
        </a>
      </section>

    </main>
  );
}