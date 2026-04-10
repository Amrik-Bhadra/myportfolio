import React, { useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { FaCode } from "react-icons/fa6";
import { PiCertificate } from "react-icons/pi";
import { GiTrophyCup } from "react-icons/gi";
import { FaAward } from "react-icons/fa";
import ProjectsContainer from "../../components/portfolio_showcase_component/ProjectsContainer";
import CertificateContainer from "../../components/portfolio_showcase_component/CertificateContainer";
import HackathonContainer from "../../components/portfolio_showcase_component/HackathonContainer";
import AchievementsContainer from "../../components/portfolio_showcase_component/AchievementsContainer";
import SectionHeading from "../../components/SectionHeading";
import { certificates, projects, hackathons, achievements } from "../../utils/dataProvider";

const tabs = [
  { id: "projects", label: "Projects", count: projects.length, icon: FaCode },
  { id: "achievements", label: "Achievements", count: achievements.length, icon: FaAward },
  { id: "certifications", label: "Certifications", count: certificates.length, icon: PiCertificate },
  { id: "hackathons", label: "Hackathons", count: hackathons.length, icon: GiTrophyCup },
];

const ProjectcertificationSection = () => {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <section
      id="projects"
      className="relative min-h-screen scroll-mt-24 lg:scroll-mt-12 bg-transparent flex flex-col items-center gap-y-10 text-white px-4 sm:px-6 py-16 md:py-20"
    >
      <SectionHeading
        eyebrow="Work"
        title="Portfolio Showcase"
        subtitle="Projects, achievements, certifications, and hackathons — use the tabs below."
      />

      <div className="w-full max-w-6xl flex flex-col gap-8">
        <div
          className="w-full rounded-2xl surface-card p-1.5 sm:p-2"
          role="tablist"
          aria-label="Showcase categories"
        >
          <div className="flex w-full gap-1 sm:gap-2 overflow-x-auto no-scrollbar">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const selected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  className={`flex-1 min-w-[7rem] sm:min-w-0 py-3 px-2 sm:px-3 rounded-xl flex gap-x-2 items-center justify-center text-xs sm:text-sm md:text-base transition-all duration-300
                    ${selected
                      ? "bg-[var(--accent-soft)] text-[var(--accent)] border border-[var(--accent)]/40 shadow-[0_0_24px_rgba(56,189,248,0.15)] font-semibold"
                      : "bg-transparent text-[var(--text-muted)] hover:bg-white/[0.04] border border-transparent"
                    }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <Icon className="text-base sm:text-lg shrink-0" aria-hidden />
                  <span className="truncate leading-tight">
                    {tab.label}{" "}
                    <span className="opacity-70 font-normal">({tab.count})</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="text-white min-h-[200px]">
          <AnimatePresence mode="wait">
            {activeTab === "projects" && (
              <Motion.div
                key="projects"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectsContainer projects={projects} />
              </Motion.div>
            )}
            {activeTab === "achievements" && (
              <Motion.div
                key="achievements"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                <AchievementsContainer achievements={achievements} />
              </Motion.div>
            )}
            {activeTab === "certifications" && (
              <Motion.div
                key="certifications"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                <CertificateContainer certificates={certificates} />
              </Motion.div>
            )}
            {activeTab === "hackathons" && (
              <Motion.div
                key="hackathons"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                <HackathonContainer hackathons={hackathons} />
              </Motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProjectcertificationSection;
