export interface MetaData {
  title: string;
  description: string;
  date: string;
}

export interface PostData {
  content: string;
  fileName: string;
  meta: MetaData;
}

export interface PostsPageProps {
  posts: PostData[];
}
