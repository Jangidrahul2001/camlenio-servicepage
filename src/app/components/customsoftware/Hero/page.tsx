"use client";
import React from "react";
import { motion } from "framer-motion";
import BackToTopButton from "../../BackToTopButton";
import Image from "next/image";
import ScrollDownButton from "../../ScrollDownButton";

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="/customsoftware/bg-videocustomsoftware.webm"
          type="video/webm"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/70"></div> */}

      <div className="relative max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center h-full gap-8 px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-3/5 text-center md:text-left"
        >
          <div className="max-w-2xl mx-auto md:mx-0 space-y-4">
            <h1 className="text-gray-900 text-3xl md:text-4xl font-bold mb-4">
              <span
                className="text-orange-500"
                style={{ textShadow: "2px 2px 0 #ffff, 4px 4px 0 #FFB26B" }}
              >
                Camlenio
              </span>{" "}
              Custom Software – Scalable, Smart, and Built Around You
            </h1>

            <p className="text-xs md:text-sm text-gray-700 font-normal">
              At Camlenio, we specialize in building custom software solutions
              that adapt to your business—not the other way around. From
              intuitive interfaces to powerful backend systems, our applications
              are designed for performance, flexibility, and long-term growth.
              Whether you need to streamline operations, enhance customer
              experiences, or create entirely new digital products, we deliver
              tailored software that grows with your vision.
            </p>
            <div className="mt-6 flex gap-4 justify-center md:justify-start">
              <button className="px-6 py-3 text-white bg-orange-500 hover:bg-orange-600 rounded-xl">
                Get Started
              </button>
              <button className="px-6 py-3 bg-transparent border-2 border-orange-200 text-gray-800 font-bold rounded-xl shadow-lg">
                Watch Demo
              </button>
            </div>
          </div>
        </motion.div>

        {/* Right side: Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-2/5 max-w-xs flex justify-center"
        >
          <Image
            src="/customsoftware/bg-customsoftware.png"
            alt="Hero"
            width={300}
            height={300}
            className="w-full h-full object-contain"
            priority
          />
        </motion.div>
      </div>

      <ScrollDownButton targetId="next-section" />
      <BackToTopButton />
    </div>
  );
}
