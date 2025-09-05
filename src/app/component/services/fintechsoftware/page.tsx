"use client";
import Hero from "@/app/components/fintechsoftware/Hero/page";
import ResellerMarketSection from "@/app/components/fintechsoftware/FintechSoftware/page";
import LogoSlider from "@/app/components/Homepage/Coursel/page";

export default function Home() {
  return (
    <div className=" bg-gradient-to-r from-indigo-50 via-orange-200 to-indigo-100">
      <Hero />
      <ResellerMarketSection />
      <LogoSlider />
    </div>
  );
}
