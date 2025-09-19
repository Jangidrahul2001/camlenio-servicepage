"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import GsapReveal from "../../GsapReveal";
import { MdArrowRightAlt } from "react-icons/md";

const IndustriesSection = () => {
  return (
    <div className="relative py-20 bg-gradient-to-r from-indigo-50 via-orange-100 to-indigo-100 bg-[length:200%_200%] animate-gradientMove overflow-hidden ">
      <div className="max-w-7xl mx-auto px-8 md:px-16 relative">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative inline-block px-4 py-1.5 rounded-full border border-orange-50 bg-orange-100 shadow-sm text-sm font-medium text-orange-600 mb-4"
          >
            <span className="absolute w-7 h-[6px] rounded-full bg-orange-500 left-[-1.2rem] top-1/2 -translate-y-1/2"></span>
            From Ideas to Impact
          </motion.div>
          <motion.h3
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            Empowering Businesses Through{" "}
            <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
              }}
            >
              Digital Innovation
            </span>
          </motion.h3>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-gray-800 mt-4 font-sans"
          >
            We design, develop, and deliver scalable IT solutions that simplify
            operations, improve customer engagement, and drive sustainable
            growth.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Who We Are?",
              img: "/Homepage/home_about.jpg",
              text: "We are a dedicated team of developers, designers, and strategists driven by passion and innovation. At Camlenio, our mission is to craft impactful digital solutions that transform businesses. With a focus on quality, creativity, and problem-solving, we bring ideas to life and make technology simple, effective, and future-ready for every client we serve.",
            },
            {
              title: "Where Do We Come From?",
              img: "/Homepage/home_about.jpg",
              text: "Founded in Jaipur, India, Camlenio was born with the vision of bridging the gap between technology and business. Starting as a small team with big dreams, we have grown into a trusted IT solutions provider. By combining local insights with global expertise, we deliver world-class software, fintech platforms, and digital solutions tailored to modern business needs.",
            },
            {
              title: "What We Do?",
              img: "/Homepage/home_about.jpg",
              text: "Camlenio provides a complete suite of technology solutions for businesses of all sizes. From custom software and mobile apps to fintech services and responsive websites, we focus on building secure, scalable, and user-friendly platforms. Our mission is to empower businesses to adapt, innovate, and grow in today’s fast-paced, digital-first economy.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className=" rounded-xl shadow-md overflow-hidden group"
            >
              <GsapReveal>
                <div className="relative">
                  <Image
                    src={card.img}
                    alt={card.title}
                    width={500}
                    height={300}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-101"
                  />
                  <div
                    className="absolute inset-0 bg-black/50 flex items-end justify-start px-4 
                        opacity-0 group-hover:opacity-80 transition-all duration-500"
                  >
                    <div className="flex items-center gap-2 text-orange-500 font-normal text-sm">
                      {card.title}
                      <MdArrowRightAlt className="text-white text-xl transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </GsapReveal>
              <div className="p-4 space-y-2">
                <div className=" text-orange-500 text-base md:text-xl font-bold">
                  <h2>{card.title}</h2>
                </div>
                <div className="text-gray-700">
                  <p className=" text-sm font-sans">{card.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-10 left-10 w-26 animate-pulse hidden md:block">
        <Image
          src="/Homepage/round_star.png"
          alt="Shape2"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};
export default IndustriesSection;
