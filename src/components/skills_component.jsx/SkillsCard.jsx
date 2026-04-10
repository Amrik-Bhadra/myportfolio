import React from "react";
import { motion as Motion } from "framer-motion";

const SkillsCard = ({ img, title }) => {
  const hasIcon = img != null && img !== "";

  return (
    <Motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className="surface-card rounded-xl p-4 flex flex-col items-center justify-center h-28 w-28 shrink-0 cursor-default"
    >
      {hasIcon ? (
        <img
          src={img}
          alt=""
          className="h-11 w-11 object-contain mb-2"
          loading="lazy"
        />
      ) : (
        <div
          className="h-11 w-11 mb-2 rounded-lg border border-dashed border-[var(--text-muted)]/35 bg-white/[0.03] flex items-center justify-center text-[10px] font-mono text-[var(--text-muted)] select-none"
          aria-hidden
        >
          ···
        </div>
      )}
      <p className="text-[var(--text-primary)] text-xs sm:text-sm font-medium tracking-wide text-center leading-tight">
        {title}
      </p>
    </Motion.div>
  );
};

export default SkillsCard;
