'use client';

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-[60vh] px-6 py-16 bg-gradient-to-b from-emerald-900 to-emerald-950 text-white font-[Poppins] overflow-hidden"
    >
      {/* Floating light blob */}
      <motion.div
        className="absolute top-[10%] left-[5%] w-72 h-72 bg-amber-400 rounded-full blur-3xl opacity-10"
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="max-w-4xl mx-auto text-center sm:text-left relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl sm:text-4xl font-bold text-amber-300 mb-6">
          About Me
        </h2>
        <p className="text-white/80 leading-relaxed text-base sm:text-lg">
          I help businesses and clients bring their digital ideas to life. 
          With expertise in modern web technologies like React, Next.js, 
          TailwindCSS, and Node.js, I create responsive, high-performance, 
          and visually engaging web applications. 
          I focus on delivering solutions that not only look great but also 
          enhance user experience, improve efficiency, and drive results. 
          Working with me means partnering with a developer who values 
          clean code, clear communication, and projects delivered on time.
        </p>
      </motion.div>
    </section>
  );
}
