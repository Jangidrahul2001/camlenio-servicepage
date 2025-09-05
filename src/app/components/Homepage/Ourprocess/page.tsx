"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GiCheckMark } from "react-icons/gi";

const sections = [
  {
    title: "Discovery and Planning",
    desc: "The first step on the ladder of building an application begins with understanding client requirements, and market dynamics to lay the foundation for successful execution.",
    img: "/Homepage/process-planning-img.webp",
    checklist: [
      "In depth client consultation",
      "Market research",
      "Defining project scope",
      "Creating a detailed project plan",
      "Establishing communication",
      "Setting up success metrics",
    ],
  },
  {
    title: "Design & Prototyping",
    desc: "We design wireframes, and prototypes to give you a glimpse into the layout, and functionality of your application before the final development takes place.",
    img: "/Homepage/process-design-img.webp",
    checklist: [
      "User research",
      "Design mockups",
      "Iterative design process",
      "Building wireframes",
      "User testing",
      "Creating a clickable prototype",
    ],
  },
  {
    title: "Development",
    desc: "It’s time to translate your app development idea into something tangible following the best practices, and maintaining the highest quality of code standards.",
    img: "/Homepage/process-development-img.webp",
    checklist: [
      "Agile development methodology",
      "Quality assurance testing",
      "Performance optimization",
      "Coding and development",
      "Continuous integration and deployment",
      "Security testing",
    ],
  },
  {
    title: "Post Maintenance Support",
    desc: "We walk a mile extra to guarantee that your application optimally performs after the deployment. We implement continuous updates, bug fixes, and enhancements shaped by your feedback.",
    img: "/Homepage/process-maintenance-img.webp",
    checklist: [
      "Product launch",
      "On-going maintenance",
      "Providing technical support",
      "Post-launch monitoring",
      "Updates and enhancements",
      "Measuring success",
    ],
  },
];

const steps = [
  { label: "Discovery & Planning", icon: "/Homepage/svg/discovery.svg" },
  { label: "Designing & Prototyping", icon: "/Homepage/svg/design.svg" },
  { label: "Development", icon: "/Homepage/svg/development.svg" },
  { label: "Post Maintenance Support", icon: "/Homepage/svg/discovery.svg" },
];

const OurProcess = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (sliderRef.current) {
      const itemWidth = sliderRef.current.children[0]?.clientWidth || 0;
      sliderRef.current.scrollTo({
        left: activeIndex * itemWidth,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  return (
    <div className="min-h-screen px-6  py-2 overflow-hidden">
      <div className="max-w-[85rem] mx-auto">
        <div className="px-4 sm:px-6 lg:px-8 text-center ">
          <span className=" relative inline-block px-4 py-1.5 rounded-full border border-orange-200 bg-white shadow-sm text-sm font-medium text-orange-600 mb-4">
            <span className="absolute w-7 h-[6px] rounded-full bg-orange-500 left-[-1.2rem] top-1/2 -translate-y-1/2"></span>
            Custom Software Development
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 ">
            Our Iterative Development Methodology
            <br />
            <span className="text-orange-500">for Delivering Excellence</span>
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 text-base sm:text-lg">
            We provide superior website and mobile app development services to
            businesses across many different industry verticals.
          </p>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <ul
            ref={sliderRef}
            className="flex gap-4 py-4 overflow-x-auto scroll-smooth px-2 no-scrollbar overflow-scroll scrollbar-hide"
          >
            {steps.map((step, index) => (
              <li
                key={index}
                className={`relative group flex text-center flex-col md:flex-row text-[0.5rem] sm:text-[0.77rem] md:text-[1.2rem] font-medium px-3 md:px-4 lg:px-6 py-2 lg:py-4 rounded-xl w-full justify-center items-center gap-1 md:gap-2 lg:gap-4 cursor-pointer z-10 transition duration-300 ease-in-out hover:scale-[1.02]  ${
                  activeIndex === index
                    ? "bg-orange-500 text-white "
                    : "bg-gray-50 text-gray-800 hover:bg-orange-500 hover:text-gray-50"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <Image
                  src={step.icon}
                  alt={step.label}
                  width={24}
                  height={24}
                  className="w-8 h-8 object-contain shadow-2xl z-40 "
                />
                <span className="whitespace-nowrap text-xs md:text-sm lg:text-lg capitalize text-left">
                  {step.label}
                </span>
                {activeIndex === index && (
                  <div className="absolute left-1/2 -bottom-1 md:-bottom-2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 group-hover:bg-orange-500 rotate-45 transition duration-300 ease-in-out"></div>
                )}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-transparent py-10 px-6 md:px-16 rounded-2xl border-1 border-orange-100 mb-6"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.4 }}
            >
              <div className={`flex flex-col md:flex-row items-center gap-12`}>
                <div className="w-full md:w-1/2">
                  <Image
                    src={sections[activeIndex].img}
                    alt={sections[activeIndex].title}
                    width={800}
                    height={600}
                    className="rounded-3xl w-full h-auto object-cover"
                  />
                </div>

                <div className="w-full md:w-1/2">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {sections[activeIndex].title}
                  </h3>
                  <p className="text-gray-700 mb-8">
                    {sections[activeIndex].desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {sections[activeIndex].checklist.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="text-orange-500 mb-1 text-xl ">
                          <GiCheckMark />
                        </span>
                        <p className="text-gray-800">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default OurProcess;
