import fs from "fs";
import matter from "gray-matter";
import path from "path";

const postsPath = path.join(process.cwd(), "posts");

export const getLatestPosts = (limit: number) => {
    const postFilePaths = fs.readdirSync(postsPath).filter((path) => /\.mdx?$/.test(path));

    const posts = postFilePaths.map((filePath) => {
        const source = fs.readFileSync(path.join(postsPath, filePath));
        const { content, data } = matter(source);

        return {
            content,
            data,
            filePath,
        };
    });

    return posts.slice(0, limit);
};
