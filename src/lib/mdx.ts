import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { join } from "path";
import mdxPrism from "mdx-prism";
import readingTime from "reading-time";

const root = process.cwd();

export async function getFiles(type: string) {
    return readdirSync(join(root, "data", type));
}

export async function getFileBySlug(type: string, slug?: string) {
    const source = slug
        ? readFileSync(join(root, "data", type, `${slug}.mdx`))
        : readFileSync(join(root, "data", `${type}.mdx`));

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

export async function getAllFilesFrontMatter(type: string) {
    const files = readdirSync(join(root, "data", type));

    return files.map((file) => {
        const source = readFileSync(join(root, "data", type, file), "utf8");
        const { data } = matter(source);

        return {
            ...data,
            slug: file.replace(".mdx", ""),
        };
    });
    //   return files.reduce((allPosts, postSlug) => {
    //     const source = readFileSync(join(root, type, postSlug), "utf8");
    //     const { data } = matter(source);

    //     return [
    //       {
    //         frontmatter: data,
    //         slug: postSlug.replace(".mdx", ""),
    //       },
    //       ...allPosts,
    //     ];
    //   }, []);
}
