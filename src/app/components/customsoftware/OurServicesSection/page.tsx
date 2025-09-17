"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { Cog, Cloud, Smartphone, Link2, LifeBuoy } from "lucide-react";

export default function OurServicesCarousel() {
  const controls = useAnimation();

  const services = [
    {
      icon: Cog,
      title: "Business Process Automation",
      desc: "Automate repetitive tasks and workflows to save time, reduce errors, and increase efficiency.",
    },
    {
      icon: Cloud,
      title: "Web & Cloud Applications",
      desc: "High-performance, secure, and responsive web apps built for your exact requirements.",
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      desc: "Native Android, iOS, or cross-platform apps designed for your audience and business needs.",
    },
    {
      icon: Link2,
      title: "Integration & API Solutions",
      desc: "Connect your existing software and systems seamlessly for a unified workflow.",
    },
    {
      icon: LifeBuoy,
      title: "Maintenance & Support",
      desc: "Continuous monitoring, updates, and support to ensure your system always runs smoothly.",
    },
  ];

  useEffect(() => {
    controls.start({
      x: ["0%", "-100%"],
      transition: {
        ease: "linear",
        duration: 60,
        repeat: Infinity,
      },
    });
  }, [controls]);

  return (
    <div className="py-20 bg-gradient-to-r from-indigo-100 via-orange-100 to-indigo-100 bg-[length:200%_200%] animate-gradientMove">
      <div className="max-w-[100rem] mx-auto px-8 md:px-16">
        <div className="mb-8 md:mb-20 text-left flex  ">
          <h2 className="text-3xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Our Services
          </h2>
          <p className="mt-3 text-gray-600  max-w-2xl ml-auto">
            Our customized software solutions are crafted to align perfectly
            with the way your business operates—streamlining workflows, reducing
            manual effort, and supporting your long-term growth objectives.
          </p>
        </div>

        <div className="overflow-hidden relative cursor-grab active:cursor-grabbing">
          <motion.div
            className="flex gap-6"
            drag="x"
            dragConstraints={{ left: -1000, right: 0 }}
            animate={controls}
          >
            {[...services, ...services].map((s, i) => (
              <div
                key={i}
                className="min-w-[280px] max-w-sm flex-shrink-0 p-6 rounded-2xl border border-gray-200 shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl p-3 bg-white border border-gray-200 shadow-sm">
                    <s.icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
