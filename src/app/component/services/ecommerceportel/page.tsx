"use client";
import ContactUs from "@/app/components/Contactus/page";
import Hero from "@/app/components/ecommercedevelopment/Hero/page";
import WhyChooseUs from "@/app/components/ecommercedevelopment/WhyChooseUs/page";
import Services from "@/app/components/ecommercedevelopment/Services/page";
import OurProcess from "@/app/components/ecommercedevelopment/OurProcess/page";
import LogoSlider from "@/app/components/Homepage/Logoslider/page";

export default function EcommerceSoftware() {
  return (
    <div className="bg-gradient-to-r from-indigo-50 via-orange-200 to-indigo-100">
      <Hero />
      <WhyChooseUs />
      <Services />
      <OurProcess />
      <ContactUs />
      <LogoSlider />
    </div>
  );
}
