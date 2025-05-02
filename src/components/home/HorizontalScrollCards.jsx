import React, { useEffect, useRef } from "react";
import {horizontalData} from "../../assets/data/horizontalData";
// import { useHorizontalScroll } from "../../hook/useHorizontalScroll";
import gsap from "gsap";
import HorizontalCard from "../card/HorizontalCard";

const HorizontalScrollCards = () => {
  // const scrollRef = useHorizontalScroll();
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="lg:my-20">
      <div className="w-full" ref={triggerRef}>
        <div ref={sectionRef} className="flex gap-8 w-max px-4 py-20">
          {horizontalData?.map((item , index) => (
            <HorizontalCard key={item.id} {...item} pageNumber={index + 1} totalPages={horizontalData.length} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorizontalScrollCards;
