import Image from "next/image";
import React from "react";

const MakeUsTop = () => {
  return (
    <div className="overflow-hidden bg-gradient-to-r from-indigo-50 via-orange-100 to-indigo-100 bg-[length:200%_200%] animate-gradientMove py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        <div className="relative  rounded-2xl group-hover:shadow-md p-8 text-left overflow-hidden flex flex-col justify-center md:col-span-2 lg:col-span-2 leading-snug">
          <Image
            src="/Homepage/bg_shape.png"
            alt="Background"
            fill
            className=" object-fill absolute inset-0 z-0 rounded-2xl"
            priority
          />

          <div className="w-20 h-20 z-20  py-4 mb-6">
            <Image
              src="/Homepage/secting_icon.png"
              alt="Award"
              height={60}
              width={60}
              className="object-contain absolute top-10 left-10"
            />
          </div>
          <h1 className=" w-full  z-20 text-xl  md:text-2xl font-semibold text-gray-50 mb-2">
            CWhat Makes Us a Top App Development Company?
          </h1>
          <p className="relative z-20 text-base font-medium text-gray-50 ">
            We are at the front line of leveraging cutting-edge technologies and
            adhering to best industry practices to deliver secure and optimized
            digital solutions. Experience the difference of working with an IT
            company that has a single vision of positioning you as the leader in
            your industry.
          </p>
        </div>
        <div
          className="bg-transparent border-2 border-gray-300 shadow-md group rounded-2xl hover:shadow-3xl p-6 flex flex-col 
          text-left leading-tight "
        >
          <div className="w-20 h-20 z-20 group-hover:scale-80 py-4 mb-8 transition-all duration-300">
            <Image
              src="/Homepage/on_demand_resources.webp"
              alt="Award"
              height={60}
              width={60}
              className="object-contain "
            />
          </div>
          <div className="transition-all duration-300 group-hover:-translate-y-8">
            <h3 className="text-2xl font-extrabold text-gray-900 mb-4">
              On-Demand Resources
            </h3>
            <p className="text-gray-500 text-[1.2rem] font-normal">
              We have a flexible, and salable workforce of resources to allow
              you to hire the professionals to adapt to your ongoing
              requirements without long-term commitment.
            </p>
          </div>
        </div>
        <div
          className="bg-transparent border-2 border-gray-300 group rounded-2xl group-hover:shadow-xl p-6 flex flex-col 
          text-left leading-tight "
        >
          <div className="w-20 h-20 z-20 group-hover:scale-80 py-4 mb-8 transition-all duration-300">
            <Image
              src="/Homepage/agile_methodology.webp"
              alt="Award"
              height={50}
              width={50}
              className="object-contain "
            />
          </div>
          <div className="transition-all duration-300 group-hover:-translate-y-8">
            <h3 className="text-2xl font-extrabold text-gray-900 mb-4">
              Agile Methodology
            </h3>
            <p className="text-gray-500 text-[1.2rem] font-normal">
              We’re a strong advocate of agile development methodologies
              enabling us to deliver iterative improvements to meet client
              expectations and market demands.
            </p>
          </div>
        </div>
        <div
          className="bg-transparent border-2 border-gray-300 group rounded-2xl group-hover:shadow-xl p-6 flex flex-col 
          text-left leading-tight "
        >
          <div className="w-20 h-20 z-20 group-hover:scale-80 py-4 mb-8 transition-all duration-300">
            <Image
              src="/Homepage/security_first.webp"
              alt="Award"
              height={50}
              width={50}
              className="object-contain "
            />
          </div>
          <div className="transition-all duration-300 group-hover:-translate-y-8">
            <h3 className="text-2xl font-extrabold text-gray-900 mb-4">
              Security-First
            </h3>
            <p className="text-gray-500 text-[1.2rem] font-normal">
              Our development process strongly embeds comprehensive threat
              modeling, periodic security audits, and penetration testing to
              develop highly secure mobile applications for your business.
            </p>
          </div>
        </div>
        <div
          className="bg-transparent border-2 border-gray-300 group rounded-2xl group-hover:shadow-xl p-6 flex flex-col 
          text-left leading-tight "
        >
          <div className="w-20 h-20 z-20 group-hover:scale-80 py-4 mb-8 transition-all duration-300">
            <Image
              src="/Homepage/post_launch_support.webp"
              alt="Award"
              height={50}
              width={50}
              className="object-contain "
            />
          </div>
          <div className="transition-all duration-300 group-hover:-translate-y-8">
            <h3 className="text-2xl font-extrabold text-gray-900 mb-4">
              Post-Launch Support
            </h3>
            <p className="text-gray-500 text-[1.2rem] font-normal">
              From bug fixing to performance monitoring, we offer comprehensive
              support after deployment to ensure your app can adapt to the
              evolving market conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeUsTop;
