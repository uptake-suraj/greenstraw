import gsap from "gsap";
import useParallax from "../../hook/useParallax";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NumbersCard = ({ stat , parallaxConfig }) => {
  const cardRef = useParallax(parallaxConfig);

  return (
    <div 
      ref={cardRef}
      className="rounded-2xl p-8"
      style={{ 
        backgroundColor: stat.bgColor,
        width: "480px",
        height: "300px",
        position: "relative",
        zIndex: 1,
        flexDirection: "column",
    
    }}
  >
    <h2 className="text-[55px] font-bold mb-2">{stat.value}</h2>
    <hr className="border-t border-black opacity-20 mb-3" />
    <p className="text-3xl">{stat.label}</p>
  </div>
  );
};

export default NumbersCard;
