import React from "react";
import { FiGithub } from "react-icons/fi";
import { NavTitle } from "@/constant";
import Image from "next/image";
import proj_empty from '../../../public/proj_empty.jpg'
const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      title: "EBuilder",
      description: "A full-stack e-learning solution using microservie acchitecture",
      image: proj_empty,
      tech: ["React", ".NET", "SpringBoot", "AWS"],
      icon: "#",
      demo: "#",
    },
    {
      id: 2,
      title: "DoTri Stack",
      description: "Eperimental stacks for web development",
      image: proj_empty,
      tech: ["Everything"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id={NavTitle.projects} className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Pet Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <FiGithub className="mr-2" /> GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
