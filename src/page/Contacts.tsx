"use client";

import { motion } from "motion/react";
import { useCustomScroll } from "@/hooks/useCustomScroll";
import ContactsHero from "@/components/contact/ContactHero";

const Contacts = () => {
  const { handleViewportEnter, handleViewportLeave } = useCustomScroll();
  return (
    <section id="Contact" className="center w-full overflow-hidden md:py-12">
      <motion.div
        onViewportEnter={() => handleViewportEnter("Contact")}
        onViewportLeave={() => handleViewportLeave("Projects", "Contact")}
      >
        <ContactsHero/>
      </motion.div>
    </section>
  );
};

export default Contacts;
