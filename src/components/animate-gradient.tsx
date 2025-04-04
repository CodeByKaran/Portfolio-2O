"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useIsMobile } from "@/hooks/useMobile";

export default function AnimatedGradient() {
  const [mounted, setMounted] = useState(false);
  const isMobile = useIsMobile();
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const lightColors = [
    "rgba(75, 0, 130, 0.2)", // Indigo
    "rgba(0, 128, 139, 0.4)", // Dark blue
    "rgba(0, 220, 128, 0.3)", // Purple
  ];

  const darkColors = [
    "rgba(75, 0, 130, 0.7)", // Indigo
    "rgba(0, 0, 139, 0.7)", // Dark blue
    "rgba(128, 0, 128, 0.7)", // Purple
  ];

  const colors = theme === "dark" ? darkColors : lightColors;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {isMobile ? (
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 0% 0%, ${colors[0]} 0%, transparent 50%),radial-gradient(circle at 0% 0%, ${colors[1]} 0%, transparent 50%),radial-gradient(circle at 0% 0%, ${colors[2]} 0%, transparent 50%)`,
          }}
        />
      ) : (
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              `radial-gradient(circle at 0% 0%, ${colors[0]} 0%, transparent 50%)`,
              `radial-gradient(circle at 0% 0%, ${colors[1]} 0%, transparent 50%)`,
              `radial-gradient(circle at 0% 0%, ${colors[2]} 0%, transparent 50%)`,
              `radial-gradient(circle at 0% 0%, ${colors[0]} 0%, transparent 50%)`,
            ],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      )}
    </div>
  );
}
