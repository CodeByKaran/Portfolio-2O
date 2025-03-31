import { isOnce } from "@/constants";
import { motion } from "framer-motion";
import { Code, Terminal } from "lucide-react";

const PhilosophySection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      viewport={{ once: isOnce }}
      className="rounded-2xl border border-white/10 bg-black/10 p-6 backdrop-blur-md dark:bg-gray-900/10"
    >
      <div className="flex items-center gap-3">
        <div className="rounded-full bg-primary/20 p-2">
          <Code className="h-5 w-5 text-primary" />
        </div>
        <h3 className="text-xl font-semibold">Coding Philosophy</h3>
      </div>
      <p className="mt-4 text-muted-foreground">
        I believe in writing clean, maintainable code that follows best
        practices and industry standards. My approach focuses on creating
        scalable solutions that are both efficient and easy to understand.
      </p>
      <div className="mt-4 rounded-lg bg-background/50 p-4 font-mono text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Terminal className="h-4 w-4" />
          <span className="text-primary">const</span> myApproach = &#123;
        </div>
        <div className="ml-6">
          readability:{" "}
          <span className="text-green-500">&#39;essential&#39;</span>,
        </div>
        <div className="ml-6">
          performance:{" "}
          <span className="text-green-500">&#39;optimized&#39;</span>,
        </div>
        <div className="ml-6">
          maintenance:{" "}
          <span className="text-green-500">&#39;simplified&#39;</span>
        </div>
        <div>&#125;;</div>
      </div>
    </motion.div>
  );
};

export default PhilosophySection;
