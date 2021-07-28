export type Post = {
  link: string;
  date: Date;
  title: string;
  description: string;
};
export interface Posts {
  posts: Post[];
}
