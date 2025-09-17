"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRightLong, FaArrowDownLong } from "react-icons/fa6";
import BackToTopButton from "../../BackToTopButton";
import Link from "next/link";

export default function FintechHeroSection() {
  const handleScroll = () => {
    const section = document.getElementById("next-section");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gradient-to-r from-indigo-100 via-orange-100 to-indigo-100 bg-[length:200%_200%] animate-gradientMove">
      <div className="max-w-7xl min-h-screen mx-auto flex flex-col-reverse md:grid md:grid-cols-2 gap-10 items-center relative px-8 md:px-16 text-gray-900">
        <div className="space-y-4 max-w-2xl">
          <h1 className="text-2xl md:text-5xl font-bold">
            Smarter Fintech Solutions with{" "}
            <span
              className="text-orange-500"
              style={{ textShadow: "2px 2px 0 #ffff, 4px 4px 0 #FFB26B" }}
            >
              Camlenio
            </span>
          </h1>

          <p className="text-sm  md:text-lg text-gray-700">
            Power your business with next-gen digital payment solutions, secure
            transactions, and custom fintech platforms designed for scale.
          </p>

          <ul className="space-y-1 text-sm text-gray-800 list-disc list-inside">
            {[
              "Seamless Digital Payments & Wallet Integration",
              "Banking APIs & Secure Transaction Processing",
              "Custom Fintech Dashboards for Businesses",
              "Fraud Detection & Data Security Compliance",
              "Scalable Cloud-Based Infrastructure",
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0 },
                }}
                whileHover={{ x: 2 }}
                transition={{
                  type: "tween",
                  duration: 0.2,
                  ease: "easeInOut",
                }}
                className="cursor-default text-xs md:text-sm hover:text-orange-500 transition-all duration-300"
              >
                {item}
              </motion.li>
            ))}
          </ul>

          <Link
            href="/fintechsoftware"
            className="inline-flex items-center gap-2 text-sm md:text-sm  bg-orange-500 text-white px-6 py-3 rounded-lg md:rounded-xl font-medium  hover:bg-orange-600 transition-all duration-300"
          >
            Book a Free Consultation <FaArrowRightLong />
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto w-full max-w-md"
        >
          <Image
            src="/fintechsoftware/fintech-hero2.jpg"
            alt="Camlenio Fintech Illustration"
            width={700}
            height={700}
            className="w-full h-auto object-contain drop-shadow-xl rounded-2xl"
          />
        </motion.div>
      </div>

      <div className="text-center">
        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleScroll}
          className="hidden md:inline-flex items-center gap-2 px-6 py-3 border-2 border-orange-500 text-orange-500 text-lg rounded-full shadow hover:bg-orange-600 hover:text-white font-bold transition "
        >
          Explore More <FaArrowDownLong />
        </motion.button>
      </div>
      <BackToTopButton />
    </div>
  );
}
