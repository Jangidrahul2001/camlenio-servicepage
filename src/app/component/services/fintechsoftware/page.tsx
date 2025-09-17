"use client";
import Hero from "@/app/components/fintechsoftware/Hero/page";
import ResellerMarketSection from "@/app/components/fintechsoftware/FintechSoftware/page";
import LogoSlider from "@/app/components/Homepage/Logoslider/page";

export default function FintechSoftware() {
  return (
    <div className=" relative">
      <Hero />
      <ResellerMarketSection />
      <LogoSlider />
    </div>
  );
}
