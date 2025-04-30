import React from "react";
import sections from "../../assets/data/sectionsData.json";
import SectionCard from "../card/SectionCard";

const ReportSections = () => {
  return (
    <div className="p-6 md:p-10 bg-[#f9f3ee] min-h-screen">
      <h2 className="text-2xl md:text-6xl font-medium mb-6 border-b border-[#D3D3D3] tracking-wider pb-2">
        VIEW THE SECTIONS OF THE REPORT
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sections.map((section, index) => (
          <SectionCard
            key={index}
            title={section.title}
            bgColor={section.bgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default ReportSections;
