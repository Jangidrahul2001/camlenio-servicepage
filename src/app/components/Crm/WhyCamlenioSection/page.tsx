"use client";
import { motion } from "framer-motion";
// import Image from "next/image";

const features = [
  {
    id: 1,
    icon: "🧩",
    title: "All-in-One Dashboard",
    description: "Manage leads, customers, and tasks from a single place.",
  },
  {
    id: 2,
    icon: "⚡",
    title: "Automated Workflows",
    description: "Save time with AI-driven task automation.",
  },
  {
    id: 3,
    icon: "📊",
    title: "Smart Analytics",
    description:
      "Track customer interactions, sales pipeline, and performance.",
  },
  {
    id: 4,
    icon: "🔒",
    title: "Secure & Scalable",
    description:
      "Enterprise-grade data security with growth-ready scalability.",
  },
  {
    id: 5,
    icon: "🌐",
    title: "Multi-Channel Support",
    description: "Email, chat, and calls, all integrated.",
  },
];

export default function WhyCamlenioSection() {
  return (
    <div
      id="next-section"
      className="scroll-mt-20 bg-gradient-to-r from-indigo-50 via-orange-100 to-indigo-100 bg-[length:200%_200%] animate-gradientMove"
    >
      <div className="min-h-screen text-gray-900 px-8 md:px-16 py-20">
        <div className="max-w-6xl mx-auto space-y-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-7xl font-bold text-center"
          >
            The Story Behind{" "}
            <span
              className="text-orange-500"
              style={{ textShadow: "2px 2px 0 #FAF9F6, 4px 4px 0 #FFB266" }}
            >
              Camlenio CRM
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-center text-gray-800 max-w-4xl mx-auto"
          >
            Every great business is built on strong customer relationships. But
            too often, traditional CRMs make things complicated instead of
            simplifying them. That’s where our story begins.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className=" bg-transparent ba p-10 border-1 border-orange-200 shadow-md rounded-3xl "
          >
            <div className="space-y-6">
              <h2
                className="text-3xl md:text-5xl font-bold text-orange-500 text-center"
                style={{ textShadow: "2px 2px 0 #FAF9F6, 4px 4px 0 #FFB266" }}
              >
                Why Choose Our CRM?
              </h2>
              <ul className="space-y-6 leading-relaxed ">
                {features.map((feature, index) => (
                  <motion.li
                    key={feature.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.9 }}
                    viewport={{ once: true }}
                    className="bg-transparent p-6 rounded-xl shadow-sm backdrop-blur-sm"
                  >
                    <span className="text-sm md:text-3xl mr-3">
                      {feature.icon}
                    </span>
                    <span className="font-semibold text-gray-900 ">
                      {feature.title}
                    </span>{" "}
                    – {feature.description}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl p-4 text-center"
          >
            <h2
              className="text-3xl md:text-5xl text-orange-500 font-bold mb-2"
              style={{ textShadow: "2px 2px 0 #FAF9F6, 4px 4px 0 #FFB266" }}
            >
              Our Vision
            </h2>
            <p className="text-sm md:text-lg leading-relaxed max-w-3xl mx-auto">
              💡 To empower businesses to build stronger connections, close
              deals with confidence, and create customer relationships that last
              a lifetime.
            </p>
            <p className="mt-2 italic text-orange-500 text-sm md:text-xl ">
              Because at the heart of every deal, every interaction, and every
              business—there’s a relationship. And relationships deserve smarter
              solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
