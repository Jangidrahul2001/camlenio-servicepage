"use client";
import Image from "next/image";
import { FaStar, FaStarHalf } from "react-icons/fa";

export default function ItSolution() {
  return (
    <div className="relative py-16 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="relative inline-block px-4 py-1.5 rounded-full border border-orange-200 bg-white shadow-sm text-sm font-medium text-orange-600 mb-4">
          <span className="absolute w-7 h-[6px] rounded-full bg-orange-500 left-[-1.2rem] top-1/2 -translate-y-1/2"></span>
          EskyDecode Software Development Company
        </span>

        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Essential IT Solutions For{" "}
          <span className="text-orange-500">Modern Businesses</span>
        </h2>

        <p className="max-w-3xl mx-auto text-gray-600 text-base sm:text-lg mb-12">
          Eskydecode is a passionate software development company based in
          India, dedicated to helping businesses succeed through innovative
          solutions. Our skilled team combines creativity and technical
          expertise to deliver custom software tailored to your needs. We
          prioritize collaboration and transparency, ensuring that every project
          reflects your vision. Join us on a journey to transform your ideas
          into impactful realities!
        </p>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center md:col-span-2 lg:col-span-1">
            <h3 className="text-5xl font-extrabold text-orange-600">2005</h3>
            <p className="text-gray-800 text-xl font-bold">
              We&apos;re epic since
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden md:col-span-2 lg:col-span-2">
            <Image
              src="/Homepage/home_about.jpg"
              alt="Team Working"
              width={1200}
              height={200}
              className="w-full h-[200px] object-cover"
            />
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center">
            <h3 className="text-5xl font-extrabold text-orange-600">210+</h3>
            <p className="text-gray-800 text-xl font-bold">
              Clients around the globe
            </p>
          </div>

          <div className="relative bg-white rounded-xl shadow-md p-6 text-center overflow-hidden flex items-center justify-center">
            <Image
              src="/Homepage/home_about_bg.jpg"
              alt="Background"
              fill
              className="object-cover object-center absolute inset-0 z-0 rounded-xl"
              priority
            />
            <div className="absolute inset-0 bg-blue-700/60 rounded-xl z-10" />
            <p className="relative z-20 text-2xl font-semibold text-gray-100">
              <span className="flex items-center justify-center gap-1 text-orange-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
              </span>
              <br />
              Rated 4.80 out of 5
              <br /> based on over{" "}
              <span className="text-orange-500">1000 reviews</span>
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center text-center">
            <p className="text-gray-700 font-semibold">
              Award-winning solution
            </p>
            <div className="w-20 h-20">
              <Image
                src="/Homepage/svg/award.svg"
                alt="Award"
                height={90}
                width={90}
                className="object-contain"
              />
            </div>
            <p className="mt-3 text-gray-800 font-medium">
              We&apos;ve got a few awards thanks to our amazing clients.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center">
            <h3 className="text-3xl font-extrabold text-orange-600">600+</h3>
            <p className="mt-2 text-gray-800 font-medium">
              Successfully completed projects
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center md:col-span-2 lg:col-span-1">
            <h3 className="text-3xl font-extrabold text-orange-600">500+</h3>
            <p className="mt-2 text-gray-800 font-medium">Business Partners</p>
          </div>
        </div>
      </div>
    </div>
  );
}
