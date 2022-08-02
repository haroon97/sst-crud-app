import * as uuid from "uuid";
import handler from "../utils/handler";
import dynamoDb from "../utils/dynamodb";

export const main = handler(async (event) => {
  const data = JSON.parse(event.body);
  const params = {
    TableName: process.env.TABLE_NAME,
    Item: {
      userId: "123",
      postId: uuid.v1(),
      title: data.title,
      description: data.description,
      createdAt: Date.now(),
    },
  }
  if (data.title && data.description) {
    await dynamoDb.put(params);
    return params.Item;
  }

  return null;
});