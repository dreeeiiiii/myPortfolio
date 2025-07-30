"use client";

import Image from "next/image";
import ProjectsSection from "../../components/Project";
import ContactSection from "../../components/Contact";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <main className="bg-emerald-950 min-h-screen text-white font-sans">
      {/* Hero Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8 sm:gap-12 px-4 sm:px-8 py-16 sm:py-24 relative overflow-hidden">
        {/* Background Animation */}
        <motion.div
          className="absolute -top-40 -left-40 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] bg-amber-400 opacity-10 rounded-full blur-3xl z-0"
          animate={{ scale: [1, 1.5, 1], rotate: [0, 360, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />

        {/* Profile Image */}
        <motion.div
          className="z-10 mx-auto sm:mx-0 rounded-3xl shadow-2xl overflow-hidden w-60 h-60 sm:w-80 sm:h-80 border-4 border-amber-400"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/assets/profile.jpg"
            alt="Andrei's profile"
            width={500}
            height={500}
            priority
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* Intro Text */}
        <motion.div
          className="max-w-md text-center sm:text-left z-10 px-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 sm:mb-6 text-amber-300 leading-tight">
            Ven Andrei Manacop
          </h1>
          <p className="text-base sm:text-lg text-white/90">
            Web developer passionate about crafting high-performance, modern, and user-centric digital experiences.
          </p>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="bg-emerald-900 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-10">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center text-amber-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            ABOUT ME
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-center sm:text-justify text-white/90 leading-relaxed px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            I’m a passionate developer who thrives on building clean and efficient digital experiences.
            With a foundation in modern web technologies, I focus on creating projects that are both functional
            and visually compelling. Whether it’s crafting sleek UI interfaces or optimizing for performance,
            I bring dedication to every line of code.
          </motion.p>
        </div>
      </section>
    </main>
  );
};

export default function Page() {
  return (
    <>
      <Home />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
