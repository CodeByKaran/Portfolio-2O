import { motion } from "framer-motion";
import { isOnce } from "@/constants";

export default function ContactHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: isOnce }}
      transition={{ duration: 0.5 }}
      className="mb-8 text-center sm:mb-12"
    >
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        Get In Touch
      </h2>
      <p className="mt-4 text-muted-foreground md:text-lg">
        Feel free to reach out for collaborations, opportunities, or just to say hello!
      </p>
      <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-primary"></div>
    </motion.div>
  );
}
