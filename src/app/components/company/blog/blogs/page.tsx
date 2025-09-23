"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaComments, FaHeart } from "react-icons/fa";

const Blogs = () => {
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
    <div className="relative py-20 bg-gradient-to-r from-indigo-100 via-orange-100 to-indigo-50 bg-[length:200%_200%] animate-gradientMove overflow-hidden ">
      <div className="max-w-7xl mx-auto  text-center py-20 px-8 md:px-16">
        <span className="relative inline-block px-4 py-1.5 rounded-full border border-orange-50 bg-orange-100 shadow-sm text-sm font-medium text-orange-600 mb-4">
          <span className="absolute w-7 h-[6px] rounded-full bg-orange-500 left-[-1.2rem] top-1/2 -translate-y-1/2"></span>
          Camlenio Software Development Company
        </span>
        <h2
          className="text-3xl sm:text-4xl font-bold text-orange-500 mb-4"
          style={{
            textShadow:
              "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
          }}
        >
          Blogs
        </h2>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-gray-600 text-sm text-left md:text-base flex-wrap break-words mb-12 font-sans"
        >
          Camlenio is an established software development company in India that
          is committed to helping businesses thrive through innovative digital
          solutions. Our expert team Blends creativity, technology, and strategy
          to build custom websites, mobile apps, and fintech platforms that
          actually transact business.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
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
