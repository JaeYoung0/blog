import { join } from "path";
import matter from "gray-matter";
import fs from "fs";

export const filesDirectory = join(process.cwd(), "/public/posts");

export const getPostData = (fileName: string) => {
  const formattedFileName = fileName.replace(/\.md$/, "");
  const fullPath = join(filesDirectory, `${formattedFileName}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { fileName, meta: data, content };
};

export const getAllPosts = async () => {
  const fileNames = fs.readdirSync(filesDirectory);
  return fileNames.map((item) => getPostData(item));
};
