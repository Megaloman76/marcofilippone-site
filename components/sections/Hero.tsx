"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">

      <img
        src="/hero.jpg"
        alt="Cybersecurity Strategy"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

      <div className="absolute w-[700px] h-[700px] bg-indigo-500/20 blur-[140px] rounded-full top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full bottom-0 right-0 translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-semibold leading-tight tracking-tight mb-6 max-w-4xl"
        >
          CyberSecurity Strategy
          <br />
          <span className="text-white/70">
            & Software Engineering
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-300 max-w-xl mb-10"
        >
          Supporto aziende nella gestione del rischio informatico,
          nella conformità normativa e nella costruzione di modelli
          di sicurezza realmente governabili.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex gap-4"
        >
          <button className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-gray-200 transition shadow-lg">
            Contattami
          </button>

          <button className="border border-white/30 px-6 py-3 rounded-xl text-white hover:border-white transition">
            Scopri i servizi
          </button>
        </motion.div>

      </div>
    </section>
  );
}