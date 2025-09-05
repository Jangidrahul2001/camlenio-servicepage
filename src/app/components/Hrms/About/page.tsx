import React from "react";

const About = () => {
  return (
    <div
      id="next-section"
      className="relative scroll-mt-30 w-full py-40 bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: "url('/hrmssoftware/about-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-xs "></div>

      <div className="relative z-10 text-center px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6">
          All-in-One HR Management for Modern Businesses
        </h2>
        <p className="text-lg text-gray-200 max-w-7xl mx-auto leading-tight px-6 md:px-12 lg:px-20">
          Managing HR processes manually is time-consuming and error-prone.{" "}
          <span className="font-semibold text-orange-500">Camlenio HRMS</span>{" "}
          is designed to reduce workload, improve accuracy, and enhance employee
          engagement. Whether it’s hiring, payroll, or performance tracking —
          Camlenio makes HR simple, smart, and scalable.
        </p>
      </div>
    </div>
  );
};

export default About;
