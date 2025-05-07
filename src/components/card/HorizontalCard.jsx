import React from "react";
import { HiPlus } from "react-icons/hi";

const HorizontalCard = ({
  image,
  title,
  content1,
  content2,
  bgColor,
  pageNumber = 1,
  totalPages = 5,
}) => {
  return (
    <div
      className={`rounded-[20px]  md:h-180 h-screen  ${bgColor} flex flex-col lg:flex-row items-stretch sm:gap-18 gap-5 p-6 md:p-8 md:w-400 mx-auto`}
    >
      <img
        src={image}
        alt={title}
        className="lg:object-cover object-contain w-full lg:w-[40%] lg:h-full h-60 rounded-[12px]"
      />

      <div className="w-full lg:w-[60%] flex flex-col">
        <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-4">
          <p className="text-[#777777] text-xl sm:text-2xl">What We Do</p>
          <span className="text-[#777777] text-sm sm:text-base">
            {pageNumber} / {totalPages}
          </span>
        </div>

        <p className="lg:text-4xl text-2xl font-medium mb-4 tracking-wider">
          {title}
        </p>
        <p className="lg:text-2xl text-lg xl:leading-9 font-nohemi-light mb-2">
          {content1}
        </p>
        <p className="lg:text-2xl text-lg xl:leading-9 font-nohemi-light">
          {content2}
        </p>

        {/* Button */}
        <button className="bg-[#F4FF43] mt-15 px-4 py-2 text-lg font-nohemi-light text-black rounded-sm w-fit flex items-center gap-2 group transition-all duration-300 hover:rounded-full cursor-pointer">
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
