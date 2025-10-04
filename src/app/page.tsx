import dynamic from "next/dynamic";
import Hero from "./components/Homepage/Hero/page";

const ItSolution = dynamic(
  () => import("./components/Homepage/Itsolution/page")
);
const IndustriesSection = dynamic(
  () => import("./components/Homepage/IndustriesSection/page")
);
const DevServices = dynamic(
  () => import("./components/Homepage/DevServices/page")
);
const MakeUsTop = dynamic(() => import("./components/Homepage/Makeustop/page"));
const MakeUsUnique = dynamic(
  () => import("./components/Homepage/Makeusunique/page")
);
const SolutionsThatScale = dynamic(
  () => import("./components/Homepage/SolutionsThatScale/page")
);
const OurProcess = dynamic(
  () => import("./components/Homepage/Ourprocess/page")
);
const Technologies = dynamic(
  () => import("./components/Homepage/Technologies/page")
);
const Testimonials = dynamic(
  () => import("./components/Homepage/Testimonials/page")
);
const FreeDemo = dynamic(() => import("./components/Homepage/FreeDemo/page"));
const BlogSection = dynamic(
  () => import("./components/Homepage/Blogsection/page")  
);
const LogoSlider = dynamic(
  () => import("./components/Homepage/Logoslider/page")
);

const Home = () => {
  return (
    <div className=" relative bg-gray-800">
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
