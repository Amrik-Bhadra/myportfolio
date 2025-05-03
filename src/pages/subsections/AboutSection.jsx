import React from "react";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa6";
import { PiCertificate } from "react-icons/pi";
import { MdWork } from "react-icons/md";

const AboutSection = () => {
  return (
    <div id="about" className="h-screen w-full flex flex-col items-center justify-center gap-y-8 bg-[#0D1117] font-roboto text-white px-6">
      {/* Title */}
      <motion.h2
        className="text-4xl font-bold text-[#E2E8F0] uppercase tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>

      <div className="w-[85%] flex flex-col gap-8">
        {/* Upper Section */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Side - Description */}
          <motion.div
            className="lg:w-1/2 w-full bg-[#161B22] p-8 rounded-xl shadow-md border border-gray-700"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h3 className="text-3xl font-semibold text-[#8AB4F8]">Who am I?</h3>
            <p className="text-gray-400 mt-4 leading-relaxed">
              Hi, I'm{" "}
              <span className="text-[#60A5FA] font-semibold">
                Amrik Bhadra
              </span>
              , a passionate{" "}
              <span className="text-[#8AB4F8]">Web Developer</span> and{" "}
              <span className="text-[#8AB4F8]">UI Designer</span>. I specialize
              in crafting modern, interactive web applications using{" "}
              <span className="text-[#60A5FA] font-medium">React, GSAP,</span>{" "}
              and <span className="text-[#60A5FA] font-medium">TailwindCSS</span>.
            </p>
            <motion.a
              href="/resume.pdf"
              download
              className="mt-6 inline-block px-6 py-3 bg-[#60A5FA] text-white rounded-full text-lg shadow-lg hover:bg-[#4F8ED9] transition-all"
              whileHover={{ scale: 1.05 }}
            >
              Download Resume
            </motion.a>
          </motion.div>

          {/* Right Side - Education & Key Expertise */}
          <motion.div
            className="lg:w-1/2 w-full bg-[#161B22] p-8 rounded-xl shadow-md border border-gray-700"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* Education */}
            <h3 className="text-3xl font-semibold text-[#8AB4F8]">Education</h3>
            <ul className="text-gray-400 mt-4 space-y-2">
              <li className="border-l-4 border-[#60A5FA] pl-3">
                Bachelor’s in Computer Science - XYZ University
              </li>
              <li className="border-l-4 border-[#60A5FA] pl-3">
                Courses: Web Development, UI/UX, Data Structures
              </li>
            </ul>

            {/* Key Expertise */}
            <h3 className="text-3xl font-semibold text-[#8AB4F8] mt-6">
              Key Expertise
            </h3>
            <div className="flex flex-wrap gap-3 mt-4">
              {[
                "React.js",
                "Node.js",
                "MongoDB",
                "TailwindCSS",
                "GSAP",
                "Framer Motion",
              ].map((skill, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 bg-[#1E2531] border border-gray-600 rounded-lg text-sm text-gray-300 hover:bg-[#293241] transition-all"
                  whileHover={{ scale: 1.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Lower Section: Statistic Cards */}
        <motion.div
          className="flex flex-col md:flex-row justify-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {[
            {
              title: "Total Projects",
              value: "10+",
              icon: <FaCode className="text-[#60A5FA] text-5xl" />,
            },
            {
              title: "Total Certificates",
              value: "15+",
              icon: <PiCertificate className="text-[#60A5FA] text-5xl" />,
            },
            {
              title: "Years of Experience",
              value: "0.6",
              icon: <MdWork className="text-[#60A5FA] text-5xl" />,
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="w-full md:w-1/3 bg-[#161B22] p-6 text-center rounded-xl shadow-md border border-gray-700 flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="p-4 bg-[#1E2531] rounded-full shadow-md">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold text-[#60A5FA] mt-3">
                {stat.value}
              </h3>
              <p className="text-gray-400 mt-2 text-lg">{stat.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
