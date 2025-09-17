// import AnimatedText from "@/app/components/AnimatedText";
import GsapReveal from "@/app/components/GsapReveal";
import React from "react";
import {
  RiTeamFill,
  RiLightbulbFlashFill,
  RiCustomerService2Fill,
  RiHandCoinFill,
  RiShieldStarFill,
  RiFocus3Fill,
} from "react-icons/ri";

const cards = [
  {
    icon: (
      <div className="bg-gray-800 p-4 rounded-full group-hover:bg-white/10 transition-colors duration-300">
        <RiTeamFill
          size={60}
          className="text-white group-hover:animate-wiggle"
        />
      </div>
    ),
    title: "In-house Team",
    desc: "Dedicated and hard working are some of the characteristics that define our In-House Team. Our experts, including in finance, marketing, operations, engineering, human resources, and customer services, come together as a team for various works. Together, every team member is diverse in different experiences and skills to ensure that we surpass our objectives. In solving the issues that affect our organization, we do so with a collaborative approach to achieve innovative solutions..",
  },
  {
    icon: (
      <div className="bg-gray-800 p-4 rounded-full group-hover:bg-white/10 transition-colors duration-300">
        <RiLightbulbFlashFill
          size={60}
          className="text-white group-hover:animate-wiggle"
        />
      </div>
    ),
    title: "Innovation",
    desc: "Dedicated and hard working are some of the characteristics that define our In-House Team. Our experts, including in finance, marketing, operations, engineering, human resources, and customer services, come together as a team for various works. Together, every team member is diverse in different experiences and skills to ensure that we surpass our objectives. In solving the issues that affect our organization, we do so with a collaborative approach to achieve innovative solutions.",
  },
  {
    icon: (
      <div className="bg-gray-800 p-4 rounded-full group-hover:bg-white/10 transition-colors duration-300">
        <RiCustomerService2Fill
          size={60}
          className="text-white group-hover:animate-wiggle"
        />
      </div>
    ),
    title: "Client-Centric",
    desc: "Dedicated and hard working are some of the characteristics that define our In-House Team. Our experts, including in finance, marketing, operations, engineering, human resources, and customer services, come together as a team for various works. Together, every team member is diverse in different experiences and skills to ensure that we surpass our objectives. In solving the issues that affect our organization, we do so with a collaborative approach to achieve innovative solutions..",
  },
  {
    icon: (
      <div className="bg-gray-800 p-4 rounded-full group-hover:bg-white/10 transition-colors duration-300">
        <RiHandCoinFill
          size={60}
          className="text-white group-hover:animate-wiggle"
        />
      </div>
    ),
    title: "Integrity",
    desc: "Dedicated and hard working are some of the characteristics that define our In-House Team. Our experts, including in finance, marketing, operations, engineering, human resources, and customer services, come together as a team for various works. Together, every team member is diverse in different experiences and skills to ensure that we surpass our objectives. In solving the issues that affect our organization, we do so with a collaborative approach to achieve innovative solutions..",
  },
  {
    icon: (
      <div className="bg-gray-800 p-4 rounded-full group-hover:bg-white/10 transition-colors duration-300">
        <RiShieldStarFill
          size={60}
          className="text-white group-hover:animate-wiggle"
        />
      </div>
    ),
    title: "Quality",
    desc: "Dedicated and hard working are some of the characteristics that define our In-House Team. Our experts, including in finance, marketing, operations, engineering, human resources, and customer services, come together as a team for various works. Together, every team member is diverse in different experiences and skills to ensure that we surpass our objectives. In solving the issues that affect our organization, we do so with a collaborative approach to achieve innovative solutions..",
  },
  {
    icon: (
      <div className="bg-gray-800 p-4 rounded-full group-hover:bg-white/10 transition-colors duration-300">
        <RiFocus3Fill
          size={60}
          className="text-white group-hover:animate-wiggle"
        />
      </div>
    ),
    title: "Focus",
    desc: "Dedicated and hard working are some of the characteristics that define our In-House Team. Our experts, including in finance, marketing, operations, engineering, human resources, and customer services, come together as a team for various works. Together, every team member is diverse in different experiences and skills to ensure that we surpass our objectives. In solving the issues that affect our organization, we do so with a collaborative approach to achieve innovative solutions..",
  },
];

const OurValues = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-[length:200%_200%] animate-gradientMove px-8 md:px-16">
      <div className="max-w-7xl mx-auto text-left md:text-center">
        <GsapReveal>
          <span className="relative inline-block px-4 py-1.5 rounded-full  border-2 text-base border-orange-300 bg-white shadow-sm font font-semibold text-gray-950 mb-4">
            <span className="absolute w-7 h-[6px] rounded-full bg-orange-500 left-[-1.2rem] top-1/2 -translate-y-1/2"></span>
            Our values
          </span>
        </GsapReveal>
        <GsapReveal>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            We Are Incomparable, Given Our <br />{" "}
            <span
              className="text-orange-500"
              style={{ textShadow: "2px 2px 0 #FAF9F6, 4px 4px 0 #FFB266" }}
            >
              {" "}
              Knowledge Expertise And Solutions
            </span>
          </h1>
        </GsapReveal>
        <p className="text-lg font-medium my-4">
          Our core values describe who we actually are
        </p>

        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-left md:text-center ">
            {cards.map((card, index) => (
              <div
                key={index}
                className="relative bg-gray-800 border-2 group border-gray-700 overflow-hidden shadow-md p-4 flex flex-col items-left md:items-center text-center hover:shadow-lg transition-shadow duration-300 group-hover:border-orange-600 h-[500px]"
              >
                <div className="absolute inset-0 w-full h-full bg-orange-500 transition-transform duration-500 ease-in-out -translate-y-full group-hover:translate-y-0" />
                <div className="relative flex flex-col items-center">
                  {card.icon}
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-50 group-hover:text-white mt-4 mb-2 transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-gray-100 group-hover:text-orange-50 text-base transition-colors duration-300">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
