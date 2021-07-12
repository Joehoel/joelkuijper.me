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
    <article className="w-auto group">
      <Link as={`/blog/${post.filePath.replace(/\.mdx?$/, "")}`} href={`/blog/[slug]`} passHref>
        <a>
          <h4 className="text-xl font-medium mb-2 group-hover:text-primary transition duration-[100ms]">
            {post.data.title}
          </h4>
          <small className="text-sm font-normal tracking-wide">{post.data.date}</small>
          <p className="mb-4 text-gray-600">{post.data.description}</p>
          <a className="text-dark transition duration-[100ms] hover:underline">Read more...</a>
        </a>
      </Link>
    </article>
  );
};

export default Post;
