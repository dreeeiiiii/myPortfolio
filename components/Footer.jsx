'use client';

import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-emerald-950 border-t border-emerald-800 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {/* Contact Info */}
        <div className="space-y-2">
          <h4 className="text-lg font-semibold text-amber-400">Contact</h4>
          <p>Email: <a href="mailto:venandrei@example.com" className="text-white/90 hover:text-amber-300">venandrei@example.com</a></p>
          <p>Location: Philippines</p>
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h4 className="text-lg font-semibold text-amber-400">Quick Links</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-amber-300">Home</a></li>
            <li><a href="#" className="hover:text-amber-300">About</a></li>
            <li><a href="#" className="hover:text-amber-300">Projects</a></li>
            <li><a href="#" className="hover:text-amber-300">Contact</a></li>
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
            <a href="https://github.com/venandrei" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/venandrei" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300">
              <FaLinkedin />
            </a>
            <a href="mailto:venandrei@example.com" className="hover:text-amber-300">
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
