"use client";

import { motion } from "motion/react";
import ContactsHeroSection from "@/components/contacts-hero";
import { useCustomScroll } from "@/hooks/useCustomScroll";

const Contacts = () => {
  const { handleViewportEnter, handleViewportLeave } = useCustomScroll();
  return (
    <section
      id="Contact"
      className="center relative w-full overflow-hidden py-12"
    >
      <motion.div
        className="container px-4 md:px-6"
        onViewportEnter={() => handleViewportEnter("Contact")}
        onViewportLeave={() => handleViewportLeave("Projects", "Contact")}
      >
        <ContactsHeroSection />
      </motion.div>
    </section>
  );
};

export default Contacts;
