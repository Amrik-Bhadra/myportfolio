import React, { useState, useEffect } from "react";
import { FaCode, FaGithub, FaUser } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
import IconDiv from "../components/openning_page_components/IconDiv";
import SolidButton from "../components/buttons/SolidButton";
import { useNavigate } from "react-router-dom";


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
    <main
      className="h-screen flex flex-col gap-y-8 justify-center items-center 
        bg-[linear-gradient(-20deg,#141414_0%,#1a1a1a_50%,#2b5876_100%)]"
    >
      {/* Icons Section */}
      <div className="flex justify-center items-center gap-x-5">
        <IconDiv Icon={FaCode} />
        <IconDiv Icon={FaUser} />
        <IconDiv Icon={FaGithub} />
      </div>

      {/* Text Section */}
      <div className="flex flex-col gap-y-1 items-center">
        <h1 className="text-5xl font-semibold text-[#ccc]">Welcome To My</h1>
        <h1
          className="text-[3rem] font-semibold bg-gradient-to-r from-[#6a85b6] to-[#bac8e0] 
            bg-clip-text text-transparent"
        >
          {text}
          <span className="inline-block animate-blink text-[#bac8e0] ml-2">|</span>
        </h1>
      </div>

      {/* Let's Go Button */}
      <SolidButton text={"Let's Go"} Icon={MdNavigateNext} onClick={()=>{navigate('/portfolio')}}/>
    </main>
  );
};

export default OpenningPage;
