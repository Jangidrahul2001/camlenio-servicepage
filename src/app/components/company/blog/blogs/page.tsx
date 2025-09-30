"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaComments, FaHeart } from "react-icons/fa";

const Blogs = () => {
  const words = ["Blogs"];
  const blogs = [
    {
      id: 1,
      img: "/Homepage/blog_img.jpg",
      date: "02 Apr 2023",
      comments: 23,
      title: "Providing solutions for Industrial men restoration.",
    },
    {
      id: 2,
      img: "/Homepage/blog_img.jpg",
      date: "02 Apr 2023",
      comments: 25,
      title: "Occaecat nisi cupidatat deserunt culpa sit..",
    },
    {
      id: 3,
      img: "/Homepage/blog_img.jpg",
      date: "02 Apr 2023",
      comments: 33,
      title: "Do do tempor deserunt ullamco. Voluptate sunt..",
    },
    {
      id: 4,
      img: "/Homepage/blog_img.jpg",
      date: "02 Apr 2023",
      comments: 23,
      title: "Providing solutions for Industrial men restoration.",
    },
    {
      id: 5,
      img: "/Homepage/blog_img.jpg",
      date: "02 Apr 2023",
      comments: 25,
      title: "Occaecat nisi cupidatat deserunt culpa sit..",
    },
    {
      id: 6,
      img: "/Homepage/blog_img.jpg",
      date: "02 Apr 2023",
      comments: 33,
      title: "Do do tempor deserunt ullamco. Voluptate sunt..",
    },
  ];

  return (
    <div className="relative py-16 sm:py-16 md:py-18 lg:py-18 bg-gradient-to-r from-indigo-100 via-orange-100 to-indigo-50 bg-[length:200%_200%] animate-gradientMove overflow-hidden ">
      <div className="relative py-4 px-2 sm:px-4 md:px-6 lg:px-8">
        <Image
          src="/blog/blogs-bg-3.jpg"
          alt="blogs"
          width={1000}
          height={900}
          className="w-full h-48 sm:h-55 md:h-65 lg:h-68 xl:h-70 object-cover object-top rounded-[1.5rem]"
        />
        <motion.h1 className="absolute inset-0 flex items-center justify-center text-gray-50 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
          {words[0].split("").map((l, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: i * 0.08 }}
            >
              {l}
            </motion.span>
          ))}
        </motion.h1>
      </div>
      <div className="text-center px-2 sm:px-4 md:px-6 lg:px-8">
       
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="rounded-xl shadow-md overflow-hidden flex flex-col h-full bg-transparent group"
            >
              <div className="relative glare-img">
                <Image
                  src={blog.img}
                  alt={blog.title}
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 text-gray-500 text-sm mb-3">
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt /> {blog.date}
                  </span>
                  <span>-</span>
                  <span className="flex items-center gap-1">
                    <FaComments /> Comments ({blog.comments})
                  </span>
                </div>

                <h3 className="text-xl text-left font-semibold mb-4 text-gray-950  transition-colors duration-300">
                  {blog.title}
                </h3>

                <div className="mt-auto flex items-center justify-between">
                  <a
                    href="#"
                    className="flex items-center gap-2 text-orange-500 font-medium hover:gap-3 transition-all duration-300group-hover:scale-x-110 group-hover:tracking-wider origin-left"
                  >
                    Read More →
                  </a>
                  <button className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                    <FaHeart />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .glare-img {
          position: relative;
          overflow: hidden;
        }

        .glare-img::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            -30deg,
            rgba(255, 255, 255, 0) 60%,
            rgba(255, 255, 255, 0.35) 70%,
            rgba(255, 255, 255, 0) 100%
          );
          transition: 800ms ease;
          background-size: 200% 200%;
          background-position: -100% -100%;
        }

        .glare-img:hover::before {
          background-position: 100% 100%;
        }
      `}</style>
    </div>
  );
};
export default Blogs;
