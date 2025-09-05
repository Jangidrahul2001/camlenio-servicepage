import Image from "next/image";
import React from "react";
const cards = [
  {
    title: "Innovative Solution",
    icon: "/Homepage/innovative_solution.webp",
    desc: "Expertise solution with combination of perfect solution with your expectation.",
  },
  {
    icon: "/Homepage/ontime_delivery.webp",
    title: "On Time Delivery",
    desc: "We work to progress with time, our commitment to deliver with accurate result.",
  },
  {
    icon: "/Homepage/client_centred_solver.webp",
    title: "Client-Centred Solver",
    desc: "Develop the key profession to serve according to client's satisfaction.",
  },
  {
    icon: "/Homepage/core_values.webp",
    title: "Core Values",
    desc: "Develop the key profession to serve according to client's satisfaction.",
  },
];

export default function MakeUsUnique() {
  return (
    <div className="overflow-hidden  py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl  lg:text-5xl font-bold text-gray-50 mb-4">
          What Make <span className="text-orange-500"> Us Unique</span>
        </h2>

        <p className="max-w-6xl mx-auto text-gray-100 text-base sm:text-lg mb-12">
          Our team envisions transforming the world through innovation in
          website development and software development. We tackle challenges
          head-on to provide digital solutions that unlock future possibilities
          and deliver exceptional value to our clients. By employing the right
          technical approach, we empower our clients to achieve maximum results
          and drive success.
        </p>
      </div>
      <div className=" max-w-[90rem] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white group rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-colors duration-700 hover:bg-orange-500"
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
            <p className="mt-2 text-gray-600 group-hover:text-gray-50 transition-all duration-500">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
