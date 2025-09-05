"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import clsx from "clsx";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa6";
import Image from "next/image";

const services: Record<string, string[]> = {
  software: [
    "UI_UX Designing",
    "Full Stack Development",
    "Web Development",
    "Mobile App Development",
    "Fintech Software",
    "HRMS Software",
    "CRM Software",
    "Customized Software",
    "E-Commerce Development",
  ],
  technology: [
    "AI Solutions",
    "UI_UX Designing",
    "Full Stack Development",
    "Web Development",
    "Mobile App Development",
    "Fintech Software",
    "HRMS Software",
    "CRM Software",
    "Customized Software",
    "E-Commerce Development",
  ],
  design: [
    "UI_UX Designing",
    "Wireframing",
    "Prototyping",
    "Branding",
    "Graphic Design",
    "Logo Design",
    "UI_UX Designing",
    "Full Stack Development",
    "Web Development",
    "Mobile App Development",
    "Fintech Software",
    "HRMS Software",
    "CRM Software",
    "Customized Software",
    "E-Commerce Development",
  ],
  mobile: [
    "Android App Development",
    "iOS App Development",
    "Cross Platform Apps",
    "Flutter Apps",
    "React Native Apps",
    "App Maintenance",
    "UI_UX Designing",
    "Full Stack Development",
    "Web Development",
    "Mobile App Development",
    "Fintech Software",
    "HRMS Software",
    "CRM Software",
    "Customized Software",
    "E-Commerce Development",
  ],
};

const company = [
  "About Us",
  "Our Mission",
  "Leadership",
  "Careers",
  "News & Media",
  "Contact Us",
];

const hireteam = [
  "Hire Android Developers",
  "Hire iOS Developers",
  "Hire Flutter Developers",
  "Hire Full Stack Developers",
  "Hire UI/UX Designers",
  "Hire Dedicated Teams",
];

const industries = [
  "Healthcare",
  "Finance",
  "Retail",
  "Education",
  "Logistics",
  "Real Estate",
];
const navItems = [
  { title: "SERVICES", href: "services", dropdown: true, items: services },
  { title: "COMPANY", href: "company", dropdown: true, items: company },
  { title: "HIRE A TEAM", href: "hireateam", dropdown: true, items: hireteam },
  {
    title: "INDUSTRIES",
    href: "industries",
    dropdown: true,
    items: industries,
  },
  { title: "PORTFOLIO", href: "/portfolio", dropdown: false },
];

export default function Header() {
  const [activeTab, setActiveTab] = useState("software");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const navItemRef = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const pathname = usePathname();
  const isPortfolioPage = pathname.startsWith("/portfolio");

  useEffect(() => {
    const handleMouseLeave = () => {
      timeoutRef.current = setTimeout(() => {
        setOpenDropdown(null);
      }, 100);
    };
    const handleMouseEnter = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    const nav = navItemRef.current;
    const dropdown = dropdownRef.current;
    if (nav && dropdown) {
      nav.addEventListener("mouseenter", handleMouseEnter);
      nav.addEventListener("mouseleave", handleMouseLeave);
      dropdown.addEventListener("mouseenter", handleMouseEnter);
      dropdown.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (nav && dropdown) {
        nav.removeEventListener("mouseenter", handleMouseEnter);
        nav.removeEventListener("mouseleave", handleMouseLeave);
        dropdown.removeEventListener("mouseenter", handleMouseEnter);
        dropdown.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [openDropdown]);

  return (
    <>
      <div
        className={` ${
          isPortfolioPage
            ? "relative bg-black text-white"
            : "fixed top-0 left-0 bg-gray-50"
        }   z-1000 w-full  shadow-[0_8px_6px_-1px_rgba(0,0,0,0.1),inset_0_6px_6px_0px_rgba(0,0.9,0,0)]   `}
      >
        <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8 flex justify-between md:justify-around items-center h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Camlenio Logo"
              width={210}
              height={80}
              className="object-contain"
            />
          </Link>
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6 text-gray-800" />
              ) : (
                <Bars3Icon className="w-6 h-6 text-gray-800" />
              )}
            </button>
          </div>
          <nav className="hidden md:flex space-x-6 text-xs md:text-sm lg:text-base items-center relative px-4 flex-nowrap">
            {navItems.map((item, idx) => {
              return item.dropdown ? (
                <div
                  key={idx}
                  className="relative"
                  ref={item.title === openDropdown ? navItemRef : null}
                  onMouseEnter={() => setOpenDropdown(item.title)}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className={clsx(
                      " hover:text-orange-500 font-medium inline-flex items-center ",
                      openDropdown === item.title && "text-orange-500",
                      isPortfolioPage ? "text-gray-50" : "text-gray-900"
                    )}
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === item.title ? null : item.title
                      )
                    }
                  >
                    <span>{item.title}</span>
                    <ChevronDownIcon
                      className={clsx(
                        "ml-1 w-4 h-4 transition-transform duration-200",
                        openDropdown === item.title && "rotate-180"
                      )}
                    />
                  </motion.button>
                  {openDropdown === item.title && (
                    <div
                      ref={dropdownRef}
                      className="fixed left-1/2 top-[5rem] -translate-x-1/2 w-[60vw]"
                    >
                      <div
                        className={`${
                          isPortfolioPage
                            ? "bg-gray-900 text-white"
                            : "bg-gray-50"
                        } rounded-xl shadow-xl ring-1 ring-black/5 px-10 py-6`}
                      >
                        <div className="flex">
                          <div className="w-1/4 border-r-2 border-gray-200 pt-6 pl-6 pb-6  space-y-1">
                            <button
                              onClick={() => setActiveTab("software")}
                              className={`block w-full text-left text-lg font-medium px-4 py-2 rounded-l-full transition-all duration-200 ${
                                activeTab === "software"
                                  ? "bg-orange-100 text-orange-500"
                                  : "text-gray-700 hover:bg-orange-100 hover:text-orange-500"
                              }`}
                            >
                              Software Solution
                            </button>

                            <button
                              onClick={() => setActiveTab("technology")}
                              className={`block w-full text-left text-lg font-medium px-4 py-2 rounded-l-full transition-all duration-200 ${
                                activeTab === "technology"
                                  ? "bg-orange-100 text-orange-500"
                                  : "text-gray-700 hover:bg-orange-100 hover:text-orange-500"
                              }`}
                            >
                              Technology
                            </button>

                            <button
                              onClick={() => setActiveTab("design")}
                              className={`block w-full text-left text-lg font-medium px-4 py-2 rounded-l-full transition-all duration-200 ${
                                activeTab === "design"
                                  ? "bg-orange-100 text-orange-500"
                                  : "text-gray-700 hover:bg-orange-100 hover:text-orange-500"
                              }`}
                            >
                              Design & Development
                            </button>

                            <button
                              onClick={() => setActiveTab("mobile")}
                              className={`block w-full text-left text-lg font-medium px-4 py-2 rounded-l-full transition-all duration-200 ${
                                activeTab === "mobile"
                                  ? "bg-orange-100 text-orange-500"
                                  : "text-gray-700 hover:bg-orange-100 hover:text-orange-500"
                              }`}
                            >
                              Mobile App Development
                            </button>
                          </div>
                          <div className="w-3/4 grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                            {services[activeTab].map((link, sIdx) => (
                              <Link
                                key={sIdx}
                                href={`/component/services/${link
                                  .toLowerCase()
                                  .replace(/\s+/g, "")}`}
                                className={` ${
                                  isPortfolioPage
                                    ? "text-gray-50"
                                    : "text-gray-700"
                                } hover:text-orange-500 text-lg  border-r-2 border-gray-200  text-left hover:scale-105 transition-all duration-300 ease-in-out`}
                              >
                                {link}
                              </Link>
                            ))}
                          </div>
                        </div>

                        <div className="w-full mt-6">
                          <div className="w-full border-t"></div>

                          <div className="flex justify-center gap-6 mt-6">
                            <a
                              href="https://www.facebook.com/camleniosoftware/mentions/?_rdr"
                              target="_blank"
                              className="text-gray-600 hover:text-orange-500 transition"
                            >
                              <FaFacebook size={28} />
                            </a>
                            <a
                              href="https://x.com/camlenio"
                              target="_blank"
                              className="text-gray-600 hover:text-orange-500 transition"
                            >
                              <FaTwitter size={28} />
                            </a>
                            <a
                              href="https://www.instagram.com/camleniosoftware/"
                              target="_blank"
                              className="text-gray-600 hover:text-orange-500 transition"
                            >
                              <FaInstagram size={28} />
                            </a>
                            <a
                              href="https://www.linkedin.com/posts/camlenio_camlenio-softwaredevelopment-businessgrowth-activity-7202183467239972864-Cepc"
                              target="_blank"
                              className="text-gray-600 hover:text-orange-500 transition"
                            >
                              <FaLinkedin size={28} />
                            </a>
                            <a
                              href="https://mx.pinterest.com/camlenio/"
                              target="_blank"
                              className="text-gray-600 hover:text-orange-500 transition"
                            >
                              <FaPinterest size={28} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={idx}
                  href={item.href}
                  className={`${
                    isPortfolioPage ? " text-gray-50" : "text-gray-800"
                  } hover:text-orange-600 font-medium`}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>
        </div>

        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="fixed top-0 left-0 right-0 z-50 md:hidden bg-orange-50 shadow-xl rounded-b-2xl border-b px-6 py-6"
            >
              <div className="flex items-center justify-between mb-6">
                <Link href="/">
                  <h1 className="text-orange-500 font-extrabold text-2xl sm:text-2xl">
                    Camlenio
                  </h1>
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-orange-100 transition"
                >
                  <XMarkIcon className="w-6 h-6 text-gray-800" />
                </button>
              </div>
              {navItems.map((item, idx) =>
                item.dropdown ? (
                  <div key={idx} className="mb-4">
                    <button
                      onClick={() =>
                        setMobileDropdown(
                          mobileDropdown === item.title ? null : item.title
                        )
                      }
                      className="w-full flex justify-between items-center text-gray-800 font-semibold text-base px-2 py-2 rounded hover:bg-orange-100 transition"
                    >
                      {item.title}
                      <ChevronDownIcon
                        className={clsx(
                          "w-5 h-5 transform transition-transform duration-200",
                          mobileDropdown === item.title && "rotate-180"
                        )}
                      />
                    </button>

                    <AnimatePresence>
                      {mobileDropdown === item.title && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                          className="overflow-hidden mt-2 space-y-2 pl-4"
                        >
                          {Array.isArray(item.items)
                            ? item.items.map((link: string, sIdx: number) => (
                                <Link
                                  key={sIdx}
                                  href={`/component/${item.href.replace(
                                    /^\/|\/$/g,
                                    ""
                                  )}/${link.toLowerCase().replace(/\s+/g, "")}`}
                                  className="block text-sm text-gray-600 hover:text-gray-800 transition font-medium"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {link}
                                </Link>
                              ))
                            : item.items
                            ? Object.entries(item.items).map(
                                (
                                  [category, links]: [string, string[]],
                                  catIdx: number
                                ) => (
                                  <div key={catIdx} className="mb-2">
                                    <div className="font-bold mb-1 text-orange-500">
                                      {category.charAt(0).toUpperCase() +
                                        category.slice(1)}
                                    </div>
                                    {links.map((link: string, sIdx: number) => (
                                      <Link
                                        key={sIdx}
                                        href={`/component/${item.href.replace(
                                          /^\/|\/$/g,
                                          ""
                                        )}/${link
                                          .toLowerCase()
                                          .replace(/\s+/g, "")}`}
                                        className="block text-sm text-gray-600 hover:text-gray-800 transition font-medium pl-2"
                                        onClick={() => setMobileMenuOpen(false)}
                                      >
                                        {link}
                                      </Link>
                                    ))}
                                  </div>
                                )
                              )
                            : null}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={idx}
                    href={item.href}
                    className="block text-gray-900 font-semibold text-base px-2 py-2 rounded hover:bg-orange-100 transition mb-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                )
              )}

              <Link
                href="/contact"
                className="mt-4 block  bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white text-center py-2 rounded-xl font-semibold  hover:opacity-90 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Log in
              </Link>
              <div className="w-full mt-6">
                <div className="w-full border-t"></div>

                <div className="flex justify-center gap-6 mt-6">
                  <a
                    href="https://www.facebook.com/camleniosoftware/mentions/?_rdr"
                    target="_blank"
                    className="text-gray-600 hover:text-orange-500 transition"
                  >
                    <FaFacebook size={28} />
                  </a>
                  <a
                    href="https://x.com/camlenio"
                    target="_blank"
                    className="text-gray-600 hover:text-orange-500 transition"
                  >
                    <FaTwitter size={28} />
                  </a>
                  <a
                    href="https://www.instagram.com/camleniosoftware/"
                    target="_blank"
                    className="text-gray-600 hover:text-orange-500 transition"
                  >
                    <FaInstagram size={28} />
                  </a>
                  <a
                    href="https://www.linkedin.com/posts/camlenio_camlenio-softwaredevelopment-businessgrowth-activity-7202183467239972864-Cepc"
                    target="_blank"
                    className="text-gray-600 hover:text-orange-500 transition"
                  >
                    <FaLinkedin size={28} />
                  </a>
                  <a
                    href="https://mx.pinterest.com/camlenio/"
                    target="_blank"
                    className="text-gray-600 hover:text-orange-500 transition"
                  >
                    <FaPinterest size={28} />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </div>
    </>
  );
}
