"use client";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ContainerScroll } from "@/app/components/container-scroll-animation";

const texts = [
  "Efficient",
  "Award winning",
  "Affordable",
  "Trustworthy",
  "Scalable",
  "Reliable",
  "Secure",
  "Innovative",
  "Dependable",
  "Powerful",
  "Impactful",
  "Quality",
];
export function HeroScrollDemo() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(
      () => setSubIndex((prev) => prev + (deleting ? -1 : 1)),
      deleting ? 50 : 120
    );

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);
  return (
    <div className="overflow-hidden flex justify-center text-center items-center">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl  font-bold text-gray-900 mb-6 leading-snug lg:leading-tight">
              Build{" "}
              <span className="text-orange-500">
                {texts[index].substring(0, subIndex)}
                <span className="border-r-2 border-orange-500 animate-pulse ml-0.5"></span>
              </span>
              <br /> with Camlenio
            </h1>
            {/* <p className="mt-4 text-lg text-center text-gray-600 max-w-xl">
              Where innovation meets design — delivering digital experiences
              that feel effortless, modern, and unforgettable.
            </p> */}
          </>
        }
      >
        <Image
          src={`/adminpannel.jpg`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
