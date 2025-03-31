"use client";

import { motion } from "motion/react";
import { useCustomScroll } from "@/hooks/useCustomScroll";
import AboutHero from "@/components/about/AboutHero";
import ProfileSection from "@/components/about/ProfileSection";
import SkillsSection from "@/components/about/SkillsSection";
import PhilosophySection from "@/components/about/PhilosophySection";

const About = () => {
  const { handleViewportEnter, handleViewportLeave } = useCustomScroll();

  return (
    <section id="About" className="center w-full overflow-hidden md:py-12">
      <motion.div
        onViewportEnter={() => handleViewportEnter("About")}
        onViewportLeave={() => handleViewportLeave("Home", "Projects")}
      >
        <div className="px-4">
          <div className="mx-auto max-w-6xl">
            <AboutHero />
            <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
              <ProfileSection />
              <div className="space-y-8">
                <SkillsSection />
                <PhilosophySection />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
