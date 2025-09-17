"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    title: "What Clients says",
    heading: "Testimonials",
    text: "EskyDecode recognizes the importance of developing IT solutions for our clients. We assess our clients regularly to ensure we consistently provide the best value available. By doing so, we established ourselves as the global choice of the world.",
    highlight: "Looking for Digital Solution?",
    client: "Vanshika Puruswani",
    companyLogo: "/Homepage/logo.png",
    review:
      "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid quorum quid malis quorum velit.",
    stars: 5,
  },
  {
    title: "Happy Clients",
    heading: "Feedback",
    text: "Working with EskyDecode was seamless. Their dedication and expertise made our project successful beyond expectations.",
    highlight: "Your success is our mission!",
    client: "Rahul Sharma",
    companyLogo: "/Homepage/logo.png",
    review:
      "Excellent support and amazing delivery quality. Definitely recommend for IT solutions.",
    stars: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-indigo-50 via-orange-100 to-indigo-100 bg-[length:200%_200%] animate-gradientMove">
      <div className="py-20 px-8 md:px-16 ">
        <div className="text-center">
          <span className="relative inline-block px-6 py-1 text-base font-medium text-black border-2 border-orange-200 rounded-full">
            <span className="absolute w-7 h-[6px] rounded-full bg-orange-500 left-[-1.2rem] top-1/2 -translate-y-1/2"></span>
            What Clients says
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900">
            Testimonials
          </h2>
          <p className="mt-2 text-gray-600 max-w-5xl mx-auto">
            The EskyDecode follows certain quality standards that help provide
            mobile and web apps development services meeting the client’s
            expectation. Our strategy has helped us achieve customer
            satisfaction and a great client retention rate.
          </p>
        </div>
        <div className="relative max-w-5xl mx-auto overflow-hidden grid md:grid-cols-2 rounded-4xl border-2 border-orange-500 mt-4">
          <div className="p-8 flex flex-col justify-center ">
            <div className="text-center mb-12">
              <span className="relative inline-block px-6 py-1 text-base font-medium text-black border-2 border-orange-200 rounded-full">
                <span className="absolute w-7 h-[6px] rounded-full bg-orange-500 left-[-1.2rem] top-1/2 -translate-y-1/2"></span>
                What Clients says
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900">
                Testimonials
              </h2>
              <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
                The EskyDecode follows certain quality standards that help
                provide mobile and web apps development services meeting the
                client’s expectation. Our strategy has helped us achieve
                customer satisfaction and a great client retention rate.
              </p>
              <p className="mt-2 text-black font-medium text-xl  text-center ">
                Looking for Digital Solution?
              </p>
            </div>
          </div>
          <div className="relative p-8 bg-orange-500 text-white text-center flex flex-col items-center justify-center rounded-r-2xl overflow-hidden min-h-[300px] sm:min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 flex flex-col items-center justify-center p-8"
              >
                <Image
                  src={testimonials[index].companyLogo}
                  alt={testimonials[index].client}
                  width={100}
                  height={100}
                  className="rounded-full mb-4 bg-white p-4"
                />
                <h4 className="font-bold text-lg">
                  {testimonials[index].client}
                </h4>
                <div className="flex justify-center my-2">
                  {Array.from({ length: testimonials[index].stars }).map(
                    (_, i) => (
                      <span key={i} className="text-yellow-300 text-xl px-1">
                        <FaStar />
                      </span>
                    )
                  )}
                </div>
                <p className="text-sm md:text-base">
                  {testimonials[index].review}
                </p>
              </motion.div>
            </AnimatePresence>
            <button
              onClick={() =>
                setIndex((prev) =>
                  prev === 0 ? testimonials.length - 1 : prev - 1
                )
              }
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white text-orange-500 p-2 w-10 rounded-full shadow-md"
            >
              ❮
            </button>
            <button
              onClick={() =>
                setIndex((prev) => (prev + 1) % testimonials.length)
              }
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-orange-500 p-2 w-10 rounded-full shadow-md"
            >
              ❯
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-orange-500" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
