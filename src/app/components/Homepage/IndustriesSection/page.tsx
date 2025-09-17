"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import GsapReveal from "../../GsapReveal";

const IndustriesSection = () => {
  return (
    <div className="relative py-16 bg-gradient-to-r from-indigo-100 via-orange-100 to-indigo-100 bg-[length:200%_200%] animate-gradientMove overflow-hidden ">
      <div className="max-w-[85rem] mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="relative inline-block px-4 py-1.5 rounded-full border border-orange-200 bg-white shadow-sm text-sm font-medium text-orange-600 mb-4">
            <span className="absolute w-7 h-[6px] rounded-full bg-orange-500 left-[-1.2rem] top-1/2 -translate-y-1/2"></span>
            Custom Software Development
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Industries{" "}
            <span
              className="text-orange-500"
              style={{ textShadow: "2px 2px 0 #ffff, 4px 4px 0 #FFB26B" }}
            >
              We Serve
            </span>
          </h2>

          <p className="text-xl text-gray-800 mt-4">
            We provide superior website and mobile app development services to
            businesses across many different industry verticals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Who We Are?",
              img: "/Homepage/home_about.jpg",
              text: "At EskyDecode, we are a team of passionate software developers dedicated to crafting innovative solutions that empower businesses to thrive in the digital age. With a focus on fintech services, we specialize in creating robust and scalable software solutions that cater tothe unique needs of our clients.",
            },
            {
              title: "Where Do We Come From?",
              img: "/Homepage/home_about.jpg",
              text: "At EskyDecode, we are a team of passionate software developers dedicated to crafting innovative solutions that empower businesses to thrive in the digital age. With a focus on fintech services, we specialize in creating robust and scalable software solutions that cater tothe unique needs of our clients.",
            },
            {
              title: "What We Do?",
              img: "/Homepage/home_about.jpg",
              text: "At EskyDecode, we are a team of passionate software developers dedicated to crafting innovative solutions that empower businesses to thrive in the digital age. With a focus on fintech services, we specialize in creating robust and scalable software solutions that cater tothe unique needs of our clients.",
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
                    className="absolute inset-0 bg-black/50 flex items-center justify-center px-4 
                        opacity-0 group-hover:opacity-80 transition-all duration-500"
                  >
                    <div className="flex items-center gap-2 text-white font-semibold text-lg">
                      {card.title}
                      <FaArrowRight className="text-white text-xl transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </GsapReveal>
              <div className="p-4">
                <p className="text-gray-700 text-base">{card.text}</p>
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
