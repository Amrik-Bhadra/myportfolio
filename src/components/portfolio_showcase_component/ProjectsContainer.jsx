import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { MdOutlineArrowOutward } from "react-icons/md";

const ProjectsContainer = ({ projects }) => {
  return (
    <div className="w-full">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 overflow-y-auto no-scrollbar"
        style={{
          maxHeight: "750px", // Approx height for 2 rows (adjust if needed)
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#161B22] border border-gray-600 rounded-lg p-4 flex flex-col shadow-lg transition-transform duration-300"
          >
            <div className="rounded-md aspect-auto w-full overflow-clip border border-[#cccccc71]">
              <img
                src={project.thumbnail}
                alt={`${project.thumbnail}`}
                className="w-full object-cover"
              />
            </div>

            <div className="mt-3 w-full flex flex-col items-start gap-y-2">
              <h3 className="text-base font-medium text-[#eee]">
                {project.title}
              </h3>
              <p className="text-sm text-[#ccc]">{project.description}</p>
              <div className="flex items-center justify-between w-full mt-2">
                <a
                  href={project.project_link}
                  className="text-sm flex items-center gap-x-2 text-[#8AB4F8] font-medium"
                >
                  {project.hosted_type} <FiExternalLink className="text-base" />
                </a>
                <button className="text-sm px-3 py-2 rounded-md bg-[#46464661] border border-[#cccccc65] hover:bg-[#8ab4f87b] transition-all ease cursor-pointer flex items-center gap-x-1">
                  View Details
                  <MdOutlineArrowOutward className="text-base"/>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsContainer;
