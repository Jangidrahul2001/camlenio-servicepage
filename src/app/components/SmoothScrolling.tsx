"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function SmoothScrolling() {
  useEffect(() => {
    let scrollTween: gsap.core.Tween | null = null;
    let targetScroll = window.scrollY;

    // Touch devices pe native scroll rehne do
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      // Scroll ko thoda soft banane ke liye multiplier kam rakho (0.4–0.6 best hota hai)
      targetScroll += e.deltaY * 0.5;

      // Clamp karo taki scroll boundaries me hi rahe
      targetScroll = Math.max(
        0,
        Math.min(targetScroll, document.body.scrollHeight - window.innerHeight)
      );

      if (scrollTween) scrollTween.kill();

      scrollTween = gsap.to(window, {
        scrollTo: targetScroll,
        duration: 0.8,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      if (scrollTween) scrollTween.kill();
    };
  }, []);

  return null;
}
