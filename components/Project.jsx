'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

// Demo project list
const projects = [
  {
    title: 'AI Tutor App',
    description: 'An intelligent tutoring platform powered by OpenAI API.',
    image: '/projects/ai-tutor.png',
    link: '#'
  },
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio site built with Next.js and Tailwind.',
    image: '/projects/portfolio.png',
    link: '#'
  },
  {
    title: 'E-Commerce Store',
    description: 'A full-stack online store with payment integration.',
    image: '/projects/ecommerce.png',
    link: '#'
  }
]

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-emerald-900 text-white py-20 px-6 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-12 text-amber-300"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          PROJECTS
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-emerald-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="relative w-full h-52">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 space-y-2">
                <h3 className="text-xl font-bold text-amber-200">{project.title}</h3>
                <p className="text-white/80 text-sm">{project.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
