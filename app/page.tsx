export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="min-h-screen flex items-center px-6 md:px-24">
        <div className="max-w-5xl">
          
          <p className="text-sm text-zinc-500 mb-4 tracking-wide">
            CYBERSECURITY STRATEGY & SOFTWARE ENGINEERING
          </p>

          <h1 className="text-5xl md:text-7xl font-semibold mb-6 leading-tight">
            Marco Filippone
          </h1>

          <p className="text-xl md:text-2xl text-zinc-300 mb-10 max-w-3xl leading-relaxed">
            Work in Progress.
          </p>

          <div className="flex gap-4">
            <a className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-zinc-200 transition">
              Contattami
            </a>

            <a className="border border-zinc-700 px-6 py-3 rounded-lg hover:border-white transition">
              Scopri di più
            </a>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="h-px bg-zinc-800 mx-6 md:mx-24" />

      {/* ABOUT */}
      <section className="px-6 md:px-24 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold mb-6">
            Approccio concreto
          </h2>

          <p className="text-zinc-400 leading-relaxed text-lg">
            Supporto aziende nella strutturazione della sicurezza informatica con un approccio pragmatico.
            Governance, architettura e conformità vengono integrate nei processi reali, non documentate solo sulla carta.
          </p>
        </div>
      </section>

      <div className="h-px bg-zinc-800 mx-6 md:mx-24" />

      {/* SERVIZI */}
      <section className="px-6 md:px-24 py-20">
        <h2 className="text-3xl font-semibold mb-12">Servizi</h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-6 border border-zinc-800 rounded-xl hover:border-white transition">
            <h3 className="text-xl font-medium mb-3">CISO Advisory</h3>
            <p className="text-zinc-400">
              Governance, policy e gestione del rischio allineate al business.
            </p>
          </div>

          <div className="p-6 border border-zinc-800 rounded-xl hover:border-white transition">
            <h3 className="text-xl font-medium mb-3">NIS2</h3>
            <p className="text-zinc-400">
              Adeguamento proporzionato, difendibile e sostenibile.
            </p>
          </div>

          <div className="p-6 border border-zinc-800 rounded-xl hover:border-white transition">
            <h3 className="text-xl font-medium mb-3">ISO 27001</h3>
            <p className="text-zinc-400">
              Implementazione e gestione del sistema di sicurezza.
            </p>
          </div>

        </div>
      </section>

      <div className="h-px bg-zinc-800 mx-6 md:mx-24" />

      {/* CTA */}
      <section className="px-6 md:px-24 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Vuoi strutturare la sicurezza in modo serio?
        </h2>

        <p className="text-zinc-400 mb-8">
          
        </p>

        <a className="bg-white text-black px-8 py-4 rounded-lg font-medium hover:bg-zinc-200 transition">
          
        </a>
      </section>

    </main>
  );
}