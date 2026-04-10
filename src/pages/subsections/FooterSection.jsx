import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const FooterSection = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-[#0a0e14]/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-12 flex flex-col gap-y-12 md:flex-row md:justify-between md:items-start gap-x-8">
        <div className="flex flex-col gap-y-3 items-center md:items-start text-center md:text-left">
          <h2 className="text-[var(--text-primary)] font-semibold text-xl">Amrik Bhadra</h2>
          <p className="flex items-center justify-center md:justify-start gap-x-2 text-[var(--accent)] text-sm sm:text-base">
            <MdEmail className="shrink-0" aria-hidden />
            <a href="mailto:amrik.bhadra@gmail.com" className="hover:underline underline-offset-4">
              amrik.bhadra@gmail.com
            </a>
          </p>
          <p className="flex items-center justify-center md:justify-start gap-x-2 text-[var(--accent)] text-sm sm:text-base">
            <FaPhoneAlt className="shrink-0" aria-hidden />
            <a href="tel:+917739226540" className="hover:underline underline-offset-4">
              +91-7739226540
            </a>
          </p>
        </div>

        <nav
          className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-10 text-center sm:text-left"
          aria-label="Footer"
        >
          <div className="flex flex-col items-center sm:items-start gap-2">
            <h4 className="text-[var(--accent)] font-semibold text-sm uppercase tracking-widest">
              About
            </h4>
            <ul className="text-sm text-[var(--text-muted)] flex flex-col gap-y-2">
              <li>
                <a href="#about" className="hover:text-[var(--text-primary)] transition-colors">
                  Education
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[var(--text-primary)] transition-colors">
                  Coding profile
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[var(--text-primary)] transition-colors">
                  Location
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[var(--text-primary)] transition-colors">
                  Experience
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-start gap-2">
            <h4 className="text-[var(--accent)] font-semibold text-sm uppercase tracking-widest">
              Skills
            </h4>
            <ul className="text-sm text-[var(--text-muted)] flex flex-col gap-y-2">
              <li>
                <a href="#skills" className="hover:text-[var(--text-primary)] transition-colors">
                  Frontend
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[var(--text-primary)] transition-colors">
                  Backend
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[var(--text-primary)] transition-colors">
                  Cloud &amp; tools
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-start gap-2">
            <h4 className="text-[var(--accent)] font-semibold text-sm uppercase tracking-widest">
              Showcase
            </h4>
            <ul className="text-sm text-[var(--text-muted)] flex flex-col gap-y-2">
              <li>
                <a href="#projects" className="hover:text-[var(--text-primary)] transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[var(--text-primary)] transition-colors">
                  Achievements
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[var(--text-primary)] transition-colors">
                  Certificates
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[var(--text-primary)] transition-colors">
                  Hackathons
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-start gap-2">
            <h4 className="text-[var(--accent)] font-semibold text-sm uppercase tracking-widest">
              Credits
            </h4>
            <ul className="text-sm text-[var(--text-muted)] flex flex-col gap-y-2">
              <li>
                <a
                  href="https://react-icons.github.io/react-icons/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--text-primary)] transition-colors"
                >
                  React Icons
                </a>
              </li>
              <li>Icon sets via IconScout / vendors</li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="border-t border-white/[0.06] py-4 text-center text-xs text-[var(--text-muted)] font-mono">
        © {year} Amrik Bhadra · Built with React &amp; Vite
      </div>
    </footer>
  );
};

export default FooterSection;
