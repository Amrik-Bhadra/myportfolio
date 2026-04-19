import { useState } from "react";
import { motion as Motion } from "framer-motion";
import { IoSchool } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaCode, FaLocationDot } from "react-icons/fa6";
import { BsStack } from "react-icons/bs";
import { BiHeadphone } from "react-icons/bi";

import ResumeModal from "../../components/about_components/ResumeModal";

/** Served from /public — stable URL so downloads keep the filename (Vite hashes imported assets). */
const RESUME_PDF = "/Amrik_Bhadra_Resume.pdf";
import CodingProfileCard from "../../components/about_components/CodingProfileCard";
import SectionHeading from "../../components/SectionHeading";

import { codingProfileData, keyExperties } from "../../utils/dataProvider";
import { stagger, fadeItem, viewportOnce } from "../../lib/motion";

const AboutSection = () => {
  const [openResumeModal, setIsOpenResume] = useState(false);

  return (
    <section
      id="about"
      className="relative min-h-screen scroll-mt-24 lg:scroll-mt-12 bg-transparent flex flex-col items-center justify-center gap-y-8 text-white px-4 sm:px-6 py-16 md:py-20"
    >
      <SectionHeading
        eyebrow="Profile"
        title="About Me"
        subtitle="Engineering student focused on full-stack delivery, cloud, and polished user interfaces."
      />

      <Motion.div
        className="w-full max-w-6xl flex flex-col gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={stagger(0.08)}
      >
        <div className="flex flex-col lg:flex-row gap-6">
          <Motion.div variants={fadeItem} className="lg:w-1/2 w-full surface-card p-6 md:p-8">
            <div className="flex gap-x-3">
              <div className="inline-flex h-fit w-fit p-2 rounded-lg items-center justify-center border border-[#38bdf8]/40 bg-[var(--accent-soft)]">
                <FaUser className="text-base text-[var(--accent)]" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-[var(--accent)]">
                Who Am I?
              </h3>
            </div>
            <p className="text-[var(--text-muted)] mt-4 text-justify leading-relaxed">
              Hi, I am a Final Year Computer Engineering student with a passion for Java, MERN Stack,
              and cloud services. I have hands-on experience building applications with React.js and
              Express.js, with deployments on AWS EC2. I am always eager to learn new technologies,
              upskill, and contribute effectively to real-world projects.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setIsOpenResume(true)}
                className="px-5 py-2.5 rounded-lg font-medium bg-[var(--accent)] text-[#0a0e14] shadow-lg shadow-[var(--accent-glow)] hover:brightness-110 transition-all cursor-pointer"
              >
                View Resume
              </button>

              <a
                href={RESUME_PDF}
                download="Amrik_Bhadra_Resume.pdf"
                className="px-5 py-2.5 rounded-lg font-medium border border-[var(--accent)]/50 text-[var(--accent)] bg-[var(--accent-soft)] hover:bg-[var(--accent)]/20 transition-all cursor-pointer"
              >
                Download Resume
              </a>
            </div>
          </Motion.div>

          <Motion.div variants={fadeItem} className="lg:w-1/2 w-full surface-card p-6 md:p-8">
            <div className="flex gap-x-3">
              <div className="inline-flex h-fit w-fit p-2 rounded-lg items-center justify-center border border-[#38bdf8]/40 bg-[var(--accent-soft)]">
                <IoSchool className="text-lg text-[var(--accent)]" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-[var(--accent)]">
                Education
              </h3>
            </div>
            <ul className="text-[var(--text-muted)] mt-6 space-y-4 flex flex-col">
            <li className="rounded-lg pl-4 py-3 border-l-2 border-[var(--accent)]/40 bg-white/[0.02]">
                <div className="flex flex-col gap-y-2">
                  <h4 className="text-[var(--text-primary)] text-[1.05rem] font-medium">
                    MIT Academy of Engineering (2022 - 2026)
                  </h4>
                  <span className="flex gap-2 items-center text-sm">
                    <span>CGPA</span>
                    <span className="px-2 py-0.5 text-xs font-semibold bg-[var(--accent-soft)] text-[var(--accent)] rounded-md border border-[var(--accent)]/30">
                      9.72
                    </span>
                  </span>
                </div>
              </li>
              <li className="rounded-lg pl-4 py-3 border-l-2 border-[var(--accent)]/40 bg-white/[0.02]">
                <div className="flex flex-col gap-y-2">
                  <h4 className="text-[var(--text-primary)] text-[1.05rem] font-medium">
                    Narbheram Hansraj English School
                  </h4>
                  <div className="flex flex-wrap gap-4">
                    <span className="flex gap-2 items-center text-sm">
                      <span>Class 12</span>
                      <span className="px-2 py-0.5 text-xs font-semibold bg-[var(--accent-soft)] text-[var(--accent)] rounded-md border border-[var(--accent)]/30">
                        97.25%
                      </span>
                    </span>
                    <span className="flex gap-2 items-center text-sm">
                      <span>Class 10</span>
                      <span className="px-2 py-0.5 text-xs font-semibold bg-[var(--accent-soft)] text-[var(--accent)] rounded-md border border-[var(--accent)]/30">
                        94.60%
                      </span>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </Motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <Motion.div variants={fadeItem} className="lg:w-1/2 w-full surface-card p-6 md:p-8">
            <div className="flex gap-x-3">
              <div className="inline-flex h-fit w-fit p-2 rounded-lg items-center justify-center border border-[#38bdf8]/40 bg-[var(--accent-soft)]">
                <FaCode className="text-base text-[var(--accent)]" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-[var(--accent)]">
                Coding Profile
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
              {codingProfileData.map((data, index) => (
                <CodingProfileCard
                  key={index}
                  title={data.title}
                  img={data.img}
                  link={data.link}
                  subtitle={data.subtitle}
                  value={data.value}
                />
              ))}
            </div>
          </Motion.div>

          <div className="lg:w-1/2 w-full grid grid-rows-[auto_1fr] gap-6">
            <Motion.div variants={fadeItem} className="surface-card p-6 md:p-8">
              <div className="flex gap-x-3">
                <div className="inline-flex h-fit w-fit p-2 rounded-lg items-center justify-center border border-[#38bdf8]/40 bg-[var(--accent-soft)]">
                  <BsStack className="text-base text-[var(--accent)]" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-[var(--accent)]">
                  Key Expertise
                </h3>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-4">
                {keyExperties.map((item, key) => (
                  <img
                    key={key}
                    src={item}
                    alt="Technology logo"
                    className="w-12 h-12 sm:w-14 sm:h-14 object-contain opacity-90 hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                ))}
              </div>
            </Motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Motion.div variants={fadeItem} className="surface-card p-6 md:p-8 h-full">
                <div className="flex gap-x-3">
                  <div className="inline-flex h-fit w-fit p-2 rounded-lg items-center justify-center border border-[#38bdf8]/40 bg-[var(--accent-soft)]">
                    <FaLocationDot className="text-base text-[var(--accent)]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--accent)]">Location</h3>
                </div>
                <p className="mt-4 text-sm sm:text-[0.95rem] text-[var(--text-muted)] leading-relaxed">
                  Alandi, Pune, Maharashtra — 412105
                </p>
              </Motion.div>

              <Motion.div variants={fadeItem} className="surface-card p-6 md:p-8 h-full">
                <div className="flex gap-x-3">
                  <div className="inline-flex h-fit w-fit p-2 rounded-lg items-center justify-center border border-[#38bdf8]/40 bg-[var(--accent-soft)]">
                    <BiHeadphone className="text-base text-[var(--accent)]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--accent)]">Hobbies</h3>
                </div>
                <ul className="mt-4 text-sm text-[var(--text-muted)] space-y-2">
                  <li>Music &amp; playlists</li>
                  <li>Competitive programming</li>
                  <li>Exploring new web tech</li>
                </ul>
              </Motion.div>
            </div>
          </div>
        </div>
      </Motion.div>

      {openResumeModal && (
        <ResumeModal
          onClose={() => {
            setIsOpenResume(false);
          }}
          resume={RESUME_PDF}
        />
      )}
    </section>
  );
};

export default AboutSection;
