import React, { useEffect, useRef } from "react";
import { Images } from "../../assets/images";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurImpact = () => {
  const sectionRef = useRef(null);
  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);

  useEffect(() => {
    // Create a GSAP context to isolate these animations
    const ctx = gsap.context(() => {
      // Left image animation
      gsap.fromTo(
        leftImageRef.current,
        { y: -100 },
        {
          y: 100,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            id: "left-image-parallax", // Adding ID for debugging
          },
        }
      );

      // Right image animation
      gsap.fromTo(
        rightImageRef.current,
        { y: 100 },
        {
          y: -100,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            id: "right-image-parallax", // Adding ID for debugging
          },
        }
      );
    });

    return () => {
      // Clean up when component unmounts
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full lg:py-36 py-56 min-h-screen">
      <div className="">
        <div className="mx-auto relative flex items-center justify-center flex-col md:flex-row">
          {/* Left image */}
          <div
            ref={leftImageRef}
            className="lg:w-[400px] w-[300px] mb-6 md:mb-0 md:self-start transform -rotate-9 absolute left-0 md:-top-35 -top-80 z-10"
          >
            <div className="bg-[#578CFA] p-5 rounded-lg shadow-lg ">
              <img
                src={Images.ourImpact2}
                alt="People at GreenStraw"
                className="w-full h-auto rounded rotate-9"
              />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                <img
                  src={Images.ourImpact3}
                  alt="Decorative flower"
                  className="mb-2"
                />
              </div>
            </div>
          </div>

          {/* Center content */}
          <div className="max-w-4xl md:w-[70%] lg:w-2/3 sm:px-10 px-4 lg:px-20 mb-6 md:mb-0 z-30 relative">
            <div className="bg-white px-6 md:py-12 py-5 rounded-2xl">
              <h2 className="text-3xl md:text-2xl lg:text-5xl mb-4 border-b border-gray-300 pb-2 font-nohemi">
                Our Impact
              </h2>
              <div className="space-y-4 py-5">
                <p className="md:text-base font-nohemi-light lg:text-xl leading-7 md:tracking-wider tracking-normal">
                  At The GreenStraw, we believe in making a difference through
                  sustainable living and active community involvement. Our
                  eco-friendly café is a welcoming space where people can enjoy
                  delicious, sustainably sourced food and drinks. We host
                  dynamic workshops that educate and inspire participants to
                  adopt greener practices in their daily lives.
                </p>
                <p className="md:text-base font-nohemi-light lg:text-xl leading-7 md:tracking-wider tracking-normal">
                  Our green consultancy services are designed to help
                  individuals and businesses transition to more sustainable
                  operations. Additionally, our collaborative workspace fosters
                  a sense of community, bringing together like-minded
                  individuals who are passionate about making a positive impact
                  on the environment. Through these initiatives, we aim to
                  empower everyone to contribute to a healthier planet.
                </p>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div ref={rightImageRef}
            className="lg:w-[400px] w-[300px] mt-6 md:mt-0 md:self-end transform rotate-8 absolute right-0 md:top-50 sm:-bottom-50 -bottom-60 z-10">
            <div className="bg-[#0AA47C] pt-5 px-1 rounded-lg shadow-lg">
              <img
                src={Images.ourImpact1}
                alt="Environmental activity"
                className="w-full h-auto rounded -rotate-8 mt-5"
              />
              <div className="absolute top-0 left-1/2 transform translate-x-1/2">
                <img
                  src={Images.ourImpact3}
                  alt="Decorative flower"
                  className="mt-5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurImpact;
