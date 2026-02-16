import { FaArrowUp } from 'react-icons/fa'
import { motion, useScroll, useSpring } from 'framer-motion'
import { useState } from 'react'
import './App.css'
import CursorEffect from '../components/Framer/Floating'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/Hero/Hero'
import About from '../components/about/About'
import ProjectsSection from '../components/projects/Project'
import TechStackSection from '../components/stack/Techstack'
import ContactSection from '../components/contact/Contact'
import Footer from '../components/footer/Footer'

function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, mass: 0.5 })

  const [showButton, setShowButton] = useState(false)

  scrollYProgress.onChange((value) => {
    setShowButton(value > 0.9)
  })

  const scrollToHero = () => {
    const el = document.getElementById('hero')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 h-1 w-full bg-black z-[100] overflow-hidden">
        <motion.div
          className="h-1 bg-gradient-to-r from-amber-400 via-emerald-400 to-cyan-400"
          style={{
            scaleX,
            transformOrigin: '0% 50%',
            filter: "drop-shadow(0 0 6px #fbbf24) drop-shadow(0 0 10px #10b981)"
          }}
        />
      </motion.div>

      {/* Modern Back to Hero Icon */}
      {showButton && (
        <motion.button
          className="fixed bottom-8 right-8 z-[100] w-14 h-14 bg-gradient-to-tr from-emerald-400 via-cyan-400 to-amber-400 rounded-full shadow-lg shadow-cyan-400/50 flex items-center justify-center text-white text-xl"
          onClick={scrollToHero}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, type: 'spring' }}
          whileHover={{ scale: 1.15, rotate: 10 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
          >
            <FaArrowUp />
          </motion.div>
        </motion.button>
      )}

      <CursorEffect />
      <Navbar />
      <Hero />
      <About />
      <ProjectsSection />
      <TechStackSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App
