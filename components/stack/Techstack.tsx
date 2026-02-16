// TechStackSection.tsx
import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import {
  SiPostgresql,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiVite
} from 'react-icons/si'

type Tech = { name: string; icon: React.ReactNode }

const techStack: Tech[] = [
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-400 text-5xl" /> },
  { name: 'Express.js', icon: <SiExpress className="text-gray-300 text-5xl" /> },
  { name: 'React', icon: <SiReact className="text-cyan-400 text-5xl" /> },
  { name: 'Node.js', icon: <SiNodedotjs className="text-green-400 text-5xl" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400 text-5xl" /> },
  { name: 'Vite', icon: <SiVite className="text-yellow-400 text-5xl" /> }
]

function TechCard({ tech }: { tech: Tech }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [10, -10])
  const rotateY = useTransform(x, [-100, 100], [-10, 10])
  const springX = useSpring(rotateX, { stiffness: 200, damping: 20 })
  const springY = useSpring(rotateY, { stiffness: 200, damping: 20 })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set(e.clientX - rect.left - rect.width / 2)
    y.set(e.clientY - rect.top - rect.height / 2)
  }
  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX: springX, rotateY: springY, transformStyle: 'preserve-3d' }}
      whileHover={{ scale: 1.05 }}
      className="relative group rounded-2xl p-8 bg-emerald-900/20 backdrop-blur-xl border border-emerald-500/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 cursor-pointer"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-400/0 via-teal-400/10 to-emerald-400/0 opacity-0 group-hover:opacity-50 transition duration-500" />
      <div className="relative flex flex-col items-center space-y-4">
        {tech.icon}
        <p className="text-lg font-semibold tracking-wide text-white/90 group-hover:text-emerald-300 transition">
          {tech.name}
        </p>
      </div>
    </motion.div>
  )
}

export default function TechStackSection() {
  return (
    <section
      id="techstack"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-emerald-950 via-teal-950 to-emerald-900 text-white px-6 py-24 overflow-hidden"
    >
      {/* Floating Blobs */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-emerald-500/20 blur-[120px] rounded-full top-1/3 left-1/2 -translate-x-1/2"
        animate={{ scale: [1, 1.3, 1], x: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[100px] rounded-full bottom-[10%] left-[5%]"
        animate={{ scale: [1.2, 1, 1.2], y: [0, -40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="space-y-6 text-center max-w-6xl w-full"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Built With Modern Technologies
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto text-lg">
          I build scalable, production-ready systems with clean architecture and high performance.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16">
        {techStack.map((tech, idx) => (
          <TechCard key={idx} tech={tech} />
        ))}
      </div>

      <motion.a
        href="#contact"
        className="mt-12 px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-emerald-950 font-bold shadow-lg shadow-amber-500/30 hover:scale-105 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Available for Projects →
      </motion.a>
    </section>
  )
}
