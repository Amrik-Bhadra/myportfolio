import React from "react";
import InputField from "../../components/contact_components/InputField";
import { GrSend } from "react-icons/gr";
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
    <form onSubmit={handleSendEmail} className="flex flex-col gap-y-4">
      <InputField label="Name" name="name" id="name" type="text" opt="input" />
      <InputField
        label="Email"
        name="email"
        id="email"
        type="email"
        opt="input"
      />
      <InputField
        label="Subject"
        name="subject"
        id="subject"
        type="text"
        opt="input"
      />
      <InputField
        label="Message"
        name="message"
        id="message"
        type={null}
        opt="textarea"
      />

      <button
        type="submit"
        className="px-4 py-3 bg-[#60A5FA] text-white rounded-md text-normal shadow-lg hover:bg-[#4F8ED9] transition-all cursor-pointer mt-3 font-medium flex justify-center items-center gap-x-2"
      >
        <p>Send</p>
        <GrSend />
      </button>
    </form>
  );
};

export default ContactForm;
