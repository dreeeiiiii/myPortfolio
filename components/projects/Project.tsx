import React, { useState, type JSX } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/700.css';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  mainLink: string;
  github?: string;
  liveDemo?: string;
  techStack: string[];
  techDescription: string;
}

interface TechStackModal {
  stack: string[];
  description: string;
}

const finishedProjects: Project[] = [
  {
    id: 1,
    title: 'Carbohydrates Educational Game',
    description: 'An interactive web game teaching carbohydrates concepts through puzzles and activities.',
    image: '/projects/carbohydrates-game.png',
    mainLink: 'https://carbohydratesgame.onrender.com/',
    github: 'https://github.com/dreeeiiiii/CarbohydratesGame',
    liveDemo: 'https://carbohydratesgame.onrender.com/',
    techStack: ['React', 'Vite', 'TailwindCSS', 'JavaScript', 'HTML', 'CSS'],
    techDescription: 'React and Vite for fast frontend, TailwindCSS for styling, JavaScript/HTML/CSS for game logic and interactivity.',
  },
  {
    id: 2,
    title: 'Word Count App',
    description: 'A word-counting tool to analyze text length and frequency.',
    image: '/projects/word-count.png',
    mainLink: 'https://word-count-uiol.onrender.com/',
    github: 'https://github.com/Liooouu/Word-Count',
    liveDemo: 'https://word-count-uiol.onrender.com/',
    techStack: ['JavaScript', 'HTML', 'CSS'],
    techDescription: 'JavaScript for counting logic, HTML/CSS for layout and styling.',
  },
];

const ongoingProjects: Project[] = [
  {
    id: 3,
    title: 'CJC Scheduling System',
    description: 'A scheduling system for CJC that allows event management and timetable coordination. Built with PERN stack.',
    image: '/projects/cjc-sched.png',
    mainLink: 'https://github.com/Liooouu/CJCSched',
    github: 'https://github.com/Liooouu/CJCSched',
    techStack: ['PostgreSQL', 'Express', 'React', 'Node.js', 'TypeScript'],
    techDescription: 'Full PERN stack for backend, frontend, and database management.',
  },
  {
    id: 4,
    title: 'Menu App',
    description: 'A restaurant menu management app with categories and item details. Built with the PERN stack.',
    image: '/projects/menu-app.png',
    mainLink: 'https://github.com/dreeeiiiii/menuapp',
    github: 'https://github.com/dreeeiiiii/menuapp',
    techStack: ['PostgreSQL', 'Express', 'React', 'Node.js', 'TypeScript'],
    techDescription: 'Backend in Node.js & Express, PostgreSQL for data storage, React with TypeScript for the frontend.',
  },
];

export default function ProjectsSection(): JSX.Element {
  const [selectedTechStack, setSelectedTechStack] = useState<TechStackModal | null>(null);
  const [finishedItems, setFinishedItems] = useState<Project[]>(finishedProjects);
  const [ongoingItems, setOngoingItems] = useState<Project[]>(ongoingProjects);

  const handleFinishedNext = (): void => {
    setFinishedItems((prevItems) => {
      const newItems = [...prevItems];
      const firstItem = newItems.shift();
      if (firstItem) newItems.push(firstItem);
      return newItems;
    });
  };

  const handleFinishedPrev = (): void => {
    setFinishedItems((prevItems) => {
      const newItems = [...prevItems];
      const lastItem = newItems.pop();
      if (lastItem) newItems.unshift(lastItem);
      return newItems;
    });
  };

  const handleOngoingNext = (): void => {
    setOngoingItems((prevItems) => {
      const newItems = [...prevItems];
      const firstItem = newItems.shift();
      if (firstItem) newItems.push(firstItem);
      return newItems;
    });
  };

  const handleOngoingPrev = (): void => {
    setOngoingItems((prevItems) => {
      const newItems = [...prevItems];
      const lastItem = newItems.pop();
      if (lastItem) newItems.unshift(lastItem);
      return newItems;
    });
  };

  const renderCarousel = (items: Project[], handleNext: () => void, handlePrev: () => void, isFinished: boolean): JSX.Element => (
    <div className="relative w-full h-[500px] mb-12">
      <div className="relative w-full h-full">
        {items.map((project: Project, index: number) => (
          <motion.div
            key={project.id}
            className="absolute rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 ease-in-out"
            style={{
              backgroundImage: `url(${project.image})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              zIndex: items.length - index,
            }}
            initial={false}
            animate={{
              width: index === 0 || index === 1 ? '100%' : '280px',
              height: index === 0 || index === 1 ? '100%' : '350px',
              top: index === 0 || index === 1 ? '0' : '50%',
              left:
                index === 0 || index === 1
                  ? '0'
                  : index === 2
                  ? '50%'
                  : index === 3
                  ? 'calc(50% + 300px)'
                  : 'calc(50% + 600px)',
              transform:
                index === 0 || index === 1
                  ? 'translate(0, 0)'
                  : 'translate(0, -50%)',
              opacity: index >= 4 ? 0 : 1,
            }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            {/* Status Badge */}
            {index === 1 && (
              <motion.div
                className={`absolute top-6 right-6 px-4 py-2 backdrop-blur-md rounded-full text-white text-sm font-bold ${
                  isFinished ? 'bg-emerald-500/80' : 'bg-orange-500/80'
                }`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: 'spring' }}
              >
                {isFinished ? '✓ Live' : '🚧 In Progress'}
              </motion.div>
            )}

            {/* Content - Only visible on second item */}
            {index === 1 && (
              <div className="absolute top-1/2 left-8 sm:left-16 transform -translate-y-1/2 max-w-lg text-white z-10 px-4">
                <motion.h2
                  className="text-3xl sm:text-5xl font-bold uppercase mb-4"
                  initial={{ opacity: 0, y: 100, filter: 'blur(33px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
                  transition={{ duration: 1, ease: 'easeInOut' }}
                >
                  {project.title}
                </motion.h2>
                <motion.p
                  className="text-base sm:text-lg mb-4 text-white/90"
                  initial={{ opacity: 0, y: 100, filter: 'blur(33px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
                  transition={{ duration: 1, ease: 'easeInOut', delay: 0.3 }}
                >
                  {project.description}
                </motion.p>

                {/* Tech Stack Pills */}
                <motion.div
                  className="flex flex-wrap gap-2 mb-6"
                  initial={{ opacity: 0, y: 100, filter: 'blur(33px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
                  transition={{ duration: 1, ease: 'easeInOut', delay: 0.4 }}
                >
                  {project.techStack.slice(0, 4).map((tech: string, idx: number) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-emerald-800/60 backdrop-blur-sm border border-emerald-500/40 rounded-full text-emerald-200 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-3 py-1 bg-emerald-800/60 backdrop-blur-sm border border-emerald-500/40 rounded-full text-emerald-200 text-xs">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </motion.div>

                {/* Buttons */}
                <motion.div
                  className="flex flex-wrap gap-3"
                  initial={{ opacity: 0, y: 100, filter: 'blur(33px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
                  transition={{ duration: 1, ease: 'easeInOut', delay: 0.6 }}
                >
                  {project.liveDemo && (
                    <motion.a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-emerald-950 font-bold rounded-xl shadow-lg shadow-amber-500/30 text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Live Demo
                    </motion.a>
                  )}
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      GitHub
                    </motion.a>
                  )}
                  <motion.button
                    onClick={() => setSelectedTechStack({ stack: project.techStack, description: project.techDescription })}
                    className="px-6 py-3 bg-cyan-500/80 backdrop-blur-sm text-white font-semibold rounded-xl text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Tech Stack
                  </motion.button>
                </motion.div>
              </div>
            )}

            {/* Hover glow for thumbnails */}
            {index > 1 && (
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 rounded-3xl opacity-0 blur-xl"
                whileHover={{ opacity: 0.3 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 z-20">
        <motion.button
          onClick={handlePrev}
          className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md border-2 border-emerald-500/30 text-white flex items-center justify-center font-bold text-xl shadow-lg"
          whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
          whileTap={{ scale: 0.98 }}
        >
          ◁
        </motion.button>
        <motion.button
          onClick={handleNext}
          className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md border-2 border-emerald-500/30 text-white flex items-center justify-center font-bold text-xl shadow-lg"
          whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
          whileTap={{ scale: 0.98 }}
        >
          ▷
        </motion.button>
      </div>
    </div>
  );

  return (
    <section id="projects" className="relative min-h-screen px-6 py-20 sm:py-32 bg-gradient-to-b from-emerald-950 via-teal-950 to-emerald-900 text-white font-[Poppins] overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Dynamic Gradient Orbs */}
      <motion.div
        className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-gradient-to-br from-amber-500/20 to-transparent rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], x: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] bg-gradient-to-tl from-cyan-500/20 to-transparent rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], y: [0, -40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-900/30 backdrop-blur-sm border border-emerald-500/30 rounded-full text-emerald-300 text-sm mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.span
              className="w-2 h-2 bg-emerald-400 rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Portfolio showcase
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-300 via-emerald-300 to-cyan-300 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
        </motion.div>

        {/* Finished Projects Carousel */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full" />
            <h3 className="text-2xl sm:text-3xl font-bold text-amber-300">Finished Projects</h3>
          </div>
          {renderCarousel(finishedItems, handleFinishedNext, handleFinishedPrev, true)}
        </motion.div>

        {/* Ongoing Projects Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-full" />
            <h3 className="text-2xl sm:text-3xl font-bold text-cyan-300">Ongoing Projects</h3>
          </div>
          {renderCarousel(ongoingItems, handleOngoingNext, handleOngoingPrev, false)}
        </motion.div>
      </div>

      {/* Tech Stack Modal */}
      <AnimatePresence>
        {selectedTechStack && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTechStack(null)}
            />

            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 p-6 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative bg-gradient-to-br from-emerald-900 via-teal-900 to-emerald-800 p-8 rounded-3xl max-w-md w-full border border-emerald-500/30 shadow-2xl shadow-emerald-500/20 pointer-events-auto"
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 50 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-3xl opacity-20 blur-xl" />

                <div className="relative">
                  <h3 className="text-2xl font-bold text-amber-300 mb-6 text-center">Tech Stack</h3>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {selectedTechStack.stack.map((tech: string, idx: number) => (
                      <motion.div
                        key={idx}
                        className="px-4 py-3 bg-emerald-800/40 backdrop-blur-sm border border-emerald-500/30 rounded-xl text-emerald-100 text-center font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </div>

                  <p className="text-emerald-100/80 text-sm leading-relaxed mb-6 text-center">
                    {selectedTechStack.description}
                  </p>

                  <motion.button
                    onClick={() => setSelectedTechStack(null)}
                    className="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-emerald-950 font-bold px-6 py-3 rounded-xl shadow-lg shadow-amber-500/30"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Close
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}