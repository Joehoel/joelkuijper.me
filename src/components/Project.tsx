import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { IProject } from "../../data/projects";
import Tag from "./Tag";

interface Props {
  project: IProject;
}

export default function Project({ project }: Props) {
  return (
    <article
      key={project.name}
      className="rounded-md w-full dark:bg-gray-900 border dark:border-gray-800 break-inside shadow-sm"
    >
      {project.image && (
        <div className="aspect-w-16 aspect-h-9">
          <Image className="object-cover rounded-t-md" src={project.image.url} layout="fill" alt={project.name} />
        </div>
      )}
      <div className="p-4 flex flex-row space-x-6">
        <div className="flex-grow space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight">{project.name}</h1>
          <div className="flex space-x-1">
            {project.tags.map((tag, index) => (
              <Tag tag={tag} key={`tag-${index}`} />
            ))}
          </div>
          <p>{project.description}</p>
        </div>
        <div className="flex h-auto items-start space-x-4 ">
          <a
            href={project.github}
            target="_blank"
            className="hover:text-orange-300 tansform transition-transform hover:scale-105"
            rel="noreferrer"
          >
            <FaGithub size={23} />
          </a>
          {project?.url && (
            <a
              href={project?.url}
              target="_blank"
              className="hover:text-orange-300 tansform transition-transform hover:scale-105"
              rel="noreferrer"
            >
              <FaExternalLinkAlt size={20} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
