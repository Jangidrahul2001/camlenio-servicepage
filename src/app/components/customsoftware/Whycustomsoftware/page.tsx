"use client";

import { ShieldCheck, Layers, PiggyBank, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyCustomSoftware() {
  const features = [
    {
      icon: Sparkles,
      title: "Tailored for You",
      desc: "Every feature is designed around your exact workflows and goals—no unnecessary extras.",
    },
    {
      icon: Layers,
      title: "Scales with Growth",
      desc: "Your software grows with your business—flexible and ready for future needs.",
    },
    {
      icon: ShieldCheck,
      title: "Stronger Security",
      desc: "Custom-built protection that keeps your data safer than off-the-shelf tools.",
    },
    {
      icon: PiggyBank,
      title: "Smart Investment",
      desc: "No recurring license fees, no wasted features—only long-term value.",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove scroll-smooth">
      <div id="next-section" className="py-20 px-8 md:px-16 scroll-mt-20">
        <div className="max-w-6xl mx-auto  text-center">
          <span className="relative inline-block px-4 py-1.5 rounded-full border border-orange-50 bg-orange-100 shadow-sm text-sm font-medium text-orange-600 mb-4">
            <span className="absolute w-7 h-[6px] rounded-full bg-orange-500 left-[-1.2rem] top-1/2 -translate-y-1/2"></span>
            Camlenio Software Development Company
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Why Custom Software is the Smarter Choice
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                whileHover={{ scale: 1.02 }}
                transition={{
                  type: "spring",
                  stiffness: 40,
                  damping: 25,
                  delay: index * 0.1,
                }}
                viewport={{ once: true, amount: 0.3 }}
                className="p-6 bg-transparent border-1 border-orange-200 rounded-2xl shadow-lg  transition-shadow duration-300"
              >
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="w-12 h-12 mx-auto text-orange-500 mb-4"
                >
                  <item.icon className="w-12 h-12" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
