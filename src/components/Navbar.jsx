import React, { useState, useEffect } from "react";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { BsStack } from "react-icons/bs";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    // Handle initial load: If user is at the top, default to "home"
    const handleInitialActiveSection = () => {
      if (window.scrollY === 0) {
        setActiveSection("home");
      }
    };

    handleInitialActiveSection();
    window.addEventListener("scroll", handleInitialActiveSection);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleInitialActiveSection);
    };
  }, []);

  const navItems = [
    { href: "#home", icon: <GoHomeFill />, label: "Home" },
    { href: "#about", icon: <FaUser />, label: "About" },
    { href: "#projects", icon: <BsStack />, label: "Skills" },
    { href: "#contact", icon: <FaEnvelope />, label: "Contact" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden lg:flex fixed z-50 right-10 flex-col gap-y-6 bg-transparent backdrop-blur-xl shadow-xl p-4 rounded-2xl top-1/2 -translate-y-1/2 border border-white/20">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className={`relative group text-xl transition-transform duration-300 ease-in-out hover:scale-110 ${
              activeSection === item.href.substring(1) ? "text-white" : "text-[#ccc]"
            }`}
            onClick={() => setActiveSection(item.href.substring(1))} // Update active section on click
          >
            {item.icon}
            {/* Tooltip */}
            <span className="absolute right-full top-1/2 -translate-y-1/2 mr-5 bg-white text-black text-xs py-1 px-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              {item.label}
            </span>
          </a>
        ))}
      </nav>

      {/* Mobile Navbar */}
      <nav className="fixed z-50 bottom-5 flex flex-row gap-x-8 bg-transparent backdrop-blur-xl shadow-xl p-4 rounded-2xl left-1/2 -translate-x-1/2 border border-white/20 lg:hidden">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className={`relative group flex flex-col items-center text-xl transition-transform duration-300 ease-in-out hover:scale-110 ${
              activeSection === item.href.substring(1) ? "text-white" : "text-[#ccc]"
            }`}
            onClick={() => setActiveSection(item.href.substring(1))} // Update active section on click
          >
            {item.icon}
            {/* Tooltip for small screens */}
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 bg-white text-black text-xs py-1 px-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none md:hidden">
              {item.label}
            </span>
            {/* Label below icon for md screens */}
            <span className="hidden md:block text-xs mt-1">{item.label}</span>
          </a>
        ))}
      </nav>
    </>
  );
};

export default Navbar;
