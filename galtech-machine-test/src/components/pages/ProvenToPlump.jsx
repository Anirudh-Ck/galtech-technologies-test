import React from "react";
import smearBanner from "../../assets/images/provenToPlump.webp"; // Replace with actual filename

const ProvenToPlump = () => {
  return (
    <div className="bg-[#f9f6f3] text-center px-4 py-10">
      <div className="w-full max-w-5xl mx-auto mb-2">
        <img
          src={smearBanner}
          alt="Product Smear Banner"
          className="w-full h-auto object-contain"
        />
      </div>

      <h2 className="text-[#ff5000] text-[#ff5000] text-[34px] md:text-[58px] font-extrabold leading-none tracking-tighter uppercase">
        PRODUCTS PROVEN <br /> TO PLUMP
      </h2>

      <p className="text-gray-700 text-[16px] md:text-[18px] max-w-2xl mx-auto mt-4 text-gray-700 text-base md:text-lg max-w-[460px] leading-relaxed">
        Clean, conscious and clinically proven, our plumpers deliver real
        results so you can plump up your beauty, naturally.
      </p>

      <button className="mt-6 border border-[#ff5000] text-[#ff5000] font-extrabold rounded-full px-5 py-2 text-sm md:text-base hover:bg-[#ff5000] hover:text-white transition w-fit">
        SEE THE RESULTS
      </button>
    </div>
  );
};

export default ProvenToPlump;
