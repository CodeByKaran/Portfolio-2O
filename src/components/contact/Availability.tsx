

import { motion } from "framer-motion";
import { isOnce } from "@/constants";

export default function Availability() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      viewport={{ once: isOnce }}
      className="rounded-2xl border border-black/10 bg-black/10 p-6 backdrop-blur-md dark:border-white/10 dark:bg-gray-900/10"
    >
      <h3 className="mb-4 text-xl font-semibold">Current Availability</h3>
      <div className="flex items-center gap-4">
        <div className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
        </div>
        <p>Available for freelance projects and full-time opportunities</p>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">
        Currently accepting new projects starting from June 2023
      </p>
    </motion.div>
  );
}
