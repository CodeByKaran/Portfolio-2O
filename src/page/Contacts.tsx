"use client";

import { motion } from "motion/react";
import ContactsHeroSection from "@/components/contacts-hero";
import { useCustomScroll } from "@/hooks/useCustomScroll";

const Contacts = () => {
  const { handleViewportEnter, handleViewportLeave } = useCustomScroll();
  return (
    <section id="Contact" className="center w-full overflow-hidden md:py-12">
      <motion.div
        onViewportEnter={() => handleViewportEnter("Contact")}
        onViewportLeave={() => handleViewportLeave("Projects", "Contact")}
      >
        <ContactsHeroSection />
      </motion.div>
    </section>
  );
};

export default Contacts;
