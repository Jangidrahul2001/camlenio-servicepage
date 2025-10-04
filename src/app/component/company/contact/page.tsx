import React from "react";
import Hero from "@/app/components/company/contact/Hero/page";
import ContactForm from "@/app/components/company/contact/contactform/page";
const About = () => {
  return (
    <div className="relative bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove">
      <Hero />
      <ContactForm />
    </div>
  );
};

export default About;
