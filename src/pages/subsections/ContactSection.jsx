import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import { LuMessagesSquare } from "react-icons/lu";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Lottie from "lottie-react";
import contactAnim from "../../assets/contact.json";

import SuccessfulModal from "../../components/modals/SuccessfulModal";
import ContactForm from "../../components/contact_components/ContactForm";
import SectionHeading from "../../components/SectionHeading";
import { fadeUp, stagger, fadeItem, viewportOnce } from "../../lib/motion";

const ContactSection = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full scroll-mt-24 lg:scroll-mt-12 bg-transparent flex items-center justify-center py-16 md:py-20 px-4 sm:px-6"
    >
      <div className="w-full max-w-6xl flex flex-col gap-12">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Connect"
          subtitle="Have a project, an idea, or just want to chat? Drop a message — I reply within a day."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">
          <Motion.div
            className="flex flex-col gap-y-6 justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={stagger(0.08)}
          >
            <Motion.div variants={fadeItem} className="relative">
              <div className="absolute -top-6 -right-2 sm:right-4 opacity-90 pointer-events-none">
                <Lottie animationData={contactAnim} className="w-32 sm:w-40" aria-hidden />
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.1] text-[var(--text-primary)]">
                Open to
                <br />
                <span className="bg-gradient-to-r from-[#7dd3fc] to-[#a5b4fc] bg-clip-text text-transparent">
                  collaboration
                </span>
              </h2>
              <div className="w-24 mt-4 h-1 rounded-full bg-gradient-to-r from-[var(--accent)] to-transparent" />
            </Motion.div>

            <Motion.span
              variants={fadeItem}
              className="inline-flex w-fit items-center gap-x-2 text-xs sm:text-sm mt-2 px-3 py-1.5 rounded-full border border-emerald-400/40 bg-emerald-500/10"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <span className="font-mono uppercase tracking-widest text-emerald-300">Available for work</span>
            </Motion.span>

            <Motion.p variants={fadeItem} className="text-[var(--text-muted)] text-base max-w-md leading-relaxed">
              Prefer email or LinkedIn for quick intros; use the form for detailed project briefs.
            </Motion.p>

            <Motion.div variants={fadeUp} className="flex flex-wrap gap-3">
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
                    className="inline-flex items-center justify-center rounded-full p-3.5 bg-white/[0.06] border border-white/10 text-[var(--text-primary)] hover:border-[var(--accent)]/50 hover:bg-[var(--accent-soft)] transition-all duration-300"
                  >
                    <Icon className="text-2xl" />
                  </a>
                );
              })}
            </Motion.div>
          </Motion.div>

          <Motion.div
            variants={fadeItem}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="w-full surface-card p-6 sm:p-8 flex flex-col gap-y-6"
          >
            <div className="flex gap-x-3 items-start">
              <div className="inline-flex h-fit w-fit p-2 rounded-lg border border-[#38bdf8]/40 bg-[var(--accent-soft)]">
                <LuMessagesSquare className="text-base text-[var(--accent)]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[var(--accent)]">Message me</h3>
                <p className="text-sm text-[var(--text-muted)] mt-1">
                  I will get back to you as soon as I can.
                </p>
              </div>
            </div>
            <ContactForm openModal={openModal} setOpenModal={setOpenModal} />
          </Motion.div>
        </div>
      </div>

      {openModal && (
        <SuccessfulModal
          message="Message sent successfully!"
          onClose={() => {
            setOpenModal(false);
          }}
        />
      )}
    </section>
  );
};

export default ContactSection;
