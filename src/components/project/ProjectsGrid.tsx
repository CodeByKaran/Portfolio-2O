import { ProjectCardProps } from "@/interfaces";
import ProjectCard from "@/components/project/ProjectCard";

export default function ProjectsGrid({
    projects,
    expandedProject,
    setExpandedProject,
  }: {
    projects: ProjectCardProps["project"][];
    expandedProject: number | null;
    setExpandedProject: (id: number | null) => void;
  }) {
    return (
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            isExpanded={expandedProject === project.id}
            onToggleExpand={() =>
              setExpandedProject(expandedProject === project.id ? null : project.id)
            }
          />
        ))}
      </div>
    );
  }