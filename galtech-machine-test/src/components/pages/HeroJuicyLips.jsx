import React from "react";
import lipsImage from "../../assets/images/Placement_Area_ad738f53-e512-46e8-bd01-ff49708c6eb2.png"; 
import smearImage from "../../assets/images/ice.png"; 
import { FiArrowRight } from "react-icons/fi";

const HeroJuicyLips = () => {
  return (
    <div className="bg-[#f9f6f3] px-4 md:px-10 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch h-full">
        <div
          className="relative rounded-3xl overflow-hidden h-[400px] md:h-full bg-cover bg-center flex items-end p-6"
          style={{ backgroundImage: `url(${lipsImage})` }}
        >
          <div className="absolute top-0 left-0 p-6">
            <div className="bg-[#ff5000] text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">
              TRENDING ON TIKTOK
            </div>
            <h2 className="text-white text-[34px] md:text-[58px] font-extrabold leading-none tracking-tighter">
              YOUR LIPS <br /> BUT JUICIER
            </h2>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 flex flex-col justify-between relative">
          <div className="flex justify-center items-center mb-6">
            <img
              src={smearImage}
              alt="Plump Juice"
              className="w-[240px] h-auto object-contain"
            />
          </div>
          <div>
            <h3 className="text-black font-extrabold text-[16px] mb-1">
              PLUMP JUICE
            </h3>
            <p className="text-[14px] text-gray-600 mb-1">Coconut • Clear</p>
            <p className="text-[15px] font-bold text-black mb-4">£18.00</p>

            <button className="border border-[#ff5000] text-[#ff5000] font-extrabold px-8 py-1 rounded-full hover:bg-[#ff5000] hover:text-white transition text-sm md:text-base">
              ADD TO CART
            </button>
          </div>

          <div className="absolute top-1/2 right-6 transform -translate-y-1/2">
            <button className="w-10 h-10 border border-[#ff5000] rounded-full flex items-center justify-center text-[#ff5000] hover:bg-[#ff5000] hover:text-white transition">
              <FiArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroJuicyLips;
