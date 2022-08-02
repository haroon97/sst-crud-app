import handler from "../utils/handler";
import dynamodb from "../utils/dynamodb";

export const main = handler(async event => {
  const params = {
    TableName: process.env.TABLE_NAME,
    Key: {
      userId: "123",
      postId: event.pathParameters.id,
    },
  };

  const result = await dynamodb.get(params);

  if (!result.Item) {
    return null;
  }

  return result.Item;
})