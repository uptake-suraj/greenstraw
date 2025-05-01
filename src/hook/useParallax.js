import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useParallax = ({
  y = 100,              // Use pixel values, not percentages
  scrub = 0.3,
  start = "top 90%",
  end = "bottom top",
  delay = 0,
  ease = "power2.out",
} = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const anim = gsap.fromTo(
      element,
      { y: 0 },
      {
        y,
        ease,
        delay,
        scrollTrigger: {
          trigger: element,
          start,
          end,
          scrub,
        },
      }
    );

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, [y, scrub, start, end, delay, ease]);

  return elementRef;
};

export default useParallax;
