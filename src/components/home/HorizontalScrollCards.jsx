// import React, { useEffect, useRef, useState } from "react";
// import { horizontalData } from "../../assets/data/horizontalData";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// import HorizontalCard from "../card/HorizontalCard";

// gsap.registerPlugin(ScrollTrigger);

// const HorizontalScrollCards = () => {
//   const sectionRef = useRef(null);
//   const triggerRef = useRef(null);
//   const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
//   const scrollTriggerInstance = useRef(null);

//   // Handle screen size changes
//   useEffect(() => {
//     const handleResize = () => {
//       const desktop = window.innerWidth >= 768;
//       if (desktop !== isDesktop) {
//         setIsDesktop(desktop);
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [isDesktop]);

//   // Setup and clean up horizontal scroll animation
//   useEffect(() => {
//     // Only create horizontal scroll animation on desktop
//     if (!isDesktop || !sectionRef.current || !triggerRef.current) return;

//     // Kill any existing ScrollTrigger instances for this component
//     if (scrollTriggerInstance.current) {
//       scrollTriggerInstance.current.kill();
//     }

//     const sectionEl = sectionRef.current;
    
//     // Create the horizontal scroll animation
//     const createAnimation = () => {
//       const animation = gsap.fromTo(
//         sectionEl,
//         { x: 0 },
//         {
//           x: () => `-${sectionEl.scrollWidth - window.innerWidth}`,
//           ease: "none",
//           scrollTrigger: {
//             trigger: triggerRef.current,
//             start: "top top",
//             end: () => `+=${sectionEl.scrollWidth - window.innerWidth}`,
//             scrub: 0.3,
//             pin: true,
//             pinSpacing: true,
//             invalidateOnRefresh: true,
//             anticipatePin: 1,
//             id: "horizontal-scroll"
//           }
//         }
//       );
      
//       scrollTriggerInstance.current = animation.scrollTrigger;
//       return animation;
//     };
    
//     // Small delay to ensure DOM is ready after state change
//     const timer = setTimeout(() => {
//       createAnimation();
//     }, 100);
    
//     return () => {
//       clearTimeout(timer);
//       if (scrollTriggerInstance.current) {
//         scrollTriggerInstance.current.kill();
//         scrollTriggerInstance.current = null;
//       }
//     };
//   }, [isDesktop]);

//   // Handle component unmount
//   useEffect(() => {
//     return () => {
//       if (scrollTriggerInstance.current) {
//         scrollTriggerInstance.current.kill();
//       }
//     };
//   }, []);

//   if (!isDesktop) return null;

//   return (
//     <section className="w-full overflow-hidden" ref={triggerRef}>
//       <div
//         ref={sectionRef}
//         className="flex gap-8 items-center h-screen"
//         style={{ width: `${horizontalData.length * 90}vw` }}
//       >
//         {horizontalData.map((item, index) => (
//           <HorizontalCard
//             key={item.id}
//             {...item}
//             pageNumber={index + 1}
//             totalPages={horizontalData.length}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HorizontalScrollCards;