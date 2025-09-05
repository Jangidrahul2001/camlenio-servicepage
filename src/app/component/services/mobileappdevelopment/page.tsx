"use client";
import Hero from "@/app/components/Mobappdev/Hero/page";
import ContactUs from "@/app/components/Contactus/page";
import AppDevServices from "@/app/components/Mobappdev/Appdevservices/page";
import HireAppDev from "@/app/components/Mobappdev/Hireappdev/page";
import MobAppIntegration from "@/app/components/Mobappdev/Mobappintegration/page";
import LogoSlider from "@/app/components/Homepage/Coursel/page";

export default function Home() {
  return (
    <div className=" bg-gradient-to-r from-indigo-50 via-orange-200 to-indigo-100">
      <Hero />
      <MobAppIntegration />
      <HireAppDev />
      <AppDevServices />
      <ContactUs />
      <LogoSlider />/
    </div>
  );
}
