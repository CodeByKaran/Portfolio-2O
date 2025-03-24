"use client";

import { motion } from "framer-motion";
import { Code, Sparkles, Terminal } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { skillCategories, isOnce } from "@/constants";

// Skill categories with icons

export default function AboutHeroSection() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].name);

  return (
    <section className="w-full py-12">
      <div className="px-4">
        <div className="mx-auto max-w-6xl">
          {/* About Me Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: isOnce }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Me
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-primary"></div>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
            {/* Left Column - Profile & Intro */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: isOnce }}
            >
              {/* Profile Image */}
              <div className="relative mx-auto mb-8 h-64 w-64 overflow-hidden rounded-2xl bg-white/5 p-2 backdrop-blur-sm md:h-80 md:w-80 dark:bg-gray-900/5">
                {/* Image */}
                <div className="relative z-10 h-full w-full overflow-hidden rounded-xl">
                  <Image
                    src="/human.png"
                    width={300}
                    height={300}
                    alt="Developer Profile"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 z-10 h-20 w-20 rounded-full bg-primary/20 backdrop-blur-md"></div>
                <div className="absolute -bottom-6 -left-6 z-10 h-24 w-24 rounded-full bg-primary/10 backdrop-blur-md"></div>
              </div>
              {/* End of Profile Image */}

              <div className="space-y-4 rounded-2xl border border-white/10 bg-black/10 p-6 backdrop-blur-md dark:bg-gray-900/10">
                <h3 className="text-xl font-semibold">My Expertise</h3>
                <p className="text-muted-foreground">
                  I specialize in building modern, performant web applications
                  using Next.js and the MERN stack. With a strong foundation in
                  both frontend and backend technologies, I create seamless user
                  experiences with clean, maintainable code.
                </p>
                <p className="text-muted-foreground">
                  My passion for UI/UX design and performance optimization
                  drives me to create applications that are not only functional
                  but also beautiful and responsive across all devices.
                </p>
                <p className="text-muted-foreground">
                  I&apos;m currently open to freelance projects and
                  collaborations. Let&apos;s build something amazing together!
                </p>
              </div>
            </motion.div>

            {/* Right Column - Skills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: isOnce }}
              className="space-y-8"
            >
              <div className="rounded-2xl border border-white/10 bg-black/10 p-6 backdrop-blur-md dark:bg-gray-900/10">
                <h3 className="mb-6 text-xl font-semibold">
                  Skills & Technologies
                </h3>

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

              {/* Code Experience */}
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
                  I believe in writing clean, maintainable code that follows
                  best practices and industry standards. My approach focuses on
                  creating scalable solutions that are both efficient and easy
                  to understand.
                </p>
                <div className="mt-4 rounded-lg bg-background/50 p-4 font-mono text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Terminal className="h-4 w-4" />
                    <span className="text-primary">const</span> myApproach =
                    &#123;
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
