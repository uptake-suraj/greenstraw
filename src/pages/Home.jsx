import React, { useEffect } from "react";
import HeroSection from "../components/home/HeroSection";
import ReportSections from "../components/home/ReportSections";
import WhyWeExists from "../components/home/WhyWeExist";
import Numbers from "../components/home/Numbers";
import OurImpact from "../components/home/OurImpact";
import StackedScrollCards from "../components/home/StackedScrollCards";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HorizontalScrollCards from "../components/home/HorizontalScrollCards"

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const isSmallScreen = window.innerWidth < 1024;
  
  useEffect(() => {
    // Force a refresh of all ScrollTriggers when the component mounts
    gsap.delayedCall(0.1, () => {
      ScrollTrigger.refresh(true);
    });
    
    return () => {
      // Clean up all ScrollTriggers when component unmounts
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="overflow-hidden bg-[#f7f1eb]">
      <HeroSection />
      <OurImpact />
      {isSmallScreen ? <StackedScrollCards /> : <HorizontalScrollCards />}
      <WhyWeExists />
      <Numbers />
      <ReportSections />
    </section>
  );
};

export default Home;