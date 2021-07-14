import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { join } from "path";
import mdxPrism from "mdx-prism";
import readingTime from "reading-time";

const root = process.cwd();

export async function getFiles(type: string) {
  return readdirSync(join(root, type));
}

export async function getFileBySlug(type: string, slug?: string) {
  const source = slug ? readFileSync(join(root, type, `${slug}.mdx`)) : readFileSync(join(root, `${type}.mdx`));

  const { data, content } = matter(source);
  const mdxSource = await serialize(content, {
    scope: data,
    mdxOptions: {
      remarkPlugins: [
        require("remark-slug"),
        [
          require("remark-autolink-headings"),
          {
            linkProperties: {
              className: ["anchor"],
            },
          },
        ],
        require("remark-code-titles"),
      ],
      rehypePlugins: [mdxPrism],
    },
  });

  return {
    source: mdxSource,
    frontmatter: {
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug: slug || null,
      ...data,
    },
  };
}
