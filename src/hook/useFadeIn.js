import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useScaleAnimation = (delay = 0.3, duration = 2) => {
  const ref = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0.5, scale: 0.2  },
      {
        opacity: 1,
        scale: 1,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return ref;
};

export default useScaleAnimation;
