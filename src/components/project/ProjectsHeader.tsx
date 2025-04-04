import { isOnce } from "@/constants";
import { motion } from "framer-motion";



export default function ProjectsHeader() {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: isOnce }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          My Projects
        </h2>
        <p className="mt-4 text-muted-foreground md:text-lg">
          Showcasing my best work and the problems I&apos;ve solved
        </p>
        <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-primary"></div>
      </motion.div>
    );
  }