import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import { CiCalendarDate } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";
import SelectedHackathonModal from "./SelectedHackathonModal";
import { fadeItem, stagger, viewportOnce } from "../../lib/motion";

const HackathonContainer = ({ hackathons }) => {
  const [selectedHackathon, setSelectedHackathon] = useState(null);

  const handleCloseModal = () => setSelectedHackathon(null);

  return (
    <div className="w-full relative">
      <Motion.div
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={stagger(0.07)}
      >
        {hackathons.map((hack, index) => (
          <Motion.article
            key={hack.id ?? index}
            variants={fadeItem}
            className="group surface-card p-0 overflow-hidden flex flex-col h-full hover:-translate-y-1"
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#0a0e14]">
              <img
                src={hack.thumbnail}
                alt={hack.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>

            <div className="p-5 flex flex-col gap-3 flex-1">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] leading-snug">
                {hack.title}
              </h3>
              <span className="flex items-center gap-x-2 text-[var(--text-muted)] text-sm">
                <CiCalendarDate className="text-lg text-[var(--accent)] shrink-0" aria-hidden />
                <span>{hack.date}</span>
              </span>
              <div className="flex flex-wrap items-end justify-between gap-3 mt-auto pt-1">
                <span className="flex items-start gap-x-2 text-[var(--text-muted)] text-sm min-w-0">
                  <IoLocationOutline className="text-lg text-[var(--accent)] shrink-0 mt-0.5" aria-hidden />
                  <span>{hack.venue}</span>
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedHackathon(hack)}
                  className="text-sm px-3 py-2 rounded-lg bg-white/[0.06] border border-white/10 hover:border-[var(--accent)]/40 hover:bg-[var(--accent-soft)] transition-all cursor-pointer inline-flex items-center gap-x-1 shrink-0"
                >
                  Details
                  <MdOutlineArrowOutward className="text-base" aria-hidden />
                </button>
              </div>
            </div>
          </Motion.article>
        ))}
      </Motion.div>

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
