import React from "react";

const Background = ({ theme }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-500">
      <img
        src="/background.svg"
        alt="Background"
        className="w-full h-full object-cover"
      />
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-500 ${
          theme === "dark" ? "opacity-50" : "opacity-0"
        }`}
      ></div>
    </div>
  );
};

export default Background;
