"use client";
import React, { useEffect, useRef, useState } from "react";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import { cn } from "../../../../../lib/utils";
import { motion } from "motion/react";

// ================== Carousel Component ==================
interface CarouselProps {
  items: React.ReactElement[];
  initialScroll?: number;
}

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full">
      <div
        className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] md:py-20 max-w-[90rem]  mx-auto"
        ref={carouselRef} 
        onScroll={checkScrollability}
      >
        <div
          className={cn(
            "flex flex-row justify-start gap-4 pl-4",
            "mx-auto max-w-[80rem]"
          )}
        >
          {items.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.2 * index,
                  ease: "easeOut",
                },
              }}
              key={"card" + index}
              className="rounded-3xl last:pr-[5%] md:last:pr-[33%]"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mr-10 flex justify-end gap-2">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.05 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              delay: 0.2,
              ease: "easeOut",
            },
          }}
          className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 disabled:opacity-50 hover:scale-1.02"
          onClick={scrollLeft}
          disabled={!canScrollLeft}
        >
          <IconArrowNarrowLeft className="h-6 w-6 text-gray-100" />
        </motion.button>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.05 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              delay: 0.2,
              ease: "easeOut",
            },
          }}
          className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 disabled:opacity-50"
          onClick={scrollRight}
          disabled={!canScrollRight}
        >
          <IconArrowNarrowRight className="h-6 w-6 text-gray-100" />
        </motion.button>
      </div>
    </div>
  );
};

// ================== Card Component ==================
type CardType = {
  title: string;
  content: React.ReactNode;
};

export const Card = ({ card }: { card: CardType }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileHover={{ scale: 1.01, y: -10 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: 0.2,
          ease: "easeOut",
        },
      }}
      className="relative z-10 flex h-80 w-56 flex-col items-start justify-start 
                 overflow-hidden rounded-3xl bg-transparent border-2 border-indigo-50 shadow-lg p-6 
                 md:h-[25rem] md:w-96"
    >
      <p className="text-left text-xl font-semibold md:text-4xl text-gray-900">
        {card.title}
      </p>
      <div className="mt-4 text-sm md:text-lg text-gray-700">
        {card.content}
      </div>
    </motion.div>
  );
};
