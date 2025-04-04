import { motion } from "framer-motion";
import { isOnce } from "@/constants";

export default function HeroHeader() {
  return (
    <div className="space-y-2">
      <motion.h1
        className="text-3xl font-bold tracking-tighter text-primary sm:text-5xl xl:text-6xl/none"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: isOnce }}
        transition={{ duration: 0.5 }}
      >
        Karan Kumar
      </motion.h1>
      <motion.h2
        className="text-xl font-medium text-muted-foreground sm:text-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: isOnce }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Full-Stack Developer
      </motion.h2>
      <motion.p
        className="max-w-[600px] text-muted-foreground md:text-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: isOnce }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Building modern, scalable, and interactive web applications with Next.js
        and the MERN stack.
      </motion.p>
    </div>
  );
}
