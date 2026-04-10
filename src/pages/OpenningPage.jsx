import React, { useState, useEffect } from "react";
import { FaCode, FaGithub, FaUser } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
import { motion as Motion } from "framer-motion";
import IconDiv from "../components/openning_page_components/IconDiv";
import SolidButton from "../components/buttons/SolidButton";
import { useNavigate } from "react-router-dom";
import { fadeUp, stagger, fadeItem } from "../lib/motion";

const words = ["Portfolio", "Journey"];

const OpenningPage = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const currentWord = words[wordIndex];
    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
      speed = 1200;
    } else if (isDeleting && charIndex === 0) {
      speed = 500;
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    const timeout = setTimeout(() => {
      setText(currentWord.substring(0, charIndex + (isDeleting ? -1 : 1)));
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));

      if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <main className="min-h-screen min-h-[100dvh] flex flex-col gap-y-8 justify-center items-center px-4 dev-hero-gradient relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 80%, rgba(56,189,248,0.15) 0%, transparent 40%), radial-gradient(circle at 80% 20%, rgba(99,102,241,0.12) 0%, transparent 40%)",
        }}
      />

      <Motion.div
        className="relative z-10 flex flex-col items-center gap-y-8 w-full max-w-lg"
        initial="hidden"
        animate="visible"
        variants={stagger(0.12)}
      >
        <Motion.div
          variants={fadeItem}
          className="flex justify-center items-center gap-x-5"
        >
          <IconDiv Icon={FaCode} />
          <IconDiv Icon={FaUser} />
          <IconDiv Icon={FaGithub} />
        </Motion.div>

        <Motion.div
          variants={fadeItem}
          className="flex flex-col gap-y-2 items-center text-center"
        >
          <p className="font-mono text-xs sm:text-sm tracking-[0.25em] uppercase text-[var(--accent)]">
            Amrik Bhadra
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--text-primary)] tracking-tight">
            Welcome To My
          </h1>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-semibold bg-gradient-to-r from-[#7dd3fc] via-[#38bdf8] to-[#a5b4fc] bg-clip-text text-transparent min-h-[1.2em]"
            aria-live="polite"
          >
            {text}
            <span className="inline-block animate-blink text-[#7dd3fc] ml-1 font-mono">
              |
            </span>
          </h1>
        </Motion.div>

        <Motion.div variants={fadeUp}>
          <SolidButton
            text="Enter portfolio"
            Icon={MdNavigateNext}
            onClick={() => navigate("/portfolio")}
          />
        </Motion.div>
      </Motion.div>
    </main>
  );
};

export default OpenningPage;
