'use client'

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'CONTACT', href: '#contact' },
  { label: 'RESUME', href: '#' }
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(prev => !prev)

  return (
    <nav className="w-full bg-emerald-950 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand */}
        <p className="text-white font-bold text-2xl tracking-tight">VAMM</p>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-white hover:text-emerald-400 transition duration-200 font-semibold px-4 py-2 hover:bg-emerald-800 rounded-xl"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={toggle}
          className="md:hidden text-white text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={faBarsStaggered} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-emerald-950 bg-opacity-95 backdrop-blur-sm flex flex-col justify-center items-center space-y-10 text-white z-50"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
          >
            {/* Close Button */}
            <button
              onClick={toggle}
              className="absolute top-5 right-6 text-3xl text-white hover:text-emerald-400 transition"
              aria-label="Close menu"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>

            {/* Menu Items */}
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={toggle}
                className="text-2xl font-semibold hover:text-emerald-300 transition transform hover:scale-105"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
