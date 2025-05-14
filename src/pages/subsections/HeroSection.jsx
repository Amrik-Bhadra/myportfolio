import React, { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";
import { gsap } from "gsap";
// import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const socialRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Hero text fade-in
    tl.fromTo(
      textRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1 }
    )

      // Social Icons slide-in
      .fromTo(
        socialRef.current.children,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, stagger: 0.2, duration: 0.8 },
        "-=0.5"
      )

      // Button scale effect
      .fromTo(
        btnRef.current,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 0.6 },
        "-=0.3"
      );
  }, []);

  return (
    <div
      ref={heroRef}
      id="home"
      className="min-h-screen flex flex-col justify-center items-center gap-y-6 text-center
       bg-[linear-gradient(-20deg,#141414_0%,#1a1a1a_50%,#2b5876_100%)] font-roboto text-white"
    >
      {/* Profile Image with Glow Effect */}
      <motion.div
        className="relative w-45 h-45 rounded-full overflow-hidden border-[3px] border-[#6a85b6]
             shadow-[0_0_30px_rgba(106,133,182,0.8)] mb-3"
        animate={{
          boxShadow: [
            "0 0 30px rgba(106,133,182,0.8)",
            "0 0 50px rgba(106,133,182,1)",
            "0 0 30px rgba(106,133,182,0.8)",
          ],
          scale: [1, 1.05, 1], // Subtle pulsating effect
        }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      >
        <img
          src="/profilePic.jpg"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Text Section */}
      <div ref={textRef} className="flex flex-col gap-y-2 items-center">
        <h1 className="text-4xl sm:text-[2xl] lg:text-[3.5rem] font-semibold text-[#ccc] flex items-center gap-x-3">
          <span
            className="bg-gradient-to-r from-[#6a85b6] to-[#bac8e0] 
            bg-clip-text text-transparent"
          >
            Amrik Bhadra
          </span>
        </h1>
        <motion.h2
          className="text-[1.2rem] sm:text-[3xl] lg:text-[2rem] font-normal text-[#ccc] bg-clip-text 
         drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Frontend Developer | Java | Cloud Enthusiast
        </motion.h2>
      </div>

      {/* Social Media Icons */}
      <div ref={socialRef} className="flex gap-x-5 mt-5">
        {[
          { href: "https://github.com/Amrik-Bhadra", icon: <FaGithub />, label: "GitHub" },
          {
            href: "https://www.linkedin.com/in/amrik-bhadra/",
            icon: <FaLinkedin />,
            label: "LinkedIn",
          },
          {
            href: "mailto:amrik.bhadra@gmail.com",
            icon: <FaEnvelope />,
            label: "Email",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center group"
          >
            {/* Social Icon Link */}
            <motion.a
              whileHover={{ scale: 1.2 }}
              href={item.href}
              target="_blank"
              className="h-[8vh] w-[8vh] text-xl rounded-full flex items-center justify-center 
                   bg-[rgba(51,51,51,0.2)] backdrop-blur-md border border-[rgba(255,255,255,0.2)] 
                   shadow-[1px_1px_13px_rgba(238,238,238,0.3)] hover:bg-[rgba(51,51,51,0.6)] 
                   transition-all ease hover:cursor-pointer relative"
            >
              {item.icon}
            </motion.a>

            {/* Tooltip with White Background & White Pointer */}
            <div
              className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 
                   bg-white text-black text-xs px-3 py-1 rounded-md shadow-md 
                   opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 
                   transition-all duration-300 ease-in-out pointer-events-none
                   before:content-[''] before:absolute before:top-[-5px] before:left-1/2 
                   before:-translate-x-1/2 before:border-[6px] before:border-transparent 
                   before:border-b-white"
            >
              {item.label}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default HeroSection;
