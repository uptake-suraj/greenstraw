import React, { useRef, useLayoutEffect, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { horizontalData } from "../../assets/data/horizontalData";
import HorizontalCard from "../card/HorizontalCard";

gsap.registerPlugin(ScrollTrigger);

const ScrollCards = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const horizontalSectionRef = useRef(null);
  const horizontalTriggerRef = useRef(null);

  const scrollTriggerRef = useRef(null);
  const timelineRef = useRef(null);
  const horizontalScrollTriggerRef = useRef(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Handle resize and update mode
  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth < 768;
      setIsMobile(isNowMobile);
  
      // Ensure ScrollTrigger recalculates layout on mode change
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 200); // a small delay ensures DOM has updated
    };
  
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  // Mobile stacked scroll setup
  useLayoutEffect(() => {
    if (!isMobile || !containerRef.current) return;

    // Cleanup old triggers
    scrollTriggerRef.current?.kill();
    timelineRef.current?.kill();

    const cards = cardRefs.current.filter(Boolean);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${cards.length * 1000}`,
        pin: true,
        scrub: 1,
        id: "stacked-scroll",
      },
    });

    scrollTriggerRef.current = tl.scrollTrigger;
    timelineRef.current = tl;

    cards.forEach((card, index) => {
        if (index !== 0) {
          // Entering animation for next card
          tl.fromTo(
            card,
            { yPercent: 100, scale: 1 },
            { yPercent: 0, scale: 1, duration: 0.8 },
            "-=0.4"
          );
        }
      
        // For the previous card, shift it slightly to give a stacked effect (but don't hide it)
        // if (index !== cards.length - 1) {
          tl.to(
            card,
            {
              yPercent: -5,
              scale: 0.98,
              duration: 0.8,
            },
            "-=0.6"
          );
        // }
      });
      

    return () => {
      scrollTriggerRef.current?.kill();
      timelineRef.current?.kill();
    };
  }, [isMobile]);

  // Desktop horizontal scroll setup
  useEffect(() => {
    if (isMobile || !horizontalSectionRef.current || !horizontalTriggerRef.current) return;

    horizontalScrollTriggerRef.current?.kill();

    const sectionEl = horizontalSectionRef.current;

    const animation = gsap.fromTo(
      sectionEl,
      { x: 0 },
      {
        x: () => `-${sectionEl.scrollWidth - window.innerWidth}`,
        ease: "none",
        scrollTrigger: {
          trigger: horizontalTriggerRef.current,
          start: "top top",
          end: () => `+=${sectionEl.scrollWidth - window.innerWidth}`,
          scrub: 0.3,
          pin: true,
          pinSpacing: true,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          id: "horizontal-scroll",
        },
      }
    );

    horizontalScrollTriggerRef.current = animation.scrollTrigger;

    return () => {
      horizontalScrollTriggerRef.current?.kill();
    };
  }, [isMobile]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      scrollTriggerRef.current?.kill();
      timelineRef.current?.kill();
      horizontalScrollTriggerRef.current?.kill();
    };
  }, []);

  // Render mobile stacked layout
  if (isMobile) {
    return (
      <section ref={containerRef} className="relative h-screen px-4  mt-24">
        {horizontalData.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => (cardRefs.current[index] = el)}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl"
            style={{
                zIndex: horizontalData.length + index, 
              }}
          >
            <HorizontalCard
              {...item}
              pageNumber={index + 1}
              totalPages={horizontalData.length}
            />
          </div>
        ))}
      </section>
    );
  }

  // Render desktop horizontal layout
  return (
    <section className="w-full overflow-hidden" ref={horizontalTriggerRef}>
      <div
        ref={horizontalSectionRef}
        className="flex gap-8 items-center h-screen"
        style={{ width: `${horizontalData.length * 90}vw` }}
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
    </section>
  );
};

export default ScrollCards;