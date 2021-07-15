import Link from "next/link";
import React from "react";
import { Frontmatter } from "types";

interface Props extends Frontmatter {
  slug?: string;
}

const Post = ({ title, description, slug }: Props) => {
  return (
    <Link href={`/blog/${slug}`}>
      <a className="w-full">
        <div className="mb-8 w-full">
          <h4 className="text-lg md:text-xl font-medium mb-2 w-full text-gray-900 dark:text-gray-100">{title}</h4>
          <p className="text-gray-600 dark:text-gray-400">{description}</p>
        </div>
      </a>
    </Link>
  );
};

export default Post;
