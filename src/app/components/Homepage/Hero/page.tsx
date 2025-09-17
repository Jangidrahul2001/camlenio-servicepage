"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import BackToTopButton from "../../BackToTopButton";
import { FaLongArrowAltRight } from "react-icons/fa";
import { ContainerScroll } from "../../container-scroll-animation";

const texts = [
  "Efficient",
  "Award winning",
  "Affordable",
  "Trustworthy",
  "Scalable",
  "Reliable",
  "Secure",
  "Innovative",
  "Dependable",
  "Powerful",
  "Impactful",
  "Quality",
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(
      () => setSubIndex((prev) => prev + (deleting ? -1 : 1)),
      deleting ? 50 : 120
    );

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  return (
    // <div className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-r from-indigo-50 via-orange-100 to-indigo-100 bg-[length:200%_200%] animate-gradientMove">
    //   {/* <video
    //     autoPlay
    //     loop
    //     muted
    //     playsInline
    //     className="w-full h-full object-cover object-center absolute inset-0 z-0"
    //   >
    //     <source src="/Homepage/bg-main3.mp4" type="video/mp4" />
    //     Your browser does not support the video tag.
    //   </video> */}

    //   {/* <div className="absolute inset-0 bg-black/70 z-10"></div> */}

    //   <div className="relative z-20 w-full px-4 sm:px-6 lg:px-12 ">
    //     <Image
    //       src="/Homepage/shapes/dott_img.webp"
    //       alt="Background"
    //       width={150}
    //       height={150}
    //       className=" w-20 md:w-40 h-20 md:h-40 object-container -bottom-10  md:-bottom-20 left-0 object-center absolute z-0 animate-bounce [animation-duration:6s]"
    //       priority
    //     />
    //     <Image
    //       src="/Homepage/home-banner1.png"
    //       alt="Background"
    //       width={150}
    //       height={150}
    //       className=" w-25  h-20 md:w-40 md:h-30 lg:w-50 lg:h-40  object-container top-[20%] md:top-[20%] lg:top-[20%]  right-[16%] md:right-[16%] object-center absolute z-10 animate-bounce [animation-duration:10s]"
    //       priority
    //     />
    //     <Image
    //       src="/Homepage/home-banner2.png"
    //       alt="Background"
    //       width={150}
    //       height={150}
    //       className=" w-30  h-20  md:w-50 md:h-30 lg:w-70 lg:h-40 object-container top-[50%]   right-[14%] md:top-[50%] md:right-[14%] lg:top-[70%] lg:right-[10%] object-center absolute z-10 animate-bounce [animation-duration:10s]"
    //       priority
    //     />
    //     <Image
    //       src="/Homepage/home-banner3.png"
    //       alt="Background"
    //       width={150}
    //       height={150}
    //       className=" w-20  h-20 md:w-30 md:h-25 lg:w-50 lg:h-35 object-container top-[45%] left-[25%]  md:top-[50%]  md:left-[25%] lg:top-[70%] lg:left-[50%] object-center absolute z-10 animate-bounce [animation-duration:10s]"
    //       priority
    //     />
    //     <div className="max-w-[80rem] mx-auto min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between gap-10 md:gap-0">
    //       <div className="w-full text-center lg:text-left lg:w-1/2">
    //         <ContainerScroll
    //           titleComponent={
    //             <>
    //               <h1 className="text-3xl sm:text-4xl lg:text-6xl  font-bold text-gray-900 mb-6 leading-snug lg:leading-tight">
    //                 Build{" "}
    //                 <span className="text-orange-500">
    //                   {texts[index].substring(0, subIndex)}
    //                   <span className="border-r-2 border-orange-500 animate-pulse ml-0.5"></span>
    //                 </span>
    //                 <br /> with Camlenio
    //               </h1>
    //               {/* <p className="mt-4 text-lg text-center text-gray-600 max-w-xl">
    //                       Where innovation meets design — delivering digital experiences
    //                       that feel effortless, modern, and unforgettable.
    //                     </p> */}
    //             </>
    //           }
    //         >
    //           <Image
    //             src={`/adminpannel.jpg`}
    //             alt="hero"
    //             height={720}
    //             width={1400}
    //             className="mx-auto rounded-2xl object-cover h-full object-left-top"
    //             draggable={false}
    //           />
    //         </ContainerScroll>

    //         <p className="text-base sm:text-lg lg:text-xl text-gray-800 max-w-md md:max-w-xl mx-auto lg:mx-0 mb-6">
    //           Looking for IT infrastructure? Ready to tackle unique challenges
    //           to accelerate businesses in the digital age.
    //         </p>
    //         <button className="relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 overflow-hidden font-semibold text-gray-900 bg-white rounded-full group text-sm sm:text-base lg:text-lg">
    //           <span className="absolute inset-0 w-full h-full bg-orange-500 rounded-full transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
    //           <span className="relative z-10 group-hover:text-white transition-colors duration-500 flex items-center gap-2">
    //             Talk to Experts <FaLongArrowAltRight />
    //           </span>
    //         </button>
    //       </div>
    //       <motion.div
    //         initial={{ y: 0, opacity: 1 }}
    //         whileInView={{ opacity: 1 }}
    //         animate={{
    //           y: [-10, 10],
    //         }}
    //         transition={{
    //           duration: 4,
    //           repeat: Infinity,
    //           repeatType: "mirror",
    //           ease: "easeInOut",
    //         }}
    //         className="w-full lg:w-1/2 max-w-md sm:max-w-lg lg:max-w-2xl py-6"
    //       >
    //         <Image
    //           src="/Homepage/home_banner1.png"
    //           alt="Hero"
    //           width={900}
    //           height={400}
    //           className="w-[10rem]  h-[20rem] md:w-[14rem]  md:h-[28rem] lg:w-[18rem]  lg:h-[36rem] rounded-xl object-cover mx-auto mt-4"
    //         />
    //       </motion.div>
    //     </div>
    //   </div>
    //   <BackToTopButton />
    // </div>
    <div className="overflow-hidden flex justify-center text-center items-center bg-gradient-to-r from-indigo-50 via-orange-100 to-indigo-100 bg-[length:200%_200%] animate-gradientMove">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl  font-bold text-gray-900 mb-6 leading-snug lg:leading-tight">
              Build{" "}
              <span className="text-orange-500">
                {texts[index].substring(0, subIndex)}
                <span className="border-r-2 border-orange-500 animate-pulse ml-0.5"></span>
              </span>
              <br /> with Camlenio
            </h1>
            {/* <p className="mt-4 text-lg text-center text-gray-600 max-w-xl">
                  Where innovation meets design — delivering digital experiences
                  that feel effortless, modern, and unforgettable.
                </p> */}
          </>
        }
      >
        <Image
          src={`/adminpannel.jpg`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
};
export default Hero;
