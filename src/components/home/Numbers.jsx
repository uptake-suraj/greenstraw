import { useEffect, useRef } from "react";
import { NumbersData } from "../../assets/data/Numbers";
import NumbersCard from "../card/NumbersCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Numbers = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.to(card, {
        y: index % 2 === 0 ? 140 : -120,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        },
      });
    });
  }, []);

  return (
    <div className="bg-[#f3f1ec] min-h-screen p-6" ref={sectionRef}>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-medium text-center mb-16">
          OUR NUMBERS THAT SPEAK
        </h1>

        <div className="relative space-y-12">
          {NumbersData.map((stat, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`stat-card relative z-[${10 - index}] ${
                index % 2 === 0 ? "flex justify-start" : "flex justify-end"
              }`}
            >
              <NumbersCard stat={stat} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Numbers;