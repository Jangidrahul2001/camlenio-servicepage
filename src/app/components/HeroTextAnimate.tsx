"use client";

import React, { useState, useEffect, useId, useRef, useMemo } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from ".././../../lib/utils";

export interface ContainerTextFlipProps {
  words?: string[];
  interval?: number;
  className?: string;
  textClassName?: string;
  animationDuration?: number;
}

export function HeroTextAnimate({
  words = ["Custom Solutions", "Digital Transformation"],
  interval = 3000,
  className,
  textClassName,
  animationDuration = 700,
}: ContainerTextFlipProps) {
  const id = useId();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const containerRef = useRef<HTMLParagraphElement>(null);

  const longestWord = useMemo(
    () => words.reduce((a, b) => (a.length > b.length ? a : b)),
    [words]
  );

  useEffect(() => {
    if (containerRef.current) {
      const tempSpan = document.createElement("span");
      const style = getComputedStyle(containerRef.current);
      tempSpan.style.fontSize = style.fontSize;
      tempSpan.style.fontWeight = style.fontWeight;
      tempSpan.style.fontFamily = style.fontFamily;
      tempSpan.style.visibility = "hidden";
      tempSpan.style.position = "absolute";
      tempSpan.innerText = longestWord;
      document.body.appendChild(tempSpan);
      setWidth(tempSpan.offsetWidth);
      document.body.removeChild(tempSpan);
    }
  }, [words, longestWord]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [words, interval]);

  return (
    <motion.div
      ref={containerRef}
      animate={{ width: width > 0 ? width : "auto" }}
      transition={{ duration: 0.4 }}
      className={cn(
        "relative inline-block rounded-lg py-1 text-center text-[1.5rem] md:text-[2rem] lg:text-[2.3rem] font-bold text-gray-50 align-top",
        "[background:linear-gradient(to_bottom,#f97316,#f97316)]",
        className
      )}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={words[currentWordIndex]}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: animationDuration / 2000, ease: "easeInOut" }}
          className={cn("inline-block", textClassName)}
        >
          {words[currentWordIndex]}
        </motion.span>
      </AnimatePresence>

      <span
        style={{
          visibility: "hidden",
          position: "absolute",
          pointerEvents: "none",
          top: 0,
          left: 0,
        }}
        aria-hidden="true"
      >
        {longestWord}
      </span>
    </motion.div>
  );
}
