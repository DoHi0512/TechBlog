export interface PostType {
  content: string;
  title: string;
  image: string;
  tag?: string[];
  postId?: string | string[] | undefined;
  view?: number;
  date?: string;
  data?: any;
}
