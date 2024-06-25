"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data';

const cardVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.3, // Stagger the animation
      duration: 0.5,
    },
  }),
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: {
      yoyo: Infinity, // Repeats the animation indefinitely
    },
  },
};

const ServicesSection = () => {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900" id='services'>
      <div className="max-w-screen-xl mx-auto text-center mb-12">
        <h2 className="text-indigo-600 dark:text-indigo-400 text-[22px] font-semibold mb-2">
          — Our Services
        </h2>
        <h1 className="text-gray-700 dark:text-gray-100 text-3xl md:text-4xl font-bold">
          Tailored Recruitment <br />and Consultancy Services
        </h1>
      </div>
      <div className="max-w-screen-xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center border border-gray-200 dark:border-gray-700 rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-lg"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <div className="flex items-center justify-center mb-4">
              <service.icon className="text-indigo-600 dark:text-indigo-400 text-6xl mb-4" />
            </div>
            <h3 className="text-lg font-bold mb-4">{service.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{service.description}</p>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <motion.a
          href="tel:+353876276005" // Replace with your phone number
          className="bg-indigo-600 text-white py-3 px-8 rounded-lg shadow-lg font-semibold hover:bg-indigo-700"
          variants={buttonVariants}
          whileHover="hover"
        >
          Book Free Consultation Now
        </motion.a>
      </div>
    </section>
  );
};

export default ServicesSection;
