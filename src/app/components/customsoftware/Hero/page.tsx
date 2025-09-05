"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaArrowDownLong } from "react-icons/fa6";
import BackToTopButton from "../../BackToTopButton";
import Image from "next/image";

export default function HeroSection() {
  const handleScroll = () => {
    const section = document.getElementById("next-section");
    section?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
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
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative max-w-[80rem] min-h-screen mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-8 px-6">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full text-center md:text-left mx-auto md:w-3/5"
        >
          <h1 className=" text-white text-2xl md:text-5xl lg:text-6xl font-bold max-w-6xl">
            <span className="text-orange-500">Camlenio</span> Custom Software –
            Scalable, Smart, and Built Around You
          </h1>
          <p className="text-xs sm:text-lg text-gray-200 font-normal pr-2">
            At Camlenio, we specialize in building custom software solutions
            that adapt to your business—not the other way around. From intuitive
            interfaces to powerful backend systems, our applications are
            designed for performance, flexibility, and long-term growth. Whether
            you need to streamline operations, enhance customer experiences, or
            create entirely new digital products, we deliver tailored software
            that grows with your vision.
          </p>
          <div className="mt-6 flex gap-4 justify-center md:justify-start">
            <button className="px-6 py-3 text-white  bg-orange-500 hover:bg-orange-600 rounded-xl">
              Get Started
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-gray-200 text-white font-bold rounded-xl shadow-lg ">
              Watch Demo
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ opacity: 1 }}
          animate={{
            y: [-20, 20],
            rotate: [0, 1, -1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="w-full md:w-2/5 max-w-xs md:max-w-sm mx-auto relative z-50"
        >
          <Image
            src="/customsoftware/bg-customsoftware.png"
            alt="Hero"
            width={500}
            height={500}
            className="rounded object-contain"
            priority
          />
        </motion.div>
        <div className="text-center">
          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleScroll}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:inline-flex items-center gap-1 px-6 py-3 border-2 border-gray-50 text-gray-100 text-base md:text-lg rounded-full shadow hover:border-gray-500 hover:text-white font-bold transition "
          >
            Explore More <FaArrowDownLong />
          </motion.button>
        </div>
      </div>
      <BackToTopButton />
    </div>
  );
}
