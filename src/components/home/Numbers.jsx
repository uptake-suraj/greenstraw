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
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      const yOffsetDesktop = [140, -120, 180, -160];
      const rotationDesktop = [-5, 5, -6, 6];

      const yOffsetMobile = [-50, -40, -30, -50];
      const rotationMobile = [-3, 3, -4, 4];

      mm.add("(min-width: 768px)", () => {
        cardsRef.current.forEach((card, index) => {
          gsap.fromTo(
            card,
            { y: 0, rotateZ: rotationDesktop[index] },
            {
              y: yOffsetDesktop[index],
              rotateZ: 0,
              ease: "none",
              force3D: true,
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.5,
              },
            }
          );
        });
      });

      mm.add("(max-width: 767px)", () => {
        cardsRef.current.forEach((card, index) => {
          // Set initial state
          gsap.set(card, { 
            y: 100, 
            opacity: 0,
            rotateZ: rotationMobile[index]
          });
      
          // Create a timeline for entrance + parallax
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100",
              end: "bottom top",
              scrub: 0.5,
              // toggleActions: "play none none none" // Not needed with scrub
            }
          });
      
          // Entrance animation (bottom to top, fade in)
          tl.to(card, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out"
          });
      
          // Parallax effect (after entrance)
          tl.to(card, {
            y: yOffsetMobile[index],
            rotateZ: 0,
            ease: "none",
            duration: 1 // This duration is relative, since scrub is enabled
          });
        });
      });
      

      return () => mm.revert();
    }, sectionRef);

    return () => ctx.revert();
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
              className={`stat-card relative will-change-transform flex px-2 sm:px-4 md:px-6 ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
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
