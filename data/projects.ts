import { NextJS } from "components/Icons";
import { BsFillLightningFill } from "react-icons/bs";
import { FaDiscord, FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { SiMarkdown, SiTailwindcss, SiTypescript } from "react-icons/si";

export interface IProject {
  github: string;
  name: string;
  description: string;
  tags: ITag[];
  image?: {
    url: string;
    width?: number;
    height?: number;
  };
  url?: string;
}

export type ITag = keyof typeof tags;

export const tags = {
  React: FaReact,
  "Next.JS": NextJS,
  "Node.JS": IoLogoNodejs,
  "Chakra-UI": BsFillLightningFill,
  MDX: SiMarkdown,
  "Discord.JS": FaDiscord,
  Typescript: SiTypescript,
  TailwindCSS: SiTailwindcss,
};

export const projects: IProject[] = [
  {
    name: "Pomojoel",
    description: "Pomodoro timer web-app to help focus and concentrate on work",
    github: "https://github.com/Joehoel/timer",
    image: { url: "/static/images/projects/pomojoel/pomojoel.png", width: 265, height: 311 },
    tags: ["TailwindCSS", "Typescript"],
    url: "https://pomojoel.nl",
  },
  {
    name: "Compagnon",
    description: "A discord bot built with discord.js",
    github: "https://github.com/Joehoel/compagnon",
    tags: ["Discord.JS", "Node.JS", "Typescript"],
  },
];
