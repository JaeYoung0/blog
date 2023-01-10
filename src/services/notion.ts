import { Client } from "@notionhq/client";

// https://samuelkraft.com/blog/building-a-notion-blog-with-public-api

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export const getNotionDB = async (databaseId: string) => {
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  return response.results;
};

export const getNotionPage = async (pageId: string) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
};

export const getNotionBlocks = async (blockId: string) => {
  const response = await notion.blocks.children.list({
    block_id: blockId,
    // page_size: 50,
  });
  return response.results;
};
