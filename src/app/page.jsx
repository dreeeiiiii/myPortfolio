"use client";


import ProjectsSection from "../../components/Project";
import ContactSection from "../../components/Contact";
import Footer from "../../components/Footer";
import TechStackSection from "../../components/Techstack";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Navbar from "../../components/Navbar";


export default function Page() {
  return (
    <>
      <Navbar />
      <Hero/>
      <About />
      <ProjectsSection />
      <TechStackSection />
      <ContactSection />
      <Footer />
    </>
  );
}
