import React from "react";
import HeroSection from "./subsections/HeroSection";
import Navbar from "../components/Navbar";
import AboutSection from "./subsections/AboutSection";
import ContactSection from "./subsections/ContactSection";

const MyPortfolio = () => {
  return (
    <main className="min-h-screen w-screen relative">
      <Navbar />
      <HeroSection />
      <AboutSection/>
      <ContactSection/>
    </main>
  );
};

export default MyPortfolio;
