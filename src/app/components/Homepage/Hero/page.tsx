"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import BackToTopButton from "../../BackToTopButton";
import { FaLongArrowAltRight } from "react-icons/fa";

const texts = [
  "Efficient",
  "Award winning",
  "Affordable",
  "Trustworthy",
  "Scalable",
  "Reliable",
  "Secure",
  "Innovative",
  "Dependable",
  "Powerful",
  "Impactful",
  "Quality",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(
      () => setSubIndex((prev) => prev + (deleting ? -1 : 1)),
      deleting ? 50 : 120
    );

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      <Image
        src="/Homepage/hero-bg.png"
        alt="Background"
        width={1980}
        height={1750}
        className="w-full h-full object-cover object-center absolute inset-0 z-0"
        priority
      />

      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-12 ">
        <Image
          src="/Homepage/shapes/dott_img.webp"
          alt="Background"
          width={150}
          height={150}
          className=" w-20 md:w-40 h-20 md:h-40 object-container -bottom-10  md:-bottom-20 left-0 object-center absolute z-0 animate-bounce [animation-duration:2s]"
          priority
        />
        <div className="max-w-[90rem] mx-auto min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between gap-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full text-center lg:text-left lg:w-2/5"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-50 mb-6 leading-snug lg:leading-tight">
              Build{" "}
              <span className="text-orange-500">
                {texts[index].substring(0, subIndex)}
                <span className="border-r-2 border-orange-500 animate-pulse ml-0.5"></span>
              </span>
              <br /> with Camlenio
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-100 max-w-xl mx-auto lg:mx-0 mb-6">
              Looking for IT infrastructure? Ready to tackle unique challenges
              to accelerate businesses in the digital age.
            </p>
            <button className="relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 overflow-hidden font-semibold text-gray-900 bg-white rounded-full group text-sm sm:text-base lg:text-lg">
              <span className="absolute inset-0 w-full h-full bg-orange-500 rounded-full transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-500 flex items-center gap-2">
                Talk to Experts <FaLongArrowAltRight />
              </span>
            </button>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-3/5 max-w-md sm:max-w-lg lg:max-w-2xl"
          >
            <Image
              src="/Homepage/hero-right.png"
              alt="Hero"
              width={900}
              height={700}
              className="w-full h-auto rounded-xl object-cover"
            />
          </motion.div>
        </div>
      </div>
      <BackToTopButton />
    </section>
  );
}
