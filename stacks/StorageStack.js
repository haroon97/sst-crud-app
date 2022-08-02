import { Table } from "@serverless-stack/resources";

export function StorageStack({ stack, app }) {
  const table = new Table(stack, "Posts", {
    fields: {
      userId: "string",
      postId: "string",
      title: "string",
      description: "string"
    },
    primaryIndex: { partitionKey: "userId", sortKey: "postId" }
  });

  return {
    table,
  };
}