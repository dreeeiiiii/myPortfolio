'use client'

import { type FC } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'

interface QuickLink {
  label: string
  targetId: string
}

const quickLinks: QuickLink[] = [
  { label: 'Home', targetId: 'hero' },
  { label: 'About', targetId: 'about' },
  { label: 'Projects', targetId: 'projects' },
  { label: 'Contact', targetId: 'contact' },
]

const Footer: FC = () => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className="relative bg-[#0f1115] border-solid 1px border-emerald-800 text-white py-16 px-6 overflow-hidden">
      {/* Floating gradient blobs */}
      <motion.div
        className="absolute w-72 h-72 bg-emerald-700/30 rounded-full blur-3xl mix-blend-overlay"
        animate={{ x: [0, 40, -40, 0], y: [0, 20, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        style={{ top: '5%', left: '10%' }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-amber-700/20 rounded-full blur-3xl mix-blend-overlay"
        animate={{ x: [0, -30, 30, 0], y: [0, -15, 15, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        style={{ bottom: '5%', right: '5%' }}
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 relative z-10">
        {/* Contact Info */}
        <div className="space-y-3">
          <motion.h4
            className="text-lg font-semibold text-amber-400"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact
          </motion.h4>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Email:{' '}
            <a
              href="mailto:andreimanacop1@gmail.com"
              className="text-white/90 hover:text-amber-300 transition-colors duration-300"
            >
              andreimanacop1@gmail.com
            </a>
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Location: Philippines
          </motion.p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <motion.h4
            className="text-lg font-semibold text-amber-400"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Quick Links
          </motion.h4>
          <ul className="space-y-1">
            {quickLinks.map((link, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <button
                  onClick={() => handleScroll(link.targetId)}
                  className="hover:text-amber-300 transition-colors duration-300"
                >
                  {link.label}
                </button>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h4 className="text-lg font-semibold text-amber-400">Connect with Me</h4>
          <div className="flex space-x-6 text-2xl">
            <motion.a
              href="https://github.com/dreeeiiiii"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="hover:text-amber-300 transition-colors duration-300"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/andrei-manacop/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="hover:text-amber-300 transition-colors duration-300"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="mailto:andreimanacop1@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="hover:text-amber-300 transition-colors duration-300"
            >
              <FaEnvelope />
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="mt-12 text-center text-sm text-white/50 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        © {new Date().getFullYear()} Ven Andrei Manacop. All rights reserved.
      </motion.div>
    </footer>
  )
}

export default Footer
