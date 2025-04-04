"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { isOnce } from "@/constants";
import { useCustomScroll } from "@/hooks/useCustomScroll";

export default function HeroActions() {
  const { scrollInto } = useCustomScroll();

  return (
    <motion.div
      className="flex flex-col gap-2 min-[450px]:flex-row"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: isOnce }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <Button
        className="group min-[450px]:w-auto"
        onClick={() => scrollInto("Projects")}
      >
        View My Work
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
      <a
        href="https://res-console.cloudinary.com/dlvlkfl32/media_explorer_thumbnails/255ffd4f56c66ce9800b77c733a3322e/download"
        download="Karan_Kumar_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="outline" className="w-full min-[450px]:w-auto">
          Download Resume
          <Download className="ml-2 h-4 w-4" />
        </Button>
      </a>
    </motion.div>
  );
}
