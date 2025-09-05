"use client";
import ContactUs from "@/app/components/Contactus/page";
import Hero from "@/app/components/customsoftware/Hero/page";
import HowWeWork from "@/app/components/customsoftware/Howwework/page";
import OurServicesSection from "@/app/components/customsoftware/OurServicesSection/page";
import WhyCustomSoftware from "@/app/components/customsoftware/Whycustomsoftware/page";
import LogoSlider from "@/app/components/Homepage/Coursel/page";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-indigo-50 via-orange-200 to-indigo-100">
      <Hero />
      <WhyCustomSoftware />
      <OurServicesSection />
      <HowWeWork />
      <ContactUs />
      <LogoSlider />
    </div>
  );
}
