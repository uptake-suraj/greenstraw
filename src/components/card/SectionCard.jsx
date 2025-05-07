import React, { useState, useRef, useEffect } from "react";
import { HiArrowRight } from "react-icons/hi";
import useScaleAnimation from "../../hook/useScaleIn";

const SectionCard = ({ title, bgColor, index = 0 }) => {
  // Stagger delay based on index for sequential animation
  const staggerDelay = index * 0.75;
  const cardRef = useScaleAnimation(staggerDelay, 0.8, 0.85, "top 85%");
  
  // State to track hover on card
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationTimeoutRef = useRef(null);

  // Handle animation timing
  useEffect(() => {
    if (isCardHovered && !isAnimating) {
      setIsAnimating(true);
      
      // Reset animation state after animation completes
      animationTimeoutRef.current = setTimeout(() => {
        setIsAnimating(false);
        // Only restart animation if still hovering
        if (isCardHovered) {
          setIsAnimating(true);
        }
      }, 300); // Match animation duration (0.3s = 300ms)
    }
    
    return () => {
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, [isCardHovered, isAnimating]);

  return (
    <div
      ref={cardRef}
      className={`relative rounded-xl p-6 lg:p-10 min-h-[130px] lg:min-h-[200px] ${bgColor} text-black font-medium hover:rounded-4xl transition-all duration-300 cursor-pointer opacity-0`}
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => {
        setIsCardHovered(false);
        setIsAnimating(false);
      }}
    >
      <span className="text-2xl lg:text-4xl leading-tight block max-w-[80%]">
        {title}
      </span>
      
      <div className="absolute bottom-4 right-4 bg-white rounded-full p-3 overflow-hidden">
        <div className={`flex items-center justify-center ${isAnimating ? 'arrow-run-animation' : ''}`}>
          <HiArrowRight size={30} />
        </div>
      </div>
    </div>
  );
};

export default SectionCard;