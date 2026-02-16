import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence, useScroll, useTransform, MotionValue } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "HOME", href: "#hero" },
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("HOME");
  const { scrollY } = useScroll();
  
  // Transform navbar background on scroll
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(5, 46, 22, 0)", "rgba(5, 46, 22, 0.8)"]
  );

  const toggle = (): void => setOpen((prev) => !prev);

  // Track active section
  useEffect(() => {
    const handleScroll = (): void => {
      const sections = navItems.map(item => ({
        id: item.label,
        element: document.querySelector(item.href)
      }));

      const current = sections.find(section => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) setActiveSection(current.id);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string): void => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  };

  return (
    <>
      {/* Transparent Navbar */}
      <motion.nav
        className="w-full fixed top-0 left-0 z-50"
      >
        <motion.div 
          className="absolute inset-0 backdrop-blur-md border-b border-emerald-500/10"
          style={{ backgroundColor: navBackground }}
        />
        
        <div className="relative max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Animated Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative group cursor-pointer"
          >
            <motion.p 
              className="text-white font-bold text-2xl tracking-tight relative z-10"
              whileHover={{ scale: 1.05 }}
            >
              VAMM
            </motion.p>
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition-opacity"
              initial={{ scale: 0.8 }}
              whileHover={{ scale: 1 }}
            />
          </motion.div>

          {/* Desktop Nav with Pill Indicator */}
          <div className="hidden md:flex items-center gap-2 bg-emerald-900/20 backdrop-blur-md rounded-full px-2 py-2 border border-emerald-500/20">
            {navItems.map((item: NavItem, index: number) => (
              <motion.a
                key={index}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="relative px-6 py-2.5 text-sm font-semibold transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Active indicator */}
                {activeSection === item.label && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                
                <span className={`relative z-10 ${
                  activeSection === item.label 
                    ? "text-white" 
                    : "text-emerald-200 hover:text-white"
                }`}>
                  {item.label}
                </span>

                {/* Hover glow */}
                <motion.div
                  className="absolute inset-0 bg-emerald-400/20 rounded-full opacity-0 blur-md"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Futuristic Mobile Hamburger */}
          <motion.button
            onClick={toggle}
            className="md:hidden relative w-12 h-12 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-400 rounded-full opacity-20 blur-md" />
            <FontAwesomeIcon icon={faBarsStaggered} className="text-white text-xl relative z-10" />
          </motion.button>
        </div>

        {/* Animated bottom glow */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scaleX: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.nav>

      {/* Ultra-Modern Mobile Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop with blur */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggle}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed inset-y-0 right-0 w-full sm:w-96 bg-gradient-to-br from-emerald-950 via-teal-950 to-emerald-900 z-50 overflow-hidden"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Animated background elements */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  className="absolute -top-1/2 -right-1/2 w-full h-full bg-emerald-500/10 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                  }}
                  transition={{ duration: 20, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-teal-500/10 rounded-full blur-3xl"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    rotate: [90, 0, 90],
                  }}
                  transition={{ duration: 15, repeat: Infinity }}
                />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-center items-center px-8">
                {/* Close Button */}
                <motion.button
                  onClick={toggle}
                  className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center group"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close menu"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-20 blur-md transition-opacity" />
                  <FontAwesomeIcon icon={faXmark} className="text-white text-2xl relative z-10" />
                </motion.button>

                {/* Menu Items */}
                <div className="space-y-6 w-full">
                  {navItems.map((item: NavItem, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <motion.a
                        href={item.href}
                        onClick={(e) => handleScroll(e, item.href)}
                        className="group relative block"
                        whileHover={{ x: 10 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="relative overflow-hidden rounded-2xl bg-emerald-900/20 backdrop-blur-sm border border-emerald-500/20 p-6 transition-all duration-300 group-hover:bg-emerald-800/30 group-hover:border-emerald-400/40">
                          {/* Hover gradient */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-400/20 to-emerald-500/0"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "100%" }}
                            transition={{ duration: 0.6 }}
                          />
                          
                          <div className="relative flex items-center justify-between">
                            <span className="text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                              {item.label}
                            </span>
                            <motion.div
                              className="w-2 h-2 rounded-full bg-emerald-400"
                              animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.5, 1, 0.5],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: index * 0.2,
                              }}
                            />
                          </div>

                          {/* Progress bar on active */}
                          {activeSection === item.label && (
                            <motion.div
                              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-400"
                              layoutId="mobileActive"
                            />
                          )}
                        </div>
                      </motion.a>
                    </motion.div>
                  ))}
                </div>

                {/* Footer decoration */}
                <motion.div
                  className="absolute bottom-8 left-1/2 -translate-x-1/2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex gap-2">
                    {[...Array(3)].map((_, i: number) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 rounded-full bg-emerald-400"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;