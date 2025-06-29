export type Post = {
  id: string;
  title: string;
  brief: string;
  url: string;
  slug: string;
  coverImage?: {
    url: string;
  };
};