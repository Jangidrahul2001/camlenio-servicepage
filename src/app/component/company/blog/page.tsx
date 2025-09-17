import { HeroScrollDemo } from "@/app/components/company/blog/Hero/page";
import React from "react";

const blog = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-50 via-orange-100 to-indigo-100 bg-[length:200%_200%] animate-gradientMove">
      <HeroScrollDemo />
    </div>
  );
};

export default blog;
