"use client";

import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".zoom-section",
        scrub: 1,
        pin: true,
        start: "top top",
        end: "+=1500",
      },
    });

    tl.to(".zoom-text", { scale: 50, ease: "power2.inOut" });
  }, []);

  return (
    <div>
      <section className="zoom-section relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-gray-100 via-orange-100 to-gray-200 bg-[length:200%_200%] animate-gradientMove py-22 px-8 md:px-16 flex items-center justify-center">
          <div className="max-w-7xl mx-auto flex flex-row justify-center items-center gap-10">
            <div className="relative">
              <Image
                src="/navcompany/career-banner.png"
                alt="Career Banner"
                width={300}
                height={300}
                className="w-full max-w-sm"
              />
            </div>
            <div className="max-w-xl">
              <h1 className="text-3xl md:text-6xl font-bold text-gray-900">
                Join Our Team
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-700">
                Be a piece of Innovative Team to provide a right guidance to
                your profession in the quickest developing IT Industry
              </p>
            </div>
          </div>
        </div>

        <div className="zoom-container h-full w-full flex items-center justify-center bg-gray-800 text-transparent relative z-10 bg-blend-screen">
          <h1 className="zoom-text text-6xl md:text-9xl font-bold tracking-wider">
            Camlenio
          </h1>
        </div>
      </section>

      <section className="h-screen flex items-center justify-center bg-blue-500 text-white text-4xl font-bold">
        Next Component Section
      </section>
    </div>
  );
}
