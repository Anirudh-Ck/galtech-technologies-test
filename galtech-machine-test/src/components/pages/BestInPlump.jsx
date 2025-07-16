import React, { useRef } from "react";
import product1 from "../../assets/images/plump2.webp";
import product2 from "../../assets/images/plump3.webp";


const products = [
  {
    name: "PLUMP JUICE",
    description: "Plumping & hydrating lip oil",
    price: "£18.00",
    image: product1,
    dots: 3,
  },
  {
    name: "PLUMP JUICE",
    description: "Plumping & hydrating lip oil",
    price: "£18.00",
    image: product2,
    dots: 3,
  },
  {
    name: "EXTREME MATTE PLUMPING PRIMER",
    description: "Extreme plumping lip primer",
    price: "£16.00",
    image: product1,
  },
  {
    name: "PLUMP & FILL",
    description: "Plumping lip liner",
    price: "£16.00",
    image: product2,
    shades: 6,
    moreShades: 3,
  },
  {
    name: "ANOTHER PRODUCT",
    description: "More plumping",
    price: "£20.00",
    image: product1,
  },
  {
    name: "YET ANOTHER",
    description: "Lip filler",
    price: "£22.00",
    image: product2,
  },
];

const BestInPlump = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const scrollAmount = container.offsetWidth;

    container.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#f9f6f3] px-4 md:px-5 py-10 overflow-hidden">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-[#ff5000] text-[34px] md:text-[58px] font-extrabold leading-none tracking-tighter">
          BEST IN PLUMP
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="border border-[#ff5000] text-[#ff5000] font-bold px-3 py-1 rounded-full hover:bg-[#ff5000] hover:text-white transition"
          >
            ←
          </button>
          <button
            onClick={() => scroll("right")}
            className="border border-[#ff5000] text-[#ff5000] font-bold px-3 py-1 rounded-full hover:bg-[#ff5000] hover:text-white transition"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide"
      >
        {products.map((product, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[calc(100%/1.2)] sm:w-[calc(100%/2.3)] md:w-[calc(100%/4.1)] snap-start p-4 flex flex-col items-start"
          >
            <div className="w-full flex justify-center items-center mb-4 rounded-[24px] border border-[#ff5000] bg-white py-6">
              <img
                src={product.image}
                alt={product.name}
                className="h-[400px] w-full max-w-[300px] object-contain"
              />
            </div>

            <h3 className="font-extrabold text-[15px] text-black">
              {product.name}
            </h3>
            <p className="text-[14px] text-gray-600 mt-1">
              {product.description}
            </p>
            <p className="text-[14px] font-bold text-black mt-1">
              {product.price}
            </p>

            {product.dots && (
              <div className="flex gap-2 mt-2">
                <span className="w-3 h-3 rounded-full bg-[#f3f3f3]" />
                <span className="w-3 h-3 rounded-full bg-[#f4ced0]" />
                <span className="w-3 h-3 rounded-full bg-[#e84b57]" />
              </div>
            )}

            {product.shades && (
              <div className="flex gap-[6px] mt-2 items-center flex-wrap">
                {Array(product.shades)
                  .fill()
                  .map((_, i) => (
                    <span
                      key={i}
                      className="w-3.5 h-3.5 rounded-full bg-[#c47a6a]"
                    />
                  ))}
                <span className="text-xs text-gray-600 font-semibold ml-1">
                  +{product.moreShades}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestInPlump;

