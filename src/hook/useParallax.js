import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);


const useGsapParallax = ({
  yPercent = 20,
  speed = 1,
  reverse = false,
  start = "top bottom",
  end = "bottom top",
  delay = 0,
} = {}) => {
  const elementRef = useRef(null);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    // Calculate movement direction
    const actualYPercent = reverse ? -yPercent : yPercent;
    
    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start,
        end,
        scrub: true,
        markers: false, // Set to true for debugging
      },
    });
    
    // Add animation to timeline
    tl.fromTo(
      element,
      { y: 0 },
      { 
        y: actualYPercent * speed, 
        ease: "none",
        delay,
      }
    );
    
    // Cleanup
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, [yPercent, speed, reverse, start, end, delay]);
  
  return elementRef;
};

export default useGsapParallax;