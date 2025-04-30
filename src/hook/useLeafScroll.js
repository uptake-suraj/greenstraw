import { useEffect } from 'react';
import { gsap } from 'gsap';

const useLeafScroll = (yellowLeafRef, greenShapeRef) => {
  useEffect(() => {
    const yellowTween = gsap.to(yellowLeafRef.current, {
      x: 20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });

    const greenTween = gsap.to(greenShapeRef.current, {
      y: 20,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });

    return () => {
      yellowTween.kill();
      greenTween.kill();
    };
  }, [yellowLeafRef, greenShapeRef]);
};

export default useLeafScroll;
