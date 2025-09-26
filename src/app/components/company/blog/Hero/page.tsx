"use client";
import Image from "next/image";

export default function HeroPage() {
  return (
    <div className="relative pt-20 bg-gradient-to-r from-indigo-100 via-orange-100 to-indigo-50 bg-[length:200%_200%] animate-gradientMove overflow-hidden ">
      <div className="py-4 px-8 md:px-16">
        <Image
          src="/blog/blogs-bg-2.jpg"
          alt="blogs"
          width={1000}
          height={900}
          className="w-full h-80 object-cover object-center rounded-[1.5rem]"
        />
      </div>
    </div>
  );
}
