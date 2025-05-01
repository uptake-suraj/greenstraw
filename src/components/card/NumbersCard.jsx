import gsap from "gsap";
import useParallax from "../../hook/useParallax";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NumbersCard = ({ stat, parallaxConfig, rotate }) => {
  const cardRef = useParallax(parallaxConfig);

  return (
    <div
      ref={cardRef}
      className={`rounded-2xl p-8 ${rotate}`}
      style={{
        backgroundColor: stat.bgColor,
        width: "500px",
        height: "360px",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <h2 className="text-[55px] font-bold mb-2">{stat.value}</h2>
      <hr className="border-t border-black opacity-20 mb-3" />
      <p className="text-3xl">{stat.label}</p>
    </div>
  );
};

export default NumbersCard;
