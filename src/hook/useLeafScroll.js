import { useEffect } from "react";
import { gsap } from "gsap";

const useLeafScroll = (yellowLeafRef, greenShapeRef) => {
  useEffect(() => {
    // Yellow leaf movement with smooth 360-degree rotation
    const yellowTween = gsap.to(yellowLeafRef.current, {
      x: 100,      // Horizontal movement
      y: 30,       // Vertical movement
      rotation: 120, // Rotate 360 degrees
      duration: 3,  // Speed of animation
      repeat: -1,   // Infinite loop
      yoyo: true,   // Reverse the animation on each cycle
      ease: "power2.inOut", // Smooth easing
      stagger: 0.5, // Added stagger for smoother cycle timing
    });

    // Green shape movement - Larger range and faster
    const greenTween = gsap.to(greenShapeRef.current, {
      y: 120,  // Vertical movement
      x: 30,  // Horizontal movement for variety
      duration: 3, // Speed of animation
      repeat: -1,  // Infinite loop
      yoyo: true,  // Reverse the animation on each cycle
      ease: "power2.inOut", // Smooth easing
      stagger: 0.3, // Added stagger effect for random movement cycles
    });

    // Cleanup function to stop animations when component unmounts
    return () => {
      yellowTween.kill();
      greenTween.kill();
    };
  }, [yellowLeafRef, greenShapeRef]);
};

export default useLeafScroll;
