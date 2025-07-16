import React from "react";
import heroImage from "../../assets/images/madeToPlump/made-to-plump-img.png"; // adjust if needed

const MadeToPlumpSection = () => {
  const repeatedText = Array(5).fill("YOU ARE YOUR BEST PROJECT");

  return (
    <div className="bg-[#fefcf9] p-4 md:p-8 rounded-3xl">
      <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden">
        {/* Left Image Section */}
        <div className="relative w-full md:w-1/2 h-[400px] md:h-auto flex">
          {/* Image */}
          <img
            src={heroImage}
            alt="Faces"
            className="w-full h-full object-cover"
          />

          {/* Vertical Text Strip */}
          <div className="absolute top-0 right-0 h-full w-[30px] bg-[#ff5000] flex flex-col items-center justify-center overflow-hidden">
            <div className="flex flex-col gap-4 animate-marqueeVertical">
              {repeatedText.map((text, index) => (
                <span
                  key={index}
                  className="text-white text-[10px] font-bold uppercase tracking-wider rotate-180 whitespace-nowrap"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                  }}
                >
                  {text}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Text Section */}
        <div className="w-full md:w-1/2 bg-white flex flex-col justify-end px-6 py-10 md:py-0 md:pb-10">
          <h2 className="w-[520px] text-[#ff5000] text-[34px] md:text-[58px] font-extrabold leading-none tracking-tighter mb-4">
            MADE TO PLUMP, <br /> MADE FOR EVERYONE
          </h2>
          <p className=" text-gray-700 text-sm leading-relaxed mb-6">
            We're here to empower you to celebrate your natural beauty and have
            fun while doing it. That’s why we’ve created derm-approved, clean
            and conscious plumpers that you can actually feel good about
            obsessing over.
          </p>
          <button className="text-sm md:text-base border border-[#ff5000] text-[#ff5000] font-extrabold px-8 py-1 rounded-full hover:bg-[#ff5000] hover:text-white transition w-fit">
            DISCOVER MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default MadeToPlumpSection;
