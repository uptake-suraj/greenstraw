import React from "react";
import HeroSection from "../components/home/HeroSection";
import ReportSections from "../components/home/ReportSections";
import HorizontalScrollCards from "../components/home/HorizontalScrollCards";
import WhyWeExists from "../components/home/WhyWeExist";
import Numbers from "../components/home/Numbers";
import OurImpact from "../components/home/OurImpact";

const Home = () => {
  return (
    <>
      <HeroSection />
      <OurImpact />
      {/* <HorizontalScrollCards />
      <WhyWeExists />
      <Numbers/>
      <ReportSections /> */}
    </>
  );
};

export default Home;
