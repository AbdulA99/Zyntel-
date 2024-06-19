import React from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import Image from "next/image";

// Import your illustrations (replace these with the actual paths)
import Illustration1 from "../public/images/NewsPaperReading.png";
import Illustration2 from "../public/images/LadyPc.png";
import Illustration3 from "../public/images/TeamDiscussion.png";

const Services = () => {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-indigo-600 dark:text-indigo-400 text-[22px] font-semibold mb-2">
          — Our Services
        </h2>
        <h1 className="text-gray-700 dark:text-gray-100 text-3xl md:text-4xl font-bold mb-8">
          Tailored Recruitment and <br /> Consultancy Services
        </h1>
      </div>
      <div className="max-w-screen-xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 relative">
          <h3 className="text-lg font-bold mb-4 ">01. CV Enhancement</h3>
          <p className="font-semibold text-gray-700 dark:text-gray-300 mb-4">
            Send Your <span className="text-blue-500">CV</span> In Any Format
            Easily.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Zyntel’s CV enhancement service crafts tailored resumes that
            highlight your skills and achievements, maximizing your job
            prospects.
          </p>
          <button className="flex items-center justify-center gap-x-2 py-2 px-4 text-black font-medium rounded-md border ">
            Upload CV
            <IoCloudUploadOutline className="w-5 h-5" />
          </button>
          <Image
            src={Illustration1}
            alt="CV Enhancement"
            className="absolute bottom-4 right-4 w-32 h-32"
          />
        </div>

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 relative">
          <h3 className="text-lg font-bold mb-4">02. Job Search</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-2 font-semibold ml-2">
            We provide tailored{" "}
            <span className="text-blue-500">Job Search</span> services.
          </p>
          <p className="text-gray-600 dark:text-gray-400 ml-2">
            Zyntel’s job search service connects you with opportunities that
            match your career goals.
          </p>
          <Image
            src={Illustration2}
            alt="Job Search"
            className="absolute bottom-4 right-0 w-32 h-32 flex top-0 "
          />

          
         
        </div>

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 relative">
          <h3 className="text-lg font-bold mb-4">03. Consultation</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4 font-semibold">
            We provide a free 30 min{" "}
            <span className="text-blue-500">Consultation</span>.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            At Zyntel, our consultation service provides expert guidance in
            recruitment and career advancement, offering tailored industry
            insights.
          </p>
          <Image
            src={Illustration3}
            alt="Consultation"
            className="absolute bottom-4 right-4 w-32 h-32"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
