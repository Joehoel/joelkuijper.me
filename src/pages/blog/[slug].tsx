import MDXComponents from "components/MDXComponents";
import BlogLayout from "layouts/blog";
import { getFileBySlug, getFiles } from "lib/mdx";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import React from "react";
import { IReadTimeResults } from "types";

interface Props {
  source: MDXRemoteSerializeResult;
  frontmatter: {
    wordCount: number;
    readingTime: IReadTimeResults;
    slug: string;
  };
}

export default function Blog({ frontmatter, source }: Props) {
  return (
    <BlogLayout frontmatter={frontmatter}>
      <MDXRemote {...source} components={MDXComponents} />
    </BlogLayout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getFileBySlug("posts", params.slug as string);

  return {
    props: {
      ...post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles("posts");

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
};
