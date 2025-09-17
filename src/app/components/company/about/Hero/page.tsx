import React from "react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-[length:200%_200%] animate-gradientMove text-white pt-20">
      <div className="bg-transparent">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            Your Partner for Digital Engineering
          </h2>
          <p className="mt-6 text-lg sm:text-xl md:text-2xl leading-relaxed">
            We are an offshore software development company and believe in
            adding value to your projects. We not only provide you with the
            required web/app development services but also expert consultation
            for your projects to make them distinct from others.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
