"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const OurMission = () => {
  return (
    <div className="relative py-16 bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove">
      <div className="max-w-7xl mx-auto text-left md:text-center px-8 md:px-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Our Mission &{" "}
          <span
            className="text-orange-500"
            style={{ textShadow: "2px 2px 0 #ffff, 4px 4px 0 #FFB266" }}
          >
            Vision
          </span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="text-left md:text-right">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 text-sm text-justify md:text-base flex-wrap break-words mb-12 font-sans ">
              Our mission is to provide result-oriented and competitive
              solutions to our clients and help them gain a winning edge over
              their competitors. We offer cost-effective, robust, and
              growth-centric software development services. At Camlenio, we
              focus on customer satisfaction and quality of services.
            </p>
          </div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center hover:animate-wiggle pl-4"
          >
            <Image
              src="/navcompany/vision.png"
              alt="Our Mission and Vision illustration"
              width={200}
              height={200}
              className="rounded-lg"
            />
          </motion.div>

          <div className="text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Vision
            </h2>
            <p className=" text-gray-600 text-sm text-justify md:text-base flex-wrap break-words mb-12 font-sans">
              Our vision is to become a leading and top-ranked software
              development company both nationally and globally. We believe in
              our excellent and innovative services to make this vision come
              true in the coming future.At Camlenio, we focus on customer
              satisfaction and quality of services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
