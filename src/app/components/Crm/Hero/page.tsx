"use client";
import React from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import BackToTopButton from "../../BackToTopButton";
import { BackgroundBeamsWithCollision } from "../../background-beams-with-collision";

export default function HeroSection() {
  const handleScroll = () => {
    const section = document.getElementById("next-section");
    section?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="bg-gradient-to-r from-indigo-50 via-orange-100 to-indigo-100 bg-[length:200%_200%] animate-gradientMove">
      <div className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/crmsoftware/crm-bg-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black/40"></div>
        <BackgroundBeamsWithCollision>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
            <h1 className="text-5xl md:text-7xl font-bold max-w-6xl bg-transparent">
              <span className="text-orange-500">Camlenio</span> CRM – Designed
              for Growth, Built for You
            </h1>
            <p className="mt-4 text-lg md:text-2xl max-w-4xl">
              Experience a smarter way to manage customers. From powerful
              insights to effortless workflows, Camlenio CRM helps your business
              grow with clarity and confidence.
            </p>
            <div className="mt-6 flex gap-4">
              <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-xl">
                Get Started
              </button>
              <button className="px-6 py-3 bg-transparent border-2 border-gray-200 text-white font-bold rounded-xl shadow-lg ">
                Watch Demo
              </button>
            </div>
          </div>
          <div className="text-center z-10">
            <button
              onClick={handleScroll}
              className="absolute bottom-20 left-1/2 -translate-x-1/2 hidden md:inline-flex items-center gap-2 px-6 py-3 border-2 border-orange-500 text-orange-500 text-lg rounded-full shadow-xl hover:bg-orange-600 hover:text-white font-bold transition-all duration-300 "
            >
              Explore More <FaArrowDownLong />
            </button>
          </div>
        </BackgroundBeamsWithCollision>
        <BackToTopButton />
      </div>
    </div>
  );
}
