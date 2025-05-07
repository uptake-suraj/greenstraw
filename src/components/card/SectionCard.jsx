import React from "react";
import { HiArrowRight } from "react-icons/hi";
import useScaleAnimation from "../../hook/useScaleIn";

const SectionCard = ({ title, bgColor, index = 0 }) => {
  // Stagger delay based on index for sequential animation
  const staggerDelay = index * 0.75;
  const cardRef = useScaleAnimation(staggerDelay, 0.8, 0.85, "top 85%");

  return (
    <div
      ref={cardRef}
      className={`relative rounded-xl p-6 lg:p-10 min-h-[130px] lg:min-h-[200px] ${bgColor} text-black font-medium hover:rounded-4xl transition-all duration-300 cursor-pointer opacity-0`}
    >
      <span className="text-2xl lg:text-4xl leading-tight block max-w-[80%]">
        {title}
      </span>
      <div className="absolute bottom-4 right-4 bg-white rounded-full p-3">
        <HiArrowRight size={30} />
      </div>
    </div>
  );
};

export default SectionCard;