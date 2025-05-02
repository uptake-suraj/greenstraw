import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useScaleAnimation = (delay = 0.3, duration = 2) => {
  const ref = useRef(null);
  const animationRef = useRef(null);

  useGSAP(() => {
    // Wait for layout to stabilize before initializing the animation
    const initAnimation = () => {
      // Clear any existing animation to prevent duplicates
      if (animationRef.current) {
        animationRef.current.kill();
      }

      // Initialize the element with the starting state
      gsap.set(ref.current, { opacity: 0.5, scale: 0.2 });
      
      // Create and store the animation
      animationRef.current = gsap.to(ref.current, {
        opacity: 1,
        scale: 1,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none none",
          once:true,
          invalidateOnRefresh: true,
        },
      });
    };

    // Small timeout to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      initAnimation();
    }, 100);

    return () => {
      clearTimeout(timer);
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [delay, duration]);

  return ref;
};

export default useScaleAnimation;