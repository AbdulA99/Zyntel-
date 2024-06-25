import React from "react";
import Image from "next/image";
import aboutImage from "../public/images/AboutCV.webp";

const AboutUsSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="about">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <div className="relative w-full h-64 lg:h-[600px]  overflow-hidden shadow-lg">
            <Image
              src={aboutImage}
              alt="About Us"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-12">
          <h2 className="text-indigo-600 text-xl font-semibold mb-2">
            — About Zyntel Recruitment
          </h2>
          <h1 className="text-gray-700 dark:text-gray-100 text-3xl md:text-4xl font-bold mb-4">
            A Leading Global Provider Of Recruitment & Consultancy Solutions.
          </h1>
          <p className="text-gray-500 dark:text-gray-300 text-base md:text-lg mb-6">
            At Zyntel, we are a leading global provider of recruitment and
            consultancy solutions. We connect top talent with world-class
            organizations, delivering tailored strategies that drive growth and
            advancement.
          </p>
          <button className="bg-indigo-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-indigo-500 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
