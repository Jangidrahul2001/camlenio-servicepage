"use client";
import React from "react";
import { MapPin, Clock, Filter } from "lucide-react";
import { jobs } from "../../../../../../lib/jobs";
import Link from "next/link";

const OpenPositions = () => {
  return (
    <div className="py-20 bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove">
      <div className="max-w-7xl mx-auto px-8 md:px-16 ">
        <h2
          className="text-3xl sm:text-4xl font-bold mb-4 text-orange-500 text-center"
          style={{
            textShadow:
              "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
          }}
        >
          Open Positions
        </h2>
        <p className="max-w-5xl mx-auto text-gray-600 text-sm md:text-base mb-12 font-sans text-center">
          Join our team and make an impact
        </p>

        <div className="flex flex-wrap gap-4 mb-8 justify-center  text-gray-900">
          <button className="flex items-center gap-2 border-1 border-orange-300 px-4 py-2 rounded-lg text-sm  hover:bg-orange-500 hover:text-gray-50">
            <Filter className="h-4 w-4" />
            All Roles
          </button>
          <button className="border-1 border-orange-300 px-4 py-2 rounded-lg text-sm hover:bg-orange-500 hover:text-gray-50">
            Engineering
          </button>
          <button className="border-1 border-orange-300 px-4 py-2 rounded-lg text-sm hover:bg-orange-500 hover:text-gray-50">
            Design
          </button>
          <button className="border-1 border-orange-300 px-4 py-2 rounded-lg text-sm hover:bg-orange-500 hover:text-gray-50">
            Product
          </button>
          <button className="border-1 border-orange-300 px-4 py-2 rounded-lg text-sm hover:bg-orange-500 hover:text-gray-50">
            Remote
          </button>
        </div>

        <div className="grid gap-6">
          {jobs.map((position, index) => (
            <div
              key={index}
              className="rounded-xl border bg-orange-100 hover:scale-101 transition-transform duration-300 p-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {position.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{position.description}</p>
                  <div className="flex flex-wrap gap-2 cursor-pointer">
                    <span className="inline-flex items-center gap-1 bg-orange-200 text-gray-700 px-3 py-1 rounded-md text-sm">
                      <MapPin className="h-3 w-3" />
                      {position.location}
                    </span>
                    <span className="inline-flex items-center gap-1 bg-orange-200 text-gray-700 px-3 py-1 rounded-md text-sm">
                      <Clock className="h-3 w-3" />
                      {position.type}
                    </span>
                  </div>
                </div>
                <Link
                  href={`/jobs/${position.slug}`}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg font-medium transition shrink-0"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OpenPositions;
