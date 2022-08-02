import { Api, use } from "@serverless-stack/resources";
import { StorageStack } from "./StorageStack";

export function ApiStack({ stack, app }) {
  const { table } = use(StorageStack);

  const api = new Api(stack, "Api", {
    defaults: {
      function: {
        permissions: [table],
        environment: {
          TABLE_NAME: table.tableName,
        },
      },
    },
    routes: {
      "POST /posts": "functions/create.main",
      "GET /posts/{id}": "functions/get.main",
      "GET /posts": "functions/list.main",
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });

  return {
    api,
  };
}