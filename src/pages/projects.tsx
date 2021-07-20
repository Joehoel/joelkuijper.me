import Container from "components/Container";
import Image from "next/image";
import { projects } from "../../data/projects";
import { ExternalLinkIcon } from "@heroicons/react/solid";

export default function Projects() {
  return (
    <Container title="Projects - Joël Kuijper" description="Current and previously done projects">
      <section className="grid gap-2">
        {projects.map((project) => (
          <article key={project.name} className="flex flex-row space-x-6 p-4 w-full bg-gray-900 border border-gray-800">
            <Image src={project.image} width={100} height={100} />
            <div className="flex-grow">
              <h1 className="text-2xl font-semibold mb-2">{project.name}</h1>
              <p>{project.description}</p>
            </div>
            <div>
              <ExternalLinkIcon />
            </div>
          </article>
        ))}
      </section>
    </Container>
  );
}
