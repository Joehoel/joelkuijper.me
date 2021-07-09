import { ChevronRightIcon } from "@heroicons/react/solid";
import Post from "components/Post";
import { getLatestPosts } from "lib/posts";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Link from "next/link";

const blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Blog - Joël Kuijper</title>
        <link rel="icon" href="https://fav.farm/📃" />
      </Head>

      <section className="grid md:grid-cols-3 md:grid-rows-1 sm:grid-cols-1 sm:grid-rows-2 gap-4">
        <div className="col-span-2">
          <h2 className="text-2xl text-secondary uppercase font-semibold tracking-wide mb-4 font-body">Latest</h2>
          <ul>
            {posts.map(post => (
              <Post post={post} key={post.filePath} />
            ))}
          </ul>
        </div>
        <aside>
          <h2 className="text-2xl text-secondary uppercase font-semibold tracking-wide mb-4 font-body">Featured</h2>
          <ul className="marker:text-primary space-y-2" data-content="#">
            {posts.map(post => (
              <li className="flex items-center">
                <ChevronRightIcon className="w-6 h-6 text-primary" />

                <Link as={`/blog/${post.filePath.replace(/\.mdx?$/, "")}`} href={`/blog/[slug]`} passHref>
                  <a className="border-b-2 border-transparent hover:border-primary">{post.data.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </section>
    </>
  );
};

export const getStaticProps = () => {
  const posts = getLatestPosts(10);
  return { props: { posts } };
};

export default blog;
