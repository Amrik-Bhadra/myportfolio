import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Lottie from "lottie-react";
import contactAnim from "../../assets/contact.json";

import SuccessfulModal from "../../components/modals/SuccessfulModal";
import ContactForm from "../../components/contact_components/ContactForm";
import { fadeUp, stagger, fadeItem, slideLeft, viewportOnce } from "../../lib/motion";

const ContactSection = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full scroll-mt-24 lg:scroll-mt-12 bg-transparent flex items-center justify-center py-16 md:py-24 px-4 sm:px-6"
    >
      <div className="w-full max-w-7xl">
        <Motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="surface-card p-8 sm:p-12 md:p-16 lg:p-20 relative overflow-hidden"
        >
          {/* Dashed Background Grid inside the card */}
          <div className="absolute inset-0 pointer-events-none opacity-10" aria-hidden>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_10%,transparent_80%)]"></div>
          </div>

          <div className="relative z-10 flex flex-col gap-16 lg:gap-20">
            {/* Header Area */}
            <div className="flex flex-col items-center text-center">
              <p className="font-mono text-xs sm:text-sm tracking-[0.2em] uppercase text-[var(--accent)] mb-4">
                Let's Work Together
              </p>
              <h2
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.05] font-black tracking-tighter text-white uppercase"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Let's create something<br />worth remembering<span className="text-[var(--accent)]">.</span>
              </h2>
            </div>

            {/* Layout: Left Content & Right Form */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
              
              {/* Left Column (Assets & Text) */}
              <Motion.div
                variants={stagger(0.1)}
                className="lg:col-span-5 flex flex-col gap-y-10"
              >
                <Motion.div variants={fadeItem} className="relative bg-[#0a0e14]/80 backdrop-blur-md rounded-2xl p-6 border border-white/[0.06] flex flex-col items-center justify-center text-center shadow-inner overflow-hidden">
                  <Lottie animationData={contactAnim} className="w-48 sm:w-56 mb-4 drop-shadow-xl" aria-hidden />
                  <span className="inline-flex items-center gap-x-2 text-xs sm:text-sm px-4 py-2 rounded-full border border-emerald-400/40 bg-emerald-500/10">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                    </span>
                    <span className="font-mono uppercase tracking-widest text-emerald-300">Available for work</span>
                  </span>
                </Motion.div>

                <Motion.div variants={fadeItem} className="flex flex-col gap-3">
                  <h3 className="text-xl font-semibold text-[var(--text-primary)]">Contact Info</h3>
                  <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
                    Prefer email or LinkedIn for quick intros; use the form for detailed project briefs. I typically reply within 24 hours.
                  </p>
                </Motion.div>

                <Motion.div variants={fadeUp} className="flex gap-4">
                  {[
                    { href: "https://github.com/Amrik-Bhadra", icon: FaGithub, label: "GitHub" },
                    { href: "https://www.linkedin.com/in/amrik-bhadra/", icon: FaLinkedin, label: "LinkedIn" },
                    { href: "mailto:amrik.bhadra@gmail.com", icon: MdEmail, label: "Email" },
                  ].map((s) => {
                    const Icon = s.icon;
                    return (
                      <a
                        key={s.label}
                        href={s.href}
                        target={s.href.startsWith("mailto") ? undefined : "_blank"}
                        rel={s.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                        aria-label={s.label}
                        className="inline-flex items-center justify-center rounded-full w-12 h-12 bg-white/[0.04] border border-white/10 text-white hover:border-[var(--accent)] hover:text-[#0a0e14] hover:bg-[var(--accent)] transition-all duration-300 group"
                      >
                        <Icon className="text-xl" />
                      </a>
                    );
                  })}
                </Motion.div>
              </Motion.div>

              {/* Right Column (Form) */}
              <Motion.div
                variants={slideLeft}
                className="lg:col-span-7 w-full flex flex-col bg-[#0a0e14]/80 backdrop-blur-md p-8 sm:p-10 rounded-2xl border border-white/[0.04]"
              >
                <ContactForm openModal={openModal} setOpenModal={setOpenModal} />
              </Motion.div>

            </div>
          </div>
        </Motion.div>
      </div>

      {openModal && (
        <SuccessfulModal
          message="Message sent successfully!"
          onClose={() => setOpenModal(false)}
        />
      )}
    </section>
  );
};

export default ContactSection;
