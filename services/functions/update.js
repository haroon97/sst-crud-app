import handler from "../utils/handler";
import dynamodb from "../utils/dynamodb";

export const main = handler(async (event) => {
  const data = JSON.parse(event.body)
  const params = {
    TableName: process.env.TABLE_NAME,
    Key: {
      userId: event.requestContext.authorizer.iam.cognitoIdentity.identityId,
      postId: event.pathParameters.id
    },
    UpdateExpression: "SET title = :title, description = :description",
    ExpressionAttributeValues: {
      ":title": data.title || null,
      ":description": data.description || null,
    },
    ReturnValues: "ALL_NEW",
  };

  await dynamodb.update(params);

  return { status: true };
})