export type Post = {
  link: string;
  date: string;
  title: string;
  description: string;
  categories?: string[];
  feature?: boolean;
};
export interface Posts {
  posts: Post[];
}
