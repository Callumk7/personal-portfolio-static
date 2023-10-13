import { Project } from "@/types/projects";

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({project}: ProjectCardProps) {
  return (
    <div className="border border-foreground/20 p-6 rounded-md flex flex-col gap-5">
      <h1 className="font-syne text-xl text-primary-1 font-bold">{project.name}</h1>
      <p className="font-mono">{project.description}</p>
    </div>
  )
}

