import React from "react";
import { motion as Motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { fadeItem, stagger, viewportOnce } from "../../lib/motion";

const CertificateContainer = ({ certificates }) => {
  return (
    <div className="w-full">
      <Motion.div
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={stagger(0.06)}
      >
        {certificates.map((cert, index) => {
          const href = cert.type === "pdf" ? cert.file : cert.file;
          const isPdf = cert.type === "pdf";

          return (
            <Motion.article
              key={cert.title + index}
              variants={fadeItem}
              className="group surface-card p-0 overflow-hidden flex flex-col h-full hover:-translate-y-1"
            >
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-[4/3] overflow-hidden bg-[#0a0e14] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--accent)]"
              >
                {cert.type === "image" ? (
                  <img
                    src={cert.file}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                ) : (
                  <img
                    src={cert.thumbnail || "/thumbnails/default-pdf-thumb.png"}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                )}
                <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-[#0a0e14]/85 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wide text-[var(--accent)] border border-white/10 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                  {isPdf ? "Open PDF" : "View"}{" "}
                  <FiExternalLink className="text-xs" aria-hidden />
                </span>
              </a>

              <div className="p-5 flex flex-col gap-1 flex-1">
                <h3 className="text-base font-semibold text-[var(--text-primary)] leading-snug">
                  {cert.title}
                </h3>
                <div className="flex flex-wrap gap-x-2 gap-y-1 text-sm text-[var(--text-muted)]">
                  <span>{cert.issuer}</span>
                  {cert.date && (
                    <>
                      <span className="text-white/20" aria-hidden>
                        ·
                      </span>
                      <span>{cert.date}</span>
                    </>
                  )}
                </div>
              </div>
            </Motion.article>
          );
        })}
      </Motion.div>
    </div>
  );
};

export default CertificateContainer;
