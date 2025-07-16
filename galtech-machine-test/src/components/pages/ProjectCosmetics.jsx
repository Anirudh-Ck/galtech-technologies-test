import React from "react";
import influencer1 from "../../assets/images/projectCosmetics/influ1.png";
import influencer2 from "../../assets/images/projectCosmetics/influ2.png";
import influencer3 from "../../assets/images/projectCosmetics/influ3.png";

const influencers = [
  influencer1,
  influencer2,
  influencer3,
  influencer1,
  influencer2,
  influencer3,
  influencer1,
  influencer2,
];

function ProjectCosmetics() {
  return (
    <div className="bg-[#fefcf9]  py-10">
      {/* Top section */}
      <div className="flex flex-wrap items-center justify-between mb-8 px-4 md:px-8 gap-y-4 md:gap-y-0">
        <h2 className="text-[#ff5000] text-2xl md:text-4xl font-extrabold tracking-tight">
          @PROJECT_COSMETICS
        </h2>
        <button className="text-sm md:text-base border-2 border-[#ff5000] text-[#ff5000] font-bold px-6 py-1 rounded-full hover:bg-[#ff5000] hover:text-white transition">
          FOLLOW US
        </button>
      </div>

      {/* Images row */}
      <div className="flex gap-4 overflow-x-auto md:overflow-x-scroll md:scroll-smooth scrollbar-hide mr-4">
        {influencers.map((img, index) => (
          <div
            key={index}
            className="min-w-[160px] md:min-w-[calc(100%/6)] w-full md:w-1/6 rounded-2xl overflow-hidden shadow-sm"
          >
            <img
              src={img}
              alt={`influencer-${index}`}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectCosmetics;
