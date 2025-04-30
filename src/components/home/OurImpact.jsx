import React from "react";
import { Images } from "../../assets/images";

const OurImpact = () => {
  return (
    
    <section className="w-full border  bg-[#f7f1eb] py-16 overflow-hidden h-screen">

      <div className=" mx-auto  relative flex items-center justify-center flex-col md:flex-row ">
        {/* Left image with blue frame and rotation - positioned at top */}
        <div className="w-full lg:w-1/4 mb-6 md:mb-0 md:self-start transform md:-rotate-9 absolute left-0 -top-35 z-100">
          <div className="bg-[#578CFA] p-5  rounded-lg shadow-lg">
            <img
              src={Images.ourImpact2}
              alt="People at GreenStraw"
              className="w-full h-auto rounded rotate-9"
            />
            {/* Decorative element */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              <img
                src={Images.ourImpact3}
                alt="Decorative flower"
                className="mb-2"
              />
            </div>
          </div>
        </div>

        {/* Center content - white background - positioned in center */}
        <div className="max-w-4xl md:w-1/2 lg:w-2/3 px-10 lg:px-20 z-20 mb-6 md:mb-0">
          <div className="bg-white px-6 py-12 rounded-2xl">
            <h2 className="text-3xl md:text-2xl lg:text-5xl mb-4 border-b border-gray-300 pb-2 font-nohemi">
              Our Impact
            </h2>
            <div className="space-y-4 py-5">
              <p className=" md:text-base font-nohemi-light  lg:text-xl leading-7 tracking-wider">
                At The GreenStraw, we believe in making a difference through
                sustainable living and active community involvement. Our
                eco-friendly café is a welcoming space where people can enjoy
                delicious, sustainably sourced food and drinks. We host dynamic
                workshops that educate and inspire participants to adopt greener
                practices in their daily lives.
              </p>
              <p className=" md:text-base font-nohemi-light lg:text-xl leading-7 tracking-wider">
                Our green consultancy services are designed to help individuals
                and businesses transition to more sustainable operations.
                Additionally, our collaborative workspace fosters a sense of
                community, bringing together like-minded individuals who are
                passionate about making a positive impact on the environment.
                Through these initiatives, we aim to empower everyone to
                contribute to a healthier planet.
              </p>
            </div>
          </div>
        </div>

        {/* Right image with green frame and rotation - positioned at bottom */}
        <div className="w-full md:w-1/4 lg:w-1/4 mt-6 md:mt-0 md:self-end transform md:rotate-12 absolute right-0 top-70  z-10">
          <div className="bg-[#0AA47C] p-5 rounded-lg shadow-lg">
            <img
              src={Images.ourImpact1}
              alt="Environmental activity"
              className="w-full h-auto rounded -rotate-8 mt-5"
            />
            {/* Decorative element */}
            <div className="absolute top-0 left-1/2 transform translate-x-1/2 ">
              <img
                src={Images.ourImpact3}
                alt="Decorative flower"
                className="mt-5"
              />
            </div>
          </div>
        </div>
      </div>
  
    </section>
  );
};

export default OurImpact;
