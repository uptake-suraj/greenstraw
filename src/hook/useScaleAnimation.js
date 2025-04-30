import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useScaleAnimation = (type = "scaleUp", delay = 0.5, duration = 1.5) => {
  const ref = useRef(null);

  useGSAP(() => {
    let fromVars = { opacity: 0 };
    let toVars = {
      opacity: 1,
      duration,
      delay,
      ease: "power3.out",
    };

    if (type === "scaleUp") {
      fromVars.scale = 0.5;
      toVars.scale = 1;
    } else if (type === "scaleIn") {
      fromVars.scale = 0;
      toVars.scale = 1;
      toVars.ease = "back.out(1.7)";
    }

    gsap.fromTo(ref.current, fromVars, {
      ...toVars,
      scrollTrigger: {
        trigger: ref.current,
        start: "top bottom", 
        toggleActions: "play none none none", 
        // markers: true, 
            },
    });
  }, []);

  return ref;
};

export default useScaleAnimation;
