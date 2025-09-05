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
    title: "Banking & Finance",
    text: "The user-centric fintech industry strives to make investments easy.",
    img: "/Homepage/home_about.jpg",
    icon: "/Homepage/industry_icon_finance.svg",
  },
  {
    id: 2,
    title: "Healthcare",
    text: "Automating the healthcare industry with breakthrough approaches.",
    img: "/Homepage/home_about.jpg",
    icon: "/Homepage/industry_icon_health.svg",
  },
  {
    id: 3,
    title: "Education",
    text: "To fulfill the new demands of the new generation with the latest technologies.",
    img: "/Homepage/home_about.jpg",
    icon: "/Homepage/industry_icon_education.svg",
  },
  {
    id: 4,
    title: "Food & Restaurants",
    text: "This broad and innovative industry is creating solutions that simplify our lives.",
    img: "/Homepage/home_about.jpg",
    icon: "/Homepage/industry_icon_restaurant.svg",
  },
  {
    id: 5,
    title: "Real Estate & Property",
    text: "Tailored solutions to streamline property management and tenant engagement.",
    img: "/Homepage/home_about.jpg",
    icon: "/Homepage/industry_icon_property.svg",
  },
  {
    id: 6,
    title: "Manufacturing",
    text: "Sustainable solutions to enhance modern manufacturing practices.",
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
              <p className="text-gray-200 text-xs md:text-base mt-3">
                {card.text}
              </p>
              <a
                href="#"
                className="text-orange-500 text-sm font-semibold mt-2 flex items-center gap-1 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
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
    <div className="grid gap-6 p-6 py-20  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center ">
        <span className="relative inline-block px-4 py-1.5 rounded-full border border-orange-200 bg-white shadow-sm text-sm font-medium text-orange-600 mb-4">
          <span className="absolute w-7 h-[6px] rounded-full bg-orange-500 left-[-1.2rem] top-1/2 -translate-y-1/2"></span>
          Custom Software Development
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Industries <span className="text-orange-500">We Serve</span>
        </h2>

        <p className="max-w-3xl mx-auto text-gray-600 text-base sm:text-lg mb-12">
          We provide superior website and mobile app development services to
          businesses across many different industry verticals.
        </p>
      </div>
      <Track items={INDUSTRIES} reverse={false} speed={66} />
      <Track items={INDUSTRIES.slice().reverse()} reverse={true} speed={66} />
    </div>
  );
}
