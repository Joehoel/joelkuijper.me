export interface Frontmatter {
  title: string;
  description: string;
  publishedAt: string;
  image?: string;
  tags?: string[];
}

export interface IReadTimeResults {
  text: string;
  time: number;
  words: number;
  minutes: number;
}
