import { useEffect } from "react";
import { gsap } from "gsap";

const useLeafScroll = (yellowLeafRef, greenShapeRef) => {
  useEffect(() => {
    // Yellow leaf movement with smooth 360-degree rotation
    const yellowTween = gsap.to(yellowLeafRef.current, {
      x: 100,
      y: 30,
      rotation: 120,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      stagger: 0.5,
    });

    // Green shape movement
    const greenTween = gsap.to(greenShapeRef.current, {
      y: 80,
      x: 30,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      stagger: 0.3,
    });

    // Cleanup function to stop animations when component unmounts
    return () => {
      yellowTween.kill();
      greenTween.kill();
    };
  }, [yellowLeafRef, greenShapeRef]);
};

export default useLeafScroll;
