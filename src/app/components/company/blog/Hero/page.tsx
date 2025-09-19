"use client";
import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { ContainerScroll } from "@/app/components/container-scroll-animation";

// Words for the typing effect
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
] as const;

// Constants for the typing animation
const TYPING_SPEED = 120;
const DELETING_SPEED = 50;
const PAUSE_DURATION = 1000;

/**
 * A custom hook to manage the typing animation logic.
 * @param words - An array of words to cycle through.
 */
const useTypingEffect = (words: readonly string[]) => {
  const texts = useMemo(() => words, [words]);
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    // Guard against empty or invalid data
    if (!texts || texts.length === 0 || !texts[index]) {
      return;
    }

    // If word is fully typed, pause and then start deleting
    if (subIndex === texts[index].length + 1 && !deleting) {
      const timer = setTimeout(() => setDeleting(true), PAUSE_DURATION);
      return () => clearTimeout(timer);
    }

    // If word is fully deleted, move to the next word
    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    // Type or delete next character
    const timeout = setTimeout(
      () => setSubIndex((prev) => prev + (deleting ? -1 : 1)),
      deleting ? DELETING_SPEED : TYPING_SPEED
    );

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, texts]);

  // Return empty string if texts is not ready
  if (!texts || texts.length === 0 || !texts[index]) {
    return "";
  }
  return texts[index].substring(0, subIndex);
};

export default function HeroPage() {
  const typedText = useTypingEffect(texts);
  return (
    <div className="overflow-hidden flex justify-center text-center items-center">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl  font-bold text-gray-900 mb-6 leading-snug lg:leading-tight">
              Build{" "}
              <span className="text-orange-500">
                {typedText}
                <span className="border-r-2 border-orange-500 animate-pulse ml-0.5"></span>
              </span>
              <br /> with Camlenio
            </h1>
          </>
        }
      >
        <Image
          src={`/blogs/blog-img.png`}
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
