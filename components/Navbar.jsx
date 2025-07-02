"use client"
import React, { useState } from 'react'
import Link from 'next/link'
const Navbar = () => {

  const [open, isOpen] = useState(false)


  const toggle = () => {
    isOpen(prev => !prev)
  }
  return (

    <nav className='flex bg-amber-500 h-20 rounded-bl-full '>
        
        <div className={`w-screen`}>
            <button onClick={toggle} className='bg-stone-950 text-white rounded-full p-3 absolute right-3 top-3 hover:font-extrabold transition hover:ease-in-out duration-150 hover:translate-x-1'>
              x
           </button>
           <ul className={`font-figtree text-white text-3xl bg-gradient-to-b from-stone-950 to-emerald-800
                          flex flex-col items-center h-screen space-y-10 justify-center
                          transition-all duration-1200 ease-in-out absolute right-0 w-screen rounded-bl-
                          ${open
                            ? "opacity-100 pointer-events-auto -translate-x-0"
                            : "opacity-0 pointer-events-none translate-x-10 "
                          }`}>
            <button onClick={toggle} className='bg-transparent text-white rounded-full p-3 absolute left-5 top-3 hover:font-extrabold transition hover:ease-in-out duration-150 hover:translate-z'>
              x
             </button>
              <Link href="#" className='hover:font-extrabold transition hover:ease-in-out duration-150 hover:translate-x-1'> HOME</Link>
              <Link href="#" className='hover:font-extrabold transition hover:ease-in-out duration-150 hover:translate-x-1'> ABOUT</Link>
              <Link href="#" className='hover:font-extrabold transition hover:ease-in-out duration-150 hover:translate-x-1'> PROJECTS</Link>
              <Link href="#" className='hover:font-extrabold transition hover:ease-in-out duration-150 hover:translate-x-1'> CONTACT</Link>
              <Link href="#" className='hover:font-extrabold transition hover:ease-in-out duration-150 hover:translate-x-1'> RESUME</Link>

           </ul>
            
        </div>

      
    </nav>
  )
}

export default Navbar