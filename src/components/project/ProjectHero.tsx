"use client";

import { useState } from "react";
import ProjectsHeader from "./ProjectsHeader";
import CategoryFilter from "./CategoryFilter";
import ProjectsGrid from "./ProjectsGrid";
import { projects } from "@/constants";

const categories = ["All", "Frontend", "Full Stack"];


export default function ProjectsHero() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [expandedProject, setExpandedProject] = useState<number | null>(null);
  
    const filteredProjects =
      activeCategory === "All"
        ? projects
        : projects.filter((project) => project.category === activeCategory);
  
    return (
      <section className="w-full py-12 md:py-24">
        <div className="px-4">
          <div className="mx-auto max-w-6xl">
            <ProjectsHeader />
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
            <ProjectsGrid
              projects={filteredProjects}
              expandedProject={expandedProject}
              setExpandedProject={setExpandedProject}
            />
          </div>
        </div>
      </section>
    );
  }