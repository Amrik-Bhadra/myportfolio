import React from "react";
import { motion as Motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { workingProcess } from "../../utils/dataProvider";
import { stagger, fadeItem, fadeUp, slideRight, scaleUp, viewportOnce } from "../../lib/motion";

const WorkingProcessSection = () => {
  const { headline, tools, steps } = workingProcess;

  return (
    <section
      id="process"
      className="relative scroll-mt-24 lg:scroll-mt-12 bg-transparent flex flex-col items-center text-white px-4 sm:px-6 py-16 md:py-24 overflow-hidden"
      aria-label="Working Process"
    >
      {/* Dashed top border */}
      <div
        className="absolute top-0 left-6 right-6 sm:left-10 sm:right-10 border-t border-dashed border-white/10"
        aria-hidden
      />

      <div className="w-full max-w-7xl mx-auto">
        {/* ─── TOP ROW: Headline + Tools Card + First Step ─── */}
        <Motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 mb-4 md:mb-5"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0.12)}
        >
          {/* Large Headline (spans left ~5 cols) */}
          <Motion.div
            variants={slideRight}
            className="md:col-span-5 flex flex-col justify-end py-4 md:py-6"
          >
            <p className="font-mono text-xs sm:text-sm tracking-[0.2em] uppercase text-[var(--accent)] mb-4">
              Working Process
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-[2.8rem] lg:text-5xl font-extrabold leading-[1.1] tracking-tight text-white uppercase">
              {headline.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < headline.split("\n").length - 1 && <br />}
                </span>
              ))}
              <span className="text-[var(--accent)]">.</span>
            </h2>
          </Motion.div>

          {/* Tools Card (middle ~4 cols) */}
          <Motion.div
            variants={scaleUp}
            className="md:col-span-4 rounded-2xl bg-[var(--bg-card)] border border-white/[0.06] p-6 sm:p-8 flex flex-col justify-center"
          >
            <p className="text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-[var(--text-muted)] mb-4">
              Tools I Use:
            </p>
            <ul className="flex flex-col gap-1">
              {tools.map((tool) => (
                <li
                  key={tool}
                  className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white/90 uppercase"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </Motion.div>

          {/* Step 01 Card (right ~3 cols) */}
          <Motion.div
            variants={scaleUp}
            className="md:col-span-3 rounded-2xl bg-[var(--bg-card)] border border-white/[0.06] p-6 flex flex-col justify-between min-h-[200px]"
          >
            <span className="self-end text-5xl sm:text-6xl font-black text-[var(--accent)]/30 leading-none select-none">
              {steps[0].number}
            </span>
            <div>
              <h3 className="text-sm sm:text-base font-bold uppercase tracking-wide text-white mb-2">
                {steps[0].title}
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                {steps[0].description}
              </p>
            </div>
          </Motion.div>
        </Motion.div>

        {/* ─── BOTTOM ROW: Steps 02-04 + Contact CTA ─── */}
        <Motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0.12)}
        >
          {/* Steps 02, 03, 04 */}
          {steps.slice(1).map((step) => (
            <Motion.div
              key={step.number}
              variants={scaleUp}
              className="lg:col-span-3 rounded-2xl bg-[var(--bg-card)] border border-white/[0.06] p-6 flex flex-col justify-between min-h-[200px]"
            >
              <span className="self-end text-5xl sm:text-6xl font-black text-[var(--accent)]/30 leading-none select-none">
                {step.number}
              </span>
              <div>
                <h3 className="text-sm sm:text-base font-bold uppercase tracking-wide text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Motion.div>
          ))}

          {/* Contact Me CTA */}
          <Motion.div
            variants={fadeUp}
            className="lg:col-span-3 flex items-end justify-center sm:justify-end lg:justify-end py-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[var(--accent)] text-[var(--accent)] font-semibold text-sm uppercase tracking-wider hover:bg-[var(--accent)] hover:text-[#0a0e14] transition-all duration-300 group"
            >
              Contact Me
              <span className="w-8 h-8 rounded-full bg-[var(--accent)] text-[#0a0e14] flex items-center justify-center group-hover:bg-white group-hover:text-[#0a0e14] transition-colors">
                <FaArrowRight size={14} />
              </span>
            </a>
          </Motion.div>
        </Motion.div>
      </div>

      {/* Dashed bottom border */}
      <div
        className="absolute bottom-0 left-6 right-6 sm:left-10 sm:right-10 border-t border-dashed border-white/10"
        aria-hidden
      />
    </section>
  );
};

export default WorkingProcessSection;
