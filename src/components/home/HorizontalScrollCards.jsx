import React, { useEffect, useRef } from "react";
import { horizontalData } from "../../assets/data/horizontalData";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import HorizontalCard from "../card/HorizontalCard";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollCards = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    const triggerEl = triggerRef.current;

    // Create context to isolate this ScrollTrigger
    const ctx = gsap.context(() => {
      const scrollWidth = sectionEl.scrollWidth;
      const windowWidth = window.innerWidth;

      // Create the horizontal scroll animation
      gsap.fromTo(
        sectionEl,
        { x: 0 },
        {
          x: `-${scrollWidth - windowWidth}`,
          ease: "none",
          scrollTrigger: {
            trigger: triggerEl,
            start: "top top",
            end: () => `+=${scrollWidth}`,
            scrub: 0.6,
            pin: true,
            pinSpacing: true,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            id: "horizontal-scroll",
          },
        }
      );
    });

    // Function to handle resize events
    const updateAnimation = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", updateAnimation);

    return () => {
      // Clean up context when component unmounts
      ctx.revert();
      window.removeEventListener("resize", updateAnimation);
    };
  }, []);

  return (
    <section className="lg:my-20">
      <div className="w-full overflow-hidden" ref={triggerRef}>
        <div
          ref={sectionRef}
          className="flex gap-8 px-4 py-20"
          style={{ width: `${horizontalData.length * 100}vw` }}
        >
          {horizontalData.map((item, index) => (
            <HorizontalCard
              key={item.id}
              {...item}
              pageNumber={index + 1}
              totalPages={horizontalData.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorizontalScrollCards;
