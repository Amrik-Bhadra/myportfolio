import React from "react";
import InputField from "../../components/contact_components/InputField";
import { FaArrowRight } from "react-icons/fa6";
import emailjs from "emailjs-com";

const ContactForm = ({ openModal, setOpenModal }) => {
  const handleSendEmail = (e) => {
    e.preventDefault();
    const params = {
      name: e.target.name.value,
      email: e.target.email.value,
      title: e.target.subject.value,
      message: e.target.message.value,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send("service_1r495ld", "template_u746m7c", params, "T1AHH3Zh_1KbKI3oP")
      .then(
        (result) => {
          console.log("Message sent:", result.text);
          setOpenModal(!openModal);
          e.target.reset();
        },
        (error) => {
          console.error("Failed to send message:", error.text);
        }
      );
  };

  return (
    <form onSubmit={handleSendEmail} className="flex flex-col gap-y-10 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
        <InputField 
          label="Full Name" 
          name="name" 
          id="name" 
          type="text" 
          opt="input" 
          placeholder="John Doe" 
        />
        <InputField
          label="Email Address"
          name="email"
          id="email"
          type="email"
          opt="input"
          placeholder="john@example.com"
        />
      </div>
      
      <InputField
        label="Project Type"
        name="subject"
        id="subject"
        type="text"
        opt="input"
        placeholder="Website redesign"
      />

      <InputField
        label="Tell Me About Your Project"
        name="message"
        id="message"
        type={null}
        opt="textarea"
        placeholder="Describe your project, goals, and requirements..."
      />

      <button
        type="submit"
        className="relative w-full flex items-center justify-center py-4 mt-2 bg-[var(--accent)] text-white font-bold text-sm sm:text-base uppercase tracking-widest hover:brightness-110 hover:shadow-[0_0_20px_var(--accent-glow)] transition-all duration-300 group rounded-full"
      >
        <span>Send Inquiry</span>
        <span className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-[var(--accent)] flex items-center justify-center group-hover:scale-110 transition-transform">
          <FaArrowRight size={16} />
        </span>
      </button>
    </form>
  );
};

export default ContactForm;
