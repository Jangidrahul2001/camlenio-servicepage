"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Divider from "../../devider";

const cardsData = [
  {
    icon: "/Homepage/mbi/API.svg",
    title: "B2B Fintech Software",
    description:
      "Our B2B Fintech Solution is a one-stop platform meant to provide all the key digital financial services. .",
  },
  {
    icon: "/Homepage/mbi/fintech-1.svg",
    title: "B2C Software",
    description:
      "Our B2C Software is a complete digital platform crafted to simplify financial and travel services for end users who directly interact with the software.",
  },
  {
    icon: "/Homepage/mbi/fintech-2.svg",
    title: "Reseller Fintech Software",
    description:
      "Camlenio Reseller Fintech Software is a robust Scalable and growth-oriented, the Reseller Admin has total authority to generate several White Label Admins, each with its own branding and management system.",
  },
  {
    icon: "/Homepage/mbi/fintech-3.svg",
    title: "API Panel",
    description:
      "Our API Panel is the core platform that drives and controls all fintech solutions, such as B2B Fintech Software, B2C Software, and Reseller Software. ",
  },
];

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const MakeUsTop = () => {
  return (
    <div className="relative bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove overflow-hidden py-22">
      <Divider />
      <div className="max-w-7xl mx-auto text-center px-4">
        {" "}
        <div className="relative inline-block px-4 py-1.5 rounded-full border border-orange-50 bg-orange-100 shadow-sm text-sm font-medium text-orange-600 mb-4">
          <span className="absolute w-7 h-[6px] rounded-full bg-orange-500 left-[-1.2rem] top-1/2 -translate-y-1/2"></span>
          Camlenio Software Development Company
        </div>
        <h5 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Comprehensive Solutions for Banking & all{" "}
          <span
            className="text-orange-500"
            style={{
              textShadow:
                "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
            }}
          >
            Finance categories
          </span>
        </h5>
        <p className="max-w-5xl mx-auto flex-wrap text-gray-600 text-sm text-justify break-words sm:text-base mb-12 font-sans">
          We provide end-to-end solutions for banking and all finance
          categories, catering to the diverse needs of financial institutions,
          fintech companies, and payment service providers. Our offerings
          include customized software, payment gateways integration, digital wallets
          solutions, and more, all designed to ensure seamless financial
          operations.
        </p>
        <div className="  grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          <div className="relative group rounded-2xl  hover:scale-101 transition-transform duration-500 ease-in p-6 text-left overflow-hidden flex flex-col justify-center md:col-span-2 lg:col-span-2 leading-snug">
            <Image
              src="/Homepage/bg_shape.png"
              alt="Background"
              fill
              className=" object-fill absolute inset-0 z-0 rounded-2xl"
              priority
            />

            <div className="w-20 h-20 z-20  py-4 mb-6">
              <Image
                src="/Homepage/secting_icon.png"
                alt="Award"
                height={60}
                width={60}
                className="object-contain absolute top-10 left-10 animate-spin  group-hover:scale-102 transition-transform duration-500 ease-in "
                style={{ animationDuration: "10s" }}
              />
            </div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className=" w-full  z-20 text-xl  md:text-2xl font-semibold text-gray-50 mb-2"
            >
              CWhat Makes Us a Top App Development Company?
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-20 text-base font-medium break-words flex-wrap text-gray-50 font-sans text-justify"
            >
              Our Fintech Software is a comprehensive, secure, and user-friendly
              solution that provides all financial services under one roof. We
              facilitates quicker, secure and seamless transactions for
              businesses. Designed for B2B, B2C and Reseller models, the
              platform accommodates multiple levels (Admin, Master Distributor,
              Distributor, and Retailer).
            </motion.p>
          </div>
          {cardsData.map((card, index) => (
            <FeatureCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="border-2 border-gray-300 shadow-md group rounded-2xl hover:shadow-3xl p-6 flex flex-col text-left leading-tight">
    <div className="w-20 h-20 z-20 group-hover:scale-80 py-4 mb-8 transition-all duration-300">
      <Image
        src={icon}
        alt={title}
        height={60}
        width={60}
        className="object-contain"
      />
    </div>
    <div className="transition-all duration-500 group-hover:-translate-y-8">
      <motion.h3
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-xl font-extrabold text-gray-900 mb-1"
      >
        {title}
      </motion.h3>
      <motion.p
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-gray-500 text-base font-normal font-sans text-justify"
      >
        {description}
      </motion.p>
    </div>
  </div>
);

export default MakeUsTop;
