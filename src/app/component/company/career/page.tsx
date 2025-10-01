import Hero from "@/app/components/company/career/Hero/page";
import LifeAtCamlenio from "@/app/components/company/career/LifeAtCamlenio/page";
import OpenPositions from "@/app/components/company/career/OpenPositions/page";
import WorkWithUs from "@/app/components/company/career/WorkWithUs/page";
import React from "react";

const Career = () => {
  return (
    <div className="relative ">
      <Hero />
      <WorkWithUs />
      <OpenPositions />
      <LifeAtCamlenio />
    </div>
  );
};

export default Career;
