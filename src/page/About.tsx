"use client";

import { motion } from "motion/react";
import AboutHeroSection from "@/components/about-hero";
import { useCustomScroll } from "@/hooks/useCustomScroll";

const About = () => {
  const { handleViewportEnter, handleViewportLeave } = useCustomScroll();

  return (
    <section id="About" className="center w-full overflow-hidden md:py-12">
      <motion.div
        onViewportEnter={() => handleViewportEnter("About")}
        onViewportLeave={() => handleViewportLeave("Home", "Projects")}
      >
        <AboutHeroSection />
      </motion.div>
    </section>
  );
};

export default About;
