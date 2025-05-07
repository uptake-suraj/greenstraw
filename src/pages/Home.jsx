import React, { useEffect } from "react";
import HeroSection from "../components/home/HeroSection";
import ReportSections from "../components/home/ReportSections";
import WhyWeExists from "../components/home/WhyWeExist";
import Numbers from "../components/home/Numbers";
import OurImpact from "../components/home/OurImpact";
// import StackedScrollCards from "../components/home/StackedScrollCards";
// import HorizontalScrollCards from "../components/home/HorizontalScrollCards";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollCards from "../components/home/ScrollCards";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {

  return (
    <section className="overflow-hidden bg-[#f7f1eb]">
      <HeroSection />
      <OurImpact />
      
      {/* Both components handle their own visibility based on screen size */}
      {/* <StackedScrollCards />
      <HorizontalScrollCards /> */}
      <ScrollCards/>
      
      <WhyWeExists />
      <Numbers />
      <ReportSections />
    </section>
  );
};

export default Home;