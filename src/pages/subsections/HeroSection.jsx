import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion as Motion } from "framer-motion";
import { projects } from "../../utils/dataProvider";

const HeroSection = () => {
  // Take the first project for the floating card
  const featuredProject = projects[0];

  return (
    <section
      id="home"
      className="relative min-h-screen min-h-[100dvh] flex items-center justify-center dev-hero-gradient text-white overflow-hidden"
      aria-label="Introduction"
    >
      <div className="hero-backdrop" aria-hidden>
        <div className="hero-backdrop__mesh" />
        <div className="hero-backdrop__orb hero-backdrop__orb--a" />
        <div className="hero-backdrop__orb hero-backdrop__orb--b" />
        <div className="hero-backdrop__orb hero-backdrop__orb--c" />
        <div className="hero-backdrop__grid" />
        <div className="hero-backdrop__vignette" />
      </div>

      {/* Crosshairs & Grid Lines for Aesthetic */}
      <div className="absolute top-[20%] left-0 w-full border-t border-white/[0.04]" aria-hidden />
      <div className="absolute top-[80%] left-0 w-full border-t border-white/[0.04]" aria-hidden />
      <div className="absolute left-[20%] top-0 h-full border-l border-white/[0.04]" aria-hidden />
      <div className="absolute left-[80%] top-0 h-full border-l border-white/[0.04]" aria-hidden />
      <div className="absolute top-[20%] left-[20%] -translate-x-1/2 -translate-y-1/2 text-white/20 text-sm font-mono">+</div>
      <div className="absolute top-[20%] left-[80%] -translate-x-1/2 -translate-y-1/2 text-white/20 text-sm font-mono">+</div>
      <div className="absolute top-[80%] left-[20%] -translate-x-1/2 -translate-y-1/2 text-white/20 text-sm font-mono">+</div>
      <div className="absolute top-[80%] left-[80%] -translate-x-1/2 -translate-y-1/2 text-white/20 text-sm font-mono">+</div>

      {/* Giant Background Text */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none overflow-hidden">
        <Motion.h1
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[28vw] font-black text-white/[0.04] leading-none whitespace-nowrap tracking-tighter"
        >
          AMRIK
        </Motion.h1>
      </div>

      {/* Profile Image (Center Cutout) */}
      <Motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-full max-w-[1200px] h-[95vh] flex items-end justify-center pointer-events-none"
      >
        <img
          src="/hero_image.png"
          alt="Amrik Bhadra"
          className="w-full h-full object-contain object-bottom drop-shadow-2xl"
          fetchPriority="high"
          style={{
            WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 15%, black 100%)",
            maskImage: "linear-gradient(to top, transparent 0%, black 15%, black 100%)",
          }}
        />
      </Motion.div>

      {/* Content Overlay */}
      <div className="relative z-20 w-full max-w-7xl mx-auto h-full min-h-screen px-6 sm:px-10 flex flex-col pointer-events-none">
        
        {/* Left Side: Floating Intro Text */}
        <Motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="absolute left-6 sm:left-10 lg:left-12 top-[10%] max-w-[280px] sm:max-w-[320px] pointer-events-auto"
        >
          <div className="hidden sm:block absolute -left-4 top-2.5 w-2 h-px bg-[var(--accent)]" />
          <p className="text-xs sm:text-sm font-semibold tracking-[0.15em] leading-[1.8] text-white/90 uppercase">
            I build modern digital experiences that are robust, smart and impactful.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="https://github.com/Amrik-Bhadra" target="_blank" rel="noreferrer" className="text-white/50 hover:text-[var(--accent)] transition-colors" aria-label="GitHub"><FaGithub size={20}/></a>
            <a href="https://www.linkedin.com/in/amrik-bhadra/" target="_blank" rel="noreferrer" className="text-white/50 hover:text-[var(--accent)] transition-colors" aria-label="LinkedIn"><FaLinkedin size={20}/></a>
            <a href="mailto:amrik.bhadra@gmail.com" className="text-white/50 hover:text-[var(--accent)] transition-colors" aria-label="Email"><FaEnvelope size={20}/></a>
          </div>
        </Motion.div>

        {/* Bottom Left: Name & Copyright */}
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="absolute left-6 sm:left-10 lg:left-12 bottom-10 sm:bottom-12 pointer-events-auto"
        >
          <p className="text-sm font-mono text-[var(--accent)] mb-1 sm:mb-2 flex items-center gap-2">
            ©{new Date().getFullYear()}
            <span className="w-8 h-px bg-white/20 inline-block" />
          </p>
          <h2 className="text-6xl sm:text-7xl lg:text-[7rem] font-bold leading-none tracking-tighter text-white drop-shadow-lg">
            AMRIK
          </h2>
        </Motion.div>

        {/* Right Side: Floating Project Card */}
        {featuredProject && (
          <Motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="hidden lg:flex absolute right-10 lg:right-16 top-[16%] flex-col bg-white p-2 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 pointer-events-auto cursor-pointer max-w-[220px]"
            onClick={() => window.open(featuredProject.project_link, "_blank")}
          >
            <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
              <img src={featuredProject.thumbnail} alt={featuredProject.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex justify-between items-center px-2 py-2.5 text-[11px] font-bold text-gray-800">
              <span className="flex items-center gap-1.5 truncate">
                <span className="text-[10px] text-[var(--accent)]">✱</span> {featuredProject.title}
              </span>
              <span className="text-gray-400 shrink-0">/ Code</span>
            </div>
          </Motion.div>
        )}

        {/* Bottom Right: Let's Talk Card */}
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="absolute right-6 sm:right-10 lg:right-16 bottom-10 sm:bottom-12 pointer-events-auto"
        >
          <a
            href="#contact"
            className="flex items-center gap-4 bg-[#0a0e14]/80 backdrop-blur-xl border border-white/10 p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.4)] hover:border-[var(--accent)]/50 hover:bg-white/[0.05] transition-all group"
          >
            <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-white/10">
              <img src="/profilePic.jpg" alt="Amrik" className="w-full h-full object-cover object-top scale-110" />
            </div>
            <div className="flex flex-col flex-1 pr-4 min-w-[120px]">
              <div className="flex items-center justify-between w-full mb-1">
                <span className="text-xs text-[var(--text-muted)] font-medium">Let's Connect</span>
                <span className="text-[10px] text-[var(--accent)] animate-pulse">✱</span>
              </div>
              <h3 className="text-sm font-semibold text-white">Amrik Bhadra</h3>
              <p className="text-[10px] text-[var(--text-muted)] group-hover:text-white/80 transition-colors">Java Developer</p>
            </div>
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-black group-hover:bg-[var(--accent)] group-hover:text-white transition-colors shrink-0 shadow-inner">
              <MdOutlineArrowOutward size={16} />
            </div>
          </a>
        </Motion.div>

        {/* Mobile Only: Scroll Indicator */}
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex lg:hidden flex-col items-center pointer-events-auto"
        >
          <a href="#about" aria-label="Scroll down">
            <FaChevronDown className="animate-bounce text-[var(--accent)] opacity-80" />
          </a>
        </Motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
