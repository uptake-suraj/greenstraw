import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useHorizontalScroll = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    const sections = gsap.utils.toArray(element.children);
    const totalWidth = element.scrollWidth;
    const viewportWidth = window.innerWidth;

    gsap.set(element, { x: 0 });

    const scrollTween = gsap.to(element, {
      x: () => `-${totalWidth - viewportWidth}`,
      ease: "power1.out",
      scrollTrigger: {
        trigger: element,
        start: "top top",
        end: () => `+=${totalWidth - viewportWidth}`,
        scrub: 1.2,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => {
      ScrollTrigger.killAll();
      scrollTween.kill();
    };
  }, []);

  return scrollRef;
};
