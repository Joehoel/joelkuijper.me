import React from "react";
import Link from "next/link";

interface Post {
  content: string;
  data: {
    [key: string]: any;
  };
  filePath: string;
}

interface Props {
  post: Post;
}

const Post = ({ post }: Props) => {
  return (
    <Link as={`/blog/${post.filePath.replace(/\.mdx?$/, "")}`} href={`/blog/[slug]`} passHref>
      <a>
        <article className="w-auto py-4 group">
          <h4 className="text-xl font-medium mb-2 group-hover:text-primary transition duration-[100ms]">
            {post.data.title}
          </h4>
          <small className="text-sm font-thin">{post.data.date}</small>
          <p className="mb-4 text-gray-600">{post.data.description}</p>
          <a className="text-secondary transition duration-[100ms] hover:underline">Read more...</a>
        </article>
      </a>
    </Link>
  );
};

export default Post;
