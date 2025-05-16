import React from "react";
import HeroSection from "./subsections/HeroSection";
import Navbar from "../components/Navbar";
import AboutSection from "./subsections/AboutSection";
import ContactSection from "./subsections/ContactSection";
import SkillsSection from "./subsections/SkillsSection";
import FooterSection from "./subsections/FooterSection";
import ProjectcertificationSection from "./subsections/ProjectcertificationSection";

const MyPortfolio = () => {
  return (
    <main className="min-h-screen w-screen relative">
      <Navbar />
      <HeroSection />
      <AboutSection/>
      <SkillsSection/>
      <ProjectcertificationSection/>
      <ContactSection/>
      <FooterSection/>
    </main>
  );
};

export default MyPortfolio;
