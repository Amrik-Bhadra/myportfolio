import React from "react";
import SkillsCard from "./SkillsCard";

const SkillsDiv = ({ title, skillsList }) => {
  return (
    <div className="py-2 flex flex-col gap-y-4">
      <h3 className="text-lg font-semibold font-mono tracking-tight leading-relaxed">
        <span className="text-[var(--text-muted)]">{"<!-- "}</span>
        <span className="text-[var(--accent)]">{title}</span>
        <span className="text-[var(--text-muted)]">{" -->"}</span>
      </h3>
      <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1 -mx-1 px-1 scroll-smooth">
        {skillsList.map((skill, index) => (
          <SkillsCard key={`${skill.name}-${index}`} img={skill.image} title={skill.name} />
        ))}
      </div>
    </div>
  );
};

export default SkillsDiv;
