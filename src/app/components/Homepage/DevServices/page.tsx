"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";

const features = [
  {
    id: 1,
    title: "Mobile App Development",
    cardtitle: "Software Development Consulting",
    desc: "We’re an ISO certified mobile app development company that is serving customers globally. Our app development services include Android, iOS, and cross-platform app development. Our experienced team of more than 80+ developers has expertise working on technologies such as Swift, Kotlin, Flutter, and React Native to deliver scalable solutions that meet today’s challenges and stand in the future with confidence..",
    icon: (
      <Image
        src="/Homepage/svg/mobile-development.svg"
        alt="Mobile App Development icon"
        width={50}
        height={50}
      />
    ),
    hoverIcon: (
      <Image
        src="/Homepage/svg/mobile-development-w.svg"
        alt="Mobile App Development icon"
        width={50}
        height={50}
      />
    ),
    subImages: [
      { src: "/Homepage/svg/apple.svg", name: "iPhone App Development" },
      { src: "/Homepage/svg/android.svg", name: "Android App Development" },
      { src: "/Homepage/svg/flutter-o.svg", name: "Flutter App Development" },
      {
        src: "/Homepage/svg/react1-o.svg",
        name: "React Native App Development",
      },
    ],
  },
  {
    id: 2,
    title: "Web Development",
    cardtitle: "Web Development Services",
    desc: "Want to build a responsive web application that has optimal user experience across devices ensuring your digital impression is as impressive and accessible as your business is. We strongly emphasize robust security by adhering to the OWASP Application Security Verification Standard (ASVS), and search engine optimization (SEO) to strengthen your posture in the digital competitive landscape. Schedule a consultation session with us to introduce you to the best web development solutions.",
    icon: (
      <Image
        src="/Homepage/svg/web-development.svg"
        alt="Web Development icon"
        width={50}
        height={50}
      />
    ),
    hoverIcon: (
      <Image
        src="/Homepage/svg/web-development-w.svg"
        alt="Web Development icon"
        width={50}
        height={50}
      />
    ),
    subImages: [
      {
        src: "/Homepage/svg/nodejs_development-o.svg",
        name: "Nodejs Development",
      },
      {
        src: "/Homepage/svg/laravel_development-w.svg",
        name: "Laravel Development",
      },
      {
        src: "/Homepage/svg/expressJs_development-o.svg",
        name: "ExpressJs Development",
      },
      {
        src: "/Homepage/svg/wordpress_development.svg",
        name: "Wordpress Development",
      },
    ],
  },
  {
    id: 3,
    title: "Ecommerce Development",
    cardtitle: "Ecommerce Development Services",
    desc: "Our e-commerce development services are designed to provide you with a secure, scalable, and responsive Ecommerce storefront. From Magento, Shopify, and WooCommerce to custom solutions using technologies like Laravel, PHP, Node.js, etc, we have the expertise to answer all your needs. Our team ensures seamless integration with payment gateways, inventory management systems, and CRM integration to have a fully functional storefront.",
    icon: (
      <Image
        src="/Homepage/svg/ecommerce-development.svg"
        alt="Ecommerce Development icon"
        width={50}
        height={50}
      />
    ),
    hoverIcon: (
      <Image
        src="/Homepage/svg/ecommerce-development-w.svg"
        alt="Ecommerce Development icon"
        width={50}
        height={50}
      />
    ),
    subImages: [
      {
        src: "/Homepage/svg/shopify_development-o.svg",
        name: "Shopify Development",
      },
      {
        src: "/Homepage/svg/woocommerce_development-o.svg",
        name: "Woocommerce Development",
      },
      {
        src: "/Homepage/svg/magento_development-o.svg",
        name: "Magento Development",
      },
      {
        src: "/Homepage/svg/wix-o.svg",
        name: "Wix",
      },
    ],
  },
  {
    id: 4,
    title: "UI UX Design",
    cardtitle: "UI UX Design Services",
    desc: "Delivering optically captivating, and user-centric digital experiences is what we have inherent in our core ethics. Our team leverages UI UX design tools like Sketch, Figma, Adobe XD, and InVision to design functional and visually appealing designs that speak about your business. We conduct comprehensive user journey mapping and heuristic evaluations to identify and solve the potential issues to deliver a pixel-perfect design.",
    icon: (
      <Image
        src="/Homepage/svg/ui-design.svg"
        alt="UI UX Design icon"
        width={50}
        height={50}
      />
    ),
    hoverIcon: (
      <Image
        src="/Homepage/svg/ui-design-w.svg"
        alt="UI UX Design icon"
        width={50}
        height={50}
      />
    ),
    subImages: [
      { src: "/Homepage/svg/figma_designer-o.svg", name: "Figma Designer" },
      { src: "/Homepage/svg/uiux_designer-o.svg", name: "UI/UX Designer" },
      { src: "/Homepage/svg/react1-o.svg", name: "ReactJs Designer" },
      {
        src: "/Homepage/svg/nextJs_designer-o.svg",
        name: "NextJs Designer",
      },
    ],
  },
  {
    id: 5,
    title: "Dedicated Resources",
    cardtitle: "Dedicated Resources Services",
    desc: "We have a pool of dedicated resources having expertise across mobile apps, and web development. Our team is available to work with you on a full-time, part-time, and hourly basis, allowing you to select the best engagement model that caters to your needs. With us, you can expect seamless communication, consistent project updates, and a commitment to delivering high-quality results.",
    icon: (
      <Image
        src="/Homepage/svg/custom-development.svg"
        alt="Dedicated Resources icon"
        width={50}
        height={50}
      />
    ),
    hoverIcon: (
      <Image
        src="/Homepage/svg/custom-development-w.svg"
        alt="Dedicated Resources icon"
        width={50}
        height={50}
      />
    ),
    subImages: [
      { src: "/Homepage/svg/mern_development-o.svg", name: "MERN Development" },
      {
        src: "/Homepage/svg/nodejs_development-o.svg",
        name: "Node JS Development",
      },
      { src: "/Homepage/svg/react1-o.svg", name: "React JS Development" },
      {
        src: "/Homepage/svg/laravel_development-w.svg",
        name: "Laravel Development",
      },
    ],
  },
];

const DevServices = () => {
  const [active, setActive] = useState(1);
  const activeFeature = features.find((f) => f.id === active);
  return (
    <div className="relative py-16 overflow-hidden bg-gradient-to-r from-gray-800 via-gray-800 to-gray-900 bg-[length:200%_200%] animate-gradientMove">
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto text-center mb-4">
          <span className="relative inline-block px-4 py-1.5 rounded-full border border-orange-200 bg-gray-50 shadow-sm text-xs md:text-sm font-medium text-black mb-4 z-20">
            <span className="absolute w-7 h-[6px] rounded-full bg-orange-500 left-[-1.2rem] top-1/2 -translate-y-1/2"></span>
            Our Complete Software Development Services
          </span>
          <h2 className="text-2xl md:text-5xl font-bold text-gray-50 z-20">
            Let’s Build Something Extraordinary Together <br />
            <span
              className="text-orange-500"
              style={{ textShadow: "2px 2px 0 #ffff, 4px 4px 0 #FFB26B" }}
            >
              to Drive Your Business Forward
            </span>
          </h2>
          <p className="text-sm md:text-xl text-gray-50 mt-4">
            At Helpful Insight, we believe that extraordinary results stem from
            extraordinary collaboration. We have tailored services that are
            specific to each client, and truly reflect their individualized
            necessities.
          </p>
        </div>
        <div className="relative px-6 py-10 text-gray-800 p-4 ">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-14 border-2 border-black/20  p-6 rounded-2xl   bg-gradient-to-r from-gray-900 via-gray-500/10 to-transparent backdrop-blur-3xl shadow-[0_-2px_28px_rgba(255,255,255,0.1)]">
            <div className="w-full md:w-1/3 flex flex-col gap-4">
              {features.map((feature) => (
                <motion.button
                  key={feature.id}
                  onClick={() => setActive(feature.id)}
                  whileHover={{ scale: 1.02 }}
                  className={`flex items-center group gap-3 text-left p-3 rounded-xl transition-colors duration-300 ${
                    active === feature.id
                      ? "bg-orange-500 text-white"
                      : "bg-gray-200 text-black hover:bg-orange-500 hover:text-white"
                  }`}
                >
                  <div className="relative w-[50px] h-[50px] flex-shrink-0">
                    <span
                      className={`absolute inset-0 transition-opacity duration-300 ${
                        active === feature.id ? "opacity-0" : "opacity-100"
                      } group-hover:opacity-0`}
                    >
                      {feature.icon}
                    </span>
                    <span
                      className={`absolute inset-0 transition-opacity duration-300 ${
                        active === feature.id ? "opacity-100" : "opacity-0"
                      } group-hover:opacity-100`}
                    >
                      {feature.hoverIcon}
                    </span>
                  </div>
                  <span className="font-medium text-sm md:text-base lg:text-lg ">
                    {feature.title}
                  </span>
                </motion.button>
              ))}
            </div>
            <div className="w-full md:w-2/3 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature?.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.6 }}
                  className="p-2 rounded-2xl"
                >
                  <h3 className="text-lg md:text-2xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                    {activeFeature?.cardtitle}
                  </h3>
                  <p className="text-gray-300 text-xs md:text-base mb-4">
                    {activeFeature?.desc}
                  </p>

                  <button className="relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 overflow-hidden font-semibold text-gray-900 bg-gray-100 rounded-full group text-sm sm:text-base lg:text-lg">
                    <span className="absolute inset-0 w-full h-full bg-orange-500 rounded-full transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                    <span className="relative z-10 group-hover:text-white transition-colors duration-500 flex items-center gap-2">
                      Talk to Experts <FaLongArrowAltRight />
                    </span>
                  </button>
                  {activeFeature?.subImages && (
                    <div className="grid grid-cols-4 gap-4 mt-8">
                      {activeFeature.subImages.map((img, idx) => (
                        <div
                          key={idx}
                          className="flex flex-col items-center group"
                        >
                          <div className="w-12 h-12 relative group-hover:scale-80 transition-transform duration-500 overflow-hidden">
                            <Image
                              src={img.src}
                              alt={img.name}
                              fill
                              className="object-contain transition-transform duration-700 group-hover:rotate-y-360"
                            />
                          </div>
                          <span className="mt-2 text-[.50rem] lg:text-sm text-gray-50 text-center">
                            {img.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/Homepage/shapes/global_shap.png"
        alt="Global Shape"
        width={600}
        height={600}
        className="absolute -right-[20%] -top-[30%] opacity-100 animate-spin [animation-duration:50s] text-gray-900 z-10"
        unoptimized
      />
    </div>
  );
};
export default DevServices;
