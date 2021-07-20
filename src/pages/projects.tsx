import Container from "components/Container";
import Project from "components/Project";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <Container title="Projects - Joël Kuijper" description="Current and previously done projects">
      <section className="md:masonry before:box-inherit after:box-inherit space-y-6 md:space-y-0 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <Project project={project} key={`project-${index}`} />
        ))}
      </section>
    </Container>
  );
}
