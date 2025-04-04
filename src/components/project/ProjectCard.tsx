

import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ProjectCardProps } from "@/interfaces";
import {  isOnce } from "@/constants";


export default function ProjectCard({
    project,
    index,
    isExpanded,
    onToggleExpand,
  }: ProjectCardProps) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: isOnce }}
        transition={{ duration: 0.5, delay: 0.1 * index }}
        className={cn(
          "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md dark:bg-gray-900/10",
          isExpanded ? "md:col-span-2" : "",
        )}
      >
        <div className="relative h-full w-full bg-gray-300 dark:bg-black">
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
  
          <div className="z-50 p-6">
            <div
              className={cn(
                "grid gap-6",
                isExpanded ? "md:grid-cols-[1fr_1.5fr]" : "grid-cols-1",
              )}
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden rounded-xl bg-white dark:bg-black">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
  
                {/* Project Links (visible on hover) */}
                <div className="absolute bottom-4 left-4 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {project.liveDemo && (
                    <Link
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" className="rounded-full">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </Link>
                  )}
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="rounded-full bg-background/80"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </Link>
                </div>
              </div>
  
              {/* Project Info */}
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">{project.name}</h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={onToggleExpand}
                      className="z-50 rounded-full"
                    >
                      {isExpanded ? "Collapse" : "Expand"}
                    </Button>
                  </div>
                  <p className="mt-2 text-muted-foreground">
                    {project.description}
                  </p>
                </div>
  
                {/* Tech Stack */}
                <div>
                  <h4 className="mb-2 text-sm font-medium text-muted-foreground">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="bg-background/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
  
                {/* Features & Challenges (visible when expanded) */}
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div>
                      <h4 className="mb-2 flex items-center gap-2 text-sm font-medium text-muted-foreground">
                        <Sparkles className="h-4 w-4 text-primary" />
                        Key Features
                      </h4>
                      <ul className="ml-5 list-disc space-y-1 text-sm text-muted-foreground">
                        {project.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
  
                    <div>
                      <h4 className="mb-2 text-sm font-medium text-muted-foreground">
                        Challenges Solved
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {project.challenges}
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
  
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-primary/10 blur-2xl"></div>
          <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-primary/5 blur-2xl"></div>
        </div>
      </motion.div>
    );
  }
  