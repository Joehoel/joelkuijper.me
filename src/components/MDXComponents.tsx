/* eslint-disable jsx-a11y/anchor-has-content */
import Link, { LinkProps } from "next/link";
import Image from "next/image";

interface Props extends LinkProps {
    children: React.ReactNode;
}

const CustomLink = (props: Props) => {
    const href = props.href.toString();
    const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

    if (isInternalLink) {
        return (
            <Link href={href}>
                {/* @ts-ignore */}
                <a {...props}>{props.children}</a>
            </Link>
        );
    }

    return (
        <>
            {/* @ts-ignore */}
            <a target="_blank" rel="noopener noreferrer" {...props} />
        </>
    );
};

const MDXComponents = {
    Image,
    a: CustomLink,
};

export default MDXComponents;
