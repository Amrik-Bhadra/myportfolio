import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import { FaAward } from "react-icons/fa";
import { fadeItem, stagger, viewportOnce } from "../../lib/motion";

const AchievementImage = ({ src, title }) => {
  const [failed, setFailed] = useState(false);
  const showPlaceholder = !src || failed;

  if (showPlaceholder) {
    return (
      <div
        className="relative w-full aspect-[16/10] rounded-t-xl bg-gradient-to-br from-[var(--accent-soft)] to-white/[0.03] border-b border-white/[0.06] flex items-center justify-center"
        aria-hidden
      >
        <FaAward className="text-5xl text-[var(--accent)]/40" />
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-[16/10] overflow-hidden rounded-t-xl border-b border-white/[0.06] bg-[#0a0e14]">
      <img
        src={src}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        loading="lazy"
        onError={() => setFailed(true)}
      />
    </div>
  );
};

const AchievementsContainer = ({ achievements }) => {
  return (
    <div className="w-full">
      <Motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={stagger(0.1)}
      >
        {achievements.map((item, index) => (
          <Motion.article
            key={item.id ?? index}
            variants={fadeItem}
            className="group surface-card p-0 overflow-hidden flex flex-col h-full hover:-translate-y-1"
          >
            <AchievementImage src={item.image} title={item.title} />
            <div className="p-5 sm:p-6 flex flex-col flex-1 text-left">
              {(item.tag || item.date) && (
                <div className="flex flex-wrap items-center gap-2 gap-y-1 mb-3 text-xs font-mono text-[var(--text-muted)]">
                  {item.tag && (
                    <span className="text-[10px] uppercase tracking-widest text-[var(--accent)] px-2 py-0.5 rounded border border-[var(--accent)]/30 bg-[var(--accent-soft)]">
                      {item.tag}
                    </span>
                  )}
                  {item.date && <span className="tabular-nums">{item.date}</span>}
                </div>
              )}
              <h3 className="text-lg font-semibold text-[var(--text-primary)] leading-snug">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed flex-1">{item.description}</p>
            </div>
          </Motion.article>
        ))}
      </Motion.div>
    </div>
  );
};

export default AchievementsContainer;
