"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const OurMission = () => {
  return (
    <div className="py-20 bg-gradient-to-r from-indigo-100 via-orange-100 to-indigo-100 bg-[length:200%_200%] animate-gradientMove px-4 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-950 mb-6 text-left md:text-center">
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
            <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            <p className="text-gray-600 mt-2">
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
            className="flex justify-center hover:animate-wiggle"
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
            <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            <p className="text-gray-600 mt-2">
              Our vision is to become a leading and top-ranked software
              development company both nationally and globally. We believe in
              our excellent and innovative services to make this vision come
              true in the coming future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
