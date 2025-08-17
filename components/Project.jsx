'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const finishedProjects = [
  {
    title: 'Carbohydrates Educational Game',
    description: 'An interactive web game teaching carbohydrates concepts through puzzles and activities.',
    image: '/projects/carbohydrates-game.png',
    mainLink: 'https://carbohydratesgame.onrender.com/',
    github: 'https://github.com/dreeeiiiii/CarbohydratesGame',
    liveDemo: 'https://carbohydratesgame.onrender.com/',
    techStack: ['React', 'Vite', 'TailwindCSS', 'JavaScript', 'HTML', 'CSS'],
    techDescription:
      'React and Vite for fast frontend, TailwindCSS for styling, JavaScript/HTML/CSS for game logic and interactivity.',
  },
  {
    title: 'Word Count App',
    description: 'A word-counting tool to analyze text length and frequency.',
    image: '/projects/word-count.png',
    mainLink: 'https://word-count-uiol.onrender.com/',
    github: 'https://github.com/Liooouu/Word-Count',
    liveDemo: 'https://word-count-uiol.onrender.com/',
    techStack: ['JavaScript', 'HTML', 'CSS'],
    techDescription: 'JavaScript for counting logic, HTML/CSS for layout and styling.',
  },
]

const ongoingProjects = [
  {
    title: 'CJC Scheduling System',
    description: (
      <>
        A scheduling system for CJC that allows event management and timetable coordination. Built with PERN stack.{' '}
        <a
          href="https://github.com/Liooouu/CJCSched"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          GitHub
        </a>
      </>
    ),
    image: '/projects/cjc-sched.png',
    mainLink: 'https://github.com/Liooouu/CJCSched',
    techStack: ['PostgreSQL', 'Express', 'React', 'Node.js', 'TypeScript'],
    techDescription: 'Full PERN stack for backend, frontend, and database management.',
  },
  {
    title: 'Menu App',
    description: (
      <>
        A restaurant menu management app with categories and item details. Built with the PERN stack.{' '}
        <a
          href="https://github.com/dreeeiiiii/menuapp"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          GitHub
        </a>
      </>
    ),
    image: '/projects/menu-app.png',
    mainLink: 'https://github.com/dreeeiiiii/menuapp',
    techStack: ['PostgreSQL', 'Express', 'React', 'Node.js', 'TypeScript'],
    techDescription: 'Backend in Node.js & Express, PostgreSQL for data storage, React with TypeScript for the frontend.',
  },
]

export default function ProjectsSection() {
  const [selectedTechStack, setSelectedTechStack] = useState(null)

  const renderProjects = (projects) =>
    projects.map((project, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.05, y: -5 }}
        whileTap={{ scale: 0.97 }}
        className="bg-gradient-to-br from-emerald-700 to-emerald-800 rounded-3xl overflow-hidden shadow-2xl hover:shadow-emerald-900 transition-shadow duration-300 flex flex-col"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
      >
        <div className="w-full h-56">
          <a
            href={project.mainLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block w-full h-full"
          >
            <Image
              priority
              src={project.image}
              alt={project.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </a>
        </div>

        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-amber-200 mb-2 hover:text-amber-300 transition">
              <a href={project.mainLink} target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
            </h3>
            <p className="text-white/80 text-sm mb-4">{project.description}</p>
          </div>

          {project.github && project.liveDemo && (
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-400 text-emerald-900 font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-amber-500 hover:scale-105 transition transform duration-300"
              >
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-white/30 hover:scale-105 transition transform duration-300"
              >
                GitHub
              </a>
              <button
                onClick={() =>
                  setSelectedTechStack({
                    stack: project.techStack,
                    description: project.techDescription,
                  })
                }
                className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-blue-600 hover:scale-105 transition transform duration-300"
              >
                Tech Stack
              </button>
            </div>
          )}
        </div>
      </motion.div>
    ))

  return (
    <section id="projects" className="bg-emerald-900 text-white py-20 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-12 text-amber-300"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          MY PROJECTS
        </motion.h2>

        <h3 className="text-2xl font-semibold mb-6 text-amber-200">Finished Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12" >
          {renderProjects(finishedProjects)}
        </div>

        <h3 className="text-2xl font-semibold mb-6 text-amber-200">Ongoing Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {renderProjects(ongoingProjects)}
        </div>
      </div>

      {/* Tech Stack Modal */}
      <AnimatePresence>
        {selectedTechStack && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-emerald-800 p-6 rounded-3xl max-w-sm w-full text-center shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <h3 className="text-xl font-bold text-amber-200 mb-4">Tech Stack</h3>
              <ul className="text-white/80 mb-4 space-y-2">
                {selectedTechStack.stack.map((tech, idx) => (
                  <li key={idx}>• {tech}</li>
                ))}
              </ul>
              {selectedTechStack.description && (
                <p className="text-white/70 text-sm mb-4">{selectedTechStack.description}</p>
              )}
              <button
                onClick={() => setSelectedTechStack(null)}
                className="bg-amber-300 text-emerald-900 font-semibold px-4 py-2 rounded-lg hover:bg-amber-400 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
