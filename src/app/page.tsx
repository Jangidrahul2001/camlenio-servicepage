import Hero from "./components/Homepage/Hero/page";
import ItSolution from "./components/Homepage/Itsolution/page";
import IndustriesSection from "./components/Homepage/IndustriesSection/page";
import DevServices from "./components/Homepage/DevServices/page";
import MakeUsTop from "./components/Homepage/Makeustop/page";
import MakeUsUnique from "./components/Homepage/Makeusunique/page";
import SolutionsThatScale from "./components/Homepage/SolutionsThatScale/page";
import OurProcess from "./components/Homepage/Ourprocess/page";
import Technologies from "./components/Homepage/Technologies/page";
import Testimonials from "./components/Homepage/Testimonials/page";
import FreeDemo from "./components/Homepage/Makeustop/FreeDemo/page";
import BlogSection from "./components/Homepage/Blogsection/page";
import LogoSlider from "./components/Homepage/Logoslider/page";

const Home = () => {
  return (
    <div className=" relative bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove">
      <Hero />
      <ItSolution />
      <IndustriesSection />
      <DevServices />
      <MakeUsTop />
      <MakeUsUnique />
      <SolutionsThatScale />
      <OurProcess />
      <Technologies />
      <Testimonials />
      <FreeDemo />
      <BlogSection />
      <LogoSlider />
    </div>
  );
};
export default Home;
