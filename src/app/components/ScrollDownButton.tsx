"use client";

import React from "react";
import Image from "next/image";

interface ScrollDownButtonProps {
  targetId: string;
  className?: string;
}

const ScrollDownButton: React.FC<ScrollDownButtonProps> = ({
  targetId,
  className,
}) => {
  const handleScroll = () => {
    const section = document.getElementById(targetId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={handleScroll}
      className={`absolute bottom-10 left-1/2 -translate-x-1/2 z-20 cursor-pointer hidden md:block ${className}`}
      aria-label="Scroll down"
    >
      <Image
        src="/Scrolldown.png"
        alt="alternative"
        width={50}
        height={20}
        priority
        className="w-full h-full object-cover invert"
      />
    </button>
  );
};

export default ScrollDownButton;
