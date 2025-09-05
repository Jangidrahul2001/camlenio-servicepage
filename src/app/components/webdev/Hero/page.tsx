"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import BackToTopButton from "../../BackToTopButton";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <Image
        src="/bg-hero.webp"
        alt="Background"
        width={500}
        height={500}
        className="object-cover absolute object-center z-0"
        priority
      />
      <div className="relative z-20 px-4 sm:px-6 py-20 md:pt-26 ">
        <div className="max-w-[80rem]  mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ y: 50, opacity: 1 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full text-center md:text-left md:w-3/5"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left text-gray-900 mb-6 leading-snug md:leading-tight">
              Custom Web Development
              <br /> Company in India & UK
            </h1>
            <p className="hidden md:block text-base sm:text-lg text-center md:text-left text-gray-800 font-normal ">
              Customized web development involves creating personalized websites
              tailored to client needs. We build solutions that match specific
              requirements, backed by strong expertise in coding, design, and
              modern web technologies. As a leading UK-based firm, we offer
              dynamic web design, e-commerce, blogs, informational sites, and
              more. Additionally, we provide web hosting, domain registration,
              and related digital services, delivering secure, high-quality, and
              user-focused websites for businesses in both the UK and Bharat.
            </p>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="md:hidden text-base sm:text-lg text-center md:text-left text-gray-800 font-normal"
            >
              Customized web development delivers tailored websites for
              businesses and individuals, built to match specific client needs.
              Our team excels in dynamic designs, e-commerce, blogs, and more,
              offering full solutions including hosting and domain services.
              With deep expertise and a focus on modern, secure, user-friendly
              technology, we serve clients across the UK and Bharat to help them
              achieve their digital goals.
            </motion.p>
            <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white text-base sm:text-lg font-semibold px-8 sm:px-12 py-3 sm:py-4 rounded-xl transition duration-300 capitalize">
              hire Web developer →
            </button>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 max-w-lg mx-auto relative"
          >
            <Image
              src="/webdevpage/webdevhero.webp"
              alt="Hero image"
              width={500}
              height={500}
              className="rounded-xl w-full h-auto object-contain"
              priority
            />
          </motion.div>
        </div>
      </div>
      <BackToTopButton />
    </div>
  );
}
