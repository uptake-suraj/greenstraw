import React, { useRef } from "react";
import { Images } from "../../assets/images";
import useLeafScroll from "../../hook/useLeafScroll";

const HeroSection = () => {
  const yellowLeafRef = useRef(null);
  const greenShapeRef = useRef(null);

  useLeafScroll(yellowLeafRef, greenShapeRef);

  return (
    <section className="relative  md:pb-26 pb-56">
      <div className="flex items-center  relative">
        <div className="flex w-full gap-8">
          <div className="w-[70%] max-lg:bg-[#987ceb] max-lg:p-5 max-lg:w-full max-lg:rounded-b-4xl  relative">
            <img
              src={Images.heroSection}
              alt="heroSection"
              className="w-full  lg:h-[600px] h-full lg:object-cover object-fill rounded-4xl "
            />
          </div>

          <div className="w-[30%] max-lg:hidden bg-[#987ceb] rounded-b-4xl relative">
            <img
              src={Images.heroSection2}
              alt="heroSection2"
              className="w-full h-[550px] max-lg:hidden px-6 object-cover rounded-full absolute bottom-0 right-0"
            />
          </div>
        </div>

        {/* Header with logo and menu */}
        <div className="absolute top-0 w-full z-10 flex justify-between items-center px-6 py-4 ">
          <div className="flex items-center">
            <img src={Images.headerLogo} alt="UPA DI Logo" className="h-25" />
          </div>
          <button className="bg-white px-6 py-2 rounded-full text-sm font-medium">
            MENU +
          </button>
        </div>
      </div>

      {/* Background Section with Heading and Leaves */}
      <div
        className="relative bg-cover bg-[#f7f1eb] bg-center lg:h-[600px] h-45  rounded-br-4xl  max-md:mt-10"
        style={{ backgroundImage: `url(${Images.Line})` }}
      >
        {/* Centered Heading */}
        <div className="flex flex-col max-lg:pl-10">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl lg:ml-50   font-medium text-gray-800 leading-tight z-49">
            TOGETHER,
          </h1>
          <div className=" flex lg:justify-center">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl  font-medium text-gray-800 leading-tight z-49">
              LET'S SHAPE TOMORROW
            </h1>
          </div>
        </div>

        {/* Green Leaf - Centered */}
        <img
          ref={greenShapeRef}
          src={Images.heroSection3}
          alt="Yellow Leaf"
          className="absolute right-0 top-0 z-0 max-md:w-[150px]"
        />

        {/* Yellow Shape - Bottom Right */}
        <img
          ref={yellowLeafRef}
          src={Images.heroSection5}
          alt="Green Shape"
          className="absolute z-0 -ml-25 -top-30 max-lg:h-60 max-md:h-50"
        />
      </div>
      
    </section>
  );
};

export default HeroSection;
