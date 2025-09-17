"use client";
import Image from "next/image";
import { FaCalendarAlt, FaComments, FaHeart } from "react-icons/fa";
import React from "react";

const BlogSection = () => {
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
  ];

  return (
    <div className="bg-gradient-to-r from-indigo-100 via-orange-200 to-indigo-200 bg-[length:200%_200%] animate-gradientMove">
      <div className="py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="rounded-xl shadow-md overflow-hidden flex flex-col h-full bg-white group"
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

                  <h3 className="text-xl font-semibold mb-4 text-gray-950  transition-colors duration-300">
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
export default BlogSection;
