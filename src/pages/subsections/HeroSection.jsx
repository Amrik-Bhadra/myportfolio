import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from "react-icons/fa";
import { motion as Motion } from "framer-motion";
import { fadeUp, stagger, fadeItem, viewportOnce } from "../../lib/motion";

const socialLinks = [
  {
    href: "https://github.com/Amrik-Bhadra",
    icon: FaGithub,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/amrik-bhadra/",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  {
    href: "mailto:amrik.bhadra@gmail.com",
    icon: FaEnvelope,
    label: "Email",
  },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen min-h-[100dvh] flex flex-col justify-center items-center gap-y-8 text-center dev-hero-gradient text-white px-4 pt-8 pb-16 overflow-hidden"
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

      <Motion.div
        className="relative z-10 w-[min(92vw,720px)] flex flex-col items-center gap-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={stagger(0.1)}
      >
        <Motion.div variants={fadeItem} className="relative mb-1 flex justify-center">
          <div className="hero-avatar-wrap">
            <span className="hero-avatar-ripple" />
            <span className="hero-avatar-ripple hero-avatar-ripple--2" />
            <span className="hero-avatar-ripple hero-avatar-ripple--3" />
            <div className="hero-avatar-ring">
              <div className="hero-avatar-inner">
                <img
                  src="/profilePic.jpg"
                  alt="Amrik Bhadra"
                  className="w-full h-full object-cover"
                  width={172}
                  height={172}
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </Motion.div>

        <Motion.div variants={fadeUp} className="flex flex-col gap-y-3 items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight flex flex-wrap justify-center gap-x-3">
            <span className="bg-gradient-to-r from-[#bae6fd] via-[#38bdf8] to-[#a5b4fc] bg-clip-text text-transparent">
              Amrik Bhadra
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-normal text-[var(--text-muted)] max-w-xl leading-relaxed">
            Frontend Developer · Java · Cloud
          </p>
        </Motion.div>

        <Motion.div
          variants={fadeItem}
          className="flex flex-wrap justify-center gap-4 mt-2"
          role="list"
          aria-label="Social links"
        >
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="relative flex flex-col items-center group" role="listitem">
                <Motion.a
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="h-12 w-12 sm:h-14 sm:w-14 text-lg sm:text-xl rounded-full flex items-center justify-center
                    bg-white/[0.06] backdrop-blur-md border border-white/15
                    shadow-[0_8px_32px_rgba(0,0,0,0.35)] hover:bg-white/[0.12] hover:border-[#38bdf8]/40
                    transition-colors duration-300"
                >
                  <Icon />
                </Motion.a>
                <div
                  className="absolute bottom-[-38px] left-1/2 -translate-x-1/2 
                    bg-[var(--bg-card)] text-[var(--text-primary)] text-xs px-3 py-1 rounded-md border border-white/10
                    opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 
                    transition-all duration-300 pointer-events-none whitespace-nowrap
                    before:content-[''] before:absolute before:top-[-5px] before:left-1/2 
                    before:-translate-x-1/2 before:border-[6px] before:border-transparent before:border-b-[var(--bg-card)]"
                >
                  {item.label}
                </div>
              </div>
            );
          })}
        </Motion.div>

        <Motion.div variants={fadeUp} className="mt-4">
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors group"
          >
            <span className="font-mono tracking-widest uppercase text-[10px] sm:text-xs">
              Scroll
            </span>
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] group-hover:border-[#38bdf8]/50">
              <FaChevronDown className="animate-bounce text-[var(--accent)] opacity-90" aria-hidden />
            </span>
          </a>
        </Motion.div>
      </Motion.div>
    </section>
  );
};

export default HeroSection;
