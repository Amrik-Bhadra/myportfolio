import React from "react";

const InputField = ({ label, name, id, type, opt }) => {
  return (
    <span className="flex flex-col gap-y-2">
      <label htmlFor={name} className="text-[#ccc] text-sm font-medium">
        {label}
      </label>
      {opt === "input" ? (
        <input
          type={type}
          name={name}
          id={id}
          className="p-2 border border-gray-700 focus:border-[#8AB4F8] transition-all duration-300 outline-none bg-[#8ab4f816] rounded-md text-white text-sm"
        />
      ) : (
        <textarea
          rows={4}
          name={name}
          id={id}
          className="p-2 border border-gray-700 focus:border-[#8AB4F8] transition-all duration-300 outline-none bg-[#8ab4f816] rounded-md text-white text-sm"
        ></textarea>
      )}
    </span>
  );
};

export default InputField;
