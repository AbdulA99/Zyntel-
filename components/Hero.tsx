"use client"
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUsers, FaThumbsUp, FaBuilding } from 'react-icons/fa';
import Image from "next/image";
import HeroImage from "../public/images/austin-distel-wD1LRb9OeEo-unsplash.jpg";



// Define the stats with icons
const stats = [
  { label: "Number Of Successful Candidates", value: 231, icon: <FaUsers className="text-blue-600 text-3xl" /> },
  { label: "Verified Testimonials", value: 103, icon: <FaThumbsUp className="text-blue-600 text-3xl" /> },
  { label: "Clients Worked With", value: 84, icon: <FaBuilding className="text-blue-600 text-3xl" /> },
];

// Custom hook for counting up
const useCountUp = (endValue) => {
  const ref = useRef();

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const incrementTime = Math.abs(Math.floor(duration / endValue));
    const timer = setInterval(() => {
      start += 1;
      ref.current.innerText = start;
      if (start === endValue) clearInterval(timer);
    }, incrementTime);
  }, [endValue]);

  return ref;
};

// StatsSection Component
const StatsSection = () => {
  return (
    <div className="relative">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
        style={{ background: ''}}
      />
      <div className="relative max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center mb-8 md:mb-0">
            <div className="flex items-center justify-center mb-2">
              {stat.icon}
            </div>
            <div className="flex items-baseline justify-center">
              <span className="text-xl md:text-2xl font-bold text-black dark:text-white mr-2" ref={useCountUp(stat.value)}>
                0
              </span>
              <span className="text-xl md:text-2xl font-bold text-black dark:text-white">↑</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Hero Component
const Hero = () => {
  return (
    <section className="py-20 mt-14 bg-white dark:bg-gray-900" id="hero">
      <div className="max-w-screen-xl mx-auto text-gray-600 dark:text-gray-300 gap-x-12 flex flex-col md:flex-row items-center justify-between px-4 md:px-8">
        <div className="flex-none space-y-5 lg:max-w-xl">
          <h1 className="text-sm text-indigo-600 dark:text-indigo-400 font-medium text-[22px] xl:text-[20px]">
            We Are #1 On The Market.
          </h1>
          <h2 className="xl:text-[64px] text-4xl text-gray-800 dark:text-gray-100 font-extrabold md:text-5xl lg:text-6xl">
            Bridging Talents{" "}
            <span className="text-indigo-600 dark:text-indigo-400">&</span>{" "}
            Building Futures.
          </h2>
          <p className="lg:text-[18px] xl:text-[18px]">
            At Zyntel Recruitment, we bridge the gap between exceptional talent
            and leading organizations, ensuring a perfect match every time.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href="#"
              className="block py-2 px-4 text-center text-white font-medium bg-indigo-600 dark:bg-indigo-500 duration-150 hover:bg-indigo-500 dark:hover:bg-indigo-400 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400 font-medium duration-150 active:bg-gray-100 dark:active:bg-gray-700 border rounded-lg md:inline-flex"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex-none mt-14 md:mt-0 md:max-w-xl xl:max-w-xl">
          <Image src={HeroImage} className="md:rounded-tl-[108px]" alt="Hero" />
        </div>
      </div>
      <div className="mt-16">
        <StatsSection />
      </div>
    </section>
  );
};

export default Hero;
