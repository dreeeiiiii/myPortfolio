'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'

const socialLinks = [
  { icon: <FaEnvelope />, label: 'Email Me', href: 'mailto:andreimanacop1@gmail.com', color: 'bg-red-600' },
  { icon: <FaGithub />, label: 'GitHub', href: 'https://github.com/dreeeiiiii', color: 'bg-gray-800' },
  { icon: <FaLinkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/andrei-manacop/', color: 'bg-blue-800' },
  { icon: <FaFacebook />, label: 'Facebook', href: 'https://www.facebook.com/andrei.manacop.9', color: 'bg-blue-900' },
]

export default function ContactSection() {
  return (
    <section className="relative bg-gradient-to-b from-emerald-950 to-emerald-900 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Floating animated blobs */}
      <motion.div
        className="absolute w-72 h-72 bg-emerald-700/20 rounded-full blur-3xl"
        animate={{ x: [0, 50, -50, 0], y: [0, 30, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        style={{ top: '10%', left: '10%' }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-amber-700/10 rounded-full blur-3xl"
        animate={{ x: [0, -40, 40, 0], y: [0, -20, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        style={{ bottom: '10%', right: '5%' }}
      />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Title */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-12 text-amber-300 tracking-wide"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>

        {/* Socials grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
          {socialLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center justify-center gap-2 p-6 rounded-xl shadow-lg bg-emerald-900/40 border border-emerald-700 hover:border-amber-400 transition-all duration-500 ${link.color}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                y: [0, -6, 0],
                boxShadow: [
                  '0px 0px 20px rgba(255, 215, 0, 0.2)',
                  '0px 0px 40px rgba(255, 215, 0, 0.4)',
                  '0px 0px 20px rgba(255, 215, 0, 0.2)',
                ],
              }}
              transition={{
                y: { repeat: Infinity, repeatType: 'loop', duration: 3, delay: i * 0.2 },
                boxShadow: { repeat: Infinity, repeatType: 'loop', duration: 4 },
              }}
            >
              <div className="text-6xl">{link.icon}</div>
              <span className="text-base sm:text-lg font-semibold text-amber-200">{link.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
