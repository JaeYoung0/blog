import { NumberedListItemBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export type EnhancedNumberedListItemBlockObjectResponse =
  NumberedListItemBlockObjectResponse & {
    numbering: number;
  };
