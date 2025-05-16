import React from "react";

const SkillsCard = ({ key, img, title }) => {
  return (
    <div
      key={key}
      className="backdrop-blur-md bg-[#161B22] border border-gray-700 rounded-xl shadow-lg p-4 flex flex-col items-center justify-center transition-transform hover:scale-105 duration-300 h-28 w-28 shrink-0"
    >
      <img
        src={img}
        alt={`${title}-logo`}
        className="h-12 w-12 object-contain mb-2"
      />
      <p className="text-white font-medium tracking-wide">{title}</p>
    </div>
  );
};

export default SkillsCard;
