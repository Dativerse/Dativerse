import React from "react";
import { NavTitle } from "@/constant";

const ExperienceSection = () => {
  const experience = [
    {
      company: "Nexcel Solutions",
      role: "Full Stack Developer",
      duration: "2023 - Present",
      description: "Developed and maintained web applications",
    },
  ];

  return (
    <section id={NavTitle.experience} className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Experience
        </h2>
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                {exp.company}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                {exp.role}
              </p>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                {exp.duration}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
