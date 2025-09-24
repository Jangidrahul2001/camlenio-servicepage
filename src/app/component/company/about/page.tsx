import React from "react";
import Hero from "@/app/components/company/about/Hero/page";
import AboutTheCompany from "@/app/components/company/about/AboutTheCompany/page";
import OurMission from "@/app/components/company/about/OurMission/page";
import OurValues from "@/app/components/company/about/OurValues/page";
import WhoWeAre from "@/app/components/company/about/WhoWeAre/page";
import HaveAChat from "@/app/components/company/about/HaveAChat/page";
import { AnimatedTestimonials } from "@/app/components/animated-testimonials";

const About = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-50 via-orange-100 to-indigo-100 bg-[length:200%_200%] animate-gradientMove">
      <Hero />
      <AboutTheCompany />
      <OurMission />
      <OurValues />
      <WhoWeAre />
      <AnimatedTestimonials autoplay={true} />
      <HaveAChat />
    </div>
  );
};

export default About;
