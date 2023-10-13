import { Container } from "@/components/ui/container";
import { projects } from "./project-dummy-data";
import { ProjectCard } from "@/components/projects/project-card";

export default function ProjectsPage() {
  const proj = projects;

  return (
    <Container>
      <div className="py-4 mb-8">
        <h1 className="md:leading-14 pb-6 font-syne text-3xl font-extrabold leading-9  tracking-tight text-foreground sm:text-4xl sm:leading-10 md:text-6xl">
          Projects
        </h1>
        <p className="font-mono">Explore my work.</p>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {proj.map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </div>
    </Container>
  );
}
