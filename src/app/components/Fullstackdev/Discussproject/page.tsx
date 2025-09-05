"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full min-h-[60vh] grid grid-cols-1 md:grid-cols-2"
    >
      <div className="bg-black text-white flex flex-col justify-center px-8 sm:px-14 py-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
          <span className="text-orange-600 capitalize text-5xl sm:text-6xl md:text-7xl lg:text-8xl">p</span>artner With Camlenio –<br /> Let’s Build Your Next Big Thing
        </h2>
        <p className="text-base sm:text-lg text-gray-300 mb-8">
          From intelligent automation to custom digital platforms,{" "}
          <strong>Camlenio</strong> delivers cutting-edge solutions tailored to
          your business goals. Connect with us today for a{" "}
          <strong>free consulting session</strong>.
        </p>
        <Link
          href="/"
          className="relative inline-block group w-fit px-6 py-3 border border-orange-500 rounded-xl overflow-hidden transition duration-300 active:scale-95"
        >
          <span className="absolute inset-0 bg-orange-500 transform scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100 " />
          <span className="relative z-10 text-orange-500 group-hover:text-white group-active:text-white font-semibold text-base transition-colors duration-400">
            Discuss Your Project Now!
          </span>
        </Link>
      </div>

      <div className="relative min-h-[300px] md:min-h-full">
        <Image
          src="/fullstackdev/discuss-img.webp"
          alt="Business discussion with tech overlay"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/40 to-transparent" />
      </div>
    </motion.div>
  );
}
