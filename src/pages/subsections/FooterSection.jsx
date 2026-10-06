import React from "react";
import { motion as Motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa6";
import { fadeUp, slideRight, scaleUp, stagger, viewportOnce } from "../../lib/motion";

const pageLinks = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact Me", href: "#contact" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Amrik-Bhadra" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/amrik-bhadra/" },
  { label: "Email", href: "mailto:amrik.bhadra@gmail.com" },
];

const FooterNavLink = ({ href, label, highlight, external }) => (
  <li>
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`group block pb-4 border-b transition-all duration-300 ${
        highlight
          ? "border-[var(--accent)] text-[var(--accent)]"
          : "border-white/20 text-white hover:text-[var(--accent)] hover:border-[var(--accent)]"
      }`}
    >
      <span className="text-sm sm:text-base font-bold uppercase tracking-wide">
        {label}
      </span>
    </a>
  </li>
);

const FooterSection = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] bg-[#0a0e14] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-12 md:py-16">
        <Motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0.1)}
        >
          {/* ─── LEFT COLUMN (60%): Image + Nav Links + CTA ─── */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Top image strip */}
            <Motion.div
              variants={scaleUp}
              className="w-full lg:w-[95%] h-[200px] rounded-xl overflow-hidden border border-white/[0.06] bg-[var(--bg-card)]"
            >
              <img
                src="/footer_coverpic.png"
                alt="Amrik Bhadra"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </Motion.div>

            {/* Navigation Columns */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-8 w-full lg:w-[95%] mt-4">
              {/* Pages */}
              <Motion.div variants={slideRight} className="flex flex-col gap-3">
                <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--text-muted)] mb-2">
                  Pages
                </h4>
                <ul className="flex flex-col gap-3">
                  {pageLinks.map((link) => (
                    <FooterNavLink
                      key={link.label}
                      href={link.href}
                      label={link.label}
                      highlight={link.highlight}
                    />
                  ))}
                </ul>
              </Motion.div>

              {/* Social Media */}
              <Motion.div variants={slideRight} className="flex flex-col gap-3">
                <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--text-muted)] mb-2">
                  Social Media
                </h4>
                <ul className="flex flex-col gap-3">
                  {socialLinks.map((link) => (
                    <FooterNavLink
                      key={link.label}
                      href={link.href}
                      label={link.label}
                      external={link.href.startsWith("http")}
                    />
                  ))}
                </ul>
              </Motion.div>
            </div>

            {/* Let's Talk + CTA */}
            <Motion.div variants={fadeUp} className="flex flex-col gap-6 mt-6 w-full lg:w-[95%]">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--text-muted)] mb-3">
                  Let's Talk <span className="text-[var(--accent)]">✱</span>
                </p>
                <a 
                  href="mailto:amrik.bhadra@gmail.com" 
                  className="flex items-center justify-between border-b border-white/15 pb-3 hover:border-[var(--accent)] transition-colors group"
                >
                  <span className="text-sm sm:text-base text-white/70 font-medium italic group-hover:text-white transition-colors">
                    amrik.bhadra@gmail.com
                  </span>
                  <FaEnvelope className="text-white/30 group-hover:text-[var(--accent)] transition-colors" size={14} />
                </a>
              </div>

              <a
                href="#contact"
                className="relative inline-flex items-center justify-center pl-8 pr-16 py-3 sm:py-4 w-full max-w-[280px] rounded-full bg-[var(--accent)] text-white font-bold text-xs sm:text-sm uppercase tracking-wider hover:brightness-110 hover:shadow-[0_0_20px_var(--accent-glow)] transition-all duration-300 group"
              >
                <span>Let's Work Together</span>
                <span className="absolute right-1.5 sm:right-2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white text-[var(--accent)] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaArrowRight size={14} />
                </span>
              </a>
            </Motion.div>
          </div>

          {/* ─── RIGHT COLUMN (40%): Giant Name + Portrait ─── */}
          <div className="lg:col-span-5 flex flex-col items-end gap-0 relative">
            {/* Giant AMRIK text */}
            <Motion.h2
              variants={fadeUp}
              className="text-7xl sm:text-7xl md:text-8xl lg:text-[5.5rem] xl:text-[7.5rem] font-black leading-none tracking-tighter text-white uppercase text-right select-none"
              style={{ fontFamily: "var(--font-display)" }}
            >
              AMRIK<span className="text-[var(--accent)]">.</span>
            </Motion.h2>

            {/* Large portrait image */}
            <Motion.div
              variants={scaleUp}
              className="w-full max-w-[420px] h-[320px] sm:h-[380px] md:h-[440px] rounded-2xl overflow-hidden border border-white/[0.06] mt-4 self-end"
            >
              <img
                src="/footer_profile.png"
                alt="Amrik Bhadra"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </Motion.div>
          </div>
        </Motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
