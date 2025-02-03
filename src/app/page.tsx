"use client";
import React from "react";
import ProjectSection from "@/components/sections/ProjectSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HomeSection from "@/components/sections/HomeSection";
import NavBar from "@/components/NavBar";
import ContactSection from "@/components/sections/ContactSection";

const Portfolio = () => {
  return (
    <div>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <NavBar />
        <HomeSection />
        <ExperienceSection />
        <ProjectSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Portfolio;
