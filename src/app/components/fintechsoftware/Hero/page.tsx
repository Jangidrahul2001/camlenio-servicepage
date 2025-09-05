"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRightLong, FaArrowDownLong } from "react-icons/fa6";
import BackToTopButton from "../../BackToTopButton";

export default function FintechHeroSection() {
  const handleScroll = () => {
    const section = document.getElementById("next-section");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className=" relative px-6 py-6 md:px-16 text-gray-900 z-0">
      <div className="absolute top-38 right-0 h-[250px] w-[300px] sm:h-[350px] sm:w-[400px]  md:h-[450px] md:w-[500px] lg:h-[500px] lg:w-[600px]  bg-orange-500 rounded-tl-3xl rounded-bl-3xl shadow-lg  hidden 2xl:block" />

      <div className="max-w-[85rem] min-h-[50rem] mx-auto flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center m-6 p-6">
        <div className="z-0">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-bold mb-6 cursor-pointer"
          >
            Smarter Fintech Solutions with Camlenio
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm  md:text-lg lg:text-2xl text-gray-700 mb-6"
          >
            Power your business with next-gen digital payment solutions, secure
            transactions, and custom fintech platforms designed for scale.
          </motion.p>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.06 },
              },
            }}
            className="space-y-2 text-xl text-gray-800 list-disc list-inside mb-6"
          >
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
                whileHover={{ x: 6 }}
                transition={{ type: "tween", duration: 0.2, ease: "easeInOut" }}
                className="cursor-default text-sm md:text-base lg:text-lg hover:text-orange-500 transition-all duration-100"
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <motion.a
            href="#"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 
             text-base sm:text-lg md:text-xl lg:text-2xl 
             bg-orange-500 text-white 
             px-4 sm:px-5 md:px-6 
             py-2 sm:py-3 
             rounded-lg md:rounded-xl 
             font-medium 
             hover:bg-orange-600 
             transition"
          >
            Book a Free Consultation <FaArrowRightLong />
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto w-full max-w-xl"
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
