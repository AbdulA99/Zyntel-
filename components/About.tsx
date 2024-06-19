import React from "react";
import Image from "next/image";
import img1 from '../public/images/andrew-neel-ute2XAFQU2I-unsplash.jpg';
// import img2 from '../../public/image2.jpg';
// import img3 from '../../public/image3.jpg';

const About: React.FC = () => {
  return (
    <section className="flex items-center mx-auto justify-center bg-white text-black py-20">
      <div className="container mx-auto flex flex-col lg:flex-row justify-center">

        <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end px-4 lg:px-0 mb-8 lg:mb-0">
          <div className="absolute top-0 left-0 w-40 h-40 lg:w-64 lg:h-64 border-4 border-white shadow-lg">
            <Image src={img1} alt="Image 1" layout="fill" objectFit="cover" /> 
          </div>

          <div className="absolute top-16 left-40 w-40 h-40 lg:w-64 lg:h-64 border-4 border-white shadow-lg z-10">
            <Image src={img1} alt="Image 2" layout="fill" objectFit="cover" /> 
          </div>

          <div className="absolute top-0 right-0 w-40 h-40 lg:w-64 lg:h-64 border-4 border-white shadow-lg">
            <Image src={img1} alt="Image 3" layout="fill" objectFit="cover" />
          </div>
        </div>


        <div className="w-full lg:w-1/2 text-center lg:text-left px-4 lg:px-8 py-8">
          <h2 className="text-indigo-600 text-[22px] font-semibold mb-2">
            About Zyntel Recruitment.
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
            <button className="bg-white text-black border rounded-md py-2 px-4  hover:bg-gray-100">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
