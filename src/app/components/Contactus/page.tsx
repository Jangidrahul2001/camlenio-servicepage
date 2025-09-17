import React from "react";

import { motion } from "framer-motion";

import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import { MdOutlineWork } from "react-icons/md";
import { TbMessageDots } from "react-icons/tb";

export default function ContactUs() {
  return (
    <div className="bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove py-20 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 bg-transparent border-1 border-gray-300 p-8 rounded-2xl shadow-lg">
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
                  className="w-full pl-16 pr-3 py-2 border text-gray-600 border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:outline-none placeholder:text-gray-600"
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
                  className="w-full pl-16 pr-3 py-2 border text-gray-600 border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:outline-none  placeholder:text-gray-600"
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
                  className="w-full pl-16 pr-3 py-2 border text-gray-600 border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:outline-none placeholder:text-gray-600"
                />
              </div>
              <div className="relative w-full">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center h-full px-3">
                  <MdOutlineWork className="text-gray-900 text-xl" />
                  <span className="ml-2 h-6 border-r border-gray-300"></span>
                </div>
                <select className="w-full pl-16 pr-3 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:outline-none text-gray-600">
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
                  className="w-full pl-16 pr-3 py-2 border text-gray-600 border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:outline-none placeholder:text-gray-600"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-3 bg-orange-500 text-white rounded-2xl font-semibold hover:bg-orange-600 transition-all"
              >
                Submit Now
              </button>
            </form>
          </div>
          <div className="relative flex flex-col justify-center bg-gray-900 text-white rounded-2xl p-8">
            <div className="absolute inset-0 bg-[url('/navcompany/support.png')] bg-cover bg-center opacity-20 rounded-2xl"></div>
            <div className=" max-w-full relative z-10 space-y-4 text-center">
              <h2
                className=" text-3xl md:text-6xl font-bold  text-orange-500 "
                style={{ textShadow: "2px 2px 0 #FAF9F6, 4px 4px 0 #FFB266" }}
              >
                Get in Touch
              </h2>
              <p className="text-white text-base md:text-3xl">
                Mail to our sales teams
              </p>
              <p className="text-xl md:text-2xl font-semibold text-orange-50">
                sales@company.com
              </p>
              <div className="mt-6">
                <h3 className="text-2xl text-orange-500 font-semibold">
                  Our Address
                </h3>
                <p className="text-gray-300 text-xs md:text-xl">
                  2nd Floor, Gopi Tower, Ajmer Rd,
                  <br />
                  Near Kamla Devi Govt. School, Satya Colony,
                  <br />
                  Tagore Nagar, Jaipur, Rajasthan 302021
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
