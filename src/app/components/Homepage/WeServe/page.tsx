"use client";
import Image from "next/image";

type Industry = {
  id: number;
  title: string;
  text: string;
  img: string;
  icon: string;
};

const INDUSTRIES: Industry[] = [
  {
    id: 1,
    title: "Education",
    text: "We build e-learning software, a student-manager system, apps, interactive software, and other solutions to meet the needs of the modern-day learners and institutions.",
    img: "/Homepage/home_about.jpg",
    icon: "/Homepage/svg/industry_icon_finance.svg",
  },
  {
    id: 2,
    title: "Food & Restaurants",
    text: "From restaurant software to delivery applications, we help businesses streamline the smooth operations for seamless dining experiences.",
    img: "/Homepage/home_about.jpg",
    icon: "/Homepage/svg/industry_icon_health.svg",
  },
  {
    id: 3,
    title: "Healthcare",
    text: "We architect telemedicine software, patient management applications, and health platforms while making care delivery simpler and secure.",
    img: "/Homepage/home_about.jpg",
    icon: "/Homepage/svg/industry_icon_education.svg",
  },
  {
    id: 4,
    title: "Fintech",
    text: "Payment gateways, e-wallets, platforms for lending, built for speed and security, and to establish trust in finance are in our purvey.",
    img: "/Homepage/home_about.jpg",
    icon: "/Homepage/svg/industry_icon_restaurant.svg",
  },
  {
    id: 5,
    title: "Retail & Ecommerce",
    text: "We create online shopping, ecommerce platforms that increase sales, enhance engagement, and simplify the customer's journey.",
    img: "/Homepage/home_about.jpg",
    icon: "/Homepage/svg/industry_icon_property.svg",
  },
  {
    id: 6,
    title: "Travel & Hospitality",
    text: "Our solutions, from booking engines to travel apps, focus on improvements of the user experience and automation of manual processes, thus growing revenues.",
    img: "/Homepage/home_about.jpg",
    icon: "/Homepage/industry_icon_manufacturing.webp",
  },
];

function Track({
  items,
  reverse = false,
  speed = 28,
}: {
  items: Industry[];
  reverse?: boolean;
  speed?: number;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden rounded-[2.5rem] ">
      <div
        className={`flex gap-4 w-max p-2 animate-scrollX`}
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {doubled.map((card, idx) => (
          <article
            key={`${card.id}-${idx}`}
            className="relative  min-w-[40rem]  h-[18rem] md:h-[22rem] rounded-[2rem] overflow-hidden shadow-lg transform transition-transform duration-500 hover:-translate-y-1 px-6"
          >
            <Image
              src={card.img}
              alt={card.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent transition-colors duration-500 flex flex-col justify-end p-4 group">
              <div className="inline-flex items-center gap-2 bg-orange-500 rounded-full p-2 w-fit">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={50}
                  height={50}
                  className="w-8 h-8 md:w-12  md:h-12 object-contain bg-white p-2 rounded-full"
                />
                <span className="text-gray-900 font-medium text-xs md:text-base">
                  {card.title}
                </span>
              </div>

              {/* Sub text */}
              <p className="text-gray-200 text-xs md:text-base mt-3 font-sans">
                {card.text}
              </p>
              <a
                href="#"
                className="text-orange-500 text-sm font-semibold mt-2 flex items-center gap-1 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 "
              >
                Explore-more →
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function WeServe() {
  return (
    <div className="grid gap-6 p-6 py-20 bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center ">
        <span className="relative inline-block px-4 py-1.5 rounded-full border border-orange-50 bg-orange-100 shadow-sm text-sm font-medium text-orange-500 mb-4">
          <span className="absolute w-7 h-[6px] rounded-full bg-orange-500 left-[-1.2rem] top-1/2 -translate-y-1/2"></span>
          Solutions That Scale
        </span>
        <h6 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Industries{" "}
          <span
            className="text-orange-500"
            style={{
              textShadow:
                "-1px -1px 0px #da5f00, 3px 3px 0px #F3F4F6, 4px 6px 0px #ff582336",
            }}
          >
            We Serve
          </span>
        </h6>

        <p className="max-w-5xl mx-auto flex-wrap text-gray-600 text-sm text-left break-words sm:text-base mb-12 font-sans">
          Tailored digital solutions for unique challenges and growth
          opportunities across industries.
        </p>
      </div>
      <Track items={INDUSTRIES} reverse={false} speed={66} />
      <Track items={INDUSTRIES.slice().reverse()} reverse={true} speed={66} />
    </div>
  );
}
