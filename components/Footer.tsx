import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "../components/ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 bg-white dark:bg-gray-900" id="contact">
      <div className="flex flex-col items-center px-4 lg:px-8">
        <h2 className="text-indigo-600 text-[22px] font-semibold mb-2">
          Ready To Get Started?
        </h2>
        <h1 className="text-gray-700 dark:text-gray-100 text-3xl md:text-4xl font-bold text-center mb-8">
          Reach Out To Us Today To Find Your Dream Job.
        </h1>

        <a href="mailto:contact@jsmastery.pro">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 dark:border-gray-700 mt-16 py-6 px-4 lg:px-8">
        <p className="text-gray-500 dark:text-gray-300 text-sm md:text-base font-light mb-4 md:mb-0 md:ml-6">
          Copyright © 2024 Zyntel Recruitment.
        </p>

        <div className="flex items-center gap-6 md:gap-3">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
