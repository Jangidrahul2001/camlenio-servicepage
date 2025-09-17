import Hero from "@/app/components/company/career/Hero/page";
import CinematicEarth from "@/app/components/animate";
import React from "react";

const Career = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-50 via-orange-100 to-indigo-100 bg-[length:200%_200%] animate-gradientMove">
      <Hero />
      <CinematicEarth />
    </div>
  );
};

export default Career;
