"use client";
import ContactUs from "@/app/components/Contactus/page";
import Hero from "@/app/components/Crm/Hero/page";
import WhyCamlenioSection from "@/app/components/Crm/WhyCamlenioSection/page";
import CoreFeatures from "@/app/components/Crm/WhatMakesUsDifferent/page";
import Benefits from "@/app/components/Crm/Benefits/page";
import LogoSlider from "@/app/components/Homepage/Logoslider/page";

export default function CrmSoftware() {
  return (
    <div className="relative">
      <Hero />
      <WhyCamlenioSection />
      <CoreFeatures />
      <Benefits />
      <ContactUs />
      <LogoSlider />
    </div>
  );
}
