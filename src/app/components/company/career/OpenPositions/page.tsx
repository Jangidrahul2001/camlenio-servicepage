"use client";
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Filter } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // har child ke beech 0.3s ka gap
      delayChildren: 0.2, // container ke baad pehla child start
    },
  },
};

const OpenPositions = () => {
  const openPositions = [
    {
      title: "Senior Full Stack Developer",
      description:
        "Lead development of scalable web applications using modern technologies",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "DevOps Engineer",
      description:
        "Build and maintain CI/CD pipelines and cloud infrastructure",
      location: "Hybrid",
      type: "Full-time",
    },
    {
      title: "UI/UX Designer",
      description:
        "Create intuitive and beautiful user experiences for our products",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Product Manager",
      description:
        "Drive product strategy and work closely with engineering teams",
      location: "On-site",
      type: "Full-time",
    },
    {
      title: "Frontend Developer",
      description:
        "Build responsive and performant user interfaces with React and TypeScript",
      location: "Remote",
      type: "Contract",
    },
    {
      title: "Data Scientist",
      description: "Analyze complex datasets and build machine learning models",
      location: "Hybrid",
      type: "Full-time",
    },
  ];

  return (
    <div className="py-20  bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove">
      <div className="max-w-7xl mx-auto px-8 md:px-16 ">
        <h2
          className="text-3xl sm:text-4xl font-bold mb-4 text-orange-500 text-center"
          style={{
            textShadow:
              "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
          }}
        >
          Open Positions
        </h2>
        <p className="max-w-5xl mx-auto text-gray-600 text-sm md:text-base mb-12 font-sans text-center">
          Join our team and make an impact
        </p>

        <div className="flex flex-wrap gap-4 mb-8 justify-center  text-gray-900">
          <button className="flex items-center gap-2 border-1 border-orange-300 px-4 py-2 rounded-lg text-sm  hover:bg-orange-500 hover:text-gray-50">
            <Filter className="h-4 w-4" />
            All Roles
          </button>
          <button className="border-1 border-orange-300 px-4 py-2 rounded-lg text-sm hover:bg-orange-500 hover:text-gray-50">
            Engineering
          </button>
          <button className="border-1 border-orange-300 px-4 py-2 rounded-lg text-sm hover:bg-orange-500 hover:text-gray-50">
            Design
          </button>
          <button className="border-1 border-orange-300 px-4 py-2 rounded-lg text-sm hover:bg-orange-500 hover:text-gray-50">
            Product
          </button>
          <button className="border-1 border-orange-300 px-4 py-2 rounded-lg text-sm hover:bg-orange-500 hover:text-gray-50">
            Remote
          </button>
        </div>

        <div className="grid gap-6">
          {openPositions.map((position, index) => (
            <div
              key={index}
              className="rounded-xl border bg-orange-100 hover:scale-101 transition-transform duration-300 p-6"
            >
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {position.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{position.description}</p>
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-2 cursor-pointer"
                  >
                    <span className="inline-flex items-center gap-1 bg-orange-200 text-gray-700 px-3 py-1 rounded-md text-sm">
                      <MapPin className="h-3 w-3" />
                      {position.location}
                    </span>
                    <span className="inline-flex items-center gap-1 bg-orange-200 text-gray-700 px-3 py-1 rounded-md text-sm">
                      <Clock className="h-3 w-3" />
                      {position.type}
                    </span>
                  </motion.div>
                </div>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg font-medium transition shrink-0">
                  Apply Now
                </button>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OpenPositions;
