// import React, { useRef, useLayoutEffect, useEffect, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { horizontalData } from "../../assets/data/horizontalData";
// import HorizontalCard from "../card/HorizontalCard";

// gsap.registerPlugin(ScrollTrigger);

// const StackedScrollCards = () => {
//   const containerRef = useRef(null);
//   const cardRefs = useRef([]);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
//   const timelineRef = useRef(null);
//   const scrollTriggerRef = useRef(null);

//   // Handle screen resize
//   useEffect(() => {
//     const onResize = () => {
//       const mobile = window.innerWidth < 768;
//       if (mobile !== isMobile) {
//         setIsMobile(mobile);
//       }
//     };

//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, [isMobile]);

//   // Setup and cleanup animations
//   useLayoutEffect(() => {
//     // Only create stacked scroll animation on mobile
//     if (!isMobile || !containerRef.current) return;

//     // First cleanup any existing animations
//     if (scrollTriggerRef.current) {
//       scrollTriggerRef.current.kill();
//     }
//     if (timelineRef.current) {
//       timelineRef.current.kill();
//     }

//     const cards = cardRefs.current.filter(Boolean);
    
//     // Create new animation
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top",
//         end: `+=${cards.length * 1000}`,
//         pin: true,
//         scrub: 1,
//         id: "stacked-scroll"
//       }
//     });

//     // Store the ScrollTrigger instance for cleanup
//     scrollTriggerRef.current = tl.scrollTrigger;
//     timelineRef.current = tl;

//     cards.forEach((card, index) => {
//       if (index === 0) {
//         tl.fromTo(
//           card,
//           { opacity: 1, yPercent: 0, scale: 1 },
//           { opacity: 0.7, yPercent: -2, scale: 0.95, duration: 1 }
//         );
//       } else {
//         tl.fromTo(
//           card,
//           { opacity: 0, yPercent: 75, scale: 1 },
//           { opacity: 1, yPercent: 0, duration: 1 },
//           "-=0.6"
//         );

//         if (index !== cards.length - 1) {
//           tl.to(
//             card,
//             { opacity: 0.7, yPercent: -2, scale: 0.95, duration: 1 },
//             "+=0.4"
//           );
//         }
//       }

//       // Ensure that previous images disappear when new one comes into view
//       if (index !== cards.length - 1) {
//         tl.to(
//           card,
//           {
//             opacity: 0,
//             yPercent: -50,
//             scale: 0.95,
//             duration: 1,
//             stagger: 0.1,
//           },
//           `-=${0.3}`
//         );
//       }
//     });

//     return () => {
//       if (scrollTriggerRef.current) {
//         scrollTriggerRef.current.kill();
//         scrollTriggerRef.current = null;
//       }
//       if (timelineRef.current) {
//         timelineRef.current.kill();
//         timelineRef.current = null;
//       }
//     };
//   }, [isMobile]);

//   // Cleanup on unmount
//   useEffect(() => {
//     return () => {
//       if (scrollTriggerRef.current) {
//         scrollTriggerRef.current.kill();
//       }
//       if (timelineRef.current) {
//         timelineRef.current.kill();
//       }
//     };
//   }, []);

//   if (!isMobile) return null;

//   return (
//     <section
//       ref={containerRef}
//       className="relative h-screen px-4 py-24"
//     >
//       {horizontalData.map((item, index) => (
//         <div
//           key={item.id}
//           ref={(el) => (cardRefs.current[index] = el)}
//           className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl"
//           style={{ zIndex: 10 - index }}
//         >
//           <HorizontalCard
//             {...item}
//             pageNumber={index + 1}
//             totalPages={horizontalData.length}
//           />
//         </div>
//       ))}
//     </section>
//   );
// };

// export default StackedScrollCards;