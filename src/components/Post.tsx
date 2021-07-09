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
    <article className="shadow-md rounded p-4 w-auto">
      <h4 className="text-xl font-medium mb-2">{post.data.title}</h4>
      <small className="text-sm font-thin">{post.data.date}</small>
      <p className="text-gray-600 mb-4">{post.data.description}</p>
      <Link as={`/blog/${post.filePath.replace(/\.mdx?$/, "")}`} href={`/blog/[slug]`} passHref>
        <a className="text-orange underline">Read more...</a>
      </Link>
    </article>
  );
};

export default Post;
