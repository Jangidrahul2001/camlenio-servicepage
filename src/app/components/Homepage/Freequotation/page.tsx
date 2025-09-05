"use client";

import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function FreeQuotation() {
  return (
    <section className="relative py-16 bg-blue-950 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-2xl md:text-3xl font-semibold text-orange-500">
            “Every Great, Big thing starts with a decision that you take today”
          </p>
        </div>
        <div className="relative text-center border-2 border-blue-400 p-8 rounded-2xl backdrop-blur-md bg-transparent">
          <div className="mb-6">
            <h5 className="text-3xl font-semibold text-white">
              Get a FREE QUOTATION
            </h5>
            <p className="text-xl text-white/90 font-light  mb-6">
              Don’t worry your data and business ideas are safe with us.
            </p>
          </div>
          <form className="grid grid-cols-1 mTd:grid-cols-3 gap-6">
            <input
              aria-label="Full Name"
              className="w-full px-4 py-3 rounded-lg border-2 border-blue-400 bg-transparent text-gray-50 placeholder-blue-400"
              id="home_name"
              name="home_name"
              type="text"
              placeholder="Enter Full Name"
              required
            />
            <input
              aria-label="Email Address"
              className="w-full px-4 py-3 rounded-lg border-2 border-blue-400 bg-transparent text-gray-50 placeholder-blue-400 "
              id="home_email"
              name="home_email"
              type="email"
              placeholder="Enter Email Id"
              required
            />
            <input
              aria-label="Phone Number"
              className="w-full px-4 py-3 rounded-lg border-2 border-blue-400 bg-transparent text-gray-50 placeholder-blue-400 "
              id="home_phone"
              name="home_phone"
              type="tel"
              placeholder="Enter Contact Number"
              required
            />
            <textarea
              aria-label="Message"
              className="w-full md:col-span-3 px-4 py-3 rounded-lg border-2 border-b-8 border-blue-400 bg-transparent text-gray-50 placeholder-gray-500  outline-none"
              id="home_message"
              name="home_message"
              placeholder="Message"
              rows={4}
            ></textarea>
            <div className="md:col-span-3">
              <button
                type="submit"
                className="relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 overflow-hidden font-semibold text-gray-900 bg-white rounded-full group text-sm sm:text-base lg:text-lg transition-all"
              >
                <span className="absolute inset-0 w-full h-full bg-orange-500 rounded-full transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-500 flex items-center gap-2">
                  Talk to Experts <FaLongArrowAltRight />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <Image
        src="/Homepage/shapes/global_shap.png"
        alt="Global Shape"
        width={600}
        height={600}
        className="absolute -left-80  top-10 opacity-30 animate-spin [animation-duration:50s]"
        unoptimized
      />

      <Image
        src="/Homepage/shapes/shape-3.png"
        alt="Shape Bg"
        width={400}
        height={400}
        className="absolute right-0 bottom-0 opacity-50"
      />
    </section>
  );
}
