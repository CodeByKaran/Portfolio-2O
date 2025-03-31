"use client";

import { isOnce, skillCategories } from "@/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].name);
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      viewport={{ once: isOnce }}
      className="space-y-8"
    >
      <div className="rounded-2xl border border-white/10 bg-black/10 p-6 backdrop-blur-md dark:bg-gray-900/10">
        <h3 className="mb-6 text-xl font-semibold">Skills & Technologies</h3>

        {/* Category Tabs */}
        <div className="mb-8 flex flex-wrap gap-2">
          {skillCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={cn(
                "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all",
                activeCategory === category.name
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-background/50 text-muted-foreground hover:bg-background/80",
              )}
            >
              {React.createElement(category.icon)}
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {skillCategories
            .find((category) => category.name === activeCategory)
            ?.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: isOnce }}
                className="group relative overflow-hidden rounded-xl border border-white/5 bg-white/5 p-4 backdrop-blur-sm transition-all hover:bg-black/10 dark:bg-gray-900/5 hover:dark:bg-gray-900/10"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background/50">
                    <Image
                      src={skill.icon || "/placeholder.svg"}
                      width={30}
                      height={30}
                      alt={skill.name}
                      className="h-8 w-8 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{skill.name}</h4>
                    <div className="mt-1 h-2 w-full rounded-full bg-background/50">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                          delay: 0.5 + index * 0.1,
                        }}
                        className="h-full rounded-full bg-primary"
                      />
                    </div>
                  </div>
                </div>

                {/* Decorative sparkle */}
                <div className="absolute -top-1 -right-1 opacity-0 transition-opacity group-hover:opacity-100">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsSection;
