import React from "react";

const WhyWeExists = () => {
  return (
    <section className="px-4">
      <div className="relative w-full">
        {/* White Box */}
        <div className="bg-white rounded-4xl xl:mr-100 lg:mr-80 lg:pl-18 pl-8 pt-8 pb-22 lg:pr-12 pr-4 mb-4 mt-4">
          <h1 className="md:text-5xl text-2xl font-medium mb-4 tracking-wider">
            WHY WE EXIST: THE <br /> GREENSTRAW
          </h1>

          <hr className="border-t border-gray-200 my-6" />

          <p className="mb-6 md:text-[25px] text-lg uppercase font-nohemi tracking-wide">
            SUSTAINABILITY IS NO LONGER A CHOICE BUT A NECESSITY. AT THE
            GREENSTRAW, WE RECOGNIZE THE URGENT NEED TO ACT:
          </p>

          <ul className="mb-8 space-y-3 pl-6">
            {[
              "Climate change is intensifying, threatening both nature and communities.",
              "Daily habits contribute to waste, pollution, and the depletion of our natural resources.",
              "Over 50% of urban waste is improperly managed, leading to environmental degradation.",
              "Fast fashion and consumerism are eroding sustainable ways of living.",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-lg mr-2">•</span>
                <p className="md:text-[22px] text-[18px] font-nohemi-light">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Orange Box */}
        <div className="-mt-20 2xl:ml-100 lg:ml-80 bg-orange-300 rounded-4xl p-6 sm:p-12 mb-4">
          <p className="text-center md:text-5xl text-2xl font-medium mb-6 border-b border-white pb-2">
            THE GREENSTRAW EXISTS BECAUSE WE BELIEVE:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 divide-y md:divide-y-0  divide-white">
            {[
              "Sustainable living can be accessible, practical, and impactful when embraced through education, community collaboration, and eco-conscious products.",
              "Empowering individuals and businesses to adopt low-waste, eco-friendly practices is key to creating lasting change.",
              "Preserving our environment requires thoughtful interventions, which we deliver through workshops, a café, and collaborative efforts with sustainable brands.",
              "Our mission is to inspire conscious living and connect people with sustainable alternatives, creating a community that works towards a healthier planet.",
            ].map((text, i) => (
              <div key={i} className="p-4">
                <p className="md:text-[22px] text-[18px] font-nohemi tracking-wide">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 p-4">
            <p className="md:text-[22px] text-[18px] font-nohemi-light tracking-wide text-center">
              By reimagining everyday actions—whether through mindful
              consumption or participation in environmental initiatives—we aim
              to be a catalyst for change, making sustainability a way of life
              for everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeExists;
