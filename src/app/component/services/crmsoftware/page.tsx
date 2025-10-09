"use client";
import ContactUs from "@/app/components/Contactus/page";
import Hero from "@/app/components/Crm/Hero/page";
import Services from "@/app/components/Crm/Services/page";
// import Benefits from "@/app/components/Crm/Benefits/page";
import LogoSlider from "@/app/components/Homepage/Logoslider/page";
import { Features } from "@/app/components/Crm/Features/page";

export default function CrmSoftware() {
  return (
    <div className="relative">
      <Hero />
      <Features />
      <Services />
      {/* <Benefits /> */}
      <ContactUs />
      <LogoSlider />
    </div>
  );
}
