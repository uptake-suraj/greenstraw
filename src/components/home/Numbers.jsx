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
        y: window.innerWidth > 768 ? index % 2 === 0 ? 140 : -120 : -120,
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
    <div className="min-h-screen px-4 sm:px-6 md:px-10 py-12" ref={sectionRef}>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-medium text-center mb-16">
          OUR NUMBERS THAT SPEAK
        </h1>

        <div className="relative max-sm:space-y-12">
          {NumbersData.map((stat, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`
                stat-card 
                relative 
                ${index % 2 === 0 ? "flex justify-start" : "flex justify-end"}
                px-2 sm:px-4 md:px-6
              `}
             
            >
              <NumbersCard
                stat={stat}
                rotate={index % 2 === 0 ? "rotate-2" : "-rotate-2"}
 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Numbers;
