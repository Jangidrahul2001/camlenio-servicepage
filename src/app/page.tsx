import Hero from "./components/Homepage/Hero/page";
import ItSolution from "./components/Homepage/Itsolution/page";
import IndustriesSection from "./components/Homepage/IndustriesSection/page";
import DevServices from "./components/Homepage/DevServices/page";
import MakeUsTop from "./components/Homepage/Makeustop/page";
import MakeUsUnique from "./components/Homepage/Makeusunique/page";
import WeServe from "./components/Homepage/WeServe/page";
import OurProcess from "./components/Homepage/Ourprocess/page";
import Technologies from "./components/Homepage/Technologies/page";
import Testimonials from "./components/Homepage/Testimonials/page";
import FreeQuotation from "./components/Homepage/Freequotation/page";
import BlogSection from "./components/Homepage/Blogsection/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Camlenio - Digital Solutions",
  description: "Crafting stunning animations and user-centered interfaces.",
};

const Home = () => {
  return (
    <div className=" relative">
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
    </div>
  );
};
export default Home;
