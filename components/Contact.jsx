'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'

const socialLinks = [
  {
    icon: <FaEnvelope />,
    label: 'Email Me',
    href: 'mailto:youremail@example.com',
    color: 'bg-red-500'
  },
  {
    icon: <FaGithub />,
    label: 'GitHub',
    href: 'https://github.com/yourusername',
    color: 'bg-gray-800'
  },
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/yourusername',
    color: 'bg-blue-600'
  },
  {
    icon: <FaFacebook />,
    label: 'Facebook',
    href: 'https://facebook.com/yourusername',
    color: 'bg-blue-700'
  }
]

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-emerald-900 to-emerald-800 text-white py-20 px-6 scroll-mt-24"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold mb-4 text-amber-300"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>
        <motion.p
          className="text-lg mb-12 text-white/90"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          I’m open to opportunities, collaborations, or just friendly chats. Let’s connect!
        </motion.p>

        {/* Socials */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-center">
          {socialLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center justify-center gap-2 p-6 rounded-xl shadow-lg text-white transition-transform transform hover:scale-110 hover:shadow-2xl ${link.color}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="text-3xl">{link.icon}</div>
              <span className="text-sm font-semibold">{link.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
