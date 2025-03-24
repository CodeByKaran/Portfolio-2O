"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useNavItem } from "@/context/nav-item-provider";
import { navItems } from "@/constants";
import { NavItem } from "@/interfaces";
import { useCustomScroll } from "@/hooks/useCustomScroll";
import ThemeToggle from "@/components/theme-toggle";

export default function GlassNavigation() {
  const { activeNavItem } = useNavItem();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { scrollInto } = useCustomScroll();

  return (
    <motion.header
      className="sticky top-5 z-50 w-full"
      initial={{
        opacity: 0,
        y: -10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
        type: "spring",
        bounce: 0.5,
      }}
    >
      <nav
        aria-label="Navigation"
        className="relative mx-auto flex h-16 items-center justify-center px-4"
      >
        <div className="relative z-10 flex items-center gap-4 rounded-full border border-black/10 bg-white/20 p-2 backdrop-blur-lg dark:border-white/10 dark:bg-gray-900/20">
          {navItems.map((item, index) => {
            const isActive = activeNavItem === item.name;
            const Icon = item.icon;

            return (
              <button
                aria-label={item.name}
                aria-current={isActive ? "page" : undefined}
                role="link"
                tabIndex={isActive ? 0 : -1}
                key={item.name}
                onClick={() => scrollInto(item.name as NavItem)}
                className={`relative flex h-10 items-center gap-2 px-4 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden md:block">{item.name}</span>

                {isActive && (
                  <motion.div
                    aria-hidden
                    role="presentation"
                    layoutId="active-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-black/10 shadow-sm dark:bg-white/10"
                    transition={{
                      type: "linear",
                      ease: "easeIn",
                      duration: 0.3,
                    }}
                  />
                )}

                {hoveredIndex === index && !isActive && (
                  <motion.div
                    aria-hidden
                    role="presentation"
                    layoutId="hover-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-background/50"
                    transition={{
                      type: "spring",
                      bounce: 0.3,
                      duration: 0.6,
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>
        <ThemeToggle />
      </nav>
    </motion.header>
  );
}
