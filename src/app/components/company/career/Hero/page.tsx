import React from "react";
export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-gray-100 via-orange-200 to-gray-100 bg-[length:200%_200%] animate-gradientMove text-gray-800 py-20">
      <div className="relative min-h-[40vh] px-8 md:px-16 flex justify-center items-center">
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Build Your Career with{" "}
            <span className="text-orange-500">Camlenio</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Innovate, Grow, and Shape the Future of Tech.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-gray-50 font-medium rounded-lg px-8 py-3 text-lg transition">
            View Open Roles
          </button>
        </div>
      </div>
    </div>
  );
}
