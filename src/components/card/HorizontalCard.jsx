import React from "react";
import { HiPlus } from "react-icons/hi";

const HorizontalCard = ({ image, title, content1, content2 , bgColor }) => {
  return (
    <div className={`rounded-[20px] ${bgColor} flex flex-col md:flex-row items-stretch sm:gap-18 gap-5 p-6 md:p-8 max-w-[1500px] mx-auto`}>
      
      {/* Image Wrapper */}
      <div className="w-full md:w-[60%] h-auto overflow-hidden rounded-[12px]">
        <div className=" rounded-[12px]">
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
          <h2>What We Do</h2>
          <p className="sm:text-4xl text-2xl font-medium mb-4 tracking-wider">
            {title}
          </p>
          <p className="sm:text-[26px] text-base font-nohemi-light text-black mb-2">{content1}</p>
          <p className="sm:text-[26px] text-base text-black font-nohemi-light">{content2}</p>
        </div>

        {/* Button */}
        <button className=" bg-[#F4FF43] mt-15 px-4 py-2 text-lg font-nohemi-light text-black rounded-sm w-fit flex items-center gap-2 group transition-all duration-300 hover:rounded-full cursor-pointer">
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
