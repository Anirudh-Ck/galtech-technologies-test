import React from "react";
import product1 from "../../assets/images/PlumpingKits/kit1.png";
import product2 from "../../assets/images/PlumpingKits/kit2.png";
import product3 from "../../assets/images/PlumpingKits/kit3.png";
import product4 from "../../assets/images/PlumpingKits/kit1.png";

const kits = [
  {
    name: "THE FULL WORKS",
    desc: "Buff, prep & plump kit",
    price: "£42.00",
    oldPrice: "£54.00",
    discount: "22% OFF",
    image: product1,
  },
  {
    name: "FILTER FREE",
    desc: "Smooth, plump & prep kit",
    price: "£35.00",
    oldPrice: "£42.00",
    discount: "16% OFF",
    image: product2,
  },
  {
    name: "PLUMP & FILL LINER BUNDLES",
    desc: "Plumping lip liner kit",
    price: "£35.00",
    oldPrice: "£48.00",
    discount: "27% OFF",
    image: product3,
    shades: ["#a2615f", "#c2837c", "#d4a4a1"],
  },
  {
    name: "PREP & PLUMP",
    desc: "Prime, hydrate & plump kit",
    price: "£24.00",
    oldPrice: "£30.00",
    discount: "20% OFF",
    image: product4,
  },
];

const PlumpingKits = () => {
  return (
    <div className="bg-[#fefcf9] px-4 md:px-8 py-20">
      {/* Header */}
      <div className="flex justify-between items-center mb-10 flex-wrap gap-y-4 md:gap-y-0">
        <h2 className="text-[#ff5000] text-[34px] md:text-[58px] font-extrabold leading-none tracking-tighter">
          PLUMPING KITS
        </h2>
        <button className="border border-[#ff5000] text-[#ff5000] font-extrabold text-sm md:text-base px-8 py-1 rounded-full hover:bg-[#ff5000] hover:text-white transition">
          SHOP ALL KITS
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {kits.map((kit, idx) => (
          <div key={idx} className="p-4 pb-6  relative">
            {/* Image + discount badge wrapper with border and rounded corners */}
            <div className="border border-[#ff5000]/40 rounded-[20px] relative overflow-hidden bg-white">
              {/* Discount badge */}
              {kit.discount && (
                <div className="absolute top-3 left-3 bg-[#ff5000] text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                  {kit.discount}
                </div>
              )}

              <div className="flex justify-center mt-6 mb-6 px-5 py-2">
                <img
                  src={kit.image}
                  alt={kit.name}
                  className="h-[400px] object-contain rounded-[20px]"
                />
              </div>
            </div>

            {/* Contents without border */}
          
            <h3 className="text-[14px] font-extrabold uppercase py-4">
              {kit.name}
            </h3>
            <p className="text-[14px] text-gray-600 mt-1">{kit.desc}</p>

            {/* Price */}
            <div className="flex items-center mt-2">
              <span className="text-[#ff5000] font-bold text-[10px]">
                {kit.price}
              </span>
              <span className="line-through text-gray-500 text-[10px]">
                {kit.oldPrice}
              </span>
            </div>

            {/* Shades (optional) */}
            {kit.shades && (
              <div className="flex gap-2 mt-3">
                {kit.shades.map((shade, i) => (
                  <span
                    key={i}
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: shade }}
                  ></span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlumpingKits;
