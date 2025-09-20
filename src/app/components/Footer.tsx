"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, X } from "lucide-react";
import Image from "next/image";
import { GiRotaryPhone } from "react-icons/gi";
import { ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
const footerData = [
  {
    title: "Mobile App Development",
    links: [
      "Android App Development",
      "iOS App Development",
      "Hybrid App Development",
      "Game App Development",
      "Flutter App Development",
    ],
  },
  {
    title: "Industries",
    links: [
      "Healthcare",
      "Real Estate",
      "Travel and Tourism",
      "Food Delivery",
      "Ecommerce",
    ],
  },
  {
    title: "Expertise",
    links: [
      "PHP Web Development",
      "Asp.Net Development",
      "Python Web Development",
      "ReactJS Development",
      "NodeJS Development",
    ],
  },
  {
    title: "Fintech Services",
    links: [
      "Aeps",
      "Bill Payment & Recharge",
      "Money Transfer",
      "Pan Card",
      "Travel Booking",
    ],
  },
];

export default function Footer() {
  return (
    // ScrollTrigger.refresh();
    <div className="bg-gray-800 text-white px-6 pt-12 pb-2">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="h-[24rem] md:h-35 w-full bg-gradient-to-r from-indigo-100 via-orange-100 to-indigo-100 bg-[length:200%_200%] animate-gradientMove flex items-center justify-start md:justify-center rounded-[2rem] mb-8 p-4">
          <div className="flex flex-col md:flex-row md:justify-around w-full gap-6">
            {/* Call */}
            <div className="flex flex-col md:flex-row items-center justify-start  md:gap-6 gap-3">
              <span className="text-gray-800 text-2xl md:text-3xl">
                <GiRotaryPhone />
              </span>
              <div className="text-gray-950  md:border-l pl-2 md:pl-2 border-gray-800">
                <h3 className="font-medium">Call for more info :-</h3>
                <p>+91-9773323814</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col md:flex-row items-center md:gap-6 gap-3">
              <span className="text-gray-800 text-2xl md:text-3xl">
                <MdEmail />
              </span>
              <div className="text-gray-950  md:border-l pl-2 md:pl-2 border-gray-800">
                <h3 className="font-medium">Mail to our sales Department</h3>
                <p>camleniosoftware@gmail.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex flex-col md:flex-row items-center md:gap-6 gap-3">
              <span className="text-gray-800 text-2xl md:text-3xl">
                <ImLocation2 />
              </span>
              <div className="text-gray-950 text-center  md:border-l pl-2 md:pl-2 border-gray-800">
                <p className="text-sm">
                  2nd Floor, Gopi Tower, Ajmer Rd,
                  <br /> Near Kamla Devi Govt. School,
                  <br /> Satya Colony, Tagore Nagar,
                  <br /> Jaipur, Rajasthan 302021
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold">
            Build smarter.
            <br />
            Scale faster with Camlenio.
          </h2>
          <button className="mt-6 bg-white text-black font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition">
            Book a free strategy session →
          </button>
        </div>

        <div className="border-t border-gray-500 my-6" />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-base">
          <div className="col-span-2 md:col-span-1 w-full  flex  flex-col items-center mb-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo-w.png"
                alt="Camlenio"
                width={200}
                height={80}
                className="w-30 md:w-40 h-auto object-contain"
              />
            </Link>
            <div className="flex mt-4 space-x-4">
              <Link href="#">
                <X size={20} />
              </Link>
              <Link href="#">
                <Linkedin size={20} />
              </Link>
              <Link href="#">
                <Facebook size={20} />
              </Link>
              <Link href="#">
                <Instagram size={20} />
              </Link>
            </div>
          </div>
          {footerData.map((section, i) => (
            <div key={i}>
              <h6 className="text-base md:text-lg font-semibold mb-3 ">
                {section.title}
              </h6>
              <ul className="space-y-1 ">
                {section.links.map((link, j) => (
                  <li key={j} className="relative text-xs md:text-sm">
                    <Link
                      href="#"
                      className="hover:text-orange-500 transition-all  hover:translate-x-2 duration-500"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-500 my-4" />

        <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-300 mb-4 space-y-1 ">
          <div>
            {" "}
            <h3>Copyright ©2025 - All Right Reserved</h3>
          </div>

          <div className="flex space-x-2 md:mt-0">
            <Link
              className="hover:text-orange-500 transition-color duration-500"
              href="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="hover:text-orange-500 transition-color duration-500"
              href="#"
            >
              Terms of Use
            </Link>
            <Link
              className="hover:text-orange-500 transition-color duration-500"
              href="#"
            >
              Cookie policy
            </Link>{" "}
            <Link
              className="hover:text-orange-500 transition-color duration-500"
              href="#"
            >
              Cookie Settings
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

//
