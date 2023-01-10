import { TextRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import { getNotionDB } from "@services/notion";
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

export type ResolvePromise<T> = T extends Promise<infer U> ? U : never;
export type NotionPosts = ResolvePromise<ReturnType<typeof getNotionDB>>;
export type NotionPost = NotionPosts[number];

export interface PostsPageProps {
  posts: NotionPost[];
}

export type TitleColumn = {
  type: "title";
  title: Array<TextRichTextItemResponse>;
  id: string;
};

export type PublishedColumn = {
  type: "checkbox";
  checkbox: boolean;
};
