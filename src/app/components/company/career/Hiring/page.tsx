"use client";
import Image from "next/image";
import GsapReveal from "../../../GsapReveal";

import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import { MdOutlineWork } from "react-icons/md";
import { TbMessageDots } from "react-icons/tb";


const Hiring = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-100 via-orange-100 to-indigo-100 bg-[length:200%_200%] animate-gradientMove py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="text-center md:text-left md:pl-6 ">
          <span className="relative inline-block px-4 py-1.5 rounded-full text-center border border-orange-300 bg-white shadow-sm text-sm font-medium text-gray-950 mb-4">
            <span className="absolute w-7 h-[6px] rounded-full bg-orange-500 left-[-1.2rem] top-1/2 -translate-y-1/2"></span>
            We’re Hiring! Your skills are valued
          </span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4 text-left">
          Find the right opportunity{" "}
          <span
            className="text-orange-500"
            style={{ textShadow: "2px 2px 0 #ffff, 4px 4px 0 #FFB266" }}
          >
            {" "}
            & Apply Now.
          </span>
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mb-12 text-left">
          Choose your area of interest and create something people love to use
          eveny day
        </p>
        <GsapReveal>
          <div className="w-1/2 ">
            <div className="w-full  bg-transparent border-1 border-gray-300 p-8 rounded-2xl shadow-lg">
              <div>
                <form className="space-y-6">
                  <div className="relative w-full">
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center h-full px-3">
                      <FiUser className="text-gray-900 text-xl" />
                      <span className="ml-2 h-6 border-r border-gray-300"></span>{" "}
                    </div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full pl-16 pr-3 py-2 border text-gray-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none placeholder:text-gray-600"
                    />
                  </div>

                  <div className="relative w-full">
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center h-full px-3">
                      <HiOutlineMail className="text-gray-900 text-xl" />
                      <span className="ml-2 h-6 border-r border-gray-300"></span>
                    </div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full pl-16 pr-3 py-2 border text-gray-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none  placeholder:text-gray-600"
                    />
                  </div>
                  <div className="relative w-full">
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center h-full px-3">
                      <FiPhone className="text-gray-900 text-xl" />
                      <span className="ml-2 h-6 border-r border-gray-300"></span>
                    </div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full pl-16 pr-3 py-2 border text-gray-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none placeholder:text-gray-600"
                    />
                  </div>
                  <div className="relative w-full">
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center h-full px-3">
                      <MdOutlineWork className="text-gray-900 text-xl" />
                      <span className="ml-2 h-6 border-r border-gray-300"></span>
                    </div>
                    <select className="w-full pl-16 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none text-gray-600">
                      <option>Web Development</option>
                      <option>Mobile App Development</option>
                      <option>Game App Development</option>
                      <option>UI/UX Design</option>
                      <option>Idea Based Website Development</option>
                      <option>Ecommerce Development</option>
                      <option>Others</option>
                    </select>
                  </div>

                  <div className="relative w-full">
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-start h-full px-3 pt-2">
                      <TbMessageDots className="text-gray-900 text-xl mt-1" />
                      <span className="ml-2 h-6 border-r border-gray-300"></span>
                    </div>
                    <textarea
                      rows={4}
                      placeholder="About Your Project"
                      className="w-full pl-16 pr-3 py-2 border text-gray-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none placeholder:text-gray-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-all"
                  >
                    Submit Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </GsapReveal>
      </div>
     
    </div>
  );
};

export default Hiring;
