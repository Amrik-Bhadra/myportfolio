import React, { useState } from "react";
import { LuMessagesSquare } from "react-icons/lu";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import contactAnim from "../../assets/contact.json"; // Add your Lottie file here

import SuccessfulModal from "../../components/modals/SuccessfulModal";
import ContactForm from "../../components/contact_components/ContactForm";

const ContactSection = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div
      id="contact"
      className="relative min-h-screen w-screen bg-[#0D1117] flex items-center justify-center py-10 px-6 md:px-6"
    >
      <div className="w-[85%] grid grid-cols-1 md:grid-cols-2 gap-x-4 py-10">
        {/* Left Section */}
        <div className="p-3 flex flex-col gap-y-6 items-start justify-center">
          <div className="relative text-[#eee] text-6xl md:text-7xl font-semibold leading-tight">
            <h1>Let's</h1>
            <h1>Connect</h1>
            <hr className="w-[40%] mt-3 border-3 rounded-2xl border-[#60A5FA]" />

            <div className="absolute -top-17 -right-5 md:-top-16 md:right-0">
              <Lottie animationData={contactAnim} className="w-38" />
            </div>
          </div>

          <span className="flex items-center gap-x-2 text-base mt-2 px-3 py-1 rounded-full border border-[#06d6a0] bg-[#06d69e3a]">
            <div className="rounded-full h-3 w-3 bg-[#06d6a0]"></div>
            <p className="text-[#06d6a0]">AVAILABLE FOR WORK</p>
          </span>

          {/* Short Description */}
          <p className="text-[#9CA3AF] text-lg max-w-md mt-2">
            Have a project in mind, a question, or just want to say hello? I'd
            love to hear from you.
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-x-4 mt-3">
            <a
              href="https://github.com/Amrik-Bhadra"
              target="_blank"
              rel="noreferrer"
              className="bg-[#333] rounded-full p-3"
            >
              <FaGithub className="text-[#eee] hover:text-[#8AB4F8] text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/amrik-bhadra/"
              target="_blank"
              rel="noreferrer"
              className="bg-[#333] rounded-full p-3"
            >
              <FaLinkedin className="text-[#eee] hover:text-[#8AB4F8] text-2xl" />
            </a>
            <a
              href="mailto:amrik.bhadra@gmail.com"
              className="bg-[#333] rounded-full p-3"
            >
              <MdEmail className="text-[#eee] hover:text-[#8AB4F8] text-2xl"/>
            </a>
          </div>

          {/* Location and Availability */}
          {/* <div className="text-[#9CA3AF] mt-4 text-sm">
            <p>📍 Based in Mumbai, India</p>
            <p>💼 Open to freelance and full-time roles</p>
          </div> */}
        </div>

        {/* Right Section: Contact Form */}
        <div className="p-2 w-full">
          <div className="w-full bg-[#161B22] border border-gray-700 p-5 rounded-md flex flex-col gap-y-8">
            <div className="flex gap-x-3">
              <div className="inline-block h-fit w-fit p-2 rounded-md border border-[#8AB4F8] bg-[#8ab4f82f]">
                <LuMessagesSquare className="text-base text-[#8AB4F8]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#8AB4F8]">
                Drop Your Message Here
              </h3>
            </div>
            <ContactForm openModal={openModal} setOpenModal={setOpenModal} />
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {openModal && (
        <SuccessfulModal
          message="Message Sent Successfully!"
          onClose={() => {
            setOpenModal(false);
          }}
        />
      )}
    </div>
  );
};

export default ContactSection;
