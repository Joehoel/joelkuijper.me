import fs from "fs";
import matter from "gray-matter";
import { InferGetStaticPropsType } from "next";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import path from "path";
import React from "react";

interface Props {}

const components = {
  // TestComponent: dynamic(() => import("../../")),
  Head,
};

const Post = ({ source, post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <h2 className="text-4xl font-bold mb-2">{post.title}</h2>
      <small className="text-base">Published on: {post.date}</small>
      <h3 className="text-lg my-4">{post.description}</h3>
      <hr />
      <article className="prose prose-yellow mt-4">
        <MDXRemote {...source} components={components}></MDXRemote>
      </article>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(process.cwd(), "posts", `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      post: data,
    },
  };
};

export const getStaticPaths = async () => {
  const postFilePaths = fs
    .readdirSync(path.join(process.cwd(), "posts"))
    // Only include md(x) files
    .filter(path => /\.mdx?$/.test(path));

  const paths = postFilePaths.map(path => path.replace(/\.mdx?$/, "")).map(slug => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default Post;
