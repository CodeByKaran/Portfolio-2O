

import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import { isOnce } from "@/constants";

export default function Education() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: isOnce }}
      className="w-full min-w-0 rounded-2xl border border-black/10 bg-black/10 p-4 backdrop-blur-md sm:p-6 dark:border-white/10 dark:bg-gray-900/10"
    >
      <h3 className="mb-4 text-xl font-semibold">Education</h3>
      <div className="space-y-4">
        {/* BCA */}
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
            <GraduationCap className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-medium">Bachelor of Computer Applications (BCA)</h4>
            <p className="mt-1 text-muted-foreground">University of Patna</p>
            <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>2023 - 2026</span>
            </div>
          </div>
        </div>
        {/* Web Development Certification */}
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
            <GraduationCap className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-medium">Web Development Certified</h4>
            <p className="mt-1 text-muted-foreground">Full Stack Development Certified</p>
            <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>2024-2025</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
