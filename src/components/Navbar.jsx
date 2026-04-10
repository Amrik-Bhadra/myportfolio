import React, { useState, useEffect } from "react";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { BsStack } from "react-icons/bs";
import { FaBriefcase, FaCode } from "react-icons/fa6";

const navItems = [
  { href: "#home", icon: GoHomeFill, label: "Home" },
  { href: "#about", icon: FaUser, label: "About" },
  { href: "#experience", icon: FaBriefcase, label: "Work" },
  { href: "#skills", icon: BsStack, label: "Skills" },
  { href: "#projects", icon: FaCode, label: "Projects" },
  { href: "#contact", icon: FaEnvelope, label: "Contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.35, rootMargin: "-10% 0px -45% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    const handleInitialActiveSection = () => {
      if (window.scrollY < 80) {
        setActiveSection("home");
      }
    };

    handleInitialActiveSection();
    window.addEventListener("scroll", handleInitialActiveSection, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleInitialActiveSection);
    };
  }, []);

  const linkClass = (id, extra = "") => {
    const active = activeSection === id;
    return [
      "relative flex items-center justify-center rounded-xl transition-all duration-300 outline-none",
      "focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0e14]",
      active
        ? "text-white scale-110 bg-white/[0.08] shadow-[0_0_24px_rgba(56,189,248,0.25)]"
        : "text-[#94a3b8] hover:text-white hover:bg-white/[0.05]",
      extra,
    ].join(" ");
  };

  return (
    <>
      <nav
        className="hidden lg:flex fixed z-50 right-6 xl:right-10 top-1/2 -translate-y-1/2 flex-col gap-y-2
          bg-[#0a0e14]/75 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.45)] p-3 rounded-2xl border border-white/[0.08]"
        aria-label="Section navigation"
      >
        {navItems.map((item) => {
          const id = item.href.slice(1);
          const Icon = item.icon;
          return (
            <a
              key={id}
              href={item.href}
              className={`group ${linkClass(id, "w-11 h-11")}`}
              onClick={() => setActiveSection(id)}
              aria-current={activeSection === id ? "true" : undefined}
              title={item.label}
            >
              <Icon className="text-xl" aria-hidden />
              <span className="sr-only">{item.label}</span>
              {activeSection === id && (
                <span
                  className="absolute -left-1 top-1/2 -translate-y-1/2 h-6 w-1 rounded-full bg-[var(--accent)] shadow-[0_0_12px_var(--accent-glow)]"
                  aria-hidden
                />
              )}
              <span
                className="absolute right-full top-1/2 -translate-y-1/2 mr-4 px-2.5 py-1 rounded-lg text-xs font-medium
                  bg-[var(--bg-card)] text-[var(--text-primary)] border border-white/10 shadow-lg
                  opacity-0 translate-x-1 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0
                  transition-all duration-200 hidden xl:inline-block whitespace-nowrap"
              >
                {item.label}
              </span>
            </a>
          );
        })}
      </nav>

      <nav
        className="lg:hidden fixed z-50 bottom-4 left-1/2 -translate-x-1/2 safe-bottom
          flex flex-row gap-x-1 sm:gap-x-2 bg-[#0a0e14]/85 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]
          px-2 py-2 rounded-2xl border border-white/[0.08] max-w-[calc(100vw-1.5rem)]"
        aria-label="Section navigation"
      >
        {navItems.map((item) => {
          const id = item.href.slice(1);
          const Icon = item.icon;
          return (
            <a
              key={id}
              href={item.href}
              className={linkClass(id, "flex-col gap-0.5 min-w-[3rem] px-2 py-1.5 rounded-xl group")}
              onClick={() => setActiveSection(id)}
              aria-current={activeSection === id ? "true" : undefined}
            >
              <Icon className="text-lg sm:text-xl" aria-hidden />
              <span className="text-[9px] sm:text-[10px] font-medium tracking-tight text-center leading-none max-w-[4.5rem] truncate">
                {item.label}
              </span>
            </a>
          );
        })}
      </nav>
    </>
  );
};

export default Navbar;
