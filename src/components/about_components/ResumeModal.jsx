import React from "react";

const ResumeModal = ({onClose, resume}) => {
  return (
    <div className="absolute h-screen w-screen top-0 left-0 bg-[#0000007c] flex justify-center items-center z-50">
      <div className="bg-white rounded-md p-2 w-3/4 h-[85%] relative">
        <iframe
          src={resume} // update this to your actual file path
          className="w-full h-full"
          title="Resume PDF"
        ></iframe>
        <button
          onClick={onClose} // replace with your close handler
          className="absolute top-5 right-5 cursor-pointer text-black text-lg bg-white rounded-full h-8 w-8"
        >
          ✖
        </button>
      </div>
    </div>
  );
};

export default ResumeModal;
