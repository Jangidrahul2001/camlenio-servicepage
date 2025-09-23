"use client";
import { SparklesCore } from "@/app/components/BlogSparkles";

export default function HeroPage() {
  return (
    <div className="relative py-20 bg-gradient-to-r from-indigo-100 via-orange-100 to-indigo-50 bg-[length:200%_200%] animate-gradientMove overflow-hidden ">
      <div className="max-w-7xl mx-auto  text-center py-20 px-8 md:px-16">
        <h1
          className="md:text-7xl text-3xl lg:text-9xl font-bold text-center bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-gradientMove relative z-20"
          style={{
            textShadow:
              "-1px -1px 0px , 3px 3px 0px , 4px 6px 0px #ff582336",
          }}
        >
          Camlenio
        </h1>
        <div className="w-[40rem] h-40 mx-auto relative">
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px w-1/4" />
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full flex justify-center items-center"
            particleColor="#ff6900"
          />
          <div className="absolute inset-0 w-full h-full bg-transparent"></div>
        </div>
      </div>
    </div>
  );
}
