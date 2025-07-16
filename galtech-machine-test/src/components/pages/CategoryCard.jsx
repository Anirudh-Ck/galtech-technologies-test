import React from "react";
import faceImg from "../../assets/images/Placement_Area2.webp";
import lipImg from "../../assets/images/Placement_Area1.png";
import kitsImg from "../../assets/images/Placement_Area_2a5a1a48-51cc-4dd2-a552-a28c0f88da9f.webp";

function CategoryCard() {
  const categories = [
    { title: "LIP", image: lipImg },
    { title: "FACE", image: faceImg },
    { title: "KITS", image: kitsImg },
  ];

  return (
    <div className="bg-[#f9f6f3] px-5 py-10 h-full">
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center h-full">
        {categories.map((item, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden w-full max-w-none  h-full"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 text-white text-lg font-semibold">
              SHOP <br />
              <span
                className="text-[30px] md:text-[50px] font-extrabold"
                style={{ lineHeight: "1.2em" }}
              >
                {item.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryCard;
