import Image from "next/image";
import React from "react";
const cards = [
  {
    title: "Innovative Approach",
    icon: "/Homepage/innovative_solution.webp",
    desc: "We combine creativity with cutting-edge technology to deliver solutions that truly make a lasting impact.",
  },
  {
    icon: "/Homepage/ontime_delivery.webp",
    title: "End-to-End Expertise",
    desc: "From idea to design, development, and launch — we handle everything seamlessly under one roof.",
  },
  {
    icon: "/Homepage/client_centred_solver.webp",
    title: "Scalable & Secure",
    desc: "Our solutions are built to scale as your business grows, while ensuring top-level security and reliability.",
  },
  {
    icon: "/Homepage/core_values.webp",
    title: "Client-Centric",
    desc: "We work with transparency and collaboration, always putting your business goals and success first.",
  },
];

export default function MakeUsUnique() {
  return (
    <div className="overflow-hidden  py-20 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-[length:200%_200%] animate-gradientMove">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="relative inline-block px-4 py-1.5 rounded-full border border-orange-400 bg-gray-50 shadow-sm text-sm font-medium text-gray-950 mb-4">
          <span className="absolute w-7 h-[6px] rounded-full bg-orange-500 left-[-1.2rem] top-1/2 -translate-y-1/2"></span>
          Solutions That Scale
        </span>
        <h6 className="text-3xl sm:text-4xl font-bold text-gray-50 mb-4">
          Why Businesses Choose{" "}
          <span
            className="text-orange-500"
            style={{
              textShadow:
                "-1px -1px 0px #da5f00, 3px 3px 0px #263242, 4px 6px 0px #ff582336",
            }}
          >
            {" "}
            Camlenio
          </span>
        </h6>

        <p className="max-w-5xl mx-auto flex-wrap text-gray-50 text-sm text-left break-words sm:text-base mb-12 font-sans">
          At Camlenio, we don’t just deliver software — we create solutions that
          drive measurable growth for businesses. What makes us unique is the
          way we blend innovation, technical expertise, and long-term trust to
          empower companies of every size.
        </p>
      </div>
      <div className=" max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-gray-50 group rounded-2xl  p-6 flex flex-col items-center text-center hover:shadow-xl transition-colors duration-700 hover:bg-orange-500 "
          >
            <Image
              src={card.icon}
              alt={card.title}
              width={500}
              height={300}
              className="w-20 h-20 bg-white shadow-2xl rounded-full  object-cover transition-transform duration-700 group-hover:rotate-y-360 p-4 "
            />
            <h2 className="mt-4 text-xl font-semibold text-gray-900 group-hover:text-gray-50 transition-all duration-500">
              {card.title}
            </h2>
            <p className="mt-2 text-gray-600 text-base group-hover:text-gray-50 transition-all duration-500 font-sans">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
