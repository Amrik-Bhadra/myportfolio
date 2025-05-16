import React from "react";
import SkillsCard from "./SkillsCard";

const SkillsDiv = ({title, skillsList}) => {
  return (
    <div className="p-3 flex flex-col gap-y-3">
      <h3 className="text-[#8AB4F8] text-xl font-semibold capitalize">{title}</h3>
      <div className="p-3 flex gap-x-4">
        {
            skillsList.map((skill, index)=>(
                <SkillsCard key={index} img={skill.image} title={skill.name} />
            ))
        }
      </div>
    </div>
  );
};

export default SkillsDiv;
