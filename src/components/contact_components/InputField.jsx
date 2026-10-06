import React from "react";

const InputField = ({ label, name, id, type, opt, placeholder }) => {
  return (
    <div className="flex flex-col gap-y-3 w-full">
      <label htmlFor={name} className="text-[11px] sm:text-xs font-semibold tracking-[0.15em] uppercase text-white/70">
        {label} <span className="text-[var(--accent)]">*</span>
      </label>
      {opt === "input" ? (
        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          required
          className="w-full pb-3 bg-transparent border-0 border-b border-white/20 text-white text-sm sm:text-base focus:ring-0 focus:outline-none focus:border-[var(--accent)] transition-colors placeholder:text-white/20 rounded-none"
        />
      ) : (
        <textarea
          rows={1}
          name={name}
          id={id}
          required
          placeholder={placeholder}
          className="w-full pb-3 bg-transparent border-0 border-b border-white/20 text-white text-sm sm:text-base focus:ring-0 focus:outline-none focus:border-[var(--accent)] transition-colors placeholder:text-white/20 resize-none rounded-none"
        ></textarea>
      )}
    </div>
  );
};

export default InputField;
