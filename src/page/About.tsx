"use client";

import { motion } from "motion/react";
import AboutHeroSection from "@/components/about-hero";
import { useCustomScroll } from "@/hooks/useCustomScroll";

const About = () => {
  const { handleViewportEnter, handleViewportLeave } = useCustomScroll();

  return (
    <section
      id="About"
      className="center relative w-full overflow-hidden py-12"
    >
      <motion.div
        className="container px-4 md:px-6"
        onViewportEnter={() => handleViewportEnter("About")}
        onViewportLeave={() => handleViewportLeave("Home", "Projects")}
      >
        <AboutHeroSection />
      </motion.div>
    </section>
  );
};

export default About;
