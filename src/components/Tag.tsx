import { tags } from "../../data/projects";

interface Props {
  tag: string;
}

export const getTotalCharCode = (phrase: string) => {
  return phrase.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
};

export default function Tag({ tag }: Props) {
  const classes = [
    ["bg-purple-200", "text-purple-500", "dark:bg-purple-800", "dark:text-purple-200"],
    ["bg-red-200", "text-red-500", "dark:bg-red-800", "dark:text-red-200"],
    ["bg-orange-200", "text-orange-500", "dark:bg-orange-800", "dark:text-orange-200"],
    ["bg-green-200", "text-green-500", "dark:bg-green-800", "dark:text-green-200"],
    ["bg-blue-200", "text-blue-500", "dark:bg-blue-800", "dark:text-blue-200"],
  ][getTotalCharCode(tag) % 5].join(" ");

  const Icon = tags[tag];

  return (
    <span className={`w-min flex items-center font-bold px-2 py-1 rounded text-xs ${classes}`}>
      <Icon className="inline mr-1 h-4 w-4" />
      {tag}
    </span>
  );
}
