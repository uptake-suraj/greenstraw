import { HiArrowRight } from "react-icons/hi";
import useScaleAnimation from "../../hook/useScaleAnimation";
 
const SectionCard = ({ title, bgColor }) => {
  const cardRef = useScaleAnimation("scaleUp", 0.5, 1);
 
  return (
    <div
      ref={cardRef}
      className={`relative rounded-xl p-6 lg:p-10 min-h-[130px] lg:min-h-[200px] ${bgColor} text-black font-medium hover:rounded-4xl transition-all duration-300 cursor-pointer`}
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