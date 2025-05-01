import React from "react";
import { HiPlus } from "react-icons/hi";

const HorizontalCard = ({ image, title, content1, content2 }) => {
  return (
    <div className="bg-[#E9E2DA] rounded-[20px] ${bgColor} flex flex-col md:flex-row items-stretch gap-18 p-6 md:p-8 max-w-[1000px] mx-auto shadow-md">
      
      {/* Image Wrapper */}
      <div className="w-full md:w-[60%] h-auto overflow-hidden rounded-[12px]">
        <div className=" rounded-[12px] bg-white">
          <img
            src={image}
            alt={title}
            className=" object-cover rounded-[12px]"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="w-full md:w-[60%] flex flex-col">
        <div>
          <h2 className="text-[24px] md:text-[28px] font-bold mb-4 text-black">
            {title}
          </h2>
          <p className="text-[16px] font-nohemi-light text-black mb-2">{content1}</p>
          <p className="text-[16px] text-black">{content2}</p>
        </div>

        {/* Button */}
        <button className=" bg-[#F4FF43] mt-15 px-4 py-2 text-lg font-nohemi-light text-black rounded-sm w-fit flex items-center gap-2 group transition-all duration-300 hover:rounded-full">
          READ THE FULL TEXT
          <span className="bg-white rounded-sm p-1 transition-all duration-500 group-hover:rotate-[360deg] group-hover:rounded-full">
            <HiPlus className="text-black" size={14} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default HorizontalCard;
