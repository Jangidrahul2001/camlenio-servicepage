"use client";
import { motion } from "framer-motion";
import Hero from "./components/Homepage/Hero/page";
import ItSolution from "./components/Homepage/Itsolution/page";
import IndustriesSection from "./components/Homepage/IndustriesSection/IndustriesSection";
import DevServices from "./components/Homepage/DevServices/page";
import MakeUsTop from "./components/Homepage/Makeustop/page";
import MakeUsUnique from "./components/Homepage/Makeusunique/page";
import WeServe from "./components/Homepage/WeServe/page";
import OurProcess from "./components/Homepage/Ourprocess/page";
import Technologies from "./components/Homepage/Technologies/page";
import Testimonials from "./components/Homepage/Testimonials/page";
import FreeQuotation from "./components/Homepage/Freequotation/page";
import BlogSection from "./components/Homepage/Blogsection/page";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.9,
        ease: [0.25, 0.8, 0.25, 1],
      }}
      className=" relative bg-gradient-to-r from-indigo-50 via-orange-100 to-indigo-100 bg-[length:200%_200%] animate-gradientMove"
    >
      <Hero />
      <ItSolution />
      <IndustriesSection />
      <DevServices />
      <MakeUsTop />
      <MakeUsUnique />
      <WeServe />
      <OurProcess />
      <Technologies />
      <Testimonials />
      <FreeQuotation />
      <BlogSection />
    </motion.div>
  );
}
