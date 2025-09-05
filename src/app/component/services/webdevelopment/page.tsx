"use client";
import ContactUs from "@/app/components/Contactus/page";
import LogoSlider from "@/app/components/Homepage/Coursel/page";
import Hero from "@/app/components/webdev/Hero/page";
import Migration from "@/app/components/webdev/Migrations/page";
import WebDevExperts from "@/app/components/webdev/WebDevExperts/page";
import WebDevSolution from "@/app/components/webdev/Webdevsolution/page";

export default function Home() {
  return (
    <div className=" bg-gradient-to-r from-indigo-50 via-orange-200 to-indigo-100">
      <Hero />
      <WebDevExperts />
      <WebDevSolution />
      <Migration />
      <ContactUs />
      <LogoSlider />
    </div>
  );
}
