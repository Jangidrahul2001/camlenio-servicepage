"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative min-h-screen py-20 flex items-start justify-start overflow-hidden px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100">
      {/* <Image
        src="/ServiceDropdown/crmsoftware/panel1.webp"
        alt="Background decorative"
        width={800}
        height={800}
        className="absolute bottom-0 right-10 p-4 border border-orange-300 rounded-3xl pointer-events-none"
        style={{
          width: "450px",
          height: "auto",
        }}
      />

      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      /> */}

      <div className="pt-10 pr-10 pl-10 flex items-center justify-center relative z-10 w-full">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Simplify Customer Management
              <br />
              <span className="gradient-text">with Powerful CRM Solutions</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12"
          >
            Transform your business with our comprehensive CRM platform.
            Streamline sales, automate workflows, and grow your customer
            relationships effortlessly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="bg-orange-500 text-white hover:bg-orange-600 text-base sm:text-lg py-3 px-8 flex items-center rounded-lg transition">
              Get Demo
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              id="nextSectionBtn"
              onClick={() => {
                const section = document.getElementById("nextSection");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="border border-gray-300 hover:bg-gray-200 text-base sm:text-lg py-3 px-8 flex items-center rounded-2xl transition"
            >
              <Play className="mr-2 h-5 w-5" />
              Explore Services
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>Cancel anytime</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
