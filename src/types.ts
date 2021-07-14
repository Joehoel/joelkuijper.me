export interface IReadTimeResults {
  text: string;
  time: number;
  words: number;
  minutes: number;
}
export interface PostFrontMatter {
  title: string;
  description: string;
  publishedAt: string;
  tags?: string[];
}

export interface PostProps {
  slug: string;
  // title: string;
  // wordCount: number;
  // readingTime: IReadTimeResults;
  frontmatter: PostFrontMatter;
}

export interface PostsProps {
  posts?: PostProps[];
}

export interface BlogProps extends PostsProps {
  title: string;
  description: string;
  publishedAt: string;
}
