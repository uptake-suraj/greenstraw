import React from "react";

const WhyWeExists = () => {
  return (
    <section>
      <div className="bg-[#f9f3ee] min-h-screen p-6 ">
        <div className="relative  w-full">
          {/* White container */}
          <div className="bg-white rounded-4xl max-w-[1400px] pl-18 pt-8 pb-22 pr-12 mb-4 mt-4">
            <h1 className="text-5xl font-medium mb-4 tracking-wider">
              WHY WE EXIST: THE <br /> GREENSTRAW
            </h1>

            <hr className="border-t border-gray-200 my-6" />

            <p className="mb-6 text-xl  font-medium uppercase">
              SUSTAINABILITY IS NO LONGER A CHOICE BUT A NECESSITY. AT THE
              GREENSTRAW, WE RECOGNIZE THE URGENT NEED TO ACT:
            </p>

            <ul className="mb-8 space-y-3 pl-6">
              <li className="flex items-start">
                <span className="text-lg mr-2">•</span>
                <p className="text-xl">
                  Climate change is intensifying, threatening both nature and
                  communities.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-lg mr-2">•</span>
                <p className="text-xl">
                  Daily habits contribute to waste, pollution, and the depletion
                  of our natural resources.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-lg mr-2">•</span>
                <p className="text-xl">
                  Over 50% of urban waste is improperly managed, leading to
                  environmental degradation.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-lg mr-2">•</span>
                <p className="text-xl">
                  Fast fashion and consumerism are eroding sustainable ways of
                  living.
                </p>
              </li>
            </ul>
          </div>

          {/* Orange box that extends outside the white container */}
          <div className="-mt-20 ml-120 bg-orange-300 rounded-4xl p-12 mb-4">
            <h2 className="text-center text-5xl font-medium mb-6">
              THE GREENSTRAW EXISTS BECAUSE WE BELIEVE:
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-orange-200 rounded-md">
                <p className="text-lg">
                  Sustainable living can be accessible, practical, and impactful
                  when embraced through education, community collaboration, and
                  eco-conscious products.
                </p>
              </div>

              <div className="p-4 bg-orange-200 rounded-md">
                <p className="text-lg">
                  Empowering individuals and businesses to adopt low-waste,
                  eco-friendly practices is key to creating lasting change.
                </p>
              </div>

              <div className="p-4 bg-orange-200 rounded-md">
                <p className="text-lg">
                  Preserving our environment requires thoughtful interventions,
                  which we deliver through workshops, a café, and collaborative
                  efforts with sustainable brands.
                </p>
              </div>

              <div className="p-4 bg-orange-200 rounded-md">
                <p className="text-lg">
                  Our mission is to inspire conscious living and connect people
                  with sustainable alternatives, creating a community that works
                  towards a healthier planet.
                </p>
              </div>
            </div>

            <div className="mt-4 p-4 bg-orange-200 rounded-md">
              <p className="text-lg text-center">
                By reimagining everyday actions—whether through mindful
                consumption or participation in environmental initiatives—we aim
                to be a catalyst for change, making sustainability a way of life
                for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeExists;
