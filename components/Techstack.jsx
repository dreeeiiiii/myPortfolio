'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  SiPostgresql, 
  SiExpress, 
  SiReact, 
  SiNodedotjs, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiVite 
} from 'react-icons/si'

// Tech stack data
const techStack = [
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-400 text-6xl" /> },
  { name: 'Express.js', icon: <SiExpress className="text-gray-300 text-6xl" /> },
  { name: 'React', icon: <SiReact className="text-cyan-400 text-6xl" /> },
  { name: 'Node.js', icon: <SiNodedotjs className="text-green-400 text-6xl" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-white text-6xl" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400 text-6xl" /> },
  { name: 'Vite', icon: <SiVite className="text-yellow-400 text-6xl" /> },
]

export default function TechStackSection() {
  return (
    <section className="relative bg-gradient-to-b from-emerald-950 to-black text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Floating animated background blobs */}
      <motion.div
        className="absolute w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl"
        animate={{ x: [0, 50, -50, 0], y: [0, 30, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        style={{ top: '10%', left: '10%' }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
        animate={{ x: [0, -40, 40, 0], y: [0, -20, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        style={{ bottom: '10%', right: '5%' }}
      />

      {/* Title */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-12 text-amber-300 tracking-wide"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          MY TECH STACK
        </motion.h2>

        {/* Tech stack grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              className="bg-emerald-900/40 backdrop-blur-md rounded-xl p-6 flex flex-col items-center shadow-lg hover:shadow-amber-400/30 transition-all duration-500 border border-emerald-700 hover:border-amber-400"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                y: [0, -6, 0], // floating effect
                boxShadow: [
                  '0px 0px 20px rgba(255, 215, 0, 0.2)',
                  '0px 0px 40px rgba(255, 215, 0, 0.4)',
                  '0px 0px 20px rgba(255, 215, 0, 0.2)'
                ]
              }}
              transition={{
                y: { repeat: Infinity, repeatType: 'loop', duration: 3, delay: index * 0.2 },
                boxShadow: { repeat: Infinity, repeatType: 'loop', duration: 4 }
              }}
            >
              <div className="mb-4">{tech.icon}</div>
              <p className="text-base sm:text-lg font-semibold text-amber-200">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
