"use client";
import ContactUs from "@/app/components/Contactus/page";
import Hero from "@/app/components/Crm/Hero/page";
import WhyCamlenioSection from "@/app/components/Crm/WhyCamlenioSection/page";
import CoreFeatures from "@/app/components/Crm/WhatMakesUsDifferent/page";
import Benefits from "@/app/components/Crm/Benefits/page";
import LogoSlider from "@/app/components/Homepage/Coursel/page";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-indigo-50 via-orange-200 to-indigo-100">
      <Hero />
      <WhyCamlenioSection />
      <CoreFeatures />
      <Benefits />
      <ContactUs />
      <LogoSlider />
    </div>
  );
}
