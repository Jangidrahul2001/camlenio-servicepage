"use client";
import ContactUs from "@/app/components/Contactus/page";
import Hero from "@/app/components/customsoftware/Hero/page";
import HowWeWork from "@/app/components/customsoftware/Howwework/page";
import OurServicesSection from "@/app/components/customsoftware/OurServicesSection/page";
import WhyCustomSoftware from "@/app/components/customsoftware/Whycustomsoftware/page";
import LogoSlider from "@/app/components/Homepage/Logoslider/page";

export default function CustomedSoftware() {
  return (
    <div className="relative">
      <Hero />
      <WhyCustomSoftware />
      <OurServicesSection />
      <HowWeWork />
      <ContactUs />
      <LogoSlider />
    </div>
  );
}
