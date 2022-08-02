import handler from "../utils/handler";
import dynamodb from "../utils/dynamodb";

export const main = handler(async event => {
  const params = {
    TableName: process.env.TABLE_NAME,
    KeyConditionExpression: "userId = :userId",
    ExpressionAttributeValues: {
      ":userId": "123",
    },
  };

  const result = await dynamodb.query(params);
  console.log(result.Items)
  return result.Items;
})