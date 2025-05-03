import React from "react";

const IconDiv = ({ Icon }) => {
  if (!Icon) return null;

  return (
    <span
      className="h-[8vh] w-[8vh] rounded-full flex items-center justify-center 
    bg-[rgba(51,51,51,0.2)] backdrop-blur-md border border-[rgba(255,255,255,0.2)] 
    shadow-[1px_1px_13px_rgba(238,238,238,0.3)] hover:bg-[rgba(51,51,51,0.6)] transition-all ease hover:cusor-pointer"
    >
      <Icon className="text-[#eee] text-[1.3rem]" />
    </span>
  );
};

export default IconDiv;
