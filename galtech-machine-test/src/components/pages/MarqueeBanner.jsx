import React from "react";

const items = [
  "CLINICALLY PROVEN TO PLUMP",
  "100% NATURAL",
  "VEGAN",
  "CRUELTY-FREE",
  "CERTIFIED",
];

const MarqueeBanner = () => {
  return (
    <div className="overflow-hidden bg-white py-3">
      <div className="flex whitespace-nowrap animate-marquee gap-10">
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="text-[#ff5000] font-extrabold text-[14px] md:text-[24px] flex items-center gap-2"
          >
            <span className="w-2 h-2 bg-[#ff5000]/20 rounded-full inline-block" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBanner;
