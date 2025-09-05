"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Lead Management",
    desc: "Capture, assign, and nurture leads effectively with AI-powered scoring.",
  },
  {
    title: "Sales Pipeline Tracking",
    desc: "Visual Kanban-style pipelines for crystal-clear deal tracking.",
  },
  {
    title: "Customer 360° View",
    desc: "See complete history of every customer in a single dashboard.",
  },
  {
    title: "Email & SMS Integration",
    desc: "Communicate with leads without switching tabs.",
  },
  {
    title: "Task & Team Collaboration",
    desc: "Assign, track, and collaborate on deals in real time.",
  },
  {
    title: "Reports & Insights",
    desc: "Custom dashboards with live sales and performance metrics.",
  },
];

export default function WhatMakesUsDifferent() {
  return (
    <div className=" max-w-[100rem] mx-auto mb-12 md:mb-30 text-left">
      <div className="max-w-6xl mr-auto text-center mb-12">
        <h2 className="text-4xl md:text-7xl font-bold text-orange-500 text-left px-8" >
          {" "}
         What Makes Us Different
        </h2>
        <p className="text-gray-700 mt-2 text-sm md:text-base text-left px-10">
          Powerful tools to supercharge your business
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 px-6">
        {features.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="  bg-transparent  border-2 border-gray-200 rounded-tr-3xl p-6 space-y-3"
          >
            <CheckCircle className="text-orange-500 w-7 h-7" />
            <h3 className="font-semibold text-xl">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
