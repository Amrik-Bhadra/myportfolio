import React from "react";
import { BsCalendarDateFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { FaUserGroup } from "react-icons/fa6";
import { IoBriefcase } from "react-icons/io5";

const SelectedHackathonModal = ({ handleCloseModal, selectedHackathon }) => {
  return (
    <div className="fixed inset-0 bg-[#000000ae] flex justify-center items-center z-50">
      <div className="bg-[#1c1c1c] text-white rounded-lg shadow-lg max-w-5xl w-full p-5 relative border border-[#ccc8]">
        <div className="flex items-center gap-x-3">
          <button
            onClick={handleCloseModal}
            className="text-sm px-3 py-2 rounded-md bg-[#46464661] border border-[#cccccc65] hover:bg-[#8ab4f87b] transition-all ease cursor-pointer flex items-center gap-x-1"
          >
            <IoIosArrowBack />
            Back
          </button>
          <p className="text-sm text-[#ccc]">
            Hackathons /
            <span className="text-[#f9f9f9]">
              {selectedHackathon.title
                .toLowerCase()
                .replace(/[^a-z0-9 ]/g, "")
                .trim()
                .split(/\s+/)
                .join("_")}
            </span>
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-2 mt-4">
          {/* description div */}
          <div className="w-full p-2 flex flex-col gap-y-3">
            <span>
              <h1 className="text-3xl font-bold">{selectedHackathon.title}</h1>
              <hr className="w-[28%] mt-3 border-2 rounded-2xl border-[#60A5FA]" />
            </span>
            <p className="text-[#ccc] text-justify text-sm">
              {selectedHackathon.description}
            </p>

            <div className="mt-3 grid grid-cols-2 gap-4">
              {/* date */}
              <div className="flex items-center gap-x-2">
                <div className="inline-block h-fit w-fit p-2 rounded-md items-center justify-center border border-[#8AB4F8] bg-[#8ab4f82f]">
                  <BsCalendarDateFill className="text-base text-[#8AB4F8]" />
                </div>
                <p className="text-sm">{selectedHackathon.date}</p>
              </div>
              {/* location */}
              <div className="flex items-center gap-x-2">
                <div className="inline-block h-fit w-fit p-2 rounded-md items-center justify-center border border-[#8AB4F8] bg-[#8ab4f82f]">
                  <IoLocationSharp className="text-base text-[#8AB4F8]" />
                </div>
                <p className="text-sm">{selectedHackathon.venue}</p>
              </div>
              {/* team size */}
              <div className="flex items-center gap-x-2">
                <div className="inline-block h-fit w-fit p-2 rounded-md items-center justify-center border border-[#8AB4F8] bg-[#8ab4f82f]">
                  <FaUserGroup className="text-base text-[#8AB4F8]" />
                </div>
                <p className="text-sm">Team Size: {selectedHackathon.team_size}</p>
              </div>
              {/* role */}
              <div className="flex items-center gap-x-2">
                <div className="inline-block h-fit w-fit p-2 rounded-md items-center justify-center border border-[#8AB4F8] bg-[#8ab4f82f]">
                  <IoBriefcase className="text-base text-[#8AB4F8]" />
                </div>
                <p className="text-sm">{selectedHackathon.role}</p>
              </div>
            </div>
          </div>

          {/* image div */}
          <div className="w-full p-1">
            <div className="w-full aspect-[4/3] overflow-hidden rounded-md">
              <img
                src={selectedHackathon.thumbnail}
                alt={selectedHackathon.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedHackathonModal;
