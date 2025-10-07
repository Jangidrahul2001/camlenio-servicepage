"use client";
import ContactUs from "@/app/components/Contactus/page";
import LogoSlider from "@/app/components/Homepage/Logoslider/page";
import AboutSection from "@/app/components/Hrms/AboutSection/page";
// import CoreModules from "@/app/components/Hrms/CoreModules/page";
import FAQSection from "@/app/components/Hrms/FAQSection/page";
import FeaturesSection from "@/app/components/Hrms/FeaturesSection/page";
import Hero from "@/app/components/Hrms/Hero/page";

export default function HrmsSoftware() {
  return (
    <div className=" scroll-smooth">
      <Hero />
      <FeaturesSection />
      {/* <CoreModules /> */}
      <AboutSection />
      <FAQSection />
      <ContactUs />
      <LogoSlider />
    </div>
  );
}
