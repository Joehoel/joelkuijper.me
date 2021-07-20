import { BsFillLightningFill } from "react-icons/bs";
import { FaDiscord, FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { SiMarkdown } from "react-icons/si";

interface Project {
  github: string;
  name: string;
  description: string;
  stack: Tag[];
  image: string;
  url?: string;
}

type Tag = keyof typeof tags;

export const tags = {
  React: FaReact,
  //   "Next.JS": NextJSIcon,
  //   TypeScript: TypeScriptIcon,
  Node: IoLogoNodejs,
  "Chakra-UI": BsFillLightningFill,
  MDX: SiMarkdown,
  "Discord.JS": FaDiscord,
  Typescript: "",
  TailwindCSS: "",
};

export const projects: Project[] = [
  {
    name: "Pomojoel",
    description: "Pomodoro timer web-app to help focus and concentrate on work",
    github: "https://github.com/Joehoel/timer",
    image: "/static/images/projects/pomojoel/pomojoel.png",
    stack: ["TailwindCSS", "Typescript"],
    url: "https://pomojoel.nl",
  },
  {
    name: "Compagnon",
    description: "A discord bot built with discord.js",
    github: "https://github.com/Joehoel/compagnon",
    image: "https://cdn.discordapp.com/app-icons/568087167637651458/04624ea3b747ebb3ad7808791a65bb53.png?size=512",
    stack: ["Discord.JS", "Node", "Typescript"],
  },
];
