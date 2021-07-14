import Container from "components/Container";
import { parseISO, format } from "date-fns";
import { IReadTimeResults } from "types";

interface FrontMatter {
  title?: string;
  description?: string;
  image?: string;
  publishedAt?: string;
  wordCount?: number;
  readingTime?: IReadTimeResults;
  slug?: string | null;
}

interface Props {
  frontmatter: FrontMatter;
  children: React.ReactNode;
}

const editUrl = (slug: string) => `https://github.com/joehoel/joelkuijper.me/edit/main/posts/${slug}.mdx`;

export default function BlogLayout({ children, frontmatter }: Props) {
  return (
    <Container
      title={`${frontmatter.title} - Joël Kuijper`}
      description={frontmatter.description}
      image={frontmatter.image}
      date={new Date(frontmatter.publishedAt).toISOString()}
      type="article"
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          {frontmatter.title}
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {format(parseISO(frontmatter.publishedAt), "MMMM dd, yyyy")}
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">{frontmatter.readingTime.text}</p>
        </div>
        <div className="prose prose-orange dark:prose-dark mt-4 w-full max-w-prose">{children}</div>
        <a href={editUrl(frontmatter.slug)} target="_blank" rel="noopener noreferrer">
          {"Edit on GitHub"}
        </a>
      </article>
    </Container>
  );
}
