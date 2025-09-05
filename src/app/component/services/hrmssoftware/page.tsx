"use client";
import ContactUs from "@/app/components/Contactus/page";
import LogoSlider from "@/app/components/Homepage/Coursel/page";
import About from "@/app/components/Hrms/About/page";
import Benefits from "@/app/components/Hrms/Benefits/page";
import FAQSection from "@/app/components/Hrms/FAQSection/page";
import FeaturesSection from "@/app/components/Hrms/FeaturesSection/page";
import Hero from "@/app/components/Hrms/Hero/page";

export default function Home() {
  return (
    <div className=" bg-gradient-to-r from-indigo-50 via-orange-200 to-indigo-100">
      <Hero />
      <About />
      <FeaturesSection />
      <Benefits />
      <FAQSection />
      <ContactUs />
      <LogoSlider />
    </div>
  );
}
