"use client";
// import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// import { easeInOut } from "framer-motion";

const migrationlist = [
  {
    img: "/webdevpage/php-laravel.svg",
    text: "php to laravel Migration",
  },
  {
    img: "/webdevpage/laravel-py.svg",
    text: "laravel to python Migration",
  },
  {
    img: "/webdevpage/cl-laravel.svg",
    text: "cl to laravel Migration",
  },
  {
    img: "/webdevpage/php-node.svg",
    text: " php to node js Migration",
  },
  {
    img: "/webdevpage/laravel-node.svg",
    text: "PHP to laravel Migration",
  },
  {
    img: "/webdevpage/php-laravel.svg",
    text: "html to react js Migration",
  },
];

const Migration = () => {
  return (
    <div className="px-6 py-8 overflow-hidden">
      <div className="max-w-[85rem] mx-auto">
        <div className="flex flex-col md:flex-row items-left md:items-start justify-between gap-8 md:gap-12 px-4 md:px-8 py-10">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="md:w-2/5 space-y-3"
          >
            <span className="inline-block text-xl md:text-2xl font-normal tracking-wider text-orange-600">
              MIGRATIONS
            </span>
            <h3 className="text-xl md:text-3xl text-gray-800 font-semibold">
              Migration and Modernization
            </h3>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="md:w-3/5"
          >
            <p className="text-sm md:text-lg font-semibold text-gray-700 leading-relaxed">
              Migration and modernization are the activities that entail the
              relocation of applications, data, and ICT infrastructure to
              advanced contemporary cloud computing solutions. They allow
              businesses to achieve increased performance, scalability, and
              agility at reduced costs. These also enable organizations speedily
              and with assurance to move workloads, data, and applications to
              current cloud-based frameworks.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 bg-orange-50 gap-4 my-6"
        >
          {migrationlist.map((migrationlist, idx) => (
            <li
              key={idx}
              className="list-none flex items-center justify-start gap-4 bg-white hover:bg-orange-100 p-8 rounded-2xl "
            >
              <Image
                src={migrationlist.img}
                alt="php-to-laravel"
                width={50}
                height={30}
                className="object-contain "
              />
              <span className="lg:text-xl mc-auto itmes-center justify-center flex capitalize">
                {migrationlist.text}
              </span>
            </li>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Migration;
