"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from ".././../../lib/utils";

export interface HeroTextAnimateProps {
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
}: HeroTextAnimateProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const longestWord = useMemo(
    () => words.reduce((a, b) => (a.length > b.length ? a : b)),
    [words]
  );

  // auto-change words
  useEffect(() => {
    const id = setInterval(
      () => setCurrentWordIndex((i) => (i + 1) % words.length),
      interval
    );
    return () => clearInterval(id);
  }, [words, interval]);

  // calculate width only once for longest word
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const span = document.createElement("span");
      const style = getComputedStyle(container);
      Object.assign(span.style, {
        fontSize: style.fontSize,
        fontWeight: style.fontWeight,
        fontFamily: style.fontFamily,
        position: "absolute",
        visibility: "hidden",
      });

      const paddingX =
        parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);

      span.innerText = longestWord;
      document.body.appendChild(span);
      setWidth(span.offsetWidth + paddingX);
      document.body.removeChild(span);
    }
  }, [longestWord, className, textClassName]);

  return (
    <motion.div
      ref={containerRef}
      animate={{ width: width || "auto" }}
      transition={{ duration: 0.4 }}
      className={cn(
        "relative inline-block rounded-lg px-4 py-1 text-center font-bold text-gray-50 text-[1.5rem] md:text-[2rem] lg:text-[2.3rem]",
        "[background:linear-gradient(to_bottom,#f97316,#f97316)]",
        className
      )}
    >
      <motion.div
        key={words[currentWordIndex]}
        className={cn("inline-block", textClassName)}
      >
        {words[currentWordIndex].split("").map((letter, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{
              delay: i * 0.03,
              duration: animationDuration / 2000,
              ease: "easeOut",
            }}
            className="inline-block"
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}
