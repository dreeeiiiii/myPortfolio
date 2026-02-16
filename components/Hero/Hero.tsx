import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import type { JSX } from "react";
import profilePic from '../../public/4.png';

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "20+", label: "Projects" },
  { value: "2+", label: "Years Exp" },
  { value: "100%", label: "Passion" },
];

const tags: string[] = ["Web Developer", "UI/UX", "Performance"];

export default function Hero(): JSX.Element {
  const { scrollY } = useScroll();
  const y: MotionValue<number> = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity: MotionValue<number> = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-14 px-6 sm:px-8 lg:px-20 bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 text-white font-[Poppins] overflow-hidden"
    >
      {/* Welcome Badge */}
      <motion.div
        className="absolute top-6 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-900/40 backdrop-blur-md border border-emerald-500/30 rounded-full text-emerald-300 text-sm shadow-lg shadow-emerald-500/20 ">
          <motion.span
            className="w-2 h-2 bg-emerald-400 rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          Welcome to my portfolio
        </div>
      </motion.div>

      {/* Background & Effects */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <motion.div
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-emerald-500/30 to-transparent rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-teal-500/30 to-transparent rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-emerald-400 rounded-full"
          style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          animate={{ y: [0, -30, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
        />
      ))}

      {/* Profile Image */}
      <motion.div
        className="relative z-10 group w-52 h-52 sm:w-64 sm:h-64 lg:w-80 lg:h-80 flex-shrink-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        style={{ y }}
      >
        <motion.div
          className="absolute -inset-4 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-emerald-400 to-cyan-400 rounded-full opacity-75"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <div className="relative rounded-full shadow-2xl overflow-hidden w-full h-full bg-emerald-950">
          <motion.img
            src={profilePic}
            alt="Andrei's profile"
            className="object-cover w-full h-full"
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300 rounded-full"
          />
        </div>
        <motion.div
          className="absolute -bottom-4 -right-4 bg-gradient-to-r from-emerald-500 to-teal-400 text-white px-4 py-2 rounded-full shadow-lg text-xs sm:text-sm font-bold"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring" }}
          whileHover={{ scale: 1.1 }}
        >
          Available for work
        </motion.div>
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="max-w-md sm:max-w-lg text-center sm:text-left z-10 space-y-6"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{ opacity }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mt-4 sm:mt-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <span className="bg-gradient-to-r from-amber-300 via-emerald-300 to-cyan-300 bg-clip-text text-transparent">
            Ven Andrei
          </span>
          <br />
          <span className="text-white">Manacop</span>
        </motion.h1>

        <motion.div
          className="flex flex-wrap gap-2 justify-center sm:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-emerald-800/40 backdrop-blur-sm border border-emerald-500/20 rounded-full text-emerald-200 text-xs sm:text-sm"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.p
          className="text-base sm:text-lg text-emerald-100/90 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Passionate about crafting{" "}
          <span className="text-amber-300 font-semibold">high-performance</span>,{" "}
          <span className="text-emerald-300 font-semibold">modern</span>, and{" "}
          <span className="text-cyan-300 font-semibold">user-centric</span> digital experiences that make a difference.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <motion.a
            href="#projects"
            className="group relative px-8 py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 text-emerald-950 font-bold rounded-xl overflow-hidden shadow-lg shadow-amber-500/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-amber-300 to-amber-400"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 flex items-center gap-2">
              View Projects{" "}
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.a>

          <motion.a
            href="#contact"
            className="group relative px-8 py-3.5 bg-emerald-900/30 backdrop-blur-sm border-2 border-emerald-400 text-emerald-300 font-bold rounded-xl overflow-hidden"
            whileHover={{ scale: 1.05, borderColor: "#fbbf24" }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">Contact Me</span>
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex gap-8 justify-center sm:justify-start pt-6 border-t border-emerald-500/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <motion.div
                className="text-2xl sm:text-3xl font-bold text-amber-300"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.4 + i * 0.1, type: "spring" }}
              >
                {stat.value}
              </motion.div>
              <div className="text-xs sm:text-sm text-emerald-300/70">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
