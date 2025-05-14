import React from "react";
import {FaExternalLinkAlt } from "react-icons/fa"

const CodingProfileCard = ({key, title, img, link, subtitle, value}) => {
  return (
    <div key={key} className="border border-[#cccccc75] p-2 rounded-md bg-[#eaeaea11] flex flex-col gap-y-2">
      <span className="flex items-center gap-x-3">
        <div className="h-8 w-8 bg-[#fff] rounded-full flex items-center justify-center overflow-hidden">
          <img
            src={img}
            alt="leetcode logo"
            className="h-[70%] w-[70%] object-contain"
          />
        </div>

        <h3 className="font-semibold text-base">{title}</h3>
      </span>
      <div className="flex items-center justify-between px-1">
        <span className="flex items-center">
          <p className="text-[#ccc] mr-2">{subtitle}</p>
          <p className="px-2 py-1 text-sm font-semibold border border-[#8AB4F8] bg-[#8ab4f82f] text-white rounded-md">
            {value}
          </p>
        </span>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-x-2 text-sm cursor-pointer text-[#8AB4F8]"
        >
          Visit Profile <FaExternalLinkAlt />
        </a>
      </div>
    </div>
  );
};

export default CodingProfileCard;
