import Link from "next/link";
import React from "react";
import { Frontmatter } from "types";

interface Props extends Frontmatter {
    slug?: string;
}

const Post = ({ title, description, slug }: Props) => {
    return (
        <Link href={`/blog/${slug}`}>
            <a className="rounded-md w-full dark:bg-gray-900 border dark:border-gray-800 p-4 shadow-sm hover:scale-[1.01] hover:shadow-md transition-transform">
                <div className="w-full">
                    <h4 className="text-lg md:text-xl font-medium mb-2 w-full text-gray-900 dark:text-gray-100">
                        {title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">{description}</p>
                </div>
            </a>
        </Link>
    );
};

export default Post;
