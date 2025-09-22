"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import { FaStar, FaStarHalf } from "react-icons/fa";
import GsapReveal from "../../GsapReveal";

const ItSolution = () => {
  return (
    <div className="relative py-16 bg-gradient-to-r from-indigo-100 via-orange-100 to-indigo-100 bg-[length:200%_200%] animate-gradientMove">
      <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
        <div className="relative inline-block px-4 py-1.5 rounded-full border border-orange-50 bg-orange-100 shadow-sm text-sm font-medium text-orange-600 mb-4">
          <span className="absolute w-7 h-[6px] rounded-full bg-orange-500 left-[-1.2rem] top-1/2 -translate-y-1/2"></span>
          Camlenio Software Development Company
        </div>

        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 "
        >
          Essential IT Solutions for{" "}
          <span
            className="text-orange-500"
            style={{
              textShadow:
                "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
            }}
          >
            Modern Businesses
          </span>
        </motion.h2>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-gray-600 text-sm text-left md:text-base flex-wrap break-words mb-12 font-sans"
        >
          Camlenio is an established software development company in India that
          is committed to helping businesses thrive through innovative digital
          solutions. Our expert team Blends creativity, technology, and strategy
          to build custom websites, mobile apps, and fintech platforms that
          actually transact business.
          <br />
          We believe in transparency, collaboration, and innovation—ensuring
          every project aligns with your vision. We transform ideas into great
          digital realities, from startups to enterprises a like.
          <br />
          👉 Let&apos;s Come and Build Your Future Business!
        </motion.p>

        <GsapReveal>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
            <div className="relative bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center md:col-span-2 lg:col-span-1">
              <h3 className="text-5xl font-extrabold text-orange-600">2005</h3>
              <p className="text-gray-800 text-xl font-bold font-sans">
                We&apos;re epic since
              </p>
              <div className="absolute left-[82%]  -bottom-[25%] rotate-44  z-10 hidden lg:block">
                <svg width="120" height="80" viewBox="0 0 103 66" fill="none">
                  <path
                    d="M0,0c0,0,19.4,26.5,51.5,26.5S103,0.9,103,0.9V66c0,0-20.6-27.4-51.5-27.4S0,66,0,66V0z"
                    fill="#fff
"
                  />
                </svg>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-xl overflow-hidden md:col-span-2 lg:col-span-2">
              <Image
                src="/Homepage/home_about.jpg"
                alt="Team Working"
                width={1200}
                height={200}
                className="w-full h-[200px] object-cover "
              />
            </div>

            <div className="relative bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center">
              <h3 className="text-5xl font-extrabold text-orange-600">210+</h3>
              <p className="text-gray-800 text-xl font-bold font-sans">
                Clients around the globe
              </p>
              <div className="absolute right-[82%]  -bottom-[25%] -rotate-44  z-10 hidden lg:block">
                <svg width="120" height="80" viewBox="0 0 103 66" fill="none">
                  <path
                    d="M0,0c0,0,19.4,26.5,51.5,26.5S103,0.9,103,0.9V66c0,0-20.6-27.4-51.5-27.4S0,66,0,66V0z"
                    fill="#fff"
                  />
                </svg>
              </div>
            </div>

            <div className="relative bg-white rounded-xl shadow-md p-6 text-center overflow-hidden flex items-center justify-center">
              <Image
                src="/Homepage/home_about_bg.jpg"
                alt="Background"
                fill
                className="object-cover object-center absolute inset-0 z-0 rounded-xl"
                priority
              />
              <div className="absolute inset-0 bg-blue-700/60 rounded-xl z-10" />
              <div className="relative z-20 text-xl text-gray-100 leading-tight">
                <span className="flex items-center justify-center gap-1 text-orange-500 ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalf />
                </span>
                <br />
                <p className="font-sans text-base">
                  {" "}
                  Rated 4.80 out of 5
                  <br /> based on over 1000 reviews
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center text-center">
              <h3 className="text-gray-700 font-semibold font-sans">
                Award-winning solution
              </h3>
              <div className="w-20 h-20">
                <Image
                  src="/Homepage/svg/award.svg"
                  alt="Award"
                  height={90}
                  width={90}
                  className="object-contain"
                />
              </div>
              <p className="mt-3 text-gray-800 font-medium font-sans">
                We&apos;ve got a few awards thanks to our amazing clients.
              </p>
            </div>

            <div className="relative bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center">
              <h3 className="text-3xl font-extrabold text-orange-600">600+</h3>
              <p className="mt-2 text-gray-800 font-medium font-sans">
                Successfully completed projects
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center md:col-span-2 lg:col-span-1">
              <h3 className="text-3xl font-extrabold text-orange-600">500+</h3>
              <p className="mt-2 text-gray-800 font-medium font-sans">
                Business Partners
              </p>
            </div>
          </div>
        </GsapReveal>
      </div>
    </div>
  );
};
export default ItSolution;
