"use client";

import ProjectsHeroSection from "@/components/projects-hero";
import { useCustomScroll } from "@/hooks/useCustomScroll";
import { motion } from "motion/react";

const Projects = () => {
  const { handleViewportEnter, handleViewportLeave } = useCustomScroll();

  return (
    <section
      id="Projects"
      className="center relative w-full overflow-hidden py-12"
    >
      <motion.div
        className="container px-4 md:px-6"
        onViewportEnter={() => handleViewportEnter("Projects")}
        onViewportLeave={() => handleViewportLeave("About", "Contact")}
      >
        <ProjectsHeroSection />
      </motion.div>
    </section>
  );
};

export default Projects;
