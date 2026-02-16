
import React, { type FC } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'

interface SocialLink {
  icon: React.ReactNode
  label: string
  href: string
}

const socialLinks: SocialLink[] = [
  { icon: <FaEnvelope />, label: 'Email Me', href: 'mailto:andreimanacop1@gmail.com' },
  { icon: <FaGithub />, label: 'GitHub', href: 'https://github.com/dreeeiiiii' },
  { icon: <FaLinkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/andrei-manacop/' },
  { icon: <FaFacebook />, label: 'Facebook', href: 'https://www.facebook.com/andrei.manacop.9' },
]

const ContactSection: FC = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen px-6 py-24 flex flex-col items-center justify-center
      bg-gradient-to-b from-emerald-950 via-teal-950 to-emerald-900 text-white overflow-hidden"
    >
      {/* Interactive Background Blobs */}
      <motion.div
        className="absolute w-72 h-72 bg-emerald-700/20 rounded-full blur-3xl"
        animate={{ x: [0, 60, -40, 0], y: [0, 30, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        style={{ top: '10%', left: '15%' }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-amber-700/10 rounded-full blur-3xl"
        animate={{ x: [0, -50, 50, 0], y: [0, -25, 25, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        style={{ bottom: '10%', right: '5%' }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, 40, -40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        style={{ top: '30%', right: '20%' }}
      />

      {/* Section Header */}
      <motion.h2
        className="text-4xl sm:text-5xl font-bold mb-12 text-amber-300 tracking-wide z-10"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Get in Touch
      </motion.h2>

      {/* Social Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl w-full z-10">
        {socialLinks.map((link, i) => (
          <motion.a
            key={i}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex flex-col items-center justify-center p-6 rounded-2xl
            bg-emerald-900/40 border border-emerald-500/30 backdrop-blur-md shadow-lg text-white
            overflow-hidden transition-all duration-500 cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Glow on Hover */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-br from-emerald-500 via-teal-400 to-cyan-500 opacity-0 rounded-2xl blur-xl"
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.5 }}
            />
            <div className="relative flex flex-col items-center gap-3 z-10">
              <div className="text-6xl">{link.icon}</div>
              <span className="text-base sm:text-lg font-semibold text-emerald-200/90">
                {link.label}
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <a
          href="#projects"
          className="inline-block px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400
          text-black font-semibold shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:scale-105"
        >
          Explore Projects →
        </a>
      </motion.div>
    </section>
  )
}

export default ContactSection
