"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { safeLink } from "../../../lib/utils";
import { usePathname } from "next/navigation";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
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
        "fantasy sports software",
        "Ludo Software",
        "sports betting",
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

const Header: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("");
  const pathname = usePathname();
  const navItemRef = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const closeTimeoutRef = useRef<number | null>(null);

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const closeDropdownWithDelay = () => {
    clearCloseTimeout();
    closeTimeoutRef.current = window.setTimeout(() => {
      setOpenDropdown(null);
      setActiveTab("");
      closeTimeoutRef.current = null;
    }, 160);
  };

  const openDropdownImmediate = (title?: string | null) => {
    clearCloseTimeout();
    if (title) setOpenDropdown(title);
  };

  const getCompanyIcon = (name: string): React.ReactNode => {
    const key = (name || "").toString().toLowerCase();
    if (key.includes("about"))
      return (
        <Image
          src="/Homepage/web_design_orange.png"
          alt="Company Logo"
          width={100}
          height={100}
          className="h-10 w-12 object-contain "
        />
      );
    if (key.includes("blog"))
      return (
        <Image
          src="/Homepage/web_design_orange.png"
          alt="Company Logo"
          width={100}
          height={100}
          className="h-10 w-12 object-contain"
        />
      );
    if (key.includes("career") || key.includes("careers"))
      return (
        <Image
          src="/Homepage/web_design_orange.png"
          alt="Company Logo"
          width={100}
          height={100}
          className="h-10 w-12 object-contain "
        />
      );
    return (
      <Image
        src="/Homepage/web_design_orange.png"
        alt="Company Logo"
        width={100}
        height={100}
        className="h-10 w-14 object-contain "
      />
    );
  };

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", mobileMenuOpen);
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000]  bg-gradient-to-r from-indigo-50 via-orange-100 to-indigo-100 bg-[length:200%_200%] animate-gradientMove shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 md:py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Camlenio"
            width={200}
            height={80}
            className="w-50 md:w-60 h-auto object-contain"
          />
        </Link>
        <nav className="hidden md:flex space-x-6 items-center relative font-normal">
          {navItems.map((item, idx) =>
            item.dropdown ? (
              <div
                key={idx}
                className="relative"
                onMouseEnter={() => {
                  clearCloseTimeout();
                  if (
                    (item.title === "Services" || item.title === "Company") &&
                    item.items &&
                    !Array.isArray(item.items)
                  ) {
                    const first =
                      Object.keys(
                        item.items as unknown as Record<string, string[]>
                      )[0] || "";
                    setActiveTab(first);
                  }
                  openDropdownImmediate(item.title);
                }}
                onMouseLeave={() => {
                  closeDropdownWithDelay();
                }}
                ref={item.title === openDropdown ? navItemRef : null}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === item.title ? null : item.title
                    )
                  }
                  className={clsx(
                    "inline-flex items-center text-gray-900 font-medium hover:text-orange-500",
                    openDropdown === item.title && "text-orange-500"
                  )}
                >
                  {item.title}
                  <ChevronDownIcon
                    className={clsx(
                      "ml-1 w-4 h-4 transition-transform duration-200",
                      openDropdown === item.title && "rotate-180"
                    )}
                  />
                </motion.button>
                <AnimatePresence>
                  {openDropdown === item.title && (
                    <motion.div
                      ref={dropdownRef}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                      className="fixed left-1/2 top-[5.25rem] -translate-x-1/2 w-[900px]  max-w-[90vw] bg-gradient-to-r from-indigo-50 via-orange-100 to-indigo-100 bg-[length:200%_200%] animate-gradientMove rounded-b-2xl shadow-lg p-6 z-50 max-h-[80vh] overflow-auto"
                      onMouseEnter={() => {
                        clearCloseTimeout();
                        setOpenDropdown(item.title);
                      }}
                      onMouseLeave={() => {
                        closeDropdownWithDelay();
                      }}
                    >
                      {item.title === "Services" || item.title === "Company" ? (
                        (() => {
                          let servicesObj: Record<string, string[]> = {};
                          let tabs: string[] = [];
                          if (item.title === "Company") {
                            tabs = Array.isArray(item.items)
                              ? (item.items as string[])
                              : Object.keys(
                                  (item.items as unknown as Record<
                                    string,
                                    string[]
                                  >) || {}
                                );
                          } else {
                            servicesObj =
                              !item.items || Array.isArray(item.items)
                                ? {}
                                : (item.items as unknown as Record<
                                    string,
                                    string[]
                                  >);
                            tabs = Object.keys(servicesObj);
                          }
                          const current = activeTab || tabs[0] || "";
                          return (
                            <div className="flex w-full max-w-[900px] h-auto gap-4 ">
                              {item.title === "Company" ? (
                                <>
                                  <div className="w-1/3 pr-4 flex flex-col justify-center items-start ml-10 border-r-2 border-l-2 border-r-gray-300 border-l-orange-500 rounded-3xl  shadow-[-8px_0_15px_-3px_rgba(0,0,0,0.2)] mr-2">
                                    {tabs.map((tab) =>
                                      (() => {
                                        const href = `/component/${
                                          item.href
                                        }/${tab
                                          .toString()
                                          .replace(/\s+/g, "")
                                          .toLowerCase()}`;
                                        const isActive =
                                          pathname === href ||
                                          (openDropdown === item.title &&
                                            activeTab === tab);
                                        return (
                                          <Link
                                            key={tab}
                                            href={href}
                                            onMouseEnter={() => {
                                              clearCloseTimeout();
                                              setActiveTab(tab);
                                              openDropdownImmediate(item.title);
                                            }}
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              setActiveTab(tab);
                                              openDropdownImmediate(item.title);
                                            }}
                                            className={clsx(
                                              " max-w-sm p-2 rounded  text-xl transition-transform duration-100 hover:translate-x-1 flex items-center justify-center", //company
                                              isActive
                                                ? "text-orange-600 font-semibold "
                                                : "text-gray-700 hover:text-orange-500"
                                            )}
                                          >
                                            {getCompanyIcon(tab)}
                                            <span className="flex justify-center items-center mb-2 text-center">
                                              {tab.charAt(0).toUpperCase() +
                                                tab.slice(1)}
                                            </span>
                                          </Link>
                                        );
                                      })()
                                    )}
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
                                          clearCloseTimeout();
                                          setActiveTab(tab);
                                          openDropdownImmediate(item.title);
                                        }}
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          setActiveTab(tab);
                                          openDropdownImmediate(item.title);
                                        }}
                                        className={clsx(
                                          "block w-full text-left p-2 rounded",
                                          current === tab
                                            ? "text-orange-600 font-semibold bg-orange-100 rounded-l-full"
                                            : "text-gray-700 hover:text-orange-500"
                                        )}
                                      >
                                        {tab.charAt(0).toUpperCase() +
                                          tab.slice(1)}
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
                                    {(servicesObj[current] || []).map(
                                      (link) => (
                                        <Link
                                          key={link}
                                          href={safeLink(
                                            `/component/${item.href}/${link
                                              .replace(/\s+/g, "")
                                              .toLowerCase()}`,
                                            availablePages
                                          )}
                                          onMouseEnter={() => {
                                            clearCloseTimeout();
                                            setOpenDropdown(item.title);
                                          }}
                                          className="block text-gray-700 text-sm hover:text-orange-500 whitespace-nowrap transition-transform duration-150 hover:translate-x-1"
                                        >
                                          {link}
                                        </Link>
                                      )
                                    )}
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
                              className="block text-gray-700 text-base p-2 hover:text-orange-500" // Hire Developer && Fintech Software &&  Industries dorpdown menu
                            >
                              {link}
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <div className="grid grid-cols-3 gap-3">
                          {(() => {
                            const entries =
                              !item.items || Array.isArray(item.items)
                                ? []
                                : Object.entries(
                                    item.items as unknown as Record<
                                      string,
                                      string[]
                                    >
                                  );
                            return entries.map(([cat, links]) => (
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
                                    className="block text-gray-700 text-base p-2 hover:text-orange-500" // company dropdown menu
                                  >
                                    {link}
                                  </Link>
                                ))}
                              </div>
                            ));
                          })()}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
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
            className="fixed top-0 left-0 right-0 z-50  bg-gradient-to-r from-indigo-50 via-orange-100 to-indigo-100 bg-[length:200%_200%] animate-gradientMove shadow-lg rounded-b-2xl border-b p-6 md:hidden overflow-y-auto max-h-screen"
          >
            <div className="flex justify-between">
              <Link href="/" className="flex items-left">
                <Image
                  src="/logo.png"
                  alt="Camlenio"
                  width={230}
                  height={80}
                  className="w-40 h-auto object-contain"
                />
              </Link>{" "}
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
            {navItems.map((item, idx) =>
              item.dropdown ? (
                <div key={idx} className="mb-2">
                  <button
                    onClick={() =>
                      setMobileDropdown(
                        mobileDropdown === item.title ? null : item.title
                      )
                    }
                    className="w-full flex justify-between items-center p-4 text-gray-800 font-semibold rounded hover:bg-orange-50 transition"
                  >
                    {item.title}
                    <ChevronDownIcon
                      className={clsx(
                        "w-5 h-5 transition-transform duration-200",
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
                        className="overflow-hidden mt-2 pl-4 space-y-2"
                      >
                        {Array.isArray(item.items)
                          ? item.items.map((link) => (
                              <Link
                                key={link}
                                href={`/component/${item.href}/${link
                                  .replace(/\s+/g, "")
                                  .toLowerCase()}`}
                                className="block text-sm text-gray-700 hover:text-gray-900"
                              >
                                {link}
                              </Link>
                            ))
                          : (() => {
                              const entries =
                                !item.items || Array.isArray(item.items)
                                  ? []
                                  : Object.entries(
                                      item.items as unknown as Record<
                                        string,
                                        string[]
                                      >
                                    );
                              return entries.map(([cat, links]) => (
                                <div key={cat}>
                                  <h4 className="font-bold text-orange-500 mb-1">
                                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                                  </h4>
                                  {links.map((link) => (
                                    <Link
                                      key={link}
                                      href={`/component/${item.href}/${link
                                        .replace(/\s+/g, "")
                                        .toLowerCase()}`}
                                      className="block text-sm text-gray-700 hover:text-gray-900 pl-2"
                                    >
                                      {link}
                                    </Link>
                                  ))}
                                </div>
                              ));
                            })()}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={idx}
                  href={item.href}
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
