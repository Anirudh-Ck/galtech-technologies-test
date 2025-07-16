import React from "react";
import fabulous from "../../assets/images/featured/fabulous.png";
import closer from "../../assets/images/featured/closer.png";
import refinery29 from "../../assets/images/featured/refinery.png";
import mailOnline from "../../assets/images/featured/mailonline.png";
import thisMorning from "../../assets/images/featured/thismorning.png";
import cosmopolitan from "../../assets/images/featured/cosmopolitan.png";



const FeaturedIn = () => {
  return (
    <div className="bg-white px-4 md:px-8 py-10 text-center">
      <h3 className="text-gray-800 text-sm font-extrabold mb-6 tracking-wide">
        FEATURED IN
      </h3>
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 md:flex-nowrap">
        <img src={fabulous} alt="Fabulous" className="h-10 md:h-12 object-contain md:w-full" />
        <img src={closer} alt="Closer" className="h-10 md:h-12 object-contain md:w-full" />
        <img src={refinery29} alt="Refinery29" className="h-10 md:h-12 object-contain md:w-full" />
        <img src={mailOnline} alt="Mail Online" className="h-10 md:h-12 object-contain md:w-full" />
        <img src={thisMorning} alt="This Morning" className="h-10 md:h-12 object-contain md:w-full" />
        <img src={cosmopolitan} alt="Cosmopolitan" className="h-10 md:h-12 object-contain md:w-full" />
      </div>
    </div>
  );
};

export default FeaturedIn;
