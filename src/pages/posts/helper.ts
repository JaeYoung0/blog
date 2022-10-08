import { join } from "path";
import matter from "gray-matter";
import fs from "fs";
import { PostData } from "./type";

export const filesDirectory = join(process.cwd(), "/public/posts");

export const getPostData = (fileName: string) => {
  const formattedFileName = fileName.replace(/\.mdx$/, "");
  const fullPath = join(filesDirectory, `${formattedFileName}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { fileName: formattedFileName, meta: data, content } as PostData;
};

export const getAllPosts = async () => {
  const fileNames = fs.readdirSync(filesDirectory);
  return fileNames.map((item) => getPostData(item));
};
