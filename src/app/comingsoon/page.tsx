"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const CountdownCard = ({ value, label }: { value: number; label: string }) => (
  <div className="bg-gray-800/60 px-6 py-4 rounded-lg shadow-lg">
    <div className="text-2xl md:text-4xl font-bold">{value}</div>
    <div className="text-xs md:text-sm">{label}</div>
  </div>
);

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    const countdownDate = new Date("2025-12-31T23:59:59").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance < 0) {
        setTimeLeft(null);
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-white bg-gradient-to-r from-indigo-100 via-orange-100 to-indigo-50 bg-[length:200%_200%] animate-gradientMove overflow-hidden">
      <div className="relative z-20 flex flex-col items-center justify-center text-center p-8">
        <h1 className=" text-4xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Coming Soon
        </h1>
        <p className="text-lg text-gray-400 mb-8">
          We are working hard to bring you something amazing. Stay tuned!
        </p>
        <div className="text-2xl lg:text-4xl font-bold ">
          {timeLeft ? (
            <div className="flex gap-2 md:gap-6 text-center">
              <CountdownCard value={timeLeft.days} label="Days" />
              <CountdownCard value={timeLeft.hours} label="Hours" />
              <CountdownCard value={timeLeft.minutes} label="Minutes" />
              <CountdownCard value={timeLeft.seconds} label="Seconds" />
            </div>
          ) : (
            <div>EXPIRED</div>
          )}
        </div>
        <div>
          <Link href="/">
            <h1 className="text-xl font-bold mt-4 underline text-blue-500 hover:text-blue-600">
              Back To Home
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
