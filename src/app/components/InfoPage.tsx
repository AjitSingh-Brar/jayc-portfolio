import React from "react";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import ProjectSection from "./ProjectSection";
import FooterSection from "./FooterSection";

const InfoPage = () => {
  return (
    <div className="pt-24 lg:w-1/2 lg:py-24">
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <FooterSection />
    </div>
  );
};

export default InfoPage;
