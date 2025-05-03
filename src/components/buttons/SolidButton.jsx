import React from "react";

const SolidButton = ({ text, Icon, onClick }) => {
  if (!onClick) return null; // Only check if onClick is missing
  return (
    <button
      className="mt-4 px-8 py-3 text-lg flex items-center gap-x-1 font-semibold text-[#ddd] rounded-full bg-[rgba(255,255,255,0.1)] backdrop-blur-md border border-[rgba(255,255,255,0.2)] shadow-[0px_4px_20px_rgba(0,153,255,0.3)] transition-all duration-300 
    hover:bg-[rgba(255,255,255,0.2)] hover:shadow-[0px_5px_25px_rgba(0,153,255,0.5)] 
    hover:text-white cursor-pointer"
      onClick={onClick}
    >
      <p>{text}</p> 
      {Icon && <Icon className="text-lg" />} {/* Render Icon only if provided */}
    </button>
  );
};


export default SolidButton;
