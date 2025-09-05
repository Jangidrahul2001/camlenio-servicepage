"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowDownLong } from "react-icons/fa6";
import BackToTopButton from "../../BackToTopButton";

export default function Hero() {
  const handleScroll = () => {
    const section = document.getElementById("next-section");
    section?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="relative overflow-hidden">
        <Image
          src="/bg-hero.webp"
          alt="Background"
          width={300}
          height={300}
          className="object-cover absolute object-center z-0"
          priority
        />
        <div className="relative z-20 px-4 sm:px-6 sm:py-22  md:py-0">
          <div className="max-w-[80rem] min-h-screen  mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-4">
            <motion.div
              initial={{ y: 50, opacity: 1 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full text-center md:text-left md:w-3/5"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left text-gray-900 mb-6 leading-snug md:leading-tight">
                Empower Your Mobile App
                <br />
                Development Services With Us!
              </h1>
              <p className="text-base sm:text-lg text-center md:text-left text-gray-800 font-normal">
                Empower your mobile app development services with us! Our
                company specializes in designing customized business-oriented
                apps capable of providing cutting-edge operational support...
              </p>
              <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white text-base sm:text-lg font-semibold px-8 sm:px-12 py-3 sm:py-4 rounded-xl transition duration-300 capitalize">
                hire mobile app developer →
              </button>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full md:w-2/5 max-w-lg mx-auto relative"
            >
              <Image
                src="/mobappdev/mob-app-hero.webp"
                alt="Hero"
                width={500}
                height={500}
                className="rounded-xl  object-contain"
                priority
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
              className="absolute bottom-20 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-6 py-3 border-2 border-orange-500 text-orange-500 text-lg rounded-full shadow hover:bg-orange-600 hover:text-white font-bold transition"
            >
              Explore More <FaArrowDownLong />
            </motion.button>
          </div>
        </div>
        <BackToTopButton />
      </div>
    </>
  );
}
