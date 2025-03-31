import { isOnce } from "@/constants";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: isOnce }}
      className="mb-12 text-center"
    >
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        About Me
      </h2>
      <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-primary"></div>
    </motion.div>
  );
};

export default AboutHero;
