"use client";
import Hero from "@/app/components/Fullstackdev/Hero/page";
import FsDevServices from "@/app/components/Fullstackdev/Fsdevservice/page";
import DiscussProject from "@/app/components/Fullstackdev/Discussproject/page";
import ContactUs from "@/app/components/Contactus/page";
import HireAppDev from "@/app/components/Mobappdev/Hireappdev/page";
import WhyCamlenio from "@/app/components/Fullstackdev/WhyCamlenio/page";
import LogoSlider from "@/app/components/Homepage/Logoslider/page";

export default function FullStackDevelopment() {
  return (
    <div className="bg-gradient-to-r from-indigo-50 via-orange-200 to-indigo-100 bg-[length:200%_200%] animate-gradientMove">
      <Hero />
      <FsDevServices />
      <DiscussProject />
      <WhyCamlenio />
      <HireAppDev />
      <ContactUs />
      <LogoSlider />
    </div>
  );
}
