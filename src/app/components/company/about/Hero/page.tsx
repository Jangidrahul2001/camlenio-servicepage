import React from "react";

const Hero = () => {
  return (
    <div className="relative pt-34 pb-1 bg-gradient-to-r from-gray-100 via-orange-100 to-gray-start bg-[length:200%_200%] animate-gradientMove">
      <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
        <h2
          className="max-w-6xl mx-auto text-3xl sm:text-4xl font-bold mb-4 text-orange-500 text-left"
          style={{ textShadow: "2px 2px 0 #ffff, 4px 4px 0 #FFB266" }}
        >
          Your Partner for Digital Engineering
        </h2>
        <p className="max-w-6xl mx-auto text-gray-800 text-sm text-left md:text-base flex-wrap break-words mb-12 font-sans">
          We are an offshore software development company and believe in adding
          value to your projects. We not only provide you with the required
          web/app development services but also expert consultation for your
          projects to make them distinct from others.
        </p>
      </div>
    </div>
  );
};

export default Hero;
