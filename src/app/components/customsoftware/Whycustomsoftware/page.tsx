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
    <div id="next-section" className="py-16 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900  mb-12 ">
          Why Custom Software is the Smarter Choice
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 border-2 border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 1 }}
                animate={{ scale: [1, 1.15, 1], opacity: 1 }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-12 h-12 mx-auto text-orange-500 mb-4"
              >
                <item.icon className="w-12 h-12" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
