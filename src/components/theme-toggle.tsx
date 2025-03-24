"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function HorizontalThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  // Effect to handle mounting state
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Get the current theme icon
  const getThemeIcon = () => {
    if (!mounted) return null;

    switch (theme) {
      case "dark":
        return <Moon className="h-4 w-4" />;
      case "light":
        return <Sun className="h-4 w-4" />;
      default:
        return <Moon className="h-4 w-4" />;
    }
  };

  // Theme options excluding the current theme
  const themeOptions = [
    { name: "light", icon: <Sun className="h-4 w-4" /> },
    { name: "dark", icon: <Moon className="h-4 w-4" /> },
  ].filter((option) => mounted && option.name !== theme);

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return <div className="h-12 w-12"></div>;
  }

  return (
    <motion.div
      className="sticky top-5 ml-2"
      initial={{
        opacity: 0,
        y: -10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        type: "spring",
        bounce: 0.5,
        duration: 0.5,
        delay: 0.5,
      }}
    >
      <div className="flex items-center">
        {/* Main button showing current theme */}
        <motion.button
          aria-label="Toggle theme"
          role="navigation"
          aria-controls="theme-menu"
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex h-12 items-center justify-center rounded-full border bg-white/10 px-4 backdrop-blur-md hover:bg-black/20 dark:border-white/10 dark:bg-gray-900/10 dark:hover:bg-gray-900/20"
          whileTap={{ scale: 0.95 }}
        >
          {getThemeIcon()}
        </motion.button>

        {/* Horizontal dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="theme-menu"
              aria-label="Theme options"
              role="menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "48px", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute top-full left-[1.3px] flex"
            >
              {themeOptions.map((option) => (
                <motion.button
                  aria-label={option.name}
                  role="menuitem"
                  key={option.name}
                  onClick={() => {
                    setTheme(option.name);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "z-50 mt-1 flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white/20 px-4 backdrop-blur-md hover:bg-white/20 dark:border-white/10 dark:bg-gray-900/10 dark:hover:bg-gray-900",
                  )}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{
                    duration: 0.2,
                    delay: option.name === "light" ? 0.1 : 0.2,
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {option.icon}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Backdrop for closing the dropdown */}
      {isOpen && (
        <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
      )}
    </motion.div>
  );
}
