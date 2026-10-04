export interface Project {
  /** Stable key; matches the GitHub repo name. */
  slug: string;
  name: string;
  description: string;
  year: number;
  tags: string[];
  repo: string;
  url?: string;
}
