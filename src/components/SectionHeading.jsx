import { motion as Motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../lib/motion";

const SectionHeading = ({ eyebrow, title, subtitle, titleId }) => (
  <Motion.header
    className="text-center max-w-3xl mx-auto mb-10 md:mb-14"
    initial="hidden"
    whileInView="visible"
    viewport={viewportOnce}
    variants={fadeUp}
  >
    {eyebrow && (
      <p className="font-mono text-xs sm:text-sm tracking-[0.2em] uppercase text-[var(--accent)] mb-3">
        {eyebrow}
      </p>
    )}
    <h2
      id={titleId}
      className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[var(--text-primary)]"
    >
      {title}
    </h2>
    {subtitle && (
      <p className="mt-4 text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
        {subtitle}
      </p>
    )}
    <div
      className="mt-6 h-px w-24 mx-auto rounded-full bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-80"
      aria-hidden
    />
  </Motion.header>
);

export default SectionHeading;
