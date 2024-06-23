"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import img1 from "../public/images/andrew-neel-ute2XAFQU2I-unsplash.jpg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const imageVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.5, duration: 0.8, ease: "easeInOut" },
  }),
};

const About: React.FC = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  const [ref1, inView1] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [ref3, inView3] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView1) {
      controls1.start("visible");
    } else {
      controls1.start("hidden");
    }
  }, [controls1, inView1]);

  useEffect(() => {
    if (inView2) {
      controls2.start("visible");
    } else {
      controls2.start("hidden");
    }
  }, [controls2, inView2]);

  useEffect(() => {
    if (inView3) {
      controls3.start("visible");
    } else {
      controls3.start("hidden");
    }
  }, [controls3, inView3]);

  return (
    <section
      className="flex items-center mx-auto justify-center bg-white text-black py-20"
      id="about"
    >
      <div className="container mx-auto flex flex-col lg:flex-row justify-center">
        <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end px-4 lg:px-0 mb-8 lg:mb-0">
          <motion.div
            ref={ref1}
            className="absolute top-0 left-0 w-40 h-40 lg:w-64 lg:h-64 border-4 border-white shadow-lg"
            initial="hidden"
            animate={controls1}
            variants={imageVariants}
            custom={0}
          >
            <Image src={img1} alt="Image 1" layout="fill" objectFit="cover" />
          </motion.div>

          <motion.div
            ref={ref2}
            className="absolute top-16 left-40 w-40 h-40 lg:w-64 lg:h-64 border-4 border-white shadow-lg z-10"
            initial="hidden"
            animate={controls2}
            variants={imageVariants}
            custom={1}
          >
            <Image src={img1} alt="Image 2" layout="fill" objectFit="cover" />
          </motion.div>

          <motion.div
            ref={ref3}
            className="absolute top-0 right-0 w-40 h-40 lg:w-64 lg:h-64 border-4 border-white shadow-lg"
            initial="hidden"
            animate={controls3}
            variants={imageVariants}
            custom={2}
          >
            <Image src={img1} alt="Image 3" layout="fill" objectFit="cover" />
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left px-4 lg:px-8 py-8">
          <h2 className="text-indigo-600 text-[22px] font-semibold mb-2">
            — About Zyntel Recruitment.
          </h2>
          <h1 className="text-gray-700 text-3xl md:text-4xl font-bold mb-4">
            A Leading Global Provider Of Recruitment & Consultancy Solutions.
          </h1>
          <p className="text-gray-500 text-base md:text-lg mb-8">
            Creating products with a strong identity. We provide brilliant ideas
            and adding the world called success brand. We deliver customized
            marketing campaign to use your audience to make a positive move.
          </p>
          <div className="flex flex-col md:flex-row justify-center lg:justify-start gap-4">
            <button className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-gray-800">
              Explore Details
            </button>
            <button className="bg-white text-black border rounded-md py-2 px-4 hover:bg-gray-100">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
