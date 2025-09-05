"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Clock,
  BarChart3,
  Smile,
  ShieldCheck,
  Globe,
  Users,
} from "lucide-react";
import Image from "next/image";

const benefits = [
  {
    icon: <Clock className="w-10 h-10 text-orange-400" />,
    title: "Save Time",
    desc: "Automate repetitive HR tasks like payroll, attendance & leave management — so your team can focus on growth.",
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-blue-400" />,
    title: "Data-Driven",
    desc: "Powerful reports & analytics help you make smarter HR decisions with real-time insights.",
  },
  {
    icon: <Smile className="w-10 h-10 text-green-400" />,
    title: "Happier Employees",
    desc: "Boost engagement & transparency with self-service portals and easy communication tools.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-purple-400" />,
    title: "Secure & Reliable",
    desc: "Enterprise-grade security to keep sensitive employee data safe & compliant.",
  },
  {
    icon: <Globe className="w-10 h-10 text-teal-400" />,
    title: "Scalable",
    desc: "Designed for startups, SMEs, and large enterprises — grows as your business grows.",
  },
  {
    icon: <Users className="w-10 h-10 text-pink-400" />,
    title: "Team Collaboration",
    desc: "Streamline communication between HR, managers & employees with built-in workflows.",
  },
];

const Benefits = () => {
  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-20">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hrmssoftware/benefits-bg.jpg"
          alt="HRMS Benefits Background"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-gray-900 ">
          Benefits of <span className="text-orange-500">Camlenio</span> HRMS
        </h2>
        <p className="mt-4 text-gray-900 max-w-3xl mx-auto">
          Empower your workforce with tools that save time, enhance accuracy,
          and improve collaboration. From recruitment to retirement, Camlenio
          HRMS ensures smooth HR operations at every stage.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-900 backdrop-blur-xl border-2 border-gray-200 rounded-tr-[4rem] rounded-tl-[4rem] rounded p-6 text-center shadow-inner hover:shadow-orange-500/20 hover:scale-105 transition duration-300 ease-in-out "
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-xl md:text-3xl font-semibold text-gray-50 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-200 text-sm md:text-base leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
