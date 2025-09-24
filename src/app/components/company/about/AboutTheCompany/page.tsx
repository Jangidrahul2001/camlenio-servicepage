"use client";
import Image from "next/image";
// import AnimatedText from "@/app/components/AnimatedText";
import GsapReveal from "../../../GsapReveal";

const cards = [
  {
    icon: "/Homepage/web_design_orange.png",
    number: "150+",
    text: "Expert Team",
  },
  {
    icon: "/Homepage/web_design_orange.png",
    number: "50+",
    text: "Clients Retention Rate",
  },
  {
    icon: "/Homepage/web_design_orange.png",
    number: "30+",
    text: "Star Rating",
  },
  {
    icon: "/Homepage/web_design_orange.png",
    number: "50+",
    text: "Active Softwares",
  },
  {
    icon: "/Homepage/web_design_orange.png",
    number: "10yrs",
    text: "Experience",
  },
];

const AboutTheCompany = () => {
  return (
    <div className="relative py-16 bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="text-center">
          <span className="relative inline-block px-4 py-1.5 rounded-full border border-orange-300 bg-white shadow-sm text-sm font-medium text-gray-950 mb-4">
            <span className="absolute w-7 h-[6px] rounded-full bg-orange-500 left-[-1.2rem] top-1/2 -translate-y-1/2"></span>
            About the Company
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-left md:text-center">
          One stop for all of your{" "}
          <span
            className="text-orange-500"
            style={{ textShadow: "2px 2px 0 #ffff, 4px 4px 0 #FFB266" }}
          >
            software development{" "}
          </span>
          needs
        </h1>
        <p className="max-w-5xl mx-auto text-gray-600 text-sm text-left md:text-base flex-wrap break-words mb-12 font-sans">
          Emizen tech Pvt Ltd began as a Web Development Company in the year
          2013, in Jaipur, Rajasthan, with the vision to help clients grow, we
          started incorporating modern technology solutions in their businesses.
          Soon after the launch, we grow from a startup Web Development Company
          to Best Information technology company, catering the IT needs of many
          big brands. To be more precise we are digital natives with a
          pioneering approach to E-commerce Solutions, Web Development, Web
          Designing, Software Development, Software Consulting, Digital
          Marketing, Mobile App Development, Graphic Designing and rest IT
          solutions. Which are significantly broadened to meet the all-time
          business and, technology needs of today’s global environment, and
          seeking to revolutionize the way people use technology to communicate,
          conduct business, gain information, and carry out transactions.
        </p>
        <GsapReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center group bg-transparent border-2 border-gray-200 shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition"
              >
                <div className="mb-4">
                  <Image
                    src={card.icon}
                    alt={card.text}
                    width={70}
                    height={70}
                    className="object-contain group-hover:scale-80 transition-transform duration-500"
                  />
                </div>
                <h2 className="text-2xl font-bold mb-2 text-gray-950 group-hover:-translate-y-1 transition-transform duration-500">
                  {card.number}
                </h2>
                <p className="text-gray-600 cursor-pointer group-hover:-translate-y-1 transition-transform duration-500">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </GsapReveal>
      </div>
    </div>
  );
};

export default AboutTheCompany;
