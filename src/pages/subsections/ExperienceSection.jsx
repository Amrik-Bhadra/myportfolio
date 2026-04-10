import React, { useRef, useState } from "react";
import {
  motion as Motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { FaCalendarDays, FaChevronDown, FaLocationDot } from "react-icons/fa6";
import SectionHeading from "../../components/SectionHeading";
import { workExperience } from "../../utils/dataProvider";

const engagementTagClass =
  "inline-flex w-fit text-xs sm:text-sm font-medium px-2.5 py-1 rounded-md border border-[var(--accent)]/35 bg-[var(--accent-soft)] text-[var(--accent)]";

const IconBox = ({ children }) => (
  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-white/12 bg-white/[0.04] text-[var(--accent)]">
    {children}
  </span>
);

const CompanyLogo = ({ company, logo }) => {
  if (logo) {
    return (
      <img
        src={logo}
        alt=""
        className="h-11 w-11 sm:h-12 sm:w-12 rounded-xl object-contain bg-white p-1.5 border border-white/10 shrink-0"
        loading="lazy"
      />
    );
  }
  const letter = company.trim().charAt(0).toUpperCase();
  return (
    <div
      className="h-11 w-11 sm:h-12 sm:w-12 rounded-xl border border-white/15 bg-white/[0.06] flex items-center justify-center font-mono text-base sm:text-lg font-semibold text-[var(--accent)] shrink-0 shadow-[0_0_20px_rgba(56,189,248,0.15)]"
      aria-hidden
    >
      {letter}
    </div>
  );
};

const MetaRow = ({ icon, text, alignRight }) => (
  <div
    className={`flex items-center gap-3 ${alignRight ? "flex-row-reverse text-right" : ""}`}
  >
    <IconBox>{icon}</IconBox>
    <span className="text-sm text-[var(--text-primary)]/90 leading-snug min-w-0">{text}</span>
  </div>
);

const ExperienceCard = ({ job, align = "left" }) => {
  const [expanded, setExpanded] = useState(false);
  const alignRight = align === "right";
  const blockAlign = alignRight ? "lg:items-end lg:text-right" : "";
  const rowEnd = alignRight ? "lg:justify-end" : "";

  return (
    <Motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px -12% 0px", amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`surface-card p-5 sm:p-6 text-left min-w-0 ${alignRight ? "lg:text-right" : ""}`}
    >
      <div
        className={`flex flex-col sm:flex-row gap-4 ${alignRight ? "lg:flex-row-reverse" : ""}`}
      >
        <CompanyLogo company={job.company} logo={job.logo} />
        <div className={`flex-1 flex flex-col min-w-0 ${blockAlign}`}>
          <h3 className="text-base sm:text-lg font-semibold text-[var(--text-primary)] leading-snug">
            {job.role}
          </h3>

          {job.engagementTag && (
            <span className={`mt-2 ${engagementTagClass} ${alignRight ? "lg:ml-auto" : ""}`}>
              {job.engagementTag}
            </span>
          )}

          <p
            className={`mt-3 text-[var(--accent)] font-semibold text-[1.05rem] ${alignRight ? "lg:text-right" : ""}`}
          >
            {job.company}
          </p>

          <div className={`mt-4 flex flex-col gap-3 ${blockAlign}`}>
            <MetaRow
              alignRight={alignRight}
              icon={<FaCalendarDays className="text-base" aria-hidden />}
              text={job.dateRange}
            />
            {job.location && (
              <MetaRow
                alignRight={alignRight}
                icon={<FaLocationDot className="text-base" aria-hidden />}
                text={job.location}
              />
            )}
          </div>

          {job.stack?.length > 0 && (
            <div className={`mt-5 ${alignRight ? "lg:flex lg:flex-col lg:items-end" : ""}`}>
              <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)] mb-2">
                Tech stack
              </p>
              <div className={`flex flex-wrap gap-2 ${rowEnd}`}>
                {job.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-md border border-white/10 bg-white/[0.04] text-[var(--text-primary)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className={`mt-5 border-t border-white/[0.08] pt-4 ${blockAlign}`}>
            <button
              type="button"
              onClick={() => setExpanded((e) => !e)}
              aria-expanded={expanded}
              className={`inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] hover:text-[#7dd3fc] transition-colors ${alignRight ? "lg:flex-row-reverse" : ""}`}
            >
              <span>{expanded ? "Hide description" : "Show description"}</span>
              <FaChevronDown
                className={`text-xs transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
                aria-hidden
              />
            </button>
            {expanded && (
              <p
                className={`mt-3 text-sm leading-relaxed text-[var(--text-muted)] ${alignRight ? "lg:text-right" : ""}`}
              >
                {job.summary}
              </p>
            )}
          </div>
        </div>
      </div>
    </Motion.article>
  );
};

const TimelineNode = () => (
  <div className="relative flex flex-col items-center w-12 shrink-0 pt-1">
    <div
      className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#0a0e14] bg-[var(--bg-deep)] shadow-[0_0_0_4px_rgba(56,189,248,0.2),0_0_24px_rgba(56,189,248,0.35)]"
      aria-hidden
    >
      <span className="h-3 w-3 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#818cf8]" />
    </div>
  </div>
);

const ExperienceSection = () => {
  const containerRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.75", "end 0.25"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const lineOpacity = useTransform(scrollYProgress, [0, 0.08], [0.4, 1]);

  return (
    <section
      id="experience"
      className="relative scroll-mt-24 lg:scroll-mt-12 bg-transparent py-16 md:py-24 px-4 sm:px-6 overflow-hidden"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-6xl mx-auto w-full">
        <SectionHeading
          titleId="experience-heading"
          eyebrow="Career"
          title="Experience"
          subtitle="A timeline of internships and roles — scroll to trace the path."
        />

        <div ref={containerRef} className="relative mt-4 md:mt-8">
          <div
            className="pointer-events-none absolute left-1/2 top-0 bottom-0 hidden lg:block w-0 -translate-x-1/2 z-0"
            aria-hidden
          >
            <div className="absolute inset-0 w-px left-1/2 -translate-x-1/2 bg-white/[0.08] rounded-full" />
            <Motion.div
              className="absolute top-0 left-1/2 w-[3px] -translate-x-1/2 rounded-full origin-top bg-gradient-to-b from-[#22d3ee] via-[#38bdf8] to-[#a78bfa] shadow-[0_0_20px_rgba(56,189,248,0.45)]"
              style={{
                height: reduceMotion ? "100%" : lineHeight,
                opacity: reduceMotion ? 1 : lineOpacity,
              }}
            />
          </div>

          <div className="relative z-[1] space-y-14 lg:space-y-20">
            {workExperience.map((job, index) => {
              const isRight = index % 2 === 0;
              const isLast = index === workExperience.length - 1;

              return (
                <div key={job.id} className="relative">
                  <div className="lg:hidden flex gap-4">
                    <div className="flex flex-col items-center w-9 shrink-0">
                      <div
                        className="mt-1 h-3.5 w-3.5 rounded-full border-2 border-[#0a0e14] bg-gradient-to-br from-[#38bdf8] to-[#818cf8] shadow-[0_0_12px_rgba(56,189,248,0.5)] z-10"
                        aria-hidden
                      />
                      {!isLast && (
                        <div className="w-px flex-1 min-h-[4rem] mt-3 bg-gradient-to-b from-[var(--accent)]/45 via-white/12 to-transparent" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0 pb-2">
                      <ExperienceCard job={job} align="left" />
                    </div>
                  </div>

                  <div className="hidden lg:grid lg:grid-cols-[1fr_minmax(3rem,auto)_1fr] lg:gap-x-6 lg:gap-y-0 lg:items-start">
                    {isRight ? (
                      <>
                        <div className="min-w-0" />
                        <TimelineNode />
                        <div className="min-w-0 max-w-xl justify-self-start">
                          <ExperienceCard job={job} align="left" />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="min-w-0 max-w-xl justify-self-end">
                          <ExperienceCard job={job} align="right" />
                        </div>
                        <TimelineNode />
                        <div className="min-w-0" />
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
