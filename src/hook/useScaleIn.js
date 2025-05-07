import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const useScaleAnimation = (
  delay = 0, 
  duration = 0.8, 
  startScale = 0.85, 
  startPosition = "top 85%",
  easing = "power3.out"
) => {
  const elementRef = useRef(null);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    // Create context for cleanup
    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set(element, { 
        opacity: 0,
        scale: startScale,
        force3D: true // Enable hardware acceleration
      });
      
      // Create animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: startPosition,
          toggleActions: "play none none none",
          once: true,
          id: `scale-in-${Math.random().toString(36).substr(2, 9)}` 
        }
      });
      
      tl.to(element, {
        opacity: 1,
        scale: 1,
        duration: duration,
        delay: delay,
        ease: easing,
        clearProps: "transform" // Clean up transform after animation completes
      });
    });
    
    // Clean up
    return () => ctx.revert();
  }, [delay, duration, startScale, startPosition, easing]);
  
  return elementRef;
};

export default useScaleAnimation;