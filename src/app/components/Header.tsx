"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { safeLink } from "../../../lib/utils";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { MobileDropdown } from "./MobileDropdown";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaBlog,
  FaCircleInfo,
  FaEnvelope,
  FaBriefcase,
  FaTwitter,
} from "react-icons/fa6";

const availablePages = [
  "/portfolio",
  "/component/services/crmsoftware",
  "/component/services/customizedsoftware",
  "/component/services/ecommerceportel",
  "/component/services/fintechsoftware",
  "/component/services/fullstackdevelopment",
  "/component/services/hrmssoftware",
  "/component/services/androidappdevelopment",
  "/component/services/ui_uxdesigning",
  "/component/services/webdevelopment",
  "/component/company/blog",
  "/component/company/about",
  "/component/company/career",
  "/component/company/contact",
];

const navItems = [
  {
    title: "Company",
    href: "company",
    dropdown: true,
    items: ["Blog", "About", "Career", "Contact"],
  },
  {
    title: "Services",
    href: "services",
    dropdown: true,
    items: {
      software: [
        "Customized Software",
        "CRM Software",
        "Full Stack Development",
        "HRMS Software",
        "Fintech Software",
        "Inventory management software",
        "Loan Management Software",
        "Hotel management Software",
        "Library Management Software",
        "Lead management software",
        "Billing Software",
        "MLM Software",
        "ecommerce portel",
        "online education",
        "travel booking software",
        "Banking Software",
        "Accounting software",
        "employee tracking",
        "Real estate Software",
        "cab booking software",
        "food delivery software",
        "grocery software",
        "home service software",
        "school management",
      ],
      technology: [
        "Angular JS",
        "C#",
        "C++",
        "Android",
        "Python",
        "MySQL",
        ".Net Java Script",
        "Node JS",
        "Java",
        "SQL Server",
        "PHP",
        "React JS",
        "Html5",
        "Css3",
        "Adobe XD",
        "Photoshop",
        "Figma",
        "Firebase",
      ],
      design: [
        "UI_UX Designing",
        "custom web development",
        "software development",
        "web development",
        "logo & graphic designing",
        "digital marketing",
      ],
      Mobile: [
        "Android App Development",
        "iOS App Development",
        "Cross Platform Apps",
        "Flutter Apps",
        "React Native Apps",
        "App Maintenance",
      ],
    },
  },
  {
    title: "Hire Developer",
    href: "hireateam",
    dropdown: true,
    items: [
      "Hire Android Developers",
      "Hire iOS Developers",
      "Hire Flutter Developers",
      "Hire Full Stack Developers",
      "Hire UI/UX Designers",
      "Hire Dedicated Teams",
    ],
  },
  {
    title: "Fintech Software",
    href: "fintechsoftware",
    dropdown: true,
    items: [
      "Healthcare",
      "Finance",
      "Retail",
      "Education",
      "Logistics",
      "Real Estate",
    ],
  },
  {
    title: "Industries",
    href: "industries",
    dropdown: true,
    items: [
      "Healthcare",
      "Finance",
      "Retail",
      "Education",
      "Logistics",
      "Real Estate",
    ],
  },
  { title: "Portfolio", href: "/portfolio", dropdown: false },
];

const socialIcons = [
  {
    href: "https://www.facebook.com/camleniosoftware/mentions/?_rdr",
    icon: <FaFacebook size={28} />,
  },
  { href: "https://x.com/camlenio", icon: <FaTwitter size={28} /> },
  {
    href: "https://www.instagram.com/camleniosoftware/",
    icon: <FaInstagram size={28} />,
  },
  {
    href: "https://www.linkedin.com/posts/camlenio_camlenio-softwaredevelopment-businessgrowth-activity-7202183467239972864-Cepc",
    icon: <FaLinkedin size={28} />,
  },
  {
    href: "https://mx.pinterest.com/camlenio/",
    icon: <FaPinterest size={28} />,
  },
];

const DesktopDropdown = React.memo(
  ({
    item,
    openDropdown,
    closeDropdownWithDelay,
    openDropdownImmediate,
    pathname,
  }: {
    item: (typeof navItems)[0];
    openDropdown: string | null;
    closeDropdownWithDelay: () => void;
    openDropdownImmediate: (title?: string | null) => void;
    pathname: string;
  }) => {
    const [activeTab, setActiveTab] = useState<string>(() => {
      if (item.items && !Array.isArray(item.items)) {
        return Object.keys(item.items)[0] || "";
      }
      return "";
    });

    // const getCompanyIcon = (name: string): React.ReactNode => {
    //   const key = (name || "").toString().toLowerCase();
    //   const iconPath = "/Homepage/web_design_orange.png";
    //   const className = key.includes("career")
    //     ? "h-10 w-12 object-contain"
    //     : "h-10 w-14 object-contain";
    //   return (
    //     <Image
    //       src={iconPath}
    //       alt={`${name} icon`}
    //       width={100}
    //       height={100}
    //       className={className}
    //     />
    //   );
    // };

    const getCompanyIcon = (name: string): React.ReactNode => {
      const key = (name || "").toLowerCase();

      const iconMap: Record<string, string> = {
        blog: "/header/aboutus/blog.svg",
        about: "/header/aboutus/about-us.svg",
        career: "/header/aboutus/career-2.svg",
        contact: "/header/aboutus/contact.svg",
      };

      const iconPath = iconMap[key] || "/header/aboutus/about-us.svg";

      const className =
        key === "career"
          ? "h-10 w-14 object-contain"
          : "h-8 w-14 object-contain";

      return (
        <Image
          src={iconPath}
          alt={`${name} icon`}
          width={100}
          height={100}
          className={className}
        />
      );
    };

    return (
      <AnimatePresence>
        {openDropdown === item.title && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="fixed left-1/2 top-[5.25rem] -translate-x-1/2 w-[900px]  max-w-[90vw] bg-gradient-to-r from-indigo-50 via-orange-100 to-indigo-100 bg-[length:200%_200%] animate-gradientMove rounded-b-2xl shadow-lg p-6 z-50 max-h-[80vh] overflow-auto"
            onMouseEnter={() => openDropdownImmediate(item.title)}
            onMouseLeave={closeDropdownWithDelay}
          >
            {item.title === "Services" || item.title === "Company" ? (
              (() => {
                const servicesObj: Record<string, string[]> =
                  !item.items || Array.isArray(item.items)
                    ? {}
                    : (item.items as unknown as Record<string, string[]>);
                const tabs = Object.keys(servicesObj);
                const current = activeTab || tabs[0] || "";

                return (
                  <div className="flex w-full max-w-[900px] h-auto gap-4">
                    {item.title === "Company" ? (
                      <>
                        <div className="w-1/3 pr-4 flex flex-col justify-center items-start ml-10 border-r-2 border-l-2 border-r-gray-300 border-l-orange-500 rounded-3xl  shadow-[-8px_0_15px_-3px_rgba(0,0,0,0.2)] mr-2">
                          {(item.items as string[]).map((tab) => {
                            const href = `/component/${item.href}/${tab
                              .replace(/\s+/g, "")
                              .toLowerCase()}`;
                            const isActive =
                              pathname === href || activeTab === tab;
                            return (
                              <Link
                                key={tab}
                                href={href}
                                onMouseEnter={() => {
                                  openDropdownImmediate(item.title);
                                  setActiveTab(tab);
                                }}
                                className={clsx(
                                  "max-w-sm p-2 rounded text-xl transition-transform duration-100 hover:translate-x-1 flex items-center justify-center",
                                  isActive
                                    ? "text-orange-600 font-semibold"
                                    : "text-gray-700 hover:text-orange-500"
                                )}
                              >
                                {getCompanyIcon(tab)}
                                <span className="flex justify-center items-center mb-2 text-center">
                                  {tab}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                        <div className="w-2/3 flex items-center justify-center">
                          <div className="w-full max-w-xs">
                            <Image
                              src="/Homepage/aboutus_image.png"
                              alt="Company"
                              width={420}
                              height={320}
                              className="object-cover rounded-lg"
                            />
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="min-w-[140px] max-w-[220px]  border-r-2 border-gray-600">
                          {tabs.map((tab) => (
                            <button
                              key={tab}
                              type="button"
                              onMouseEnter={() => {
                                openDropdownImmediate(item.title);
                                setActiveTab(tab);
                              }}
                              className={clsx(
                                "block w-full text-left p-2 rounded",
                                current === tab
                                  ? "text-orange-600 font-semibold bg-orange-100 rounded-l-full"
                                  : "text-gray-700 hover:text-orange-500"
                              )}
                            >
                              {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                          ))}
                        </div>
                        <div
                          className={clsx(
                            "flex-1 min-w-0 pl-4",
                            current === "software"
                              ? "grid grid-cols-3 gap-3"
                              : "grid grid-cols-2 gap-3"
                          )}
                        >
                          {(servicesObj[current] || []).map((link) => (
                            <Link
                              key={link}
                              href={safeLink(
                                `/component/${item.href}/${link
                                  .replace(/\s+/g, "")
                                  .toLowerCase()}`,
                                availablePages
                              )}
                              onMouseEnter={() =>
                                openDropdownImmediate(item.title)
                              }
                              className="block text-gray-700 text-sm hover:text-orange-500 whitespace-nowrap transition-transform duration-150 hover:translate-x-1"
                            >
                              {link}
                            </Link>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                );
              })()
            ) : Array.isArray(item.items) ? (
              <div className="grid grid-cols-2 gap-3">
                {item.items.map((link) => (
                  <Link
                    key={link}
                    href={`/component/${item.href}/${link
                      .replace(/\s+/g, "")
                      .toLowerCase()}`}
                    className="block text-gray-700 text-base p-2 hover:text-orange-500"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-3">
                {Object.entries(
                  item.items as unknown as Record<string, string[]>
                ).map(([cat, links]) => (
                  <div key={cat}>
                    <h4 className="font-bold mb-2 text-lg text-orange-500">
                      {cat}
                    </h4>
                    {links.map((link) => (
                      <Link
                        key={link}
                        href={`/component/${item.href}/${link
                          .replace(/\s+/g, "")
                          .toLowerCase()}`}
                        className="block text-gray-700 text-base p-2 hover:text-orange-500"
                      >
                        {link}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
            <div className="mt-4 flex justify-center gap-4">
              {socialIcons.map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 hover:text-orange-500 transition"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
);
DesktopDropdown.displayName = "DesktopDropdown";

const Header: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const navItemRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = window.setTimeout(() => {
      setOpenDropdown(null);
    }, 160);
  }, []);

  const handleMouseEnter = useCallback((title: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(title);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", mobileMenuOpen);
  }, [mobileMenuOpen]);

  useEffect(() => {
    const timer = setTimeout(() => {
      gsap.fromTo(
        "#c",
        { y: -5, z: -5, rotateX: -15, rotateY: -10 },
        {
          y: 0,
          z: 0,
          rotateX: 0,
          rotateY: 0,
          duration: 0.8,
          ease: "power1.inOut",
        }
      );

      gsap.fromTo(
        "#a",
        { y: 50, rotateX: -90, transformOrigin: "bottom center" },
        { y: 0, rotateX: 0, duration: 1, ease: "power3.out" }
      );

      gsap.fromTo(
        "#m",
        { x: 0 },
        {
          x: 20,
          duration: 1.2,
          ease: "elastic.out(1, 0.5)",
          onComplete: () => {
            gsap.to("#m", { x: 0, duration: 0.5, ease: "power1.out" });
          },
        }
      );

      gsap.fromTo(
        "#e",
        { y: -30 },
        { y: 0, duration: 0.8, ease: "bounce.out" }
      );

      gsap.fromTo(
        "#n",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)" }
      );

      gsap.to("#i", {
        rotateX: 360,
        scale: 1.2,
        duration: 1.5,
        yoyo: true,
        repeat: -1,
        repeatDelay: 6,
        ease: "power2.inOut",
      });

      gsap.to("#o", {
        rotateY: -15,
        duration: 3,
        yoyo: true,
        repeat: -1,
        repeatDelay: 10,
        ease: "power2.inOut",
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000]  bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove shadow-md overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 ">
        <Link href="/" className="flex items-center space-x-1 tracking-tight ">
          <Image
            src="/logo-icon.png"
            alt="Camlenio"
            width={200}
            height={80}
            className="w-8 md:w-13 h-auto object-contain"
          />
          <span className="text-2xl md:text-4xl font-bold text-black">
            <span id="c" className="inline-block">
              C
            </span>
            <span id="a" className="inline-block">
              a
            </span>
            <span id="m" className="inline-block">
              m
            </span>
            <span id="l" className="inline-block">
              l
            </span>
            <span id="e" className="inline-block">
              e
            </span>
            <span id="n" className="inline-block">
              n
            </span>
            <span id="i" className="inline-block">
              i
            </span>
            <span id="o" className="inline-block">
              o
            </span>
          </span>
        </Link>
        <nav className="hidden md:flex md:space-x-4 lg:space-x-6 items-center relative font-normal">
          {navItems.map((item, idx) =>
            item.dropdown ? (
              <div
                key={idx}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.title)}
                onMouseLeave={handleMouseLeave}
                ref={item.title === openDropdown ? navItemRef : null}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className={clsx(
                    "inline-flex items-center text-gray-900 md:text-xs lg:text-base font-medium hover:text-orange-500",
                    openDropdown === item.title && "text-orange-500"
                  )}
                >
                  {item.title}
                  <ChevronDownIcon className="ml-1 w-4 h-4" />
                </motion.button>
                <DesktopDropdown
                  item={item}
                  openDropdown={openDropdown}
                  closeDropdownWithDelay={handleMouseLeave}
                  openDropdownImmediate={handleMouseEnter}
                  pathname={pathname}
                />
              </div>
            ) : (
              <Link
                key={idx}
                href={item.href}
                className="text-gray-900 hover:text-orange-500 font-medium"
              >
                {item.title}
              </Link>
            )
          )}
        </nav>

        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <XMarkIcon className="w-8 h-8 text-gray-800" />
            ) : (
              <Bars3Icon className="w-8 h-8 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1, transition: { duration: 0.2 } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-50  bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove shadow-lg rounded-b-2xl p-6 md:hidden overflow-y-auto max-h-screen"
          >
            <div className="flex justify-between">
              <Link
                href="/"
                className="flex items-center space-x-1 tracking-tight "
              >
                <Image
                  src="/logo-icon.png"
                  alt="Camlenio"
                  width={200}
                  height={80}
                  className="w-8 md:w-13 h-auto object-contain"
                />
                <span className="text-2xl md:text-4xl font-bold text-black">
                  <span id="c" className="inline-block">
                    C
                  </span>
                  <span id="a" className="inline-block">
                    a
                  </span>
                  <span id="m" className="inline-block">
                    m
                  </span>
                  <span id="l" className="inline-block">
                    l
                  </span>
                  <span id="e" className="inline-block">
                    e
                  </span>
                  <span id="n" className="inline-block">
                    n
                  </span>
                  <span id="i" className="inline-block">
                    i
                  </span>
                  <span id="o" className="inline-block">
                    o
                  </span>
                </span>
              </Link>{" "}
              <div className="md:hidden">
                <AnimatePresence>
                  <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? (
                      <XMarkIcon className="w-8 h-8 text-gray-800" />
                    ) : (
                      <Bars3Icon className="w-8 h-8 text-gray-800" />
                    )}
                  </button>
                </AnimatePresence>
              </div>
            </div>
            {navItems.map((item, idx) =>
              item.dropdown ? (
                <div key={idx} className="mb-2">
                  <button
                    onClick={() =>
                      setMobileDropdown(
                        mobileDropdown === item.title ? null : item.title
                      )
                    }
                    className="w-full flex justify-between items-center text-base p-4 text-gray-800 font-semibold rounded hover:bg-orange-50 transition-all duration-300"
                  >
                    {item.title}
                    <ChevronDownIcon
                      className={clsx(
                        "w-5 h-5 transition-transform duration-300 ",
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
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden mt-2 pl-4"
                      >
                        {Array.isArray(item.items) ? (
                          item.items.map((link) => (
                            <Link
                              key={link}
                              href={safeLink(
                                `/component/${item.href}/${link
                                  .replace(/\s+/g, "")
                                  .toLowerCase()}`,
                                availablePages
                              )}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block text-xl p-2 text-gray-700 hover:text-orange-900 space-y-2"
                            >
                              {link}
                            </Link>
                          ))
                        ) : (
                          <MobileDropdown
                            item={
                              item as {
                                href: string;
                                items: Record<string, string[]>;
                              }
                            }
                            setMobileMenuOpen={setMobileMenuOpen}
                          />
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={idx}
                  href={safeLink(item.href, availablePages)}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-900 font-medium px-2 py-2 mb-2 hover:bg-orange-50 rounded"
                >
                  {item.title}
                </Link>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
