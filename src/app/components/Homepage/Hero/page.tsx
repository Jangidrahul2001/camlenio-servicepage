"use client";
import { motion } from "framer-motion";
import { GiCheckMark } from "react-icons/gi";
import Image from "next/image";
import { useState, useEffect } from "react";
import { HeroTextAnimate } from "../../HeroTextAnimate";
import FormPopup from "@/app/components/FormPopup";
import BackToTopButton from "../../BackToTopButton";

const Hero = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    setIsPopupOpen(true);
  }, []);

  const cards = [
    {
      id: 1,
      tag: "DIGITAL",
      tagColor: "bg-blue-100 text-blue-600",
      title: "Transfer your data to low carbon servers",
      co2: "68 tCO₂e",
      image: "/Homepage/home_about.jpg",
    },
    {
      id: 2,
      tag: "ENERGY",
      tagColor: "bg-pink-100 text-pink-600",
      title: "Replace natural gas with biomethane",
      co2: "15 tCO₂e",
      image: "/Homepage/home_about.jpg",
    },
    {
      id: 3,
      tag: "OFFICE",
      tagColor: "bg-orange-100 text-orange-600",
      title: "Switch to rented IT equipment",
      co2: "12 tCO₂e",
      image: "/Homepage/home_about.jpg",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-indigo-50 via-orange-100 to-indigo-100 bg-[length:200%_200%] animate-gradientMove pt-10 md:py-20">
      <div className="flex flex-col md:flex-row pt-16 md:py-0">
        <FormPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center w-full md:w-3/5"
        >
          <div className="max-w-xl space-y-4 px-4 md:px-0">
            <h1 className="text-[1.7rem] md:text-[2.6rem] font-bold text-gray-900 leading-tight ">
              The go-to carbon accounting
              <br />
              platform for your{" "}
              <HeroTextAnimate words={["better", "modern", "Tyler"]} />
            </h1>

            <ul className="space-y-2 text-gray-700 text-xs md:text-sm font-sans">
              <li className="flex items-center gap-3">
                <GiCheckMark className="text-orange-500 flex-shrink-0" />
                <span>
                  GHG Protocol Compliant Emissions Disclosure Report: Scopes 1,
                  2 & 3
                </span>
              </li>
              <li className="flex items-center gap-3">
                <GiCheckMark className="text-orange-500 flex-shrink-0" />
                <span>Net Zero Certification & Climate Expert support</span>
              </li>
              <li className="flex items-center gap-3">
                <GiCheckMark className="text-orange-500 flex-shrink-0" />
                <span>Reduction Plan in line with Science-Based Targets</span>
              </li>
              <li className="flex items-center gap-3">
                <GiCheckMark className="text-orange-500 flex-shrink-0" />
                <span>High quality certified offsets</span>
              </li>
            </ul>
            <button
              // onClick={() => setIsPopupOpen(true)}
              className="my-6 px-6 py-3 self-center md:self-start bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl shadow-md"
            >
              Schedule a call
            </button>
          </div>
        </motion.div>
        {/* right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 bg-[length:200%_200%] animate-gradientMove h-[30rem] md:h-[40rem] flex-grow flex flex-col items-center justify-center px-2 py-10 rounded-[0rem] md:rounded-bl-[3rem] md:w-2/5"
        >
          <div
            className="relative flex justify-center items-center w-full h-full [perspective:1000px]"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {cards.map((card, index) => {
              const isHovered = hoveredIndex === index;
              const isAnyHovered = hoveredIndex !== null;

              const initial = {
                x: index === 1 ? "0%" : index === 0 ? "-55%" : "55%",
                y: index === 1 ? -10 : 10,
                z: index === 1 ? 40 : 10,
                rotateY: index === 1 ? 0 : index === 0 ? 35 : -35,
                scale: index === 1 ? 1.1 : index === 0 ? 1 : 1.04,
                zIndex: index === 1 ? 3 : index === 0 ? 2 : 1,
              };
              const hovered = {
                x: isHovered ? "0%" : index < hoveredIndex ? "-65%" : "65%",
                y: isHovered ? -20 : 30,
                z: isHovered ? 50 : index < hoveredIndex ? 40 : -60,
                rotateY: isHovered ? 0 : index < hoveredIndex ? 40 : -40,
                scale: isHovered ? 1.15 : 0.9,
              };
              return (
                <motion.div
                  key={card.id}
                  onHoverStart={() => setHoveredIndex(index)}
                  onTap={() => setHoveredIndex(index)}
                  className="absolute bg-white p-5 rounded-2xl shadow-xl flex flex-col w-48 md:w-56"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    ...(isAnyHovered ? hovered : initial),
                    opacity: isAnyHovered ? (isHovered ? 1 : 0.1) : 1,
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                >
                  <span
                    className={`text-[.80rem] font-semibold px-2 py-1 rounded-lg self-start ${
                      card.tagColor
                    } ${card.id === 2 ? "mx-auto" : ""} ${
                      card.id === 3 ? "ml-auto" : ""
                    }`}
                  >
                    {card.tag}
                  </span>
                  <h3 className="mt-3 font-semibold text-gray-900 text-xs">
                    {card.title}
                  </h3>
                  <p className="text-[.68rem] text-gray-600 mt-1 font-sans">
                    CO₂ avoided:{" "}
                    <span className="font-semibold">{card.co2}</span>
                  </p>
                  <p className="text-xs text-gray-500 mt-2 font-sans">
                    Alternatives
                  </p>
                  {card.image && (
                    <div className="mt-3 w-full h-24 rounded-lg overflow-hidden">
                      <Image
                        src={card.image}
                        alt="alternative"
                        width={500}
                        height={300}
                        priority
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
      <BackToTopButton/>
    </div>
  );
};

export default Hero;
