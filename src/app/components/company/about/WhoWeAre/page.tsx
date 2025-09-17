"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WhoWeAre() {
  return (
    <div className="bg-gradient-to-r from-indigo-100 via-orange-100 to-indigo-200 bg-[length:200%_200%] animate-gradientMove py-16 px-8 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="relative inline-block px-4 py-1.5 ml-4 rounded-full  border-2 text-base border-orange-300 bg-white shadow-sm font font-semibold text-gray-950 mb-4">
            <span className="absolute w-7 h-[6px] rounded-full bg-orange-600 left-[-1.2rem] top-1/2 -translate-y-1/2"></span>
            Who We Are
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug mb-4">
            End-to-end <span className="text-orange-500">experts</span>
          </h2>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-700 mb-4">
            Delivering Bespoke IT Solutions That Add to the Ease of Business
            Execution.
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-xl">
            Company is not an entity, it’s a family that represents togetherness
            for over two decades of a successful journey. For company, the
            definition of success is to transcend innovative ideas of people to
            reality with the help of our tech expertise, this is what we, as a
            Team, want to be remembered for!
          </p>
        </div>
        <div className=" relative flex justify-center lg:justify-end">
          <Image
            src="/Homepage/aboutus_image.png"
            alt="Who We Are"
            width={600}
            height={400}
            className=" rounded-2xl border-l-4  object-cover"
          />
          <div className="flex justify-center mt-12">
            <motion.div
              animate={{ x: ["0%", "20%", "-20%", "0%"] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-4xl font-bold text-orange-500 absolute bottom-0 left-20"
            >
              »»»
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
