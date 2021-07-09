import Post from "components/Post";
import { getLatestPosts } from "lib/posts";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";

const blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>

      <h1 className="text-4xl font-bold mb-8">Blog</h1>

      <section className="grid md:grid-cols-3 sm:grid-rows-2 gap-4">
        <div className="col-span-2">
          <h2 className="text-2xl text-orange uppercase font-semibold tracking-wide mb-4">Latest</h2>
          <ul>
            {posts.map(post => (
              <Post post={post} key={post.filePath} />
            ))}
          </ul>
        </div>
        <aside>
          <h2 className="text-2xl text-orange uppercase font-semibold tracking-wide mb-4">Featured</h2>
          <ul className="marker:text-orange" data-content="#">
            {posts.map(post => (
              <li className="list-item">{post.data.title}</li>
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
