import { motion } from "framer-motion";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import type { JSX } from "react";

const skills: string[] = [
  "React",
  "Next.js",
  "TypeScript",
  "TailwindCSS",
  "Node.js",
  "Framer Motion",
];

const highlights: { icon: string; title: string; description: string }[] = [
  {
    icon: "⚡",
    title: "High Performance",
    description: "Optimized code for lightning-fast experiences",
  },
  {
    icon: "🎨",
    title: "Modern Design",
    description: "Clean, responsive interfaces that users love",
  },
  {
    icon: "🚀",
    title: "On-Time Delivery",
    description: "Projects delivered efficiently and reliably",
  },
];

export default function About(): JSX.Element {
  return (
    <section
      id="about"
      className="relative min-h-screen px-6 py-20 sm:py-32 bg-gradient-to-b from-emerald-900 via-teal-950 to-emerald-950 text-white font-[Poppins] overflow-hidden"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0 opacity-5">
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

      {/* Dynamic Gradient Orbs */}
      <motion.div
        className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-gradient-to-br from-amber-500/20 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-gradient-to-tl from-cyan-500/20 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating Particles */}
      {[...Array(8)].map((_, i: number) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-emerald-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-900/30 backdrop-blur-sm border border-emerald-500/30 rounded-full text-emerald-300 text-sm mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.span
              className="w-2 h-2 bg-emerald-400 rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Get to know me
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-300 via-emerald-300 to-cyan-300 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-emerald-100/90 leading-relaxed text-base sm:text-lg">
              I help businesses and clients bring their digital ideas to life.
              With expertise in modern web technologies, I create{" "}
              <span className="text-amber-300 font-semibold">responsive</span>,{" "}
              <span className="text-emerald-300 font-semibold">
                high-performance
              </span>
              , and{" "}
              <span className="text-cyan-300 font-semibold">
                visually engaging
              </span>{" "}
              web applications.
            </p>

            <p className="text-emerald-100/80 leading-relaxed text-base sm:text-lg">
              I focus on delivering solutions that not only look great but also
              enhance user experience, improve efficiency, and drive results.
              Working with me means partnering with a developer who values clean
              code, clear communication, and projects delivered on time.
            </p>

            {/* Skills Tags */}
            <motion.div
              className="flex flex-wrap gap-3 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {skills.map((skill: string, i: number) => (
                <motion.span
                  key={i}
                  className="px-4 py-2 bg-emerald-800/40 backdrop-blur-sm border border-emerald-500/30 rounded-full text-emerald-200 text-sm font-medium"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(5, 150, 105, 0.3)",
                    borderColor: "rgba(16, 185, 129, 0.5)",
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {highlights.map((item, i: number) => (
              <motion.div
                key={i}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * i }}
                whileHover={{ x: 10 }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-emerald-900/20 backdrop-blur-sm border border-emerald-500/20 p-6 transition-all duration-300 group-hover:bg-emerald-800/30 group-hover:border-emerald-400/40">
                  {/* Hover gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-400/10 to-emerald-500/0"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />

                  <div className="relative flex items-start gap-4">
                    {/* Icon */}
                    <motion.div
                      className="text-4xl"
                      animate={{
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    >
                      {item.icon}
                    </motion.div>

                    {/* Text */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-emerald-100/70 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Accent dot */}
                  <motion.div
                    className="absolute top-4 right-4 w-2 h-2 rounded-full bg-emerald-400"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <motion.a
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-emerald-950 font-bold rounded-xl overflow-hidden shadow-lg shadow-amber-500/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-amber-300 to-amber-400"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">Let's Work Together</span>
            <motion.span
              className="relative z-10"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}