"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const btn = [
  { text: "Secure Payment Gateway" },
  { text: "AI-Powered Fraud Detection" },
  { text: "Regulatory Compliance (KYC/AML)" },
  { text: "Real-Time Transaction Monitoring" },
  { text: "Seamless API Integrations" },
  { text: "24/7 Customer & Tech Support" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function FintechSoftware() {
  return (
    <div
      id="next-section"
      className="scroll-mt-30 px-6 md:px-16 text-gray-900"
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold mt-12"
      >
        Why Choose Camlenio for Fintech Software Solutions?
      </motion.h1>
      <hr className="border-2 border-orange-500 max-w-6xl mx-auto mt-4 rounded" />

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-sm  md:text-base lg:text-xl font-normal text-center mt-2"
      >
        Camlenio builds secure, scalable, and future-ready fintech software.
        From digital banking to payment gateways, we ensure compliance,
        security, and innovation—helping you gain trust while staying ahead in
        the financial ecosystem.
      </motion.h2>

      <div className="max-w-7xl mx-auto grid items-center gap-10 md:grid-cols-2 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className=" aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-2xl flex justify-center"
        >
          <Image
            src="/fintechsoftware/fintech.png"
            alt="Camlenio fintech software"
            width={500}
            height={500}
            className="object-contain "
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: +10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            Fintech SaaS Solutions
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Camlenio empowers financial institutions, startups, and enterprises
            with tailored fintech platforms. Whether it’s digital wallets,
            peer-to-peer lending, or AI-based risk management—we deliver
            enterprise-grade solutions with maximum security and minimum
            downtime.
          </p>
          <div className="flex gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-2xl px-5 py-2.5 text-sm font-medium shadow hover:shadow-md transition border border-orange-500"
            >
              Request a Demo
            </a>
            <a
              href="#learn-more"
              className="inline-flex items-center justify-center rounded-2xl px-5 py-2.5 text-sm font-medium bg-orange-500 text-white hover:opacity-90 transition"
            >
              Explore Solutions
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto my-16 flex flex-wrap  justify-center "
      >
        {btn.map((item, idx) => (
          <motion.button
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeIn" },
              },
            }}
            whileHover={{ scale: 1.05 }}
            className="text-orange-500 px-6 py-4 text-lg sm:text-xl rounded-xl font-medium hover:text-white hover:bg-orange-500 transition duration-500 m-2 border-2 border-orange-500"
          >
            {item.text}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}
