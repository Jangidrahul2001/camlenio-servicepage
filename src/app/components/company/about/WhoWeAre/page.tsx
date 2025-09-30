"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WhoWeAre() {
  return (
    <div className="bg-gradient-to-r from-gray-100 via-orange-100 to-gray-50 bg-[length:200%_200%] animate-gradientMove py-16">
      <div className="text-center">

      <span className="relative inline-block px-4 py-1.5 rounded-full border border-orange-300 bg-white shadow-sm text-sm font-medium text-gray-950 mb-4">
        <span className="absolute w-7 h-[6px] rounded-full bg-orange-500 left-[-1.2rem] top-1/2 -translate-y-1/2"></span>
        Who We Are
      </span>
      </div>
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              End-to-end{" "}
              <span
                className="text-orange-500"
                style={{ textShadow: "2px 2px 0 #ffff, 4px 4px 0 #FFB266" }}
              >
                experts
              </span>
            </h2>
            <h3 className="text-gray-800 text-xs text-left md:text-sm flex-wrap break-words mb-6 font-sans">
              Delivering Bespoke IT Solutions That Add to the Ease of Business
              Execution.
            </h3>
            <p className="max-w-5xl mx-auto text-gray-600 text-sm text-justify md:text-base flex-wrap break-words mb-12 font-sans ">
              Company is not an entity, it’s a family that represents
              togetherness for over two decades of a successful journey. For
              company, the definition of success is to transcend innovative
              ideas of people to reality with the help of our tech expertise,
              this is what we, as a Team, want to be remembered for!
            </p>
          </div>
          <div className=" relative flex justify-center lg:justify-end">
            <Image
              src="/Homepage/aboutus_image.png"
              alt="Who We Are"
              width={500}
              height={300}
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
                className="text-4xl font-bold text-orange-500 absolute bottom-0 left-40"
              >
                »»»
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
