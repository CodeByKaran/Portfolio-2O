"use client";

import ProjectsHero from "@/components/project/ProjectHero";
import { useCustomScroll } from "@/hooks/useCustomScroll";
import { motion } from "motion/react";

const Projects = () => {
  const { handleViewportEnter, handleViewportLeave } = useCustomScroll();

  return (
    <section id="Projects" className="center w-full overflow-hidden md:py-12">
      <motion.div
        onViewportEnter={() => handleViewportEnter("Projects")}
        onViewportLeave={() => handleViewportLeave("About", "Contact")}
      >
        <ProjectsHero />
      </motion.div>
    </section>
  );
};

export default Projects;
