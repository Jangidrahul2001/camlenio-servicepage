"use client";
import React from "react";
import { StickyScrollGSAP as StickyScroll } from "@/app/components/sticky-scroll-reveal";
// import Image from "next/image";

const content = [
  {
    title: "CRM Setup",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    imageSrc: "/ServiceDropdown/crmsoftware/panel1.webp",
  },
  {
    title: "Sales Automation",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    imageSrc: "/ServiceDropdown/uiuxdesign/ui1.png",
  },
  {
    title: "Sales Automation",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    imageSrc: "/ServiceDropdown/uiuxdesign/ui2.png",
  },
  {
    title: "Sales Automation",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    imageSrc: "/ServiceDropdown/uiuxdesign/ui3.png",
  },
];

export default function Features() {
  return (
    <div className="w-full py-4 bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove">
      <StickyScroll content={content} />
    </div>
  );
}
