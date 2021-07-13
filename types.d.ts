export type Post = {
  link: string;
  date: Date;
  title: string;
  summary: string;
};
export interface Posts {
  posts: Post[];
}
