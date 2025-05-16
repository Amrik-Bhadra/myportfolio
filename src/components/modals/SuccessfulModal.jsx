import React, { useEffect } from "react";
import success from "../../assets/success.gif"

const SuccessfulModal = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2500);

    // cleanup function
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="absolute top-0 left-0 h-screen w-screen z-50 bg-[#0000007b] flex items-center justify-center">
      <div className="w-fit bg-white rounded-md p-6 text-center shadow-md flex flex-col justify-center items-center">
        <img src={success} alt="success-gif" className="h-40 w-40" />
        <h1 className="text-lg font-semibold text-[#333]">{message}</h1>
      </div>
    </div>
  );
};

export default SuccessfulModal;
