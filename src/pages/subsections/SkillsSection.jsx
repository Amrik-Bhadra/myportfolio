import React from "react";
// import html from "../../assets/icons/html.svg";
import SkillsDiv from "../../components/skills_component.jsx/SkillsDiv";
import { skills } from "../../utils/dataProvider";

const SkillsSection = () => {
  return (
    <div
      id="skills"
      className="relative min-h-screen w-screen bg-[#0D1117] flex items-center justify-center py-10 px-6 md:px-6"
    >
      <div className="w-[85%] flex flex-col gap-y-3">
        <h2 className="text-4xl font-bold text-[#E2E8F0] uppercase text-center">
          My Skills
        </h2>

        {Object.entries(skills).map(([category, skillsList]) => (
          <SkillsDiv key={category} title={category} skillsList={skillsList} />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
