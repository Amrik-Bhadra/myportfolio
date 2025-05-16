import React, { useState } from "react";
import { FaCode } from "react-icons/fa6";
import { PiCertificate } from "react-icons/pi";
import { GiTrophyCup } from "react-icons/gi";
import ProjectsContainer from "../../components/portfolio_showcase_component/ProjectsContainer";
import CertificateContainer from "../../components/portfolio_showcase_component/CertificateContainer";
import HackathonContainer from "../../components/portfolio_showcase_component/HackathonContainer";
import { certificates, projects } from "../../utils/dataProvider";

const ProjectcertificationSection = () => {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <div
      id="projects"
      className="relative min-h-screen bg-[#0D1117] flex flex-col items-center gap-y-8 text-white px-6 py-16 md:px-6"
    >
      <h2 className="text-4xl font-bold text-[#E2E8F0] uppercase">
        Portfolio Showcase
      </h2>

      <div className="w-[85%] flex flex-col gap-5">
        {/* Glassmorphism Card */}
        <div className="w-full rounded-xl backdrop-blur-md bg-[#161B22] border border-gray-700 shadow-md p-1">
          {/* Tabs */}
          <div className="flex w-full overflow-hidden">
            {/* Projects Tab */}
            <button
              className={`w-1/3 p-3 flex gap-x-2 items-center justify-center transition-all ${
                activeTab === "projects"
                  ? "border border-[#8AB4F8] bg-[#8ab4f82f] text-[#8AB4F8] font-semibold rounded-lg"
                  : "bg-transparent text-gray-300 hover:bg-[#8ab4f82f]/20"
              }`}
              onClick={() => setActiveTab("projects")}
            >
              <FaCode className="text-lg" />
              <p>Projects ({projects.length})</p>
            </button>

            {/* Certifications Tab */}
            <button
              className={`w-1/3 p-3 flex gap-x-2 items-center justify-center transition-all ${
                activeTab === "certifications"
                  ? "border border-[#8AB4F8] bg-[#8ab4f82f] text-[#8AB4F8] font-semibold rounded-lg"
                  : "bg-transparent text-gray-300 hover:bg-[#8ab4f82f]/20"
              }`}
              onClick={() => setActiveTab("certifications")}
            >
              <PiCertificate className="text-lg" />
              <p>Certifications ({certificates.length})</p>
            </button>

            {/* Hackathons Tab */}
            <button
              className={`w-1/3 p-3 flex gap-x-2 items-center justify-center transition-all ${
                activeTab === "hackathons"
                  ? "border border-[#8AB4F8] bg-[#8ab4f82f] text-[#8AB4F8] font-semibold rounded-lg"
                  : "bg-transparent text-gray-300 hover:bg-[#8ab4f82f]/20"
              }`}
              onClick={() => setActiveTab("hackathons")}
            >
              <GiTrophyCup className="text-lg" />
              <p>Hackathons</p>
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="text-white">
          {activeTab === "projects" && (
            <ProjectsContainer projects={projects}/>
          )}
          {activeTab === "certifications" && (
            <CertificateContainer certificates={certificates}/>
          )}
          {activeTab === "hackathons" && (
            <HackathonContainer/>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectcertificationSection;
