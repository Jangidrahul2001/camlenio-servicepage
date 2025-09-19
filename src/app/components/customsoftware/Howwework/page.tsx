"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import {
  FaComments,
  FaProjectDiagram,
  FaCode,
  FaCheckCircle,
  FaRocket,
  FaLifeRing,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaComments className="text-orange-500 w-6 h-6" />,
    title: "Discovery & Consultation",
    desc: "We start by listening to your vision, challenges, and goals—transforming ideas into a clear direction.",
  },
  {
    icon: <FaProjectDiagram className="text-orange-500 w-6 h-6" />,
    title: "Strategy & Planning",
    desc: "Crafting the roadmap with the right technologies, milestones, and strategies to maximize value.",
  },
  {
    icon: <FaCode className="text-orange-500 w-6 h-6" />,
    title: "Development with Care",
    desc: "Building scalable, secure, and customized solutions using modern tools and frameworks.",
  },
  {
    icon: <FaCheckCircle className="text-orange-500 w-6 h-6" />,
    title: "Testing & Refinement",
    desc: "Every feature undergoes rigorous testing, ensuring smooth performance and flawless execution.",
  },
  {
    icon: <FaRocket className="text-orange-500 w-6 h-6" />,
    title: "Deployment & Onboarding",
    desc: "Seamless implementation with training and support for your team to use confidently.",
  },
  {
    icon: <FaLifeRing className="text-orange-500 w-6 h-6" />,
    title: "Continuous Support & Growth",
    desc: "Partnership doesn’t end at launch—we provide ongoing updates, improvements, and growth support.",
  },
];

export default function HowWeWork() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <div
      ref={ref}
      className="relative py-20 bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove scroll-smooth"
    >
      <motion.h2
        style={{ opacity }}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-bold text-center text-gray-950 mb-8"
      >
        How We Work
      </motion.h2>
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-2 ">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ x: i % 2 === 0 ? -20 : 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 40,
                damping: 25,
                delay: i * 0.1,
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex  items-center gap-6 shadow-lg rounded-2xl p-2 text-left border-1 border-r-orange-500 border-l-orange-500"
            >
              <div className="flex-shrink-0">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="p-2 bg-orange-100 rounded-full shadow-lg"
                >
                  {step.icon}
                </motion.div>
              </div>
              <div>
                <h3 className="text-base md:text-lg text-gray-900 font-semibold">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed font-sans">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="hidden md:flex justify-center items-center h-full bg-gradient-to-r from-orange-300 to-orange-400 rounded-3xl p-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center"
          >
            <Image
              src="/customsoftware/howwework.png"
              alt="Custom Software"
              width={600}
              height={600}
              className="w-full h-auto max-w-md object-contain"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
