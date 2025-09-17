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
    <div className="bg-gradient-to-r from-indigo-50 via-orange-200 to-indigo-100 bg-[length:200%_200%] animate-gradientMove">
      <div className=" px-8 md:px-16 py-20">
        <div className=" max-w-7xl mx-auto text-left">
          <div className="max-w-6xl mx-auto text-center mb-4">
            <h2
              className="text-4xl md:text-6xl font-bold text-orange-500 text-center"
              style={{ textShadow: "2px 2px 0 #FAF9F6, 4px 4px 0 #FFB266" }}
            >
              {" "}
              What Makes Us Different
            </h2>
            <p className="text-gray-700 mt-2 text-sm md:text-base text-center">
              Powerful tools to supercharge your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="  bg-transparent  border-2 border-orange-100 rounded-2xl p-6 space-y-3 shadow-md"
              >
                <CheckCircle className="text-orange-500 w-7 h-7" />
                <h3 className="font-semibold text-gray-900 text-xl">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
