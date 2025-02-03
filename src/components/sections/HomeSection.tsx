import { NavTitle } from "@/constant";
import Image from "next/image";
import React from "react";
import { FiMail, FiDownload, FiLinkedin, FiGithub } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";
import avatar from "../../../public/avatar.jpg";
const HomeSection = () => {
  return (
    <section
      id={NavTitle.home}
      className="pt-20 min-h-screen flex items-center"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <Image
            src={avatar}
            alt="Profile"
            width={400}
            height={400}
            className="rounded-full w-64 h-64 object-cover mx-auto mb-8 md:mb-0"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <TypeAnimation
            sequence={["Hello, I'm Dat", 1000, "A Full Stack Developer", 1000]}
            wrapper="h2"
            repeat={Infinity}
            className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4"
          />
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Building digital experiences that make a difference
          </p>
          <div className="flex space-x-4 justify-center md:justify-start">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              <FiDownload className="inline mr-2" /> Download Resume
            </button>
            <button className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-6 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
              <FiMail className="inline mr-2" /> Contact Me
            </button>
            <button className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-6 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
              <FiLinkedin className="inline" />{" "}
            </button>
            <button className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-6 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
              <FiGithub className="inline" />{" "}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
