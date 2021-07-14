import { ChevronRightIcon } from "@heroicons/react/solid";
import Container from "components/Container";
import Post from "components/Post";
import { getLatestPosts } from "lib/posts";
import { InferGetStaticPropsType } from "next";
import Link from "next/link";

export default function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container title="Blog - Joël Kuijper" description="Tips and Tricks, Tutorials, Programming, Tech">
      <section className="grid md:grid-cols-3 md:grid-rows-1 sm:grid-cols-1 sm:grid-rows-2 gap-4 mx-auto max-w-7xl">
        <div className="col-span-2">
          <h2 className="text-2xl text-dark uppercase font-semibold tracking-wide mb-4 font-body">Latest</h2>
          <ul className="space-y-4">
            {posts.map((post) => (
              <Post post={post} key={post.filePath} />
            ))}
          </ul>
        </div>
        <aside>
          <h2 className="text-2xl text-dark uppercase font-semibold tracking-wide mb-4 font-body">Featured</h2>
          <ul className="marker:text-primary space-y-2" data-content="#">
            {posts.map((post) => (
              <li className="flex items-center" key={post.filePath}>
                <ChevronRightIcon className="w-6 h-6 text-primary" />

                <Link href={`/blog/${post.filePath.replace(".mdx", "")}`} passHref>
                  <a className="border-b-2 border-transparent hover:border-primary">{post.data.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </section>
    </Container>
  );
}

export const getStaticProps = () => {
  const posts = getLatestPosts(10);
  return { props: { posts } };
};
