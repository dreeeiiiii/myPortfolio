"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(prev => !prev)
  }

  const navItems = ['HOME', 'ABOUT', 'PROJECTS', 'CONTACT', 'RESUME']

  return (
    <nav className="flex bg-stone-800 h-20 rounded-bl-2xl w-full">
      <div className="flex justify-center p-2">
        <Image
          src="/assets/VAM.svg"
          alt="VAM Logo"
          width={80}
          height={50}
          priority
          className="rounded-l-3xl bg-white p-2 shadow-md object-contain"
        />
      </div>

      <div className="w-full relative">
        
        <button
          onClick={toggle}
          className="md:hidden inline-block absolute hover:border hover:border-white bg-transparent text-3xl text-white rounded-2xl p-3 right-3 top-3"
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={faBarsStaggered} />
        </button>

      
        <AnimatePresence>
          {open && (
            <motion.ul
              className="
                opacity-100 pointer-events-auto font-figtree text-white text-xl
                bg-gradient-to-b from-stone-950 to-emerald-800 flex flex-col items-center
                h-screen space-y-10 justify-center w-screen rounded-bl-3xl z-50 absolute top-0 left-0
              "
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 200, opacity: 0 }}
              transition={{
                default: { type: "spring", stiffness: 120, duration: 0.8, damping: 20 },
                exit: { ease: "easeIn", delay: 0 },
              }}
            >
              <button
                onClick={toggle}
                className="bg-transparent text-white rounded-full p-3 absolute left-5 top-3 hover:font-extrabold"
                aria-label="Close menu"
              >
                x
              </button>

              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href="#"
                  className="inline-block text-white font-semibold hover:text-emerald-300 transition ease-in-out duration-150 hover:translate-x-1 will-change-transform"
                  onClick={toggle} 
                >
                  {item}
                </Link>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

       
        <div className="hidden md:flex justify-end items-center flex-row text-white font-semibold gap-7 w-full h-full pr-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href="#"
              className="bg-white text-black px-4 py-2 rounded-bl-4xl rounded-tr-sm font-semibold transition hover:ease-in-out duration-150 hover:translate-y-1 transform"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
