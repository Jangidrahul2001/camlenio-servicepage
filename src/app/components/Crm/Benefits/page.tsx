"use client";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: "📈",
    title: "Boost Your Digital Presence",
    desc: "Camlenio designs help your brand shine with modern UI/UX.",
  },
  {
    icon: "🤝",
    title: "Stronger Customer Connections",
    desc: "We craft experiences that build trust and long-term loyalty.",
  },
  {
    icon: "🕒",
    title: "Faster Project Delivery",
    desc: "With streamlined design & development, save time and stay ahead.",
  },
  {
    icon: "💡",
    title: "Creative + Data-Driven Design",
    desc: "Blend of innovation and insights to drive real growth.",
  },
];

export default function Benefits() {
  return (
    <div
      className="py-20 bg-cover bg-center bg-no-repeat relative "
      style={{ backgroundImage: "url('/crmsoftware/crm-benefits.png')" }}
    >
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative max-w-6xl ml-auto text-center mb-12 px-6">
        <h2 className="text-6xl font-bold text-white">
          Why Brands Trust <span className="text-orange-500"> Camlenio</span>
        </h2>
        <p className="text-white mt-2 text-lg">
          Why companies love <span className="text-orange-500"> Camlenio</span>{" "}
          CRM
        </p>
      </div>

      <div className="relative grid md:grid-cols-2 gap-8 max-w-6xl ml-auto px-6 ">
        {benefits.map((b, i) => (
          <motion.div key={i} className="p-6 text-center border-2 border-orange-500 rounded-2xl">
            <div className="text-4xl">{b.icon}</div>
            <h3 className="mt-4 text-3xl font-semibold text-white">
              {b.title}
            </h3>
            <p className="text-white/80">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
