"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, X } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-gray-800 text-white px-6 py-12 ">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">
            Build smarter.
            <br />
            Scale faster with Camlenio.
          </h2>
          <button className="mt-6 bg-white text-black font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition">
            Book a free strategy session →
          </button>
        </div>

        <div className="border-t border-gray-500 my-8" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-base">
          <div>
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

          <div>
            <h4 className="text-white text-xl font-semibold mb-2">
              How It Works
            </h4>
            <ul className="space-y-1 text-gray-300">
              <li>
                <Link href="#">Our Process</Link>
              </li>
              <li>
                <Link href="#">Mobile App Development</Link>
              </li>
              <li>
                <Link href="#">Web App Development</Link>
              </li>
              <li>
                <Link href="#">UI/UX Design</Link>
              </li>
              <li>
                <Link href="#">Cloud & DevOps</Link>
              </li>
              <li>
                <Link href="#">Maintenance & Support</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xl font-semibold mb-2">Solutions</h4>
            <ul className="space-y-1 text-gray-300">
              <li>
                <Link href="#">Startups</Link>
              </li>
              <li>
                <Link href="#">Enterprises</Link>
              </li>
              <li>
                <Link href="#">Fintech</Link>
              </li>
              <li>
                <Link href="#">eCommerce</Link>
              </li>
              <li>
                <Link href="#">Healthcare</Link>
              </li>
              <li>
                <Link href="#">Custom SaaS</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xl font-semibold mb-2">Resources</h4>
            <ul className="space-y-1 text-gray-300">
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Careers</Link>
              </li>
              <li>
                <Link href="#">Case Studies</Link>
              </li>
              <li>
                <Link href="#">Client Testimonials</Link>
              </li>
              <li>
                <Link href="#">Support</Link>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Terms of Service</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-500 my-8" />

        <div className="flex flex-col-reverse md:flex-row justify-between items-center text-xs md:text-sm text-gray-300 ">
          <span>© Copyright 2024. All Rights Reserved.</span>
          <div className="flex space-x-4 my-4 md:mt-0">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Whistleblower Policy</Link>
            <Link href="#">Cookie policy</Link>
            <Link href="#">Cookie Settings</Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
