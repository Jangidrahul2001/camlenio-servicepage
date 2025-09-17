import React from "react";

const Portfolio = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto min-h-screen flex flex-col items-center justify-center py-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Our Portfolio
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            A showcase of our work — where ideas transform into digital
            experiences.
          </p>
        </div>
        <div className="mt-12 prose prose-lg text-gray-600 mx-auto">
          <p>
            Over the years, we’ve partnered with startups, businesses, and
            enterprises to deliver impactful digital products. Each project in
            our portfolio reflects our commitment to quality, creativity, and
            performance.
          </p>
          <p>
            From custom web applications to mobile apps and enterprise software,
            our work speaks for itself. We don’t just build products — we craft
            solutions that empower businesses to thrive in the digital era.
          </p>
          <p>
            ✨ Explore our projects below and see how Camlenio has helped
            transform ideas into reality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
