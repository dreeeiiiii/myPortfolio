'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[140vh] sm:min-h-[120vh] flex flex-col-reverse sm:flex-row items-center justify-center gap-12 sm:gap-14 px-6 sm:px-8 lg:px-20 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 text-white font-[Poppins] overflow-hidden"
    >
      {/* Organic Blobs */}
      {[
        { top: "5%", left: "5%", size: "w-32 h-32 sm:w-48 sm:h-48", color: "bg-amber-400", y: [-10, 10, -10], duration: 5 },
        { top: "10%", right: "10%", size: "w-24 h-24 sm:w-40 sm:h-40", color: "bg-cyan-400", y: [0, 15, 0], duration: 6 },
      ].map((blob, i) => (
        <motion.div
          key={i}
          className={`absolute ${blob.top ? `top-[${blob.top}]` : ''} ${blob.bottom ? `bottom-[${blob.bottom}]` : ''} ${blob.left ? `left-[${blob.left}]` : ''} ${blob.right ? `right-[${blob.right}]` : ''} ${blob.size} ${blob.color} rounded-full blur-xl opacity-40 z-0`}
          animate={{ y: blob.y }}
          transition={{ duration: blob.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Geometric Shapes */}
      <motion.div
        className="absolute top-20 left-1/2 w-24 h-24 border-2 border-amber-400 rounded-tr-[50%] rounded-bl-[50%] opacity-30 z-0"
        animate={{ rotate: [0, 45, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 right-1/3 w-16 h-16 border-2 border-cyan-400 rounded-lg opacity-25 z-0"
        animate={{ rotate: [0, -30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-10 w-20 h-20 border-2 border-pink-400 rounded-full opacity-20 z-0"
        animate={{ rotate: [0, 360, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {/* Profile Image */}
      <motion.div
        className="relative z-10 rounded-3xl shadow-2xl overflow-hidden w-52 h-52 sm:w-64 sm:h-64 lg:w-80 lg:h-80 border-4 border-amber-400"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ rotate: 2 }}
      >
        <motion.div
          className="w-full h-full"
          animate={{ y: [0, -10, 0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", repeatType: "loop" }}
        >
          <Image
            src="/assets/profile.jpg"
            alt="Andrei's profile"
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
        </motion.div>
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="max-w-md sm:max-w-lg text-center sm:text-left z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-amber-300 leading-tight">
          Ven Andrei Manacop
        </h1>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-white/90">
          Web developer passionate about crafting high-performance, modern, and user-centric digital experiences.
        </p>
        <motion.p
          className="mt-5 sm:mt-6 text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          I’m a passionate developer who thrives on building clean and efficient digital experiences. Whether it’s crafting sleek UI interfaces or optimizing for performance, I bring dedication to every line of code.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-5 justify-center sm:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 sm:px-6 sm:py-3 bg-amber-400 text-emerald-950 font-bold rounded-xl shadow-lg hover:shadow-amber-500/30 transition-transform hover:scale-105 text-sm sm:text-base"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 sm:px-6 sm:py-3 border border-amber-400 text-amber-300 font-bold rounded-xl hover:bg-amber-400 hover:text-emerald-950 transition-transform hover:scale-105 text-sm sm:text-base"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
