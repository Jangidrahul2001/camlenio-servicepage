"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowDownLong } from "react-icons/fa6";
import BackToTopButton from "../../BackToTopButton";

const Hero = () => {
  const handleScroll = () => {
    const section = document.getElementById("next-section");
    section?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className=" relative px-4 sm:px-6 py-20 md:py-26 overflow-hidden">
        <div className="max-w-[90rem] md:min-h-[45rem] mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-12 my-6">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full text-center md:text-left md:w-1/2"
          >
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl  font-extrabold text-gray-900 mb-2 md:mb-6 leading-snug md:leading-tight">
              <span className="text-[3rem] md:text-[6rem] text-orange-500">
                {" "}
                M
              </span>
              anage Your People, Simplify Your HR
            </h1>
            <p className="text-base sm:text-lg text-gray-700 font-normal">
              Automate and simplify HR operations with Camlenio’s interactive
              and feature-rich HRMS software. Camlenio HRMS reduces workload and
              streamlines HR workflows—from recruitment to onboarding, employee
              tracking, and performance management.
            </p>
            <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white inline-flex items-center text-lg sm:text-lg font-semibold px-8 sm:px-12 py-3 sm:py-4 rounded-xl transition duration-300">
              Request a demo →
            </button>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2  relative inline-block  rounded-3xl"
          >
            <Image
              src="/hrmssoftware/hrms1.png"
              alt="Hero image"
              width={800}
              height={500}
              className="rounded-xl w-full h-auto object-contain z-10"
              priority
            />
          </motion.div>
        </div>
      </div>
      <div className="text-center">
        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleScroll}
          className="absolute bottom-20 left-1/2 -translate-x-1/2 hidden md:inline-flex items-center gap-2 px-6 py-3 border-2 border-orange-500 text-orange-500 text-lg rounded-full shadow hover:bg-orange-600 hover:text-white font-bold transition"
        >
          Explore More <FaArrowDownLong />
        </motion.button>
      </div>
      <BackToTopButton />
    </>
  );
};

export default Hero;
