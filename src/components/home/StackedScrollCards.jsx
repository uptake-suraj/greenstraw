import { useRef, useLayoutEffect, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { horizontalData } from "../../assets/data/horizontalData";
import HorizontalCard from "../card/HorizontalCard";

gsap.registerPlugin(ScrollTrigger);

const StackedScrollCards = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1280);
  const animationRef = useRef(null);

  // Handle screen resize
  useEffect(() => {
    const onResize = () => {
      const small = window.innerWidth < 1280;
      setIsSmallScreen(small);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useLayoutEffect(() => {
    // Clear old ScrollTrigger animations on resize
    ScrollTrigger.getAll().forEach((t) => t.kill());
    if (!isSmallScreen || !containerRef.current) return;

    const cards = cardRefs.current;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${cards.length * 1000}`,
        pin: true,
        scrub: 1,
      },
    });

    cards.forEach((card, index) => {
      if (index === 0) {
        tl.fromTo(
          card,
          { opacity: 1, yPercent: 0, scale: 1 },
          { opacity: 0.7, yPercent: -2, scale: 0.95, duration: 1 }
        );
      } else {
        tl.fromTo(
          card,
          { opacity: 0, yPercent: 75, scale: 1 },
          { opacity: 1, yPercent: 0, duration: 1 },
          "-=0.6"
        );

        if (index !== cards.length - 1) {
          tl.to(
            card,
            { opacity: 0.7, yPercent: -2, scale: 0.95, duration: 1 },
            "+=0.4"
          );
        }
      }

      // Ensure that previous images disappear when new one comes into view
      if (index !== cards.length - 1) {
        tl.to(
          card,
          {
            opacity: 0,
            yPercent: -50,
            scale: 0.95,
            duration: 1,
            stagger: 0.1,
          },
          `-=${0.3}`
        );
      }
    });

    animationRef.current = tl;

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [isSmallScreen]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen px-4 py-24 lg:hidden "
    >
      {horizontalData.map((item, index) => (
        <div
          key={item.id}
          ref={(el) => (cardRefs.current[index] = el)}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl "
          style={{ zIndex: 10 - index }}
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
};

export default StackedScrollCards;
