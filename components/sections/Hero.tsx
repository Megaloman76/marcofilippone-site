"use client";

import { motion } from "framer-motion";

export default function Hero({ data }: any) {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">

      <img
        src={data?.heroImage?.asset?.url}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* glow */}
      <div className="absolute w-[600px] h-[600px] bg-indigo-500/20 blur-[120px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-semibold mb-6"
        >
          {data?.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 max-w-xl"
        >
          {data?.subheadline}
        </motion.p>

      </div>
    </section>
  );
}