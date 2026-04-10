import React from "react";
import HeroSection from "./subsections/HeroSection";
import Navbar from "../components/Navbar";
import AboutSection from "./subsections/AboutSection";
import ExperienceSection from "./subsections/ExperienceSection";
import ContactSection from "./subsections/ContactSection";
import SkillsSection from "./subsections/SkillsSection";
import FooterSection from "./subsections/FooterSection";
import ProjectcertificationSection from "./subsections/ProjectcertificationSection";

const MyPortfolio = () => {
  return (
    <main className="min-h-screen w-full max-w-[100vw] relative dev-grid-bg pb-28 lg:pb-0">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectcertificationSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
};

export default MyPortfolio;
