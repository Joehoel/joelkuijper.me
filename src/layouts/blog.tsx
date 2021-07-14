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
      <article className="mx-auto max-w-7xl my-6">
        <h1 className="text-3xl md:text-5xl tracking-tight mb-4 dark:text-white font-bold text-dark">
          {frontmatter.title}
        </h1>
        <small className="text-base">{format(parseISO(frontmatter.publishedAt), "MMMM dd, yyyy")}</small>
        <h3 className="text-lg my-4">{frontmatter.description}</h3>
        <div className="prose dark:prose-dark mt-4 w-full max-w-prose">{children}</div>
        <a href={editUrl(frontmatter.slug)} target="_blank" rel="noopener noreferrer">
          {"Edit on GitHub"}
        </a>
      </article>
    </Container>
  );
}
