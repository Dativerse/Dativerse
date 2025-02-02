"use client";
import React from "react";
import useSection from "@/hooks/useActiveSection";
import { NavTitle } from "@/constant";

const NavBar = () => {
  const activeSection = useSection();

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-lg z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          Portfolio
        </h1>
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex space-x-6">
            {Object.values(NavTitle).map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`${
                  activeSection === item
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-300"
                } hover:text-blue-600 dark:hover:text-blue-400 transition-colors capitalize`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
