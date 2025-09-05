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
    icon: <FaComments className="text-orange-500 w-10 h-10" />,
    title: "Discovery & Consultation",
    desc: "We start by listening to your vision, challenges, and goals—transforming ideas into a clear direction.",
  },
  {
    icon: <FaProjectDiagram className="text-orange-500 w-10 h-10" />,
    title: "Strategy & Planning",
    desc: "Crafting the roadmap with the right technologies, milestones, and strategies to maximize value.",
  },
  {
    icon: <FaCode className="text-orange-500 w-10 h-10" />,
    title: "Development with Care",
    desc: "Building scalable, secure, and customized solutions using modern tools and frameworks.",
  },
  {
    icon: <FaCheckCircle className="text-orange-500 w-10 h-10" />,
    title: "Testing & Refinement",
    desc: "Every feature undergoes rigorous testing, ensuring smooth performance and flawless execution.",
  },
  {
    icon: <FaRocket className="text-orange-500 w-10 h-10" />,
    title: "Deployment & Onboarding",
    desc: "Seamless implementation with training and support for your team to use confidently.",
  },
  {
    icon: <FaLifeRing className="text-orange-500 w-10 h-10" />,
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

  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <div ref={ref} className="relative py-20">
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-10"
      />
      <motion.h2
        style={{ opacity }}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-bold text-center mb-8"
      >
        How We Work
      </motion.h2>
      <div className="relative max-w-screen  px-6 md:px-12 lg:px-20 grid grid-cols-2 gap-4 md:gap-8 ">
        <div className="space-y-2 ">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ x: i % 2 === 0 ? -100 : 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              whileHover={{scale:1.02}}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                type: "spring",
                stiffness: 80,
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex items-start gap-6  rounded-2xl p-6   text-left shadow-2xl "
            >
              <div className="flex-shrink-0">
                <motion.div
                  animate={{ x: [0, 15, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                  }}
                  className="p-4 bg-orange-100 rounded-full shadow-lg"
                >
                  {step.icon}
                </motion.div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center shadow-md h-full bg-gradient-to-r from-orange-300  to-orange-400  rounded-3xl">
          <motion.div
            initial={{ y: 0, opacity: 1 }}
            whileInView={{ opacity: 1 }}
            animate={{
              y: [-20, 20],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className="flex-1 flex justify-center"
          >
            <Image
              src="/customsoftware/howwework.png"
              alt="Custom Software"
              width={600}
              height={500}
              className="rounded-2xl  object-contain"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
