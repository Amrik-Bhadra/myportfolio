import React from "react";
import { motion as Motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import { fadeItem, stagger, viewportOnce } from "../../lib/motion";

const ProjectsContainer = ({ projects }) => {
  return (
    <div className="w-full">
      <Motion.div
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={stagger(0.07)}
      >
        {projects.map((project, index) => (
          <Motion.article
            key={project.id ?? index}
            variants={fadeItem}
            className="group surface-card p-0 overflow-hidden flex flex-col h-full hover:-translate-y-1"
          >
            <div className="relative rounded-t-xl overflow-hidden border-b border-white/[0.06] aspect-[16/10] bg-[#0a0e14]">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0e14]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden
              />
            </div>

            <div className="p-5 flex flex-col flex-1 gap-3">
              <h3 className="text-base font-semibold text-[var(--text-primary)] leading-snug line-clamp-2">
                {project.title}
              </h3>
              <p className="text-sm text-[var(--text-muted)] line-clamp-2 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                <a
                  href={project.project_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm inline-flex items-center gap-x-2 text-[var(--accent)] font-medium hover:underline underline-offset-4"
                >
                  {project.hosted_type} <FiExternalLink className="text-base shrink-0" />
                </a>
                <a
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-3 py-2 rounded-lg bg-white/[0.06] border border-white/10 hover:border-[var(--accent)]/40 hover:bg-[var(--accent-soft)] transition-all cursor-pointer inline-flex items-center gap-x-1.5"
                >
                  <FaGithub className="text-base" aria-hidden />
                  Code
                  <MdOutlineArrowOutward className="text-base" aria-hidden />
                </a>
              </div>
            </div>
          </Motion.article>
        ))}
      </Motion.div>
    </div>
  );
};

export default ProjectsContainer;
