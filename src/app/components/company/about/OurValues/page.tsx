import { HoverEffect } from "@/app/components/About-card-hover-effect";
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
      <div className="p-4 inline-block rounded-full bg-white/20 group-hover:bg-white/20 transition-colors duration-300">
        <RiTeamFill
          size={60}
          className="text-white  group-hover:animate-wiggle"
        />
      </div>
    ),
    title: "In-house Team",
    desc: "Dedicated and hard working are some of the characteristics that define our In-House Team. Our experts, including in finance, marketing, operations, engineering, human resources, and customer services, come together as a team for various works. Together, every team member is diverse in different experiences and skills to ensure that we surpass our objectives. In solving the issues that affect our organization, we do so with a collaborative approach to achieve innovative solutions..",
  },
  {
    icon: (
      <div className="bg-white/20 p-4 inline-block rounded-full group-hover:bg-white/10 transition-colors duration-300">
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
      <div className="bg-white/20 p-4 inline-block rounded-full group-hover:bg-white/10 transition-colors duration-300">
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
      <div className="bg-white/20 p-4 inline-block rounded-full group-hover:bg-white/10 transition-colors duration-300">
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
      <div className="bg-white/20 p-4 inline-block rounded-full group-hover:bg-white/10 transition-colors duration-300">
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
      <div className="bg-white/20 p-4 inline-block rounded-full group-hover:bg-white/10 transition-colors duration-300">
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
    <div className="py-16 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-[length:200%_200%] animate-gradientMove">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <GsapReveal>
          <div className="text-center">
            <span className="relative inline-block px-4 py-1.5  rounded-full  border-2 text-base border-orange-300 bg-white shadow-sm font font-semibold text-gray-950 mb-4">
              <span className="absolute w-7 h-[6px] rounded-full bg-orange-500 left-[-1.2rem] top-1/2 -translate-y-1/2"></span>
              Our values
            </span>
          </div>
        </GsapReveal>
        <GsapReveal>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-50 mb-4">
            We Are Incomparable, Given Our{" "}
            <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #161e2e, 4px 6px 0px #ff582336",
              }}
            >
              {" "}
              Knowledge Expertise And Solutions
            </span>
          </h1>
        </GsapReveal>
        <p className=" text-gray-50 text-sm text-left md:text-base flex-wrap break-words mb-12 font-sans">
          Our core values describe who we actually are
        </p>

        <div className="w-full">
          <GsapReveal>
            <HoverEffect items={cards} className="lg:grid-cols-3" />
          </GsapReveal>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
