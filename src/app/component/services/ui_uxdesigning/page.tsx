"use client";
import ContactUs from "@/app/components/Contactus/page";
import LogoSlider from "@/app/components/Homepage/Coursel/page";
import Hero from "@/app/components/Uiuxdev/Hero/page";
import UIDesign from "@/app/components/Uiuxdev/Uidesign/page";
import UiUxImportance from "@/app/components/Uiuxdev/Uiuximportance/page";
import UxDesign from "@/app/components/Uiuxdev/Uxdesign/page";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-indigo-50 via-orange-200 to-indigo-100">
      <Hero />
      <UIDesign />
      <UxDesign />
      <UiUxImportance />
      <ContactUs />
      <LogoSlider />
    </div>
  );
}
