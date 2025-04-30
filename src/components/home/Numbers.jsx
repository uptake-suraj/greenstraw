import { useEffect, useRef } from "react";
import { NumbersData } from "../../assets/data/Numbers";
import NumbersCard from "../card/NumbersCard";
import gsap from "gsap";


const Numbers = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Initial animation for cards when they first appear
    const cards = gsap.utils.toArray(".stat-card");

    gsap.fromTo(
      cards,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div className="bg-[#f3f1ec] min-h-screen p-6 " ref={sectionRef}>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-6xl font-medium text-center mb-16">
          OUR NUMBERS THAT SPEAK
        </h1>

        <div className="relative">
          {NumbersData.map((stat, index) => (
            <div
              key={index}
              className={`${
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
