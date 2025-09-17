"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-indigo-100 via-orange-100 to-indigo-200 bg-[length:200%_200%] animate-gradientMove py-24 px-8 md:px-16">
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        <div className="text-gray-950 max-w-xl">
          <h1 className="text-3xl md:text-6xl font-bold ">Join Our Team</h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700">
            Be a piece of Innovative Team to provide a right guidance to your
            profession in the quickest developing IT Industry
          </p>
        </div>

        <div className="relative flex justify-center">
          <Image
            src="/navcompany/career-banner.png"
            alt="Career Banner"
            width={300}
            height={300}
            className="w-full max-w-sm lg:max-w-md rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}
