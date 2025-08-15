'use client'

import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const quickLinks = [
  { label: 'Home', targetId: 'hero' },
  { label: 'About', targetId: 'about' },
  { label: 'Projects', targetId: 'projects' },
  { label: 'Contact', targetId: 'contact' },
];

const Footer = () => {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-emerald-950 border-t border-emerald-800 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {/* Contact Info */}
        <div className="space-y-2">
          <h4 className="text-lg font-semibold text-amber-400">Contact</h4>
          <p>Email: <a href="mailto:andreimanacop1@gmail.com" className="text-white/90 hover:text-amber-300">andreimanacop1@gmail.com</a></p>
          <p>Location: Philippines</p>
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h4 className="text-lg font-semibold text-amber-400">Quick Links</h4>
          <ul className="space-y-1">
            {quickLinks.map((link, i) => (
              <li key={i}>
                <button
                  onClick={() => handleScroll(link.targetId)}
                  className="hover:text-amber-300 transition-colors duration-300"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-2"
        >
          <h4 className="text-lg font-semibold text-amber-400">Connect with Me</h4>
          <div className="flex space-x-4 text-2xl">
            <a href="https://github.com/dreeeiiiii" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/andrei-manacop/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300">
              <FaLinkedin />
            </a>
            <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300">
              <FaEnvelope />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="mt-10 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Ven Andrei Manacop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
