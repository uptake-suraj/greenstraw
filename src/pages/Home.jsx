import React from "react";
import HeroSection from "../components/home/HeroSection";
import ReportSections from "../components/home/ReportSections";
import HorizontalScrollCards from "../components/home/HorizontalScrollCards";
import WhyWeExists from "../components/home/WhyWeExist";
import Numbers from "../components/home/Numbers";
import OurImpact from "../components/home/OurImpact";

const Home = () => {
  return (
    <section className="overflow-hidden bg-[#f7f1eb]">
      <HeroSection />
      <OurImpact />
      <HorizontalScrollCards />
      <WhyWeExists />
      <Numbers/>
      <ReportSections />
    </section>
  );
};

export default Home;
