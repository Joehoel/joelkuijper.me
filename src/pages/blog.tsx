import Container from "components/Container";
import Post from "components/Post";
import { getAllFilesFrontMatter } from "lib/mdx";
import { useState } from "react";
import { Frontmatter } from "types";

interface Post extends Frontmatter {
  slug: string;
}

interface Props {
  posts: Post[];
}

export default function Blog({ posts }: Props) {
  const [searchValue, setSearchValue] = useState("");

  const blogPosts = posts
    .sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))
    .filter(({ title }) => title.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <Container title="Blog - Joël Kuijper" description="Tips and Tricks, Tutorials, Programming, Tech">
      <section className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4">Blog</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium aut, quam minima nam nihil pariatur rem explicabo quae earum ullam.`}
        </p>
        <div className="relative w-full mb-4">
          <input
            type="text"
            aria-label="Search blog posts"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search blog posts"
            className="px-4 py-2 focus:outline-none border border-gray-300 dark:border-gray-900 focus:ring-orange-500 focus:border-orange-500 block w-full rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
          <svg
            className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          All Posts
        </h3>
        {blogPosts.map((post) => (
          <Post key={post.slug} {...post} />
        ))}
      </section>
    </Container>
  );
}

export const getStaticProps = async () => {
  const posts = await getAllFilesFrontMatter("posts");
  return { props: { posts } };
};
