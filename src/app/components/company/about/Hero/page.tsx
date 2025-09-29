"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  const words = ["Your Partner for Digital Engineering"];
  return (
    <div className="relative pt-18 pb-1 bg-gradient-to-r from-gray-100 via-orange-100 to-gray-start bg-[length:200%_200%] animate-gradientMove">
      {/* <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
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
      </div> */}

      <div className="relative">
        <Image
          src="/blog/blogs-bg-3.jpg"
          alt="blogs"
          width={1000}
          height={900}
          className="w-full h-48 sm:h-55 md:h-65 lg:h-68 xl:h-70 object-cover object-top"
        />
        <motion.h1 className="absolute inset-0 flex items-center justify-center text-gray-50 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          {words.map((l, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: i * 0.08 }}
            >
              {l}
            </motion.span>
          ))}
        </motion.h1>
      </div>
    </div>
  );
};

export default Hero;
