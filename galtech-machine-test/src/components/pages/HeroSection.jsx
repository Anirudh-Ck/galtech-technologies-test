import React, { useState } from "react";
import heroImage from "../../assets/images/Rectangle 81.webp";

function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen p-5 overflow-hidden bg-[#f9f6f3]">
      <div className="relative h-full bg-white border border-[#ff5000] rounded-xl overflow-hidden">
        {/* Hero Image Background */}
        <img
          src={heroImage}
          alt="Hero Model"
          className="absolute right-[-8%] top-0  h-full object-cover scale-110 z-0"
          style={{
            maskImage: "linear-gradient(to left, black 80%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to left, black 80%, transparent 100%)",
          }}
        />

        {/* Overlay content (on top of image) */}
        <div className="relative z-10 h-full flex flex-col py-6 px-3">
          {/* Top Bar */}
          <div className="bg-[#ff5000] text-white text-center py-2 font-bold text-xs rounded-full md:text-sm">
            FREE UK SHIPPING ON ORDERS OVER £40
          </div>

          {/* Navbar (desktop) */}
          <div className="hidden md:flex justify-between items-center py-4">
            <div className="flex gap-4 border border-[#ff5000] rounded-full">
              <button className="px-4 py-1 font-extrabold text-sm">SHOP</button>
              <button className="px-4 py-1 font-extrabold text-sm">ABOUT</button>
              <button className="px-4 py-1 font-extrabold text-sm">LEARN</button>
            </div>

            <div className="flex gap-4">
              <button className="border border-[#ff5000] rounded-full px-4 py-1 font-extrabold text-sm">
                SEARCH
              </button>
              <button className="relative flex items-center border border-[#ff5000] rounded-full px-4 py-1 font-extrabold text-sm pr-9">
                <span>CART</span>

                <span className="absolute right-4 top-1/2 -translate-y-1/2 translate-x-1/2 w-8 h-8 flex items-center justify-center bg-white text-[#ff5000] border border-[#ff5000] rounded-full text-base font-bold">
                  0
                </span>
              </button>
            </div>
          </div>

          {/* Navbar (mobile) */}
          <div className="md:hidden flex justify-between items-center py-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="border border-[#ff5000] rounded-full px-4 py-1 font-extrabold text-sm"
            >
              {isOpen ? "CLOSE" : "MENU"}
            </button>

            <button className="relative flex items-center border border-[#ff5000] rounded-full px-4 py-1 font-extrabold text-sm pr-9">
              <span>CART</span>

              <span className="absolute right-4 top-1/2 -translate-y-1/2 translate-x-1/2 w-8 h-8 flex items-center justify-center bg-white text-[#ff5000] border border-[#ff5000] rounded-full text-base font-bold">
                0
              </span>
            </button>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div className="md:hidden bg-white border border-[#ff5000] rounded-xl p-4">
              <div className="flex flex-col gap-4">
                <button className="px-4 py-1 font-extrabold text-sm">SHOP</button>
                <button className="px-4 py-1 font-extrabold text-sm">ABOUT</button>
                <button className="px-4 py-1 font-extrabold text-sm">LEARN</button>
                <h1 className="text-2xl font-medium text-center text-[#ff5000] tracking-[8px]">
                  PROJECT
                </h1>
              </div>
            </div>
          )}

          {/* Main Content */}
          <div className="flex-1 flex flex-col justify-center md:justify-end text-left md:w-1/2 p-4">
            <h2 className="text-[34px] md:text-[58px] font-extrabold text-[#ff5000] leading-[1.1] tracking-tight max-w-[500px]">
              BIG LIPS,
              <br />
              BIGGER ENERGY
            </h2>
            <p className="mt-3 text-gray-700 text-sm md:text-base max-w-[460px] leading-relaxed">
              Our famous lip liner lines, fills and plumps so you can cheat your
              way to an instant lip lift.
            </p>
            <button className="mt-6 border border-[#ff5000] text-[#ff5000] font-extrabold rounded-full px-5 py-2 text-xs md:text-sm hover:bg-[#ff5000] hover:text-white transition w-fit">
              SHOP PLUMP & FILL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

