import React, { useState } from "react";
import { CiCalendarDate } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";
import SelectedHackathonModal from "./SelectedHackathonModal";

const HackathonContainer = ({ hackathons }) => {
  const [selectedHackathon, setSelectedHackathon] = useState(null);

  const handleCloseModal = () => setSelectedHackathon(null);

  return (
    <div className="w-full relative">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 overflow-y-auto no-scrollbar"
        style={{
          maxHeight: "750px",
        }}
      >
        {hackathons.map((hack, index) => (
          <div
            key={index}
            className="bg-[#161B22] border border-gray-600 rounded-lg p-4 flex flex-col shadow-lg transition-transform duration-300"
          >
            <div className="w-full aspect-[4/3] overflow-hidden rounded-md">
              <img
                src={hack.thumbnail}
                alt={hack.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-3 w-full flex flex-col items-start gap-y-1">
              <h3 className="text-lg font-semibold text-white mb-2">
                {hack.title}
              </h3>
              <span className="flex items-center gap-x-2 text-[#ccc] text-base">
                <CiCalendarDate className="text-xl" />
                <p>{hack.date}</p>
              </span>
              <div className="w-full flex justify-between">
                <span className="flex items-center gap-x-2 text-[#ccc] text-base">
                  <IoLocationOutline className="text-lg" />
                  <p>{hack.venue}</p>
                </span>
                <button
                  onClick={() => setSelectedHackathon(hack)}
                  className="text-sm px-3 py-2 rounded-md bg-[#46464661] border border-[#cccccc65] hover:bg-[#8ab4f87b] transition-all ease cursor-pointer flex items-center gap-x-1"
                >
                  View Details
                  <MdOutlineArrowOutward className="text-base" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedHackathon && (
        <SelectedHackathonModal
          handleCloseModal={handleCloseModal}
          selectedHackathon={selectedHackathon}
        />
      )}
    </div>
  );
};

export default HackathonContainer;
