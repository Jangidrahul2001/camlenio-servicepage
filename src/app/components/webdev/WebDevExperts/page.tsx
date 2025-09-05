"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaAngular,
  FaVuejs,
  FaNodeJs,
  FaWordpress,
} from "react-icons/fa";
import { SiLaravel } from "react-icons/si";

const services = [
  {
    name: "React JS Expert",
    icon: <FaReact size={30} className="text-sky-500" />,
    content:
      "Our qualified and competent React JS engineers develop outstanding web applications. They understand best practices to build responsive, high-performance solutions tailored to your needs.",
  },
  {
    name: "Angular JS Expert",
    icon: <FaAngular size={30} className="text-red-500" />,
    content:
      "Our seasoned Angular JS developers deliver strong, scalable, and user-friendly apps. They are experts in providing customized solutions for every unique business case.",
  },
  {
    name: "Vue JS Expert",
    icon: <FaVuejs size={30} className="text-green-500" />,
    content:
      "Our experienced Vue JS developers create tailored solutions using modern tools. They build fast, efficient applications with excellent user experiences.",
  },
  {
    name: "NodeJS Expert",
    icon: <FaNodeJs size={30} className="text-lime-600" />,
    content:
      "Our Node.js developers build reliable backend services and web apps. Proficient in MongoDB, Express, and JavaScript, they deliver secure, high-performing applications.",
  },
  {
    name: "Laravel Expert",
    icon: <SiLaravel size={30} className="text-rose-500" />,
    content:
      "We deliver Laravel-based web apps that meet your business needs. Our Laravel developers provide timely, high-quality, scalable solutions.",
  },
  {
    name: "WordPress Expert",
    icon: <FaWordpress size={30} className="text-blue-600" />,
    content:
      "Our WordPress team offers end-to-end custom development. From modern designs to optimized features, we ensure reliability and high quality.",
  },
];

export default function WebDevExperts() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="px-6 py-16 max-w-[85rem] mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold text-center mb-4 text-gray-900"
      >
        Let’s Build Your Digital Future Together!
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center text-xs md:text-lg text-gray-600 max-w-3/4 md:max-w-3xl mx-auto mb-12"
      >
        Camlenio is Bharat’s leading web development company, ready to build
        your safe, responsive, and stunning business website using modern tools
        and technology.
      </motion.p>

      <div className="flex  justify-center gap-4 mb-10 overflow-x-auto scroll-smooth scrollbar-hide">
        {services.map((service, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(idx)}
            className={`flex items-center whitespace-nowrap gap-2 px-12 py-4 rounded-xl text-base font-medium border transition-all duration-300 ${
              selected === idx
                ? "bg-orange-100 border-orange-400 text-orange-600"
                : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
          >
            {service.icon}
            {service.name.split(" ")[0]}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selected}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="bg-orange-50 shadow-sm p-6 rounded-xl border border-gray-300 max-w-6xl mx-auto text-center"
        >
          <div className="flex justify-center mb-4">
            {services[selected].icon}
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-orange-600 mb-2">
            {services[selected].name}
          </h3>
          <p className="text-gray-700 text-sm md:text-base">
            {services[selected].content}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
